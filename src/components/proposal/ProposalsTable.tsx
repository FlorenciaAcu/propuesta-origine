import { ChartColumn, Check, ClipboardList, Home, Info } from "lucide-react";
import { formatUsd } from "@/i18n/config";
import type { Ui } from "@/i18n/ui";
import type { Presentation } from "@/data/proposals/origine-relocation.presentation";
import type { Proposal } from "@/types/proposal";

/** 01 · Propuestas: tabla comparativa única. */
export function ProposalsTable({ p, proposal, ui }: { p: Presentation; proposal: Proposal; ui: Ui }) {
  const { plans } = proposal;
  const L = ui.locale;
  const t = p.table;

  return (
    <section id="propuestas" className="section exec" aria-labelledby="t-propuestas">
      <div className="container exec-sheet">
        <header className="exec-head">
          <h2 id="t-propuestas" className="type-h2">
            {t.title}
          </h2>
          <p className="type-s1 muted">{t.lead}</p>
        </header>
        <div className="table-wrap" tabIndex={0} role="region" aria-label={t.title}>
          <table className="exec-table">
            <caption className="sr-only">{t.title}</caption>
            <thead>
              <tr>
                <th scope="col" className="exec-table__corner">
                  <span className="exec-label">{t.cornerLabel}</span>
                  <span className="type-body muted">{t.cornerText}</span>
                </th>
                {plans.map((plan) => (
                  <th key={plan.id} scope="col" className="exec-table__plan">
                    <span className="exec-table__name">{plan.name}</span>
                    <span className="exec-table__price">{formatUsd(plan.price, L)}</span>
                    <span className="exec-table__summary">{t.summaries[plan.id]}</span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {t.rows.map((r) => (
                <tr key={r.label}>
                  <th scope="row">{r.label}</th>
                  {plans.map((plan) => {
                    const v = r.values[plan.id];
                    return (
                      <td key={plan.id}>
                        {/^(Incluid[oa]s?|Included)$/.test(v) ? (
                          <>
                            <span className="exec-check" aria-hidden="true">
                              <Check size={14} strokeWidth={2.5} />
                            </span>
                            <span className="sr-only">{v}</span>
                          </>
                        ) : v === "—" ? (
                          <>
                            <span aria-hidden="true">—</span>
                            <span className="sr-only">{ui.compare.notIncluded}</span>
                          </>
                        ) : (
                          v
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="exec-split2 exec-table-notes">
          {t.notes.map((n) => (
            <div key={n.title} className="exec-box exec-box--icon">
              <span className="exec-icon exec-icon--dark" aria-hidden="true">
                <Info size={18} strokeWidth={1.75} />
              </span>
              <h3 className="exec-strong">{n.title}</h3>
              <p className="type-body muted">{n.text}</p>
            </div>
          ))}
        </div>

        <div className="exec-box exec-common">
          <h3 className="exec-label">{t.deliverablesLabel}</h3>
          <p className="exec-autonomy">
            <span className="exec-check" aria-hidden="true">
              <Check size={14} strokeWidth={2.5} />
            </span>
            {t.deliverablesIntro}
          </p>
          <ul className="exec-common__grid">
            {t.deliverables.map((c) => (
              <li key={c.title}>
                <span className="exec-check" aria-hidden="true">
                  <Check size={14} strokeWidth={2.5} />
                </span>
                <div>
                  <p className="exec-strong">{c.title}</p>
                  <p className="type-body muted">{c.text}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="exec-common__guide">
            <span className="exec-icon" aria-hidden="true">
              <ChartColumn size={20} strokeWidth={1.75} />
            </span>
            <div>
              <p className="exec-strong">{t.measurement.title}</p>
              <p className="type-body muted">{t.measurement.text}</p>
              <p className="type-caption muted">{t.measurement.tools}</p>
              <p className="type-caption muted">{t.measurement.scope}</p>
            </div>
          </div>
          <div className="exec-common__brief">
            {[
              { item: t.listing, Icon: Home },
              { item: t.forms, Icon: ClipboardList },
            ].map(({ item, Icon }) => (
              <div key={item.title}>
                <span className="exec-icon exec-icon--dark" aria-hidden="true">
                  <Icon size={18} strokeWidth={1.75} />
                </span>
                <div>
                  <p className="exec-strong">{item.title}</p>
                  <p className="type-body muted">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
