# API (NestJS + Fastify)

Main REST API: users, products, search (with Redis cache for popular queries).

- **Run:** `npm run dev` (from repo root: `npm run dev:api`)
- **DB:** PostgreSQL (see root `docker-compose.yml`)
- **Cache:** Redis for most-searched items

Use `@nestjs/platform-fastify` and configure TypeORM/Prisma for PostgreSQL.
