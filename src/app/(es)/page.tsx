import { proposalPath } from "@/i18n/config";
import { listSlugs } from "@/lib/proposals";

/** La raíz lleva directamente a la propuesta en español. */
export default function Home() {
  const target = proposalPath("es", listSlugs()[0]);
  return (
    <>
      <meta httpEquiv="refresh" content={`0; url=${target}`} />
      <main style={{ padding: 32 }}>
        <a href={target}>Ver la propuesta</a>
      </main>
    </>
  );
}
