import { fmt, formatPercent, formatUsd, weeksLabel } from "@/i18n/config";
import type { Locale } from "@/i18n/config";

export { formatUsd, weeksLabel };

export function paymentSummary(percents: number[], locale: Locale): string {
  return percents.map((p) => (locale === "es" ? `${p}` : `${p}`)).join("/") + (locale === "es" ? " %" : "%");
}

export { formatPercent };

export function planTitle(p: { name: string; descriptor: string }, ui: { planTitle: string }): string {
  return fmt(ui.planTitle, p.name, p.descriptor);
}
