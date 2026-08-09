import fs from "node:fs/promises";
import path from "node:path";
import { toSSG } from "hono/ssg";
import app from "./app";

const OUT = "dist";

await fs.rm(OUT, { recursive: true, force: true });

// Everything in public/ ships as-is (favicon, robots.txt, CNAME, images).
await fs.cp("public", OUT, { recursive: true });

const result = await toSSG(app, fs, { dir: OUT });
if (!result.success) {
  console.error(result.error);
  process.exit(1);
}

const pages = (result.files ?? []).length;
console.log(`Generated ${pages} pages into ${path.resolve(OUT)}`);
