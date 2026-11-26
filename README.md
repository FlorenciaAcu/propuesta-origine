# Florencia UX · Propuesta Origine Relocation

Propuesta comercial para Aparicio Brand · Origine Relocation, en español e inglés. Next.js (App Router), TypeScript estricto, exportación estática para GitHub Pages. Sin base de datos ni analítica.

```bash
npm install
npm run dev          # ES: /propuestas/origine-relocation · EN: /en/propuestas/origine-relocation
npm run check        # lint + typecheck + build
```

## Estructura

- `src/data/proposals/origine-relocation.ts`: valores comerciales aprobados (importes, plazos, cronogramas, forma de pago, soporte, planes de WordPress.com, mantenimiento y contacto).
- `src/data/proposals/origine-relocation.presentation.ts`: todos los textos de la propuesta en español e inglés. Los importes se insertan desde los datos; no se escriben en los textos.
- `src/lib/proposals.ts`: valida los valores acordados y **hace fallar el build** si cambian sin autorización.
- `src/components/proposal/`: página de la propuesta (`ProposalPage`), tabla comparativa, secciones, selector de idioma.
- `src/i18n/`: textos de interfaz (`ui.es.ts`, `ui.en.ts`), rutas y formatos por idioma.
- `src/styles/`: `tokens.css` y `typography.css` (sistema de diseño Florencia UX) y `globals.css` (estilos de la propuesta).

## Idiomas

El español es el predeterminado (`/propuestas/origine-relocation/`); el inglés vive bajo `/en/propuestas/origine-relocation/`. El selector ES / EN usa enlaces reales, conserva la sección actual y recuerda la preferencia (localStorage).

## Publicación en GitHub Pages

- Cada push a `main` ejecuta `.github/workflows/pages.yml`: exporta el sitio (`GITHUB_PAGES=true npm run build`) y lo publica.
- ES: https://florenciaacu.github.io/propuesta-origine/propuestas/origine-relocation/
- EN: https://florenciaacu.github.io/propuesta-origine/en/propuestas/origine-relocation/
- La raíz https://florenciaacu.github.io/propuesta-origine/ redirige a la versión en español.
- Prueba local de la versión de Pages: `GITHUB_PAGES=true npm run build` y luego `node scripts/serve-pages.mjs` → http://localhost:3200/propuesta-origine/

## Visibilidad

GitHub Pages es público: cualquier persona con el enlace puede abrir la propuesta. El `noindex, nofollow` (metaetiquetas) y `robots.txt` evitan que los buscadores la indexen, pero **no restringen el acceso**. Pages no admite contraseña ni cabeceras propias.
