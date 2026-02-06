# Notifications WS (Bun WebSocket)

Real-time notification server using Bun and WebSockets.

- **Run:** `bun run src/index.ts` (from repo root: `npm run dev:notifications`)
- **Port:** 3002 (or `NOTIFICATIONS_WS_PORT`)
- **WebSocket:** `ws://localhost:3002/ws`

Clients connect to `/ws` to receive notifications. Use `broadcastNotification()` to send messages to all connected clients.
