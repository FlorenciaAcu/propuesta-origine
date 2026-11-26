# Florencia UX · Propuestas comerciales

Propuesta interactiva para Aparicio Brand · Origine Relocation, en español e inglés. Next.js (App Router), TypeScript estricto, sin base de datos ni analítica.

```powershell
npm install
npm run dev          # ES: /propuestas/origine-relocation · EN: /en/propuestas/origine-relocation
npm run check        # lint + typecheck + build
```

## Fuente única

La web es la única fuente de verdad. Figma queda como referencia de diseño; no hay PDF ni documentos en Drive que mantener.

- `src/data/proposals/origine-relocation.ts`: valores comerciales (precios, pagos, plazos, días de soporte, WordPress.com, mantenimiento, contacto) y textos en español.
- `origine-relocation.en.ts` y `origine-relocation.content.en.ts`: traducción al inglés. Solo palabras: los valores salen del archivo base.
- `src/i18n/`: diccionarios de interfaz (`ui.es.ts`, `ui.en.ts`), formatos por idioma y utilidades.
- `src/lib/proposals.ts`: combina datos y traducciones, y **falla el build** si los valores acordados cambian o si una traducción está incompleta.
- `src/components/proposal/ProposalExport.tsx`: exportación PNG.

Una propuesta nueva = un archivo de datos + uno de contenido por idioma, registrados en `src/lib/proposals.ts`.

## Idiomas

ES es el predeterminado (`/propuestas/...`); EN vive bajo `/en/propuestas/...`. El selector ES / EN del header son enlaces reales: conservan la sección (hash) y la propuesta elegida (sessionStorage) y guardan la preferencia (localStorage). Cada versión declara su `lang`.

## Descarga PNG

En el detalle de cada propuesta, «Descargar propuesta» / «Download proposal» genera localmente una imagen PNG de una página A4 (595 × 842 pt, `pixelRatio` 3) con el detalle «Entregables» de la alternativa, en el idioma activo, igual al frame de Figma. Archivos: `FlorenciaUX-OrigineRelocation-Basica-ES.png`, `…-Intermedia-ES.png`, `…-Integral-ES.png`, `…-Basic-EN.png`, `…-Intermediate-EN.png`, `…-Comprehensive-EN.png`. No se envía nada a servicios externos.

## Publicación en GitHub Pages

- Cada push a `main` ejecuta `.github/workflows/pages.yml`: exporta el sitio estático (`GITHUB_PAGES=true npm run build`) y lo publica.
- URL: https://florenciaacu.github.io/propuesta-origine/ (la raíz lleva a la propuesta en español; inglés en `/en/propuestas/origine-relocation/`).
- Prueba local de la versión de Pages: `GITHUB_PAGES=true npm run build` y luego `node scripts/serve-pages.mjs` → http://localhost:3200/propuesta-origine/
- Aviso: GitHub Pages es público. El `noindex` (metaetiquetas y robots.txt) evita buscadores, pero no restringe el acceso; Pages no permite cabeceras propias ni contraseña.

## Compartir con la clienta (preparación, sin publicar)

La propuesta contiene información comercial: conviene compartirla solo con un enlace accesible para quien corresponda y no indexable.

- **Ya resuelto en el código:** `noindex, nofollow` en los metadatos, `X-Robots-Tag` en las cabeceras y `robots.txt` que bloquea el rastreo. Sin Open Graph público.
- **`noindex` no es protección de acceso.** Quien tenga el enlace puede abrirlo. Para restringirlo hay que activar una protección en el hosting.
- **Opciones de acceso (a decidir):** (1) *Vercel Authentication / Deployment Protection* (solo personas con cuenta autorizada); (2) *Password Protection* de Vercel (según el plan contratado); (3) un enlace de vista previa compartible con caducidad (*Shareable Links*) si el plan lo permite. Verificar disponibilidad en el plan antes de elegir.
- **Antes de enviar el enlace:** abrirlo en una ventana privada para confirmar que el acceso funciona como se espera y que no es `localhost`.
- **No se publicó nada** ni se vinculó ningún dominio. Publicar requiere autorización expresa.

## Publicar en Vercel

1. Importar el proyecto (Next.js, sin variables de entorno).
2. **Activar la protección de acceso elegida arriba antes de compartir el enlace.**
3. No vincular un dominio real hasta aprobarlo.

No publiqué nada ni vinculé dominios.
