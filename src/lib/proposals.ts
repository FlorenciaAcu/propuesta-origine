import { origineRelocation } from "@/data/proposals/origine-relocation";
import { origineContent } from "@/data/proposals/origine-relocation.content";
import { origineContentEn } from "@/data/proposals/origine-relocation.content.en";
import { enTexts } from "@/data/proposals/origine-relocation.en";
import type { Locale } from "@/i18n/config";
import { getUi, type Ui } from "@/i18n/ui";
import type { Plan, Proposal, ProposalContent, ProposalTexts } from "@/types/proposal";
import { firstYearTotal } from "./investment";

export interface ProposalEntry {
  proposal: Proposal;
  content: ProposalContent;
  ui: Ui;
  locale: Locale;
}

const slugs = [origineRelocation.slug];

/**
 * Valores acordados con Aparicio Brand (versión 4.0.0).
 * Funcionan como control: si los datos cambian sin autorización, el build falla.
 */
const AGREED: Record<string, { fee: number; wpAnnual: number; firstYear: number; advance: number; balance: number }> = {
  basica: { fee: 600, wpAnnual: 96, firstYear: 696, advance: 180, balance: 420 },
  intermedia: { fee: 1000, wpAnnual: 96, firstYear: 1096, advance: 300, balance: 700 },
  integral: { fee: 1600, wpAnnual: 300, firstYear: 1900, advance: 480, balance: 1120 },
};

/** Valida coherencia de precios, pagos, soporte y cronograma. Lanza error si los datos no cierran. */
export function validateProposal(proposal: Proposal): void {
  for (const plan of proposal.plans) {
    const percent = plan.payments.reduce((sum, p) => sum + p.percent, 0);
    const amount = plan.payments.reduce((sum, p) => sum + p.amount, 0);
    if (percent !== 100) throw new Error(`${plan.name}: los porcentajes de pago suman ${percent} %, no 100 %.`);
    if (amount !== plan.price) throw new Error(`${plan.name}: los importes suman ${amount}, los honorarios son ${plan.price}.`);
    if (plan.payments.length !== 2 || plan.payments[0].percent !== 30 || plan.payments[1].percent !== 70) {
      throw new Error(`${plan.name}: las condiciones de pago deben ser 30 % / 70 % en las tres propuestas.`);
    }
    if (plan.supportDays !== 30) throw new Error(`${plan.name}: el soporte incluido es de 30 días en las tres propuestas.`);
    if (plan.validations !== 2) throw new Error(`${plan.name}: hay dos instancias de validación en las tres propuestas.`);
    const lastWeek = Math.max(...plan.schedule.map((m) => m.endWeek));
    if (lastWeek !== plan.durationWeeks) {
      throw new Error(`${plan.name}: el cronograma termina en la semana ${lastWeek}, el plazo máximo es ${plan.durationWeeks}.`);
    }
    const agreed = AGREED[plan.id];
    if (agreed) {
      const wp = proposal.wordpress.plans.find((p) => p.id === plan.wordpressPlan);
      if (!wp) throw new Error(`${plan.name}: plan de WordPress.com inexistente.`);
      const checks: [string, number, number][] = [
        ["honorarios", plan.price, agreed.fee],
        ["WordPress.com anual", wp.annual, agreed.wpAnnual],
        ["subtotal estimado del primer año", firstYearTotal(plan), agreed.firstYear],
        ["anticipo", plan.payments[0].amount, agreed.advance],
        ["saldo", plan.payments[1].amount, agreed.balance],
      ];
      for (const [label, actual, expected] of checks) {
        if (actual !== expected) throw new Error(`${plan.name}: ${label} es ${actual}, lo acordado es ${expected}.`);
      }
    }
  }
  const m = proposal.maintenance;
  if (m.minUsd !== 50 || m.maxUsd !== 80) throw new Error("El mantenimiento puntual acordado es USD 50–80 por intervención.");
}

function same(label: string, a: number, b: number) {
  if (a !== b) throw new Error(`Traducción incompleta en ${label}: ${a} elementos en español y ${b} en inglés.`);
}

