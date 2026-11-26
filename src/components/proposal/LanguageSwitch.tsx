"use client";

import { altLocale, proposalPath, storageKeys, type Locale } from "@/i18n/config";
import type { Ui } from "@/i18n/ui";

/**
 * Selector compacto ES / EN. Son enlaces reales (funcionan con teclado y sin JavaScript);
 * conservan la sección actual (hash) y guardan la preferencia.
 */
export function LanguageSwitch({ locale, slug, ui }: { locale: Locale; slug: string; ui: Ui }) {
  const other = altLocale(locale);

  function remember(target: Locale) {
    try {
      window.localStorage.setItem(storageKeys.locale, target);
    } catch {
      /* sin almacenamiento disponible */
    }
  }

  function hrefFor(target: Locale) {
    const hash = typeof window === "undefined" ? "" : window.location.hash;
    return `${proposalPath(target, slug)}${hash}`;
  }

  return (
    <div className="lang" role="group" aria-label={ui.lang.label}>
      {[locale, other].sort().reverse().map((l) => {
        const active = l === locale;
        return active ? (
          <span key={l} className="lang__item" aria-current="true" lang={l}>
            {l.toUpperCase()}
          </span>
        ) : (
          <a
            key={l}
            className="lang__item"
            href={proposalPath(l, slug)}
            hrefLang={l}
            lang={l}
            aria-label={l === "en" ? ui.lang.toEn : ui.lang.toEs}
            onClick={(e) => {
              e.preventDefault();
              remember(l);
              window.location.assign(hrefFor(l));
            }}
          >
            {l.toUpperCase()}
          </a>
        );
      })}
    </div>
  );
}
