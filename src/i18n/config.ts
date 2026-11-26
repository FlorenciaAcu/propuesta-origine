export const locales = ["es", "en"] as const;
export type Locale = (typeof locales)[number];

export function altLocale(l: Locale): Locale {
  return l === "es" ? "en" : "es";
}

/**
 * Ruta pública de la propuesta. El español no lleva prefijo; el inglés vive bajo /en.
 * Incluye el prefijo y la barra final de GitHub Pages cuando corresponde.
 */
export function proposalPath(locale: Locale, slug: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const slash = process.env.NEXT_PUBLIC_TRAILING_SLASH ? "/" : "";
  return `${base}${locale === "es" ? "" : "/en"}/propuestas/${slug}${slash}`;
}

const intlTag: Record<Locale, string> = { es: "es-AR", en: "en-US" };

/** Importes en USD con separadores según el idioma (USD 1.000 / USD 1,000). */
export function formatUsd(amount: number, locale: Locale): string {
  return `USD ${new Intl.NumberFormat(intlTag[locale], { maximumFractionDigits: 0 }).format(amount)}`;
}

export function formatPercent(value: number, locale: Locale): string {
  return locale === "es" ? `${value} %` : `${value}%`;
}

export function weeksLabel(start: number, end: number, locale: Locale): string {
  if (locale === "es") return start === end ? `Semana ${start}` : `Semanas ${start}–${end}`;
  return start === end ? `Week ${start}` : `Weeks ${start}–${end}`;
}

/** Plazo como texto: "3–4 semanas" / "3–4 weeks". */
export function durationText([min, max]: [number, number], locale: Locale): string {
  const range = min === max ? `${max}` : `${min}–${max}`;
  return locale === "es" ? `${range} ${max === 1 ? "semana" : "semanas"}` : `${range} ${max === 1 ? "week" : "weeks"}`;
}

export const storageKeys = { locale: "fux:locale" } as const;

/** Rellena una plantilla de texto: fmt("Hola {0}", "mundo"). */
export function fmt(template: string, ...args: (string | number)[]): string {
  return template.replace(/\{(\d+)\}/g, (_, i) => String(args[Number(i)]));
}
