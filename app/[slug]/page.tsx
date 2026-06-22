import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Script from "next/script";
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
  return (
    <>
      {/* Google Tag Manager — container próprio desta unidade */}
      <Script id={`gtm-${u.slug}`} strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${u.gtmId}');`}
      </Script>
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${u.gtmId}`}
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
          title="gtm"
        />
      </noscript>
      <LandingPage unidade={u} />
    </>
  );
}
