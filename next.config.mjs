/**
 * Dos modos:
 * - Local / Vercel: servidor de Next con la cabecera X-Robots-Tag.
 * - GitHub Pages (GITHUB_PAGES=true): exportación estática bajo /propuesta-origine/.
 *   Pages no admite cabeceras propias: el noindex queda en las metaetiquetas y en robots.txt.
 */
const isPages = process.env.GITHUB_PAGES === "true";
const basePath = isPages ? "/propuesta-origine" : "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
    NEXT_PUBLIC_TRAILING_SLASH: isPages ? "1" : "",
  },
  ...(isPages
    ? { output: "export", basePath, trailingSlash: true, images: { unoptimized: true } }
    : {
        async headers() {
          return [
            {
              source: "/:path*",
              headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
            },
          ];
        },
      }),
};

export default nextConfig;
