import { linkWhatsapp, unidade } from "@/config/unidade";
import { WhatsappIcon, PhoneIcon } from "./icons";

/** Barra fixa no rodapé (mobile): WhatsApp principal + botão azul de ligar. */
export function MobileStickyBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 flex items-center gap-2.5 border-t border-black/5 bg-white/95 px-3 py-2.5 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] backdrop-blur md:hidden">
      <a
        href={linkWhatsapp(
          "Olá! Vim pelo anúncio e quero atendimento na unidade Interlagos."
        )}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-zap py-3.5 text-base font-bold text-white shadow-lg shadow-zap/30 active:scale-[0.98]"
      >
        <WhatsappIcon className="h-6 w-6" />
        Falar no WhatsApp
      </a>
      <a
        href={`tel:${unidade.telefoneLink}`}
        aria-label="Ligar para a unidade"
        className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full bg-brand text-white shadow-lg shadow-brand/30 active:scale-95"
      >
        <PhoneIcon className="h-6 w-6" />
      </a>
    </div>
  );
}

/** Botões flutuantes (desktop): WhatsApp + ligar. */
export function DesktopFloatCta() {
  return (
    <div className="fixed bottom-6 right-6 z-50 hidden flex-col items-end gap-3 md:flex">
      <a
        href={`tel:${unidade.telefoneLink}`}
        aria-label="Ligar para a unidade"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-brand text-white shadow-xl shadow-brand/30 transition hover:bg-brand-dark"
      >
        <PhoneIcon className="h-6 w-6" />
      </a>
      <a
        href={linkWhatsapp(
          "Olá! Vim pelo anúncio e quero falar com a unidade Interlagos."
        )}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Falar com a ${unidade.nomeCompleto} no WhatsApp`}
        className="animate-pulseZap flex items-center gap-3 rounded-full bg-zap px-5 py-4 font-bold text-white shadow-xl shadow-zap/40 transition hover:scale-105 hover:bg-zap-dark"
      >
        <WhatsappIcon className="h-7 w-7" />
        Chamar no WhatsApp
      </a>
    </div>
  );
}
