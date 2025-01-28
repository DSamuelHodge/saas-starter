-- Enable Row Level Security
ALTER DATABASE postgres SET "app.jwt_secret" TO 'your-jwt-secret';

-- Create tables
CREATE TABLE public.tenants (
    id uuid DEFAULT extensions.uuid_generate_v4() PRIMARY KEY,
    name text NOT NULL,
    subdomain text UNIQUE NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL
);

CREATE TABLE public.users (
    id uuid DEFAULT extensions.uuid_generate_v4() PRIMARY KEY,
    email text UNIQUE NOT NULL,
    tenant_id uuid REFERENCES public.tenants(id),
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL
);

CREATE TABLE public.subscriptions (
    id uuid DEFAULT extensions.uuid_generate_v4() PRIMARY KEY,
    tenant_id uuid REFERENCES public.tenants(id),
    stripe_subscription_id text UNIQUE,
    stripe_customer_id text,
    status text,
    price_id text,
    quantity integer,
    cancel_at_period_end boolean DEFAULT false,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    current_period_start timestamp with time zone,
    current_period_end timestamp with time zone,
    ended_at timestamp with time zone,
    cancel_at timestamp with time zone,
    canceled_at timestamp with time zone,
    trial_start timestamp with time zone,
    trial_end timestamp with time zone
);

-- Enable Row Level Security
ALTER TABLE public.tenants ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.subscriptions ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Tenants are viewable by authenticated users" ON public.tenants
    FOR SELECT USING (auth.role() = 'authenticated');

CREATE POLICY "Users can view their tenant's users" ON public.users
    FOR SELECT USING (
        auth.uid() IN (
            SELECT id FROM public.users WHERE tenant_id = users.tenant_id
        )
    );

CREATE POLICY "Users can view their tenant's subscription" ON public.subscriptions
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM public.users
            WHERE users.tenant_id = subscriptions.tenant_id
            AND users.id = auth.uid()
        )
    );

-- Create functions
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO public.users (id, email)
    VALUES (NEW.id, NEW.email);
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger for new users
CREATE TRIGGER on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
