/**
 * Bun WebSocket server for real-time notifications.
 * Run: bun run src/index.ts
 */
const PORT = Number(process.env.NOTIFICATIONS_WS_PORT ?? 3002);

type WebSocketClient = { send: (data: string | Buffer) => void };
const clients = new Set<WebSocketClient>();

const server = Bun.serve({
  port: PORT,
  fetch(req, server) {
    const url = new URL(req.url);
    if (url.pathname === '/ws' && server.upgrade(req)) {
      return undefined;
    }
    return new Response('Notifications WebSocket server. Connect to /ws', {
      status: 200,
    });
  },
  websocket: {
    open(ws) {
      clients.add(ws);
      console.log('Notifications client connected');
    },
    message(ws, data) {
      // Handle incoming messages (e.g. subscribe to topics)
      ws.send(data);
    },
    close(ws) {
      clients.delete(ws);
      console.log('Notifications client disconnected');
    },
  },
});

export function broadcastNotification(message: string | object) {
  const payload =
    typeof message === 'string' ? message : JSON.stringify(message);
  for (const client of clients) {
    client.send(payload);
  }
}

console.log(
  `Notifications WS on http://localhost:${server.port} (ws://localhost:${server.port}/ws)`,
);
