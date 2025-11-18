# Next.js Enterprise SaaS Starter

A production-ready SaaS starter template built with Next.js 14, featuring multi-tenancy, authentication, payments, and more.

<div align="center">
  <img src="SaaS Template.png" alt="SaaS Template" />
</div>

## Core Features

- Multi-tenancy via subdomains
- Supabase for authentication and database
- Stripe integration (payments, subscriptions, customer portal)
- React Email with Resend
- TypeScript and ESLint configuration
- Tailwind CSS with shadcn/ui components
- Automated Stripe-Supabase sync via webhooks

## Getting Started

1. Clone the repository
2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:

   - Copy `.env.example` to `.env.local`
   - Fill in your Supabase and Stripe credentials

4. Run the development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000)

## Environment Variables

Required environment variables:

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
RESEND_API_KEY=your_resend_api_key
```

## Development Setup

- Jest and React Testing Library for testing
- Playwright for E2E testing
- Husky and lint-staged for git hooks
- Prettier for code formatting
- GitHub Actions CI pipeline

## Monitoring & Logging

- Sentry error tracking
- OpenTelemetry metrics
- Structured logging (Pino)
- Vercel Analytics

## License

MIT
test pre-commit hooks
