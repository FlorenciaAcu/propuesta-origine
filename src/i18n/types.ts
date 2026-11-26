import type { Locale } from "./config";
import type { es } from "./ui.es";

type DeepWiden<T> = T extends readonly string[]
    ? string[]
    : T extends string
      ? string
      : { [K in keyof T]: DeepWiden<T[K]> };

/** Forma del diccionario de interfaz: el inglés debe tener exactamente las mismas claves que el español. */
export type Ui = Omit<DeepWiden<typeof es>, "locale"> & { locale: Locale };
