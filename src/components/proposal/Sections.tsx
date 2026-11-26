import {
  ArrowUpRight,
  BadgeCheck,
  Building2,
  Check,
  Info,
  Wrench,
  CalendarCheck,
  ChartColumn,
  CodeXml,
  Headphones,
  LayoutGrid,
  MapPin,
  MessagesSquare,
  PenTool,
  RefreshCw,
  Rocket,
  Search,
  Settings2,
  Wallet,
  type LucideIcon,
} from "lucide-react";

const GOAL_ICONS: LucideIcon[] = [BadgeCheck, LayoutGrid, MapPin, CalendarCheck, Wallet, ChartColumn];
const STEP_ICONS: LucideIcon[] = [Search, PenTool, CodeXml, Rocket];
const SUPPORT_ICONS: LucideIcon[] = [MessagesSquare, Headphones, RefreshCw];
import { fmt, formatUsd } from "@/i18n/config";
import type { Ui } from "@/i18n/ui";
import type { Presentation } from "@/data/proposals/origine-relocation.presentation";
import type { Proposal } from "@/types/proposal";

function Head({ id, eyebrow, title, lead }: { id: string; eyebrow?: string; title: string; lead?: string }) {
  return (
    <header className="exec-head">
      {eyebrow ? <p className="exec-eyebrow">{eyebrow}</p> : null}
      <h2 id={id} className="type-h2">
        {title}
      </h2>
      {lead ? <p className="type-s1 muted">{lead}</p> : null}
    </header>
  );
}

function External({ href, children, ui, className }: { href: string; children: React.ReactNode; ui: Ui; className?: string }) {
  return (
    <a className={className ?? "link-arrow"} href={href} target="_blank" rel="noopener noreferrer">
      {children}
      <ArrowUpRight size={14} aria-hidden="true" />
      <span className="sr-only"> {ui.newTab}</span>
    </a>
  );
}

