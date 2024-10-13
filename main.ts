import { Hono } from "hono";
import { getHome } from "./routes.ts";

const app = new Hono();

app.get("/", getHome);

Deno.serve({ port: 3000 }, app.fetch);
