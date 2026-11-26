import { notFound } from "next/navigation";
import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import { getProposal, listSlugs } from "@/lib/proposals";
import { presentation } from "@/data/proposals/origine-relocation.presentation";
import { LocalePreference } from "./LocalePreference";
import { LanguageSwitch } from "./LanguageSwitch";
import { Brand, Footer, MethodSection, ObjectivesSection, TechSection, TermsSection, ValueSection } from "./Sections";
import { ProposalsTable } from "./ProposalsTable";

export function proposalStaticParams() {
  return listSlugs().map((slug) => ({ slug }));
}

export function proposalMetadata(slug: string, locale: Locale): Metadata {
  const entry = getProposal(slug, locale);
  if (!entry) return { title: locale === "es" ? "Propuesta no encontrada" : "Proposal not found", robots: { index: false, follow: false } };
  const description =
    locale === "es"
      ? "Propuesta de Florencia Acuña para Origine Relocation: alternativas Básica, Intermedia e Integral."
      : "Proposal by Florencia Acuña for Origine Relocation: Basic, Intermediate and Comprehensive alternatives.";
  return {
    title: entry.proposal.title,
    description,
    // La propuesta contiene información comercial de un cliente: no se indexa ni se comparte con metadatos públicos.
    robots: { index: false, follow: false, nocache: true, googleBot: { index: false, follow: false } },
  };
}

export function ProposalPage({ slug, locale }: { slug: string; locale: Locale }) {
  const entry = getProposal(slug, locale);
  if (!entry) notFound();
  const { proposal, ui } = entry;
  const p = presentation[locale];

  return (
    <>
      <LocalePreference locale={locale} slug={slug} />
      <a className="skip-link" href="#contenido">
        {ui.skip}
      </a>
      <header className="site-header exec-header" data-theme="dark">
        <span className="exec-progress" aria-hidden="true" />
        <div className="container exec-bar site-header__inner">
          <Brand p={p} />
          <div className="site-header__actions">
            <LanguageSwitch locale={locale} slug={slug} ui={ui} />
          </div>
        </div>
      </header>
      <main id="contenido">
        <ObjectivesSection p={p} />
        <ProposalsTable p={p} proposal={proposal} ui={ui} />
        <MethodSection p={p} proposal={proposal} ui={ui} />
        <TechSection p={p} proposal={proposal} ui={ui} />
        <TermsSection p={p} proposal={proposal} ui={ui} />
        <ValueSection p={p} proposal={proposal} ui={ui} />
      </main>
      <Footer p={p} proposal={proposal} />
    </>
  );
}
