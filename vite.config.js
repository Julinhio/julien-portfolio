import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import { handleContact } from "./server/contact.js";

/**
 * Serves POST /api/contact during `npm run dev` with the same handler Vercel
 * runs in production, so the form can be tested locally. Reads server-side
 * variables from .env.local (see .env.example). Nothing here reaches the
 * browser bundle: only VITE_-prefixed variables are exposed by Vite.
 */
function contactApiDevServer(env) {
  return {
    name: "contact-api-dev-server",
    configureServer(server) {
      server.middlewares.use("/api/contact", (req, res) => {
        let raw = "";
        req.on("data", (chunk) => {
          raw += chunk;
          if (raw.length > 50_000) req.destroy();
        });
        req.on("end", async () => {
          const { status, body } = await handleContact(
            {
              method: req.method,
              body: raw,
              ip: req.socket.remoteAddress || "local",
              origin: req.headers.origin,
              host: req.headers.host,
            },
            env
          );
          res.statusCode = status;
          res.setHeader("Content-Type", "application/json");
          res.setHeader("Cache-Control", "no-store");
          res.end(JSON.stringify(body));
        });
      });
    },
  };
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react(), contactApiDevServer({ ...loadEnv(mode, process.cwd(), ""), ...process.env })],
}));