/** 00 · Objetivos del proyecto. */
export function ObjectivesSection({ p }: { p: Presentation }) {
  return (
    <section id="objetivos" className="section exec" aria-labelledby="t-objetivos">
      <div className="container exec-sheet">
        <Head id="t-objetivos" eyebrow={p.eyebrow} title={p.objectives.title} lead={p.objectives.lead} />
        <ol className="exec-goals">
          {p.objectives.items.map((item, i) => (
            <li key={item}>
              <span className="exec-goals__top" aria-hidden="true">
                <span className="exec-icon">{(() => { const Icon = GOAL_ICONS[i] ?? BadgeCheck; return <Icon size={20} strokeWidth={1.75} />; })()}</span>
                <span className="exec-goals__num">{String(i + 1).padStart(2, "0")}</span>
              </span>
              <p>{item}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/** Metodología de trabajo, después de la tabla comparativa. */
export function MethodSection({ p, supportDays }: { p: Presentation; supportDays: number }) {
  return (
    <section id="metodologia" className="section exec" aria-labelledby="t-metodologia">
      <div className="container exec-sheet">
        <header className="exec-head">
          <h2 id="t-metodologia" className="type-h2">
            {p.method.label}
          </h2>
        </header>
        <div className="exec-block">
          <ol className="exec-steps exec-steps--timeline">
            {p.method.steps.map((s, i) => (
              <li key={s.kicker}>
                <span className="exec-icon exec-icon--lg" aria-hidden="true">
                  {(() => { const Icon = STEP_ICONS[i] ?? Search; return <Icon size={22} strokeWidth={1.75} />; })()}
                </span>
                <p className="exec-label exec-label--sm">{s.kicker}</p>
                <h3 className="type-h3">{s.title}</h3>
                <p className="type-body muted">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
        <div className="exec-block">
          <h3 className="exec-label">{p.method.supportLabel}</h3>
          <ul className="exec-support">
            {p.method.support.map((item, i) => {
              const Icon = SUPPORT_ICONS[i] ?? MessagesSquare;
              return (
                <li key={item.title}>
                  <span className="exec-icon" aria-hidden="true">
                    <Icon size={20} strokeWidth={1.75} />
                  </span>
                  <h4 className="exec-strong">{fmt(item.title, supportDays)}</h4>
                  <p className="type-body muted">{fmt(item.text, supportDays)}</p>
                </li>
              );
            })}
          </ul>
          <p className="type-caption muted exec-start">{p.method.startNote}</p>
        </div>
      </div>
    </section>
  );
}

/** Marca de WordPress (W en círculo) para identificar al proveedor externo. */
function WordPressMark() {
  return (
    <svg className="wp-mark" width="44" height="44" viewBox="0 0 44 44" aria-hidden="true" focusable="false">
      <circle cx="22" cy="22" r="20.5" fill="none" stroke="currentColor" strokeWidth="3" />
      <text x="22" y="30.5" textAnchor="middle" fontFamily="Georgia, 'Times New Roman', serif" fontSize="24" fontWeight="700" fill="currentColor">
        W
      </text>
    </svg>
  );
}

/** Tecnología e infraestructura: plataforma, planes del proveedor y qué incluye la configuración. */
export function TechSection({ p, proposal, ui }: { p: Presentation; proposal: Proposal; ui: Ui }) {
  const L = ui.locale;
  const t = p.tech;
  const wp = proposal.wordpress.plans;
  const cell = (v: string, i: number) => {
    const w = wp[i];
    return w ? v.replace("{annual}", formatUsd(w.annual, L)).replace("{monthly}", formatUsd(w.monthlyBilling, L)) : v;
  };
  return (
    <section id="tecnologia" className="section exec" aria-labelledby="t-tecnologia">
      <div className="container exec-sheet">
        <Head id="t-tecnologia" title={t.title} />
        <div className="exec-platform">
          <span className="exec-platform__logo">
            <WordPressMark />
          </span>
          <div>
            <h3 className="exec-item-title">{t.platformName}</h3>
            <p className="exec-label exec-label--sm">{t.platformTag}</p>
            <p className="type-body muted">{t.platformText}</p>
            <ul className="exec-reasons">
              {t.reasons.map((r) => (
                <li key={r}>
                  <Check size={16} strokeWidth={2.25} aria-hidden="true" />
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="exec-block">
          <h3 className="exec-label">{t.plansLabel}</h3>
          <div className="table-wrap exec-extra__table" tabIndex={0} role="region" aria-label={t.plansLabel}>
            <table className="exec-table exec-table--mini">
              <caption className="sr-only">{t.plansLabel}</caption>
              <thead>
                <tr>
                  <td />
                  {wp.map((w) => (
                    <th key={w.id} scope="col">
                      {w.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {t.planRows.map((r) => (
                  <tr key={r.label}>
                    <th scope="row">{r.label}</th>
                    {r.values.map((v, i) => (
                      <td key={i}>{cell(v, i)}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="type-caption muted">
            {t.plansNote}{" "}
            <External href="https://wordpress.com/pricing/" ui={ui}>
              {t.pricingLinkLabel}
            </External>
          </p>
        </div>
        <div className="exec-split2">
          <div className="exec-box exec-box--icon exec-box--mine">
            <span className="exec-icon" aria-hidden="true">
              <Settings2 size={20} strokeWidth={1.75} />
            </span>
            <h3 className="exec-label">{t.includedLabel}</h3>
            <p className="type-body muted">{t.included}</p>
          </div>
          <div className="exec-box exec-box--icon exec-box--ext">
            <span className="exec-icon exec-icon--dark" aria-hidden="true">
              <Building2 size={20} strokeWidth={1.75} />
            </span>
            <h3 className="exec-label exec-label--ink">{t.externalLabel}</h3>
            <p className="type-body muted">{t.external}</p>
          </div>
        </div>
        <p className="type-caption muted exec-start">{t.pluginNote}</p>
      </div>
    </section>
  );
}

/** Condiciones comerciales: pago de honorarios, mantenimiento opcional y consideraciones. */
export function TermsSection({ p, proposal, ui }: { p: Presentation; proposal: Proposal; ui: Ui }) {
  const L = ui.locale;
  const t = p.terms;
  const [adv, bal] = proposal.plans[0].payments;
  const pct = (n: number) => (L === "es" ? `${n} %` : `${n}%`);
  return (
    <section id="condiciones" className="section exec" aria-labelledby="t-condiciones">
      <div className="container exec-sheet">
        <Head id="t-condiciones" title={t.title} />
        <div className="exec-split2">
          <div className="exec-box exec-box--mine exec-terms__card">
            <span className="exec-icon" aria-hidden="true">
              <Wallet size={20} strokeWidth={1.75} />
            </span>
            <h3 className="exec-label">{t.paymentLabel}</h3>
            <div className="exec-pay" role="img" aria-label={`${pct(adv.percent)} ${t.paymentSteps[0]}, ${pct(bal.percent)} ${t.paymentSteps[1]}`}>
              <div className="exec-pay__bar" aria-hidden="true">
                <span style={{ flexGrow: adv.percent }} />
                <span style={{ flexGrow: bal.percent }} />
              </div>
              <div className="exec-pay__steps" aria-hidden="true">
                <div style={{ flexGrow: adv.percent }}>
                  <p className="exec-mid">{pct(adv.percent)}</p>
                  <p className="type-caption muted">{t.paymentSteps[0]}</p>
                </div>
                <div style={{ flexGrow: bal.percent }}>
                  <p className="exec-mid">{pct(bal.percent)}</p>
                  <p className="type-caption muted">{t.paymentSteps[1]}</p>
                </div>
              </div>
            </div>
            <p className="type-caption muted">{t.paymentNote}</p>
          </div>
          <div className="exec-box exec-terms__card">
            <span className="exec-icon exec-icon--dark" aria-hidden="true">
              <Wrench size={20} strokeWidth={1.75} />
            </span>
            <h3 className="exec-label exec-label--ink">{t.maintenanceLabel}</h3>
            <p className="exec-big">
              USD {proposal.maintenance.minUsd}–{proposal.maintenance.maxUsd}
            </p>
            <p className="type-caption muted">{t.maintenanceText}</p>
          </div>
        </div>
        <div className="exec-block">
          <h3 className="exec-label">{t.extraLabel}</h3>
          <ul className="exec-notes">
            {t.extras.map((x) => (
              <li key={x}>
                <Info size={16} strokeWidth={2} aria-hidden="true" />
                <span>{x}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/** 03 · Mi enfoque y valor agregado. */
export function ValueSection({ p, proposal, ui }: { p: Presentation; proposal: Proposal; ui: Ui }) {
  const v = p.value;
  const portfolio = proposal.contact.portfolio;
  return (
    <section id="valor" className="section exec" aria-labelledby="t-valor">
      <div className="container exec-sheet">
        <Head id="t-valor" title={v.title} />
        <div className="exec-box">
          <p className="exec-position">{v.position}</p>
        </div>
        <div className="exec-block">
          <div className="exec-cards">
            <div className="exec-box">
              <p className="exec-label">{v.years.label}</p>
              <p className="exec-big">{v.years.value}</p>
              <p className="type-body muted">{v.years.text}</p>
            </div>
            <div className="exec-box">
              <p className="exec-label">{v.sector.label}</p>
              <ul className="exec-refs">
                <li>
                  <External href="https://www.infocasas.com.uy/" ui={ui} className="link-arrow exec-ref exec-ref--lg">
                    InfoCasas
                  </External>
                </li>
                <li>
                  <External href="https://www.fincaraiz.com.co/" ui={ui} className="link-arrow exec-ref">
                    Finca Raíz
                  </External>
                </li>
              </ul>
            </div>
            <div className="exec-box">
              <p className="exec-label">{v.execution.label}</p>
              <p className="exec-mid">{v.execution.value}</p>
              <p className="type-body muted">{v.execution.text}</p>
            </div>
          </div>
        </div>
        <div className="exec-box">
          <h3 className="exec-label">{v.collabLabel}</h3>
          <p className="type-body muted">
            {v.collab} {v.portfolioLabel}:{" "}
            <External href={portfolio} ui={ui}>
              {portfolio.replace("https://", "")}
            </External>
          </p>
        </div>
      </div>
    </section>
  );
}

/** Cabecera: identidad y selector de idioma. */
export function Brand({ p }: { p: Presentation }) {
  return (
    <span className="exec-brand">
      <span className="monogram" aria-hidden="true">
        FA
      </span>
      <span>Florencia Acuña</span>
      <span className="exec-role">{p.role}</span>
    </span>
  );
}

/** Pie: identidad y contacto. */
export function Footer({ p, proposal }: { p: Presentation; proposal: Proposal }) {
  const c = proposal.contact;
  return (
    <footer className="footer exec-footer" data-theme="dark">
      <div className="container exec-bar exec-footer__inner">
        <Brand p={p} />
        <ul className="exec-contact">
          <li>
            <a href={c.portfolio} target="_blank" rel="noopener noreferrer">
              {c.portfolio.replace("https://", "")}
            </a>
          </li>
          <li>
            <a href={`mailto:${c.email}`}>{c.email}</a>
          </li>
          <li>
            <a href={`https://wa.me/${c.whatsappDigits}`} target="_blank" rel="noopener noreferrer">
              {c.whatsappDisplay}
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
