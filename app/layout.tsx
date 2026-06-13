import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { unidade } from "@/config/unidade";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: `${unidade.nomeCompleto} — Vistoria Veicular | Não compre carro com problema escondido`,
  description:
    "Vistoria cautelar, Certicar, transferência e mais na unidade Interlagos. Atendimento rápido e laudo confiável. Chame no WhatsApp e agende agora.",
  robots: { index: true, follow: true },
  openGraph: {
    title: `${unidade.nomeCompleto} — Vistoria Veicular`,
    description:
      "Garanta segurança na compra do seu veículo. Atendimento rápido na Zona Sul de SP.",
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
    <html lang="pt-BR" className={inter.variable}>
      <body className="bg-white text-navy-900 antialiased">{children}</body>
    </html>
  );
}
