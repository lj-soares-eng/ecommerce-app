/**
 * Bun WebSocket server for real-time dashboards.
 * Run: bun run src/index.ts
 */
const PORT = Number(process.env.DASHBOARD_WS_PORT ?? 3001);

const server = Bun.serve({
  port: PORT,
  fetch(req, server) {
    const url = new URL(req.url);
    if (url.pathname === '/ws' && server.upgrade(req)) {
      return undefined;
    }
    return new Response('Dashboard WebSocket server. Connect to /ws', {
      status: 200,
    });
  },
  websocket: {
    open(ws) {
      console.log('Dashboard client connected');
    },
    message(ws, data) {
      // Echo or handle dashboard commands
      ws.send(data);
    },
    close(ws) {
      console.log('Dashboard client disconnected');
    },
  },
});

console.log(`Dashboard WS on http://localhost:${server.port} (ws://localhost:${server.port}/ws)`);
