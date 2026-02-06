# E-commerce Web App

Full-stack e-commerce application with TypeScript, NestJS (Fastify), React, PostgreSQL, Redis, and real-time features.

## Tech Stack

| Layer | Technology |
|-------|------------|
| **API** | Node.js, TypeScript, NestJS, Fastify |
| **Frontend** | React, TypeScript |
| **Dashboards (real-time)** | Bun, WebSockets |
| **Notifications (in-app)** | Bun, WebSockets |
| **Database** | PostgreSQL (users, products) |
| **Cache** | Redis (most searched items) |

---

## Architecture Overview

```
┌─────────────────┐     ┌──────────────────┐     ┌─────────────┐
│  React (SPA)    │────▶│  NestJS + Fastify│────▶│  PostgreSQL │
│  Frontend       │     │  API             │     │  (sellers,  │
└────────┬────────┘     └────────┬─────────┘     │   buyers,   │
         │                       │               │   items…)   │
         │                       │               └─────────────┘
         │                       │
         │              ┌────────┴────────┐
         │              │  Redis (cache   │
         │              │  search trends) │
         │              └─────────────────┘
         │
         │     ┌────────┴────────────────────────┐
         └────▶│  Bun + WebSockets               │
               │  • dashboard-ws (port 3001)     │  real-time dashboards
               │  • notifications-ws (port 3002) │  in-app notifications
               └─────────────────────────────────┘
```

---

## Notifications

In-app notifications use a dedicated **Bun + WebSockets** server (`notifications-ws`).

- **Stack:** Bun, WebSockets (same as dashboard-ws).
- **Endpoint:** `ws://localhost:3002/ws`
- **Run:** `npm run dev:notifications`
- **Usage:** The React frontend connects to this server to receive real-time notifications (order updates, price drops, etc.). Use `broadcastNotification()` in the server to send messages to all connected clients.

For push when the tab is closed, you can add **Web Push API** (e.g. `web-push` in NestJS + service worker in React) later.


## Project Structure (Monorepo)

```
ecommerce-app/
├── apps/
│   ├── api/                 # NestJS + Fastify (main REST API)
│   ├── dashboard-ws/        # Bun + WebSockets (real-time dashboards, port 3001)
│   ├── notifications-ws/    # Bun + WebSockets (in-app notifications, port 3002)
│   └── web/                 # React frontend (Vite, port 5173)
├── packages/
│   └── shared/              # Shared types, constants (optional)
├── docker-compose.yml       # PostgreSQL + Redis (dev)
├── package.json             # Workspace root (npm workspaces)
└── README.md
```

---

## Getting Started

**Prerequisites:** Node 20+, Bun, Docker (for PostgreSQL and Redis)

| Command | App | Port |
|---------|-----|------|
| `npm run docker:up` | PostgreSQL + Redis | 5432, 6379 |
| `npm run dev:api` | NestJS API | 3000 |
| `npm run dev:web` | React frontend (Vite + Tailwind) | 5173 |
| `npm run dev:dashboard` | Dashboard WebSocket server | 3001 |
| `npm run dev:notifications` | Notifications WebSocket server | 3002 |

1. **Database:** Run `npm run docker:up` to start PostgreSQL and Redis.
2. **API:** `apps/api` — NestJS with TypeORM, entities: sellers, buyers, items, favorites, cart_items, orders, order_items.
3. **Frontend:** `apps/web` — Vite + React + TypeScript + Tailwind CSS.
4. **Dashboard:** `apps/dashboard-ws` — Bun WebSocket server for real-time dashboards.
5. **Notifications:** `apps/notifications-ws` — Bun WebSocket server for in-app notifications.

See each `apps/*/README.md` for detailed run instructions.
