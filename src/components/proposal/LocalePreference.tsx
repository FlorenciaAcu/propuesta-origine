"use client";

import { useEffect } from "react";
import { proposalPath, storageKeys, type Locale } from "@/i18n/config";

/** Si la persona eligió antes el otro idioma, lo recuerda y la lleva a esa versión (conservando la sección). */
export function LocalePreference({ locale, slug }: { locale: Locale; slug: string }) {
  useEffect(() => {
    let pref: string | null = null;
    try {
      pref = window.localStorage.getItem(storageKeys.locale);
    } catch {
      return;
    }
    if ((pref === "es" || pref === "en") && pref !== locale) {
      window.location.replace(`${proposalPath(pref, slug)}${window.location.hash}`);
    }
  }, [locale, slug]);
  return null;
}
