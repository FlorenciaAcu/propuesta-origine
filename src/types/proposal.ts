import type { Locale } from "@/i18n/config";

export type PlanId = "basica" | "intermedia" | "integral";
export type WordPressPlanId = "premium" | "business";

export interface PaymentMilestone {
  percent: number;
  amount: number;
}

/** Cronograma de una alternativa, en semanas (1 = primera semana desde el inicio). */
export interface PlanTimeline {
  design: [number, number];
  build: [number, number];
}

export interface Plan {
  id: PlanId;
  /** Básica / Basic, Intermedia / Intermediate, Integral / Comprehensive. */
  name: Record<Locale, string>;
  price: number;
  /** Plazo estimado en semanas: mínimo y máximo. */
  weeks: [number, number];
  timeline: PlanTimeline;
  payments: [PaymentMilestone, PaymentMilestone];
  supportDays: number;
  wordpressPlan: WordPressPlanId;
}

export interface WordPressPlan {
  id: WordPressPlanId;
  name: string;
  /** Pago mensual (USD/mes). */
  monthly: number;
  /** Pago anual (USD/año). */
  annual: number;
}

export interface Proposal {
  slug: string;
  title: Record<Locale, string>;
  plans: Plan[];
  wordpress: WordPressPlan[];
  maintenance: { minUsd: number; maxUsd: number };
  contact: { email: string; whatsappDisplay: string; whatsappDigits: string; portfolio: string };
}
