# Environment Variables Configuration

Create a `.env.local` file in the root directory with the following variables:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Stripe Configuration
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key

# Email Configuration
RESEND_API_KEY=your_resend_api_key

# Monitoring
SENTRY_DSN=your_sentry_dsn

# Optional: Redis Configuration (if using Bull for job queues)
REDIS_URL=your_redis_url
```

## Setting Up Environment Variables

1. Create a Supabase project and get your project URL and anon key
2. Create a Stripe account and get your API keys
3. Sign up for Resend and get your API key
4. (Optional) Set up Sentry for error tracking
5. (Optional) Set up Redis if you plan to use job queues

Replace the placeholder values with your actual credentials. Never commit the `.env.local` file to version control.
