import { en } from "@/i18n/ui.en";

export default function NotFound() {
  return (
    <main className="section" style={{ minHeight: "100vh" }}>
      <div className="container narrow">
        <p className="type-eyebrow">{en.notFound.eyebrow}</p>
        <h1 className="type-h1" style={{ marginTop: 16 }}>
          {en.notFound.title}
        </h1>
        <p className="type-body muted" style={{ marginTop: 16 }}>
          {en.notFound.body}
        </p>
      </div>
    </main>
  );
}
