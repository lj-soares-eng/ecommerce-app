# E-commerce Web App

Full-stack e-commerce application with TypeScript, NestJS (Fastify), React, PostgreSQL, Redis, and real-time features.

## Tech Stack

| Layer | Technology |
|-------|------------|
| **API** | Node.js, TypeScript, NestJS, Fastify |
| **Frontend** | React, TypeScript |
| **Dashboards (real-time)** | Bun, WebSockets |
| **Database** | PostgreSQL (users, products) |
| **Cache** | Redis (most searched items) |
| **Notifications** | See [Notifications](#notifications) below |

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

You need a **notification button** in the app. Here are solid options:

- **Connect:** `ws://localhost:3002/ws`
- **Run:** `npm run dev:notifications`
- **Use:** React frontend connects to receive real-time notifications (order updates, price drops, etc.)

For push when the tab is closed, consider adding **Web Push API** (e.g. `web-push` in NestJS + service worker in React) later.

- **How:** Extend your existing Bun WebSocket server, or add a WebSocket gateway in NestJS, and send notification events to connected clients.
- **Pros:** No extra service, full control, works well for in-app notifications (order updates, messages).
- **Cons:** Only works while the user has the app open; no push when tab is closed.

**Best for:** In-app only (e.g. “Order shipped”, “New message”).

---

### Option 2: Server-Sent Events (SSE)

- **How:** NestJS endpoint that keeps a GET connection open and streams events (`EventSource` in the browser).
- **Pros:** Simple, one-way server→client, native in browsers, fits “notification stream” well.
- **Cons:** One-way only; no push when tab is closed.

**Best for:** In-app notification feed with minimal setup.

---

### Option 3: Web Push API (browser push)

- **How:** Use **web-push** (or similar) in NestJS + a service worker in React. Server sends payload to a push service (e.g. VAPID); browser shows OS-level notifications.
- **Pros:** Notifications even when tab is closed; no third-party vendor required.
- **Cons:** User must grant permission; requires service worker and a bit more setup.

**Best for:** “Order shipped”, “Price drop”, “Back in stock” when user is not on the site.

---

### Option 4: Managed real-time (Pusher, Ably, Firebase)

- **How:** Integrate Pusher/Ably/FCM SDK in frontend and send events from NestJS (or Bun) via their APIs.
- **Pros:** Scalable, less infra to run, often include push and presence.
- **Cons:** External dependency, possible cost at scale.

**Best for:** Fastest path to both in-app and push with minimal backend code.

---

### Recommended approach for your stack

- **In-app notification button (list/badge):** Use **WebSockets** (either your Bun server or a NestJS WebSocket gateway). One channel or topic per user; on “notification” event, update React state and show count/list.
- **Optional “push when tab closed”:** Add **Web Push API** (e.g. `web-push` in NestJS + service worker in React) later, so you can send the same events as push notifications.

This keeps everything in your stack (Node/TS, Bun, React) and adds Web Push only when you need it.

---

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
