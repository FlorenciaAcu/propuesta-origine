import type { Locale } from "./config";
import type { Ui } from "./types";
import { en } from "./ui.en";
import { es } from "./ui.es";

export type { Ui };

const dictionaries: Record<Locale, Ui> = { es: es as Ui, en };

export function getUi(locale: Locale): Ui {
  return dictionaries[locale];
}
