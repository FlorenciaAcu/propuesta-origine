import { wordpressPlan } from "@/data/proposals/origine-relocation";
import { formatUsd } from "@/i18n/config";
import type { Ui } from "@/i18n/ui";
import type { ComparisonFeature, Plan, PlanId, Proposal } from "@/types/proposal";

/** Costo anual de infraestructura de referencia (WordPress.com) para una propuesta. */
export function infrastructureAnnual(plan: Plan): number {
  return wordpressPlan(plan.wordpressPlan).annual;
}

/** Honorarios + infraestructura del primer año. Se calcula siempre; nunca se escribe a mano. */
export function firstYearTotal(plan: Plan): number {
  return plan.price + infrastructureAnnual(plan);
}

function derived(id: string, group: ComparisonFeature["group"], label: string, plans: Plan[], fn: (p: Plan) => string): ComparisonFeature {
  const values = {} as Record<PlanId, string>;
  for (const p of plans) values[p.id] = fn(p);
  return { id, group, label, values };
}

/** Matriz completa: filas de alcance (traducidas) + filas derivadas de los datos de cada plan. */
export function buildComparison(proposal: Proposal, ui: Ui): ComparisonFeature[] {
  const { plans, wordpress } = proposal;
  const L = ui.locale;
  const wpName = (p: Plan) => wordpress.plans.find((w) => w.id === p.wordpressPlan)?.name ?? "";
  const tail = [
    derived("honorarios", "investment", ui.compare.feesRow, plans, (p) => formatUsd(p.price, L)),
    derived("plazo", "delivery", ui.compare.termRow, plans, (p) => p.durationLabel),
    derived("wp-plan", "investment", ui.compare.wpPlanRow, plans, (p) => wpName(p)),
    derived("wp-anual", "investment", ui.compare.wpAnnualRow, plans, (p) => formatUsd(infrastructureAnnual(p), L)),
    derived("total", "investment", ui.compare.totalRow, plans, (p) => formatUsd(firstYearTotal(p), L)),
  ];
  return [...proposal.comparison, ...tail];
}
