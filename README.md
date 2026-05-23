# asyncawaits-monorepo

A [Turborepo](https://turbo.build) monorepo with two Next.js apps and a shared form package.

## Overview

This repo runs **admin** and **seller** surfaces from one codebase — typical for a marketplace or platform with separate roles. Shared UI and validation live in `@repo/shared-form` so both apps stay in sync.

| App    | Package        | Dev URL               |
| ------ | -------------- | --------------------- |
| Admin  | `@repo/admin`  | http://localhost:3005 |
| Seller | `@repo/seller` | http://localhost:3006 |

## Tech stack

- **Monorepo:** Turborepo + pnpm workspaces
- **Framework:** Next.js (Turbopack)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Linting:** Biome
- **Forms:** React Hook Form + Valibot (`@repo/shared-form`)

## Project structure

```
apps/
  admin/          # @repo/admin
  seller/         # @repo/seller
packages/
  shared-form/    # @repo/shared-form — shared form components and validation
```

## Prerequisites

- Node.js 20+
- pnpm 9 (e.g. `corepack enable` and use the `packageManager` version from `package.json`)

## Setup and run

```bash
pnpm install
pnpm dev
```

- Admin: http://localhost:3005
- Seller: http://localhost:3006

One app only: `pnpm --filter @repo/admin dev` or `pnpm --filter @repo/seller dev`.

## Scripts

- `pnpm build` — production build for all packages
- `pnpm check-types` — TypeScript check
- `pnpm lint` / `pnpm lint:fix` — Biome

## Deployment

Deploy each app from `apps/admin` and `apps/seller` (e.g. **admin.yourdomain.com** / **seller.yourdomain.com**).
