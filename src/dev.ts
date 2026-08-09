import { spawn } from "node:child_process";
import { serve } from "@hono/node-server";
import { serveStatic } from "@hono/node-server/serve-static";
import app from "./app";

// Keep dist/styles.css fresh while editing. Runs for the life of the server.
const css = spawn(
  "npx",
  ["tailwindcss", "-i", "src/styles.css", "-o", "dist/styles.css", "--watch"],
  { stdio: "inherit" }
);
process.on("exit", () => css.kill());

app.use("/*", serveStatic({ root: "./public" }));
app.use("/styles.css", serveStatic({ root: "./dist" }));

serve({ fetch: app.fetch, port: 3000 }, ({ port }) =>
  console.log(`http://localhost:${port}`)
);
