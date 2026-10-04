# Hacktober Fest

Static event website for Hacktoberfest Hack Day Mysore, hosted by the CSE (AI & ML) Department at Vidyavardhaka College of Engineering.

## Run & Operate

- The website is the root artifact (`/`) and runs in the managed workflow `artifacts/hacktober-fest: web`.
- To run it manually: `pnpm install --frozen-lockfile`, then `pnpm --filter @workspace/hacktober-fest run dev`.
- `pnpm --filter @workspace/hacktober-fest run typecheck` — typecheck the website.
- The static website does not require a database, API key, or paid AI service. The separate API server is not needed to run it.

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

_Populate as you build — short repo map plus pointers to the source-of-truth file for DB schema, API contracts, theme files, etc._

## Architecture decisions

_Populate as you build — non-obvious choices a reader couldn't infer from the code (3-5 bullets)._

## Product

_Describe the high-level user-facing capabilities of this app once they exist._

## User preferences

_Populate as you build — explicit user instructions worth remembering across sessions._

## Gotchas

_Populate as you build — sharp edges, "always run X before Y" rules._

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
