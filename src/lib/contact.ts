import type { Ui } from "@/i18n/ui";
import type { Plan, Proposal } from "@/types/proposal";
import { fmt } from "@/i18n/config";
import { planTitle } from "./formatters";

export function buildMessage(proposal: Proposal, ui: Ui, plan?: Plan): string {
  const what = plan ? fmt(ui.mail.withPlan, plan.name, plan.descriptor) : ui.mail.generic;
  return fmt(ui.mail.body, what, proposal.client.project);
}

export function mailtoUrl(proposal: Proposal, ui: Ui, plan?: Plan): string {
  const subject = `${ui.mail.subject} ${proposal.client.project}${plan ? ` · ${planTitle(plan, ui)}` : ""}`;
  return `mailto:${proposal.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(buildMessage(proposal, ui, plan))}`;
}

export function whatsappUrl(proposal: Proposal, ui: Ui, plan?: Plan): string {
  return `https://wa.me/${proposal.contact.whatsappDigits}?text=${encodeURIComponent(buildMessage(proposal, ui, plan))}`;
}
