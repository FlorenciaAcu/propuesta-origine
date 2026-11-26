import { origineRelocation } from "@/data/proposals/origine-relocation";
import type { Locale } from "@/i18n/config";
import { getUi, type Ui } from "@/i18n/ui";
import type { Proposal } from "@/types/proposal";

export interface ProposalEntry {
  proposal: Proposal;
  ui: Ui;
  locale: Locale;
}

const slugs = [origineRelocation.slug];

/**
 * Valores acordados con Aparicio Brand. Funcionan como control:
 * si los datos cambian sin autorización, el build falla.
 */
const AGREED = {
  basica: { fee: 600, weeks: [2, 2], advance: 180, balance: 420, wp: "premium" },
  intermedia: { fee: 1000, weeks: [3, 4], advance: 300, balance: 700, wp: "premium" },
  integral: { fee: 1600, weeks: [4, 5], advance: 480, balance: 1120, wp: "business" },
} as const;

const AGREED_WP = { premium: { monthly: 18, annual: 96 }, business: { monthly: 40, annual: 300 } } as const;

/** Valida importes, pagos, plazos, cronogramas, soporte y WordPress.com. Lanza error si algo no coincide. */
export function validateProposal(proposal: Proposal): void {
  for (const plan of proposal.plans) {
    const a = AGREED[plan.id];
    const [adv, bal] = plan.payments;
    const fail = (msg: string) => {
      throw new Error(`${plan.name.es}: ${msg}`);
    };
    if (plan.price !== a.fee) fail(`el importe es ${plan.price}, lo acordado es ${a.fee}.`);
    if (adv.percent !== 30 || bal.percent !== 70) fail("la forma de pago debe ser 30 % / 70 %.");
    if (adv.amount !== a.advance || bal.amount !== a.balance) fail(`anticipo/saldo ${adv.amount}/${bal.amount}, lo acordado es ${a.advance}/${a.balance}.`);
    if (adv.amount + bal.amount !== plan.price) fail("anticipo y saldo no suman el importe.");
    if (plan.weeks[0] !== a.weeks[0] || plan.weeks[1] !== a.weeks[1]) fail(`el plazo es ${plan.weeks.join("–")} semanas, lo acordado es ${a.weeks.join("–")}.`);
    if (plan.timeline.build[1] !== plan.weeks[1]) fail(`el cronograma termina en la semana ${plan.timeline.build[1]}, el plazo máximo es ${plan.weeks[1]}.`);
    if (plan.supportDays !== 30) fail("el soporte incluido es de 30 días.");
    if (plan.wordpressPlan !== a.wp) fail(`el plan de WordPress.com de referencia es ${a.wp}.`);
  }
  for (const wp of proposal.wordpress) {
    const a = AGREED_WP[wp.id];
    if (wp.monthly !== a.monthly || wp.annual !== a.annual) throw new Error(`WordPress.com ${wp.name}: tarifas distintas de las acordadas.`);
  }
  const m = proposal.maintenance;
  if (m.minUsd !== 50 || m.maxUsd !== 80) throw new Error("El mantenimiento puntual acordado es USD 50–80 por intervención.");
}

export function getProposal(slug: string, locale: Locale): ProposalEntry | undefined {
  if (!slugs.includes(slug)) return undefined;
  validateProposal(origineRelocation);
  return { proposal: origineRelocation, ui: getUi(locale), locale };
}

export function listSlugs(): string[] {
  return slugs;
}
