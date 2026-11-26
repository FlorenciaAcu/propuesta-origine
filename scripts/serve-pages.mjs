// Simula GitHub Pages en local: sirve la exportación estática (out/) bajo /propuesta-origine/.
// Uso: GITHUB_PAGES=true npm run build && node scripts/serve-pages.mjs
import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { extname, join, normalize } from "node:path";

const ROOT = join(process.cwd(), "out");
const BASE = "/propuesta-origine";
const PORT = Number(process.env.PORT ?? 3200);
const TYPES = { ".html": "text/html; charset=utf-8", ".js": "text/javascript", ".css": "text/css", ".svg": "image/svg+xml", ".woff2": "font/woff2", ".txt": "text/plain; charset=utf-8", ".json": "application/json" };

createServer(async (req, res) => {
  const url = decodeURIComponent((req.url ?? "/").split("?")[0]);
  if (!url.startsWith(BASE)) {
    res.writeHead(302, { Location: `${BASE}/` }).end();
    return;
  }
  let path = normalize(join(ROOT, url.slice(BASE.length)));
  if (!path.startsWith(ROOT)) return void res.writeHead(403).end();
  try {
    const s = await stat(path);
    if (s.isDirectory()) {
      if (!url.endsWith("/")) return void res.writeHead(301, { Location: `${url}/` }).end();
      path = join(path, "index.html");
    }
    const body = await readFile(path);
    res.writeHead(200, { "Content-Type": TYPES[extname(path)] ?? "application/octet-stream" }).end(body);
  } catch {
    const body = await readFile(join(ROOT, "404.html")).catch(() => "Not found");
    res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" }).end(body);
  }
}).listen(PORT, () => console.log(`Pages local: http://localhost:${PORT}${BASE}/`));
