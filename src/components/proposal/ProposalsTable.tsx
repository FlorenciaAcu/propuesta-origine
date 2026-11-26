import { Check } from "lucide-react";
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
        <div className="exec-box exec-common">
          <h3 className="exec-label">{t.commonLabel}</h3>
          <ul className="exec-common__list">
            {t.common.map((c) => (
              <li key={c}>
                <Check size={15} aria-hidden="true" />
                {c}
              </li>
            ))}
          </ul>
          <div className="exec-common__notes">
            {t.notes.map((n) => (
              <p key={n} className="type-caption muted">
                {n}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
