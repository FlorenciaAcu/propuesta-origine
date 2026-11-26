import type { Metadata } from "next";
import { ProposalPage, proposalMetadata, proposalStaticParams } from "@/components/proposal/ProposalPage";

type Params = { slug: string };

export const generateStaticParams = proposalStaticParams;

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  return proposalMetadata(slug, "es");
}

export default async function Page({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  return <ProposalPage slug={slug} locale="es" />;
}
