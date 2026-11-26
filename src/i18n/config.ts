export const locales = ["es", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "es";

export function isLocale(v: string | undefined): v is Locale {
  return v === "es" || v === "en";
}

export function altLocale(l: Locale): Locale {
  return l === "es" ? "en" : "es";
}

/** El español es el idioma predeterminado y no lleva prefijo. El inglés vive bajo /en. */
/** Ruta pública de la propuesta. Incluye el prefijo de GitHub Pages cuando corresponde. */
export function proposalPath(locale: Locale, slug: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const slash = process.env.NEXT_PUBLIC_TRAILING_SLASH ? "/" : "";
  return `${base}${locale === "es" ? "" : "/en"}/propuestas/${slug}${slash}`;
}

export const intlTag: Record<Locale, string> = { es: "es-AR", en: "en-US" };

/** Importes en USD con separadores según el idioma (USD 1.250 / USD 1,250). */
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
export function durationText(min: number, max: number, locale: Locale): string {
  const range = min === max ? `${max}` : `${min}–${max}`;
  const one = max === 1;
  return locale === "es" ? `${range} ${one ? "semana" : "semanas"}` : `${range} ${one ? "week" : "weeks"}`;
}

export const storageKeys = { locale: "fux:locale", plan: "fux:plan" } as const;

/** Rellena una plantilla de texto: fmt("Hola {0}", "mundo"). Los diccionarios son datos puros para poder pasarlos a componentes cliente. */
export function fmt(template: string, ...args: (string | number)[]): string {
  return template.replace(/\{(\d+)\}/g, (_, i) => String(args[Number(i)]));
}
