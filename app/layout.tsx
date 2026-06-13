import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { unidade } from "@/config/unidade";

// fontes auto-hospedadas (variable) — não dependem de rede no build
const lexend = localFont({
  src: "./fonts/lexend.woff2",
  weight: "400 800",
  variable: "--font-lexend",
  display: "swap",
});
const jost = localFont({
  src: "./fonts/jost.woff2",
  weight: "400 700",
  variable: "--font-jost",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${unidade.nomeCompleto} — Vistoria Veicular | Não compre carro com problema escondido`,
  description:
    "Vistoria cautelar, Certicar, transferência e mais na unidade Interlagos. Atendimento rápido e laudo confiável. Chame no WhatsApp e agende agora.",
  robots: { index: true, follow: true },
  openGraph: {
    title: `${unidade.nomeCompleto} — Vistoria Veicular`,
    description:
      "Garanta segurança na compra do seu veículo. Atendimento rápido na unidade Interlagos, São Paulo.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#06182e",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${lexend.variable} ${jost.variable}`}>
      <body className="bg-white font-sans text-brand antialiased">{children}</body>
    </html>
  );
}
