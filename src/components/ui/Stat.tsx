interface Props {
  label: string;
  value: string;
  hint?: string;
}

export function Stat({ label, value, hint }: Props) {
  return (
    <div className="stat">
      <p className="type-eyebrow">{label}</p>
      <p className="stat__value">{value}</p>
      {hint ? <p className="type-caption stat__hint">{hint}</p> : null}
    </div>
  );
}
