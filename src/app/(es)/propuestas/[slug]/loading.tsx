export default function Loading() {
  return (
    <main className="section" data-theme="dark" style={{ minHeight: "100vh" }} aria-busy="true">
      <div className="container">
        <p className="type-caption muted" role="status">
          Cargando la propuesta…
        </p>
      </div>
    </main>
  );
}
