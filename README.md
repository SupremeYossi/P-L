# OpsBoard

A sample operations dashboard built with Next.js, Supabase, and Tailwind.

## What is included

- Login screen in sample mode
- Dashboard overview with operating metrics and chart
- Pages for Orders, SKUs, Listings, Inventory, Shipments, Costs, and Discrepancy Alerts
- Typed Supabase client helper
- Supabase SQL schema in `supabase/schema.sql`
- Supabase sample seed data in `supabase/seed.sql`
- Local sample data in `lib/sample-data.ts`

## Run locally

Install dependencies, then start the dev server:

```bash
npm install
npm run dev
```

Create `.env.local` from `.env.example` when you are ready to connect a Supabase project:

```bash
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

The app intentionally reads sample data for now. Once the Supabase tables are created, the page data loaders can be switched from `lib/sample-data.ts` to Supabase queries.
