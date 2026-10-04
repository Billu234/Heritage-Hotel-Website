# The Heritage Hotel

An image-led hotel website presenting The Heritage as a place to stay, dine, and gather.

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

- `artifacts/heritage-hotel/src/App.tsx` — public hotel landing page and navigation.
- `artifacts/heritage-hotel/src/index.css` — page styling, responsive layout, and motion.
- `artifacts/heritage-hotel/public/images/` — the eleven supplied hotel photographs.

## Architecture decisions

- The hotel page is static; calls and directions link to the supplied public hotel phone number and address.
- Do not invent rates or hotel amenities that have not been supplied.

## Product

The page showcases hotel rooms, dining, a celebration space, lounge seating, and nearby waterside views, and lists the supplied restaurant, parking, Wi-Fi, check-in/out times, guest services, and meeting and banquet facilities. Visitors can call the hotel or open directions to its supplied location in Ratahara, Rewa.

## User preferences

_Populate as you build — explicit user instructions worth remembering across sessions._

## Gotchas

_Populate as you build — sharp edges, "always run X before Y" rules._

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
