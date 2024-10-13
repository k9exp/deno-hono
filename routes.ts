import type { Context } from "hono";

export const getHome = (c: Context) => {
  c.header("X-Powered-By", "Deno + Hono");
  c.status(200);
  return c.text("Hello World!");
};
