import { linkWhatsapp, unidade } from "@/config/unidade";
import { WhatsappIcon } from "./icons";

/** Barra fixa no rodapé (mobile) — sempre visível. */
export function MobileStickyBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-zap-dark/30 bg-white/95 px-3 py-2.5 backdrop-blur md:hidden">
      <a
        href={linkWhatsapp()}
        target="_blank"
        rel="noopener noreferrer"
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-zap py-3.5 text-base font-bold text-white shadow-lg shadow-zap/30 active:scale-[0.98]"
      >
        <WhatsappIcon className="h-6 w-6" />
        Falar no WhatsApp agora
      </a>
    </div>
  );
}

/** Botão flutuante (desktop). */
export function DesktopFloatCta() {
  return (
    <a
      href={linkWhatsapp()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Falar com a ${unidade.nomeCompleto} no WhatsApp`}
      className="animate-pulseZap fixed bottom-6 right-6 z-50 hidden items-center gap-3 rounded-full bg-zap px-5 py-4 font-bold text-white shadow-xl shadow-zap/40 transition hover:bg-zap-dark md:flex"
    >
      <WhatsappIcon className="h-7 w-7" />
      Chamar no WhatsApp
    </a>
  );
}
