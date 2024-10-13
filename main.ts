import { Hono } from "hono";
import type { Context } from "hono";

const app = new Hono();

app.get("/", (c: Context) => {
  c.header("X-Powered-By", "Deno + Hono");
  c.status(200);
  return c.text("ABCD");
});

Deno.serve({ port: 3000 }, app.fetch);
