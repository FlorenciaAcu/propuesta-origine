import type { PaymentMilestone, Proposal } from "@/types/proposal";

/**
 * Valores comerciales aprobados de la propuesta para Aparicio Brand · Origine Relocation.
 * Los textos (ES / EN) están en origine-relocation.presentation.ts; los importes, plazos y
 * porcentajes salen siempre de acá. src/lib/proposals.ts valida estos valores en el build.
 */

function payments(price: number): [PaymentMilestone, PaymentMilestone] {
  return [
    { percent: 30, amount: Math.round(price * 0.3) },
    { percent: 70, amount: Math.round(price * 0.7) },
  ];
}

export const origineRelocation: Proposal = {
  slug: "origine-relocation",
  title: {
    es: "Propuesta de diseño y desarrollo web · Aparicio Brand · Origine Relocation",
    en: "Web design and development proposal · Aparicio Brand · Origine Relocation",
  },
  plans: [
    {
      id: "basica",
      name: { es: "Básica", en: "Basic" },
      price: 600,
      weeks: [2, 2],
      timeline: { design: [1, 1], build: [2, 2] },
      payments: payments(600),
      supportDays: 30,
      wordpressPlan: "premium",
    },
    {
      id: "intermedia",
      name: { es: "Intermedia", en: "Intermediate" },
      price: 1000,
      weeks: [3, 4],
      timeline: { design: [1, 2], build: [2, 4] },
      payments: payments(1000),
      supportDays: 30,
      wordpressPlan: "premium",
    },
    {
      id: "integral",
      name: { es: "Integral", en: "Comprehensive" },
      price: 1600,
      weeks: [4, 5],
      timeline: { design: [1, 2], build: [2, 5] },
      payments: payments(1600),
      supportDays: 30,
      wordpressPlan: "business",
    },
  ],
  /** Tarifas de referencia de WordPress.com (sin impuestos): https://wordpress.com/pricing/ */
  wordpress: [
    { id: "premium", name: "Premium", monthly: 18, annual: 96 },
    { id: "business", name: "Business", monthly: 40, annual: 300 },
  ],
  maintenance: { minUsd: 50, maxUsd: 80 },
  contact: {
    email: "contact@florenciaux.com",
    whatsappDisplay: "+54 9 264 627 1705",
    whatsappDigits: "5492646271705",
    portfolio: "https://florenciaux.com",
  },
};
