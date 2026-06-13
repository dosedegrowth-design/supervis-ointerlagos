import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getUnidade, unidadeSlugs } from "@/config/unidades";
import { LandingPage } from "@/components/landing-page";

export const dynamicParams = false;

export function generateStaticParams() {
  return unidadeSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const u = getUnidade(slug);
  if (!u) return {};
  return {
    title: `${u.nomeCompleto} — Vistoria Veicular | Não compre carro com problema escondido`,
    description: `Vistoria cautelar, Certicar, transferência e mais na unidade ${u.nome}. Atendimento rápido e laudo confiável. Chame no WhatsApp e agende agora.`,
    openGraph: {
      title: `${u.nomeCompleto} — Vistoria Veicular`,
      description: `Garanta segurança na compra do seu veículo. Atendimento rápido na unidade ${u.nome}.`,
      type: "website",
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const u = getUnidade(slug);
  if (!u) notFound();
  return <LandingPage unidade={u} />;
}
