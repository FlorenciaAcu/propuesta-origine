import { es } from "@/i18n/ui.es";

export default function NotFound() {
  return (
    <main className="section" style={{ minHeight: "100vh" }}>
      <div className="container narrow">
        <p className="type-eyebrow">{es.notFound.eyebrow}</p>
        <h1 className="type-h1" style={{ marginTop: 16 }}>
          {es.notFound.title}
        </h1>
        <p className="type-body muted" style={{ marginTop: 16 }}>
          {es.notFound.body}
        </p>
      </div>
    </main>
  );
}
