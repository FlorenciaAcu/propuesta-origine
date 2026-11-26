import type { ReactNode } from "react";

interface Props {
  eyebrow?: string;
  title: string;
  intro?: ReactNode;
  id?: string;
  level?: 1 | 2;
}

export function SectionHeader({ eyebrow, title, intro, id, level = 2 }: Props) {
  const Heading = level === 1 ? "h1" : "h2";
  return (
    <header className="section__head">
      {eyebrow ? <p className="type-eyebrow">{eyebrow}</p> : null}
      <Heading id={id} className="type-h1 reading">
        {title}
      </Heading>
      {intro ? <div className="type-s1">{intro}</div> : null}
    </header>
  );
}