/** Aplica las traducciones sobre los datos base. Los valores comerciales siempre vienen del base. */
function localize(base: Proposal, t: ProposalTexts): Proposal {
  const plans: Plan[] = base.plans.map((p) => {
    const x = t.plans[p.id];
    same(`${p.id}.highlights`, p.highlights.length, x.highlights.length);
    same(`${p.id}.scope`, p.scope.length, x.scope.length);
    same(`${p.id}.deliverables`, p.deliverables.length, x.deliverables.length);
    same(`${p.id}.process`, p.process.length, x.process.length);
    same(`${p.id}.technologies`, p.technologies.length, x.technologies.length);
    same(`${p.id}.extraCosts`, p.extraCosts.length, x.extraCosts.length);
    same(`${p.id}.validations`, p.validationsText.length, x.validationsText.length);
    return {
      ...p,
      name: x.name,
      fileSlug: x.fileSlug,
      descriptor: x.descriptor,
      objective: x.objective,
      stage: x.stage,
      question: x.question,
      pitch: x.pitch,
      durationLabel: x.durationLabel,
      highlights: x.highlights,
      scope: x.scope,
      deliverables: p.deliverables.map((d, i) => ({ ...d, label: x.deliverables[i] })),
      process: x.process,
      schedule: p.schedule.map((m) => {
        const s = x.schedule[m.id];
        if (!s) throw new Error(`Falta la traducción de la etapa ${m.id} en ${p.id}`);
        return { ...m, label: s.label, note: m.note ? s.note : undefined };
      }),
      scheduleNote: x.scheduleNote,
      technologies: x.technologies,
      validationsText: x.validationsText,
      payments: p.payments.map((m, i) => ({ ...m, label: x.paymentLabels[i] })),
      paymentNote: p.paymentNote ? x.paymentNote : undefined,
      supportText: x.supportText,
      extraCosts: x.extraCosts,
      professionalAdvice: x.professionalAdvice,
    };
  });
  same("additionalCosts", base.additionalCosts.length, t.additionalCosts.length);
  same("stages", base.stages.length, t.stages.length);
  same("wordpress.links", base.wordpress.links.length, t.wordpress.links.length);
  same("wordpress.pluginLinks", base.wordpress.pluginLinks.length, t.wordpress.pluginLinks.length);
  return {
    ...base,
    title: t.title,
    dateLabel: t.dateLabel,
    issuedLabel: t.issuedLabel,
    plans,
    stages: base.stages.map((s, i) => ({ ...s, ...t.stages[i] })),
    comparison: base.comparison.map((c) => {
      const x = t.comparison[c.id];
      if (!x) throw new Error(`Falta la traducción de la fila ${c.id}`);
      return { ...c, label: x.label, values: x.values };
    }),
    metrics: base.metrics.map((m) => {
      const x = t.metrics[m.id];
      if (!x) throw new Error(`Falta la traducción del indicador ${m.id}`);
      return { ...m, ...x };
    }),
    conditions: base.conditions.map((c) => {
      const x = t.conditions[c.id];
      if (!x) throw new Error(`Falta la traducción de las condiciones ${c.id}`);
      same(`conditions.${c.id}`, c.items.length, x.items.length);
      return { ...c, ...x };
    }),
    additionalCosts: base.additionalCosts.map((a, i) => ({ ...a, ...t.additionalCosts[i] })),
    maintenance: { ...base.maintenance, ...t.maintenance },
    wordpress: {
      ...base.wordpress,
      taxNote: t.wordpress.taxNote,
      plans: base.wordpress.plans.map((p) => ({ ...p, note: t.wordpress.notes[p.id] })),
      links: base.wordpress.links.map((l, i) => ({ ...l, label: t.wordpress.links[i] })),
      pluginLinks: base.wordpress.pluginLinks.map((l, i) => ({ ...l, label: t.wordpress.pluginLinks[i] })),
    },
  };
}

export function getProposal(slug: string, locale: Locale): ProposalEntry | undefined {
  if (!slugs.includes(slug)) return undefined;
  validateProposal(origineRelocation);
  const proposal = locale === "es" ? origineRelocation : localize(origineRelocation, enTexts);
  if (locale === "en") validateProposal(proposal);
  const content = locale === "es" ? origineContent : origineContentEn;
  return { proposal, content, ui: getUi(locale), locale };
}

export function listSlugs(): string[] {
  return slugs;
}
