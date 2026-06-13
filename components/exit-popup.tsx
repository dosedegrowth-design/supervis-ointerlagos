"use client";

import { useEffect, useState } from "react";
import { linkWhatsapp, unidade } from "@/config/unidade";
import { WhatsappIcon } from "./icons";

const MSG =
  "Olá! Vim pelo anúncio e quero garantir os 10% de desconto na vistoria da unidade Interlagos. 🚗";

export function ExitPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("spv_exit_shown")) return;

    let lastY = window.scrollY;
    let maxY = window.scrollY;
    let cleanedUp = false;
    let armed = false;
    // só permite disparar depois de alguns segundos (nunca abre cedo demais)
    const armTimer = window.setTimeout(() => {
      armed = true;
    }, 4000);

    const fire = () => {
      if (cleanedUp || !armed || sessionStorage.getItem("spv_exit_shown")) return;
      sessionStorage.setItem("spv_exit_shown", "1");
      setOpen(true);
      cleanup();
    };

    // Desktop: mouse sai pelo topo da janela (intenção de fechar a aba)
    const onMouseOut = (e: MouseEvent) => {
      if (e.clientY <= 0 && !e.relatedTarget) fire();
    };
    // Mobile/geral: rolou pra baixo e voltou a subir = intenção de sair
    const onScroll = () => {
      const y = window.scrollY;
      maxY = Math.max(maxY, y);
      if (maxY > 450 && lastY - y > 8) fire();
      lastY = y;
    };
    // Volta pra aba depois de sair (troca de app/aba no celular)
    const onVisibility = () => {
      if (document.visibilityState === "visible") fire();
    };
    // Fallback: tempo de permanência
    const timer = window.setTimeout(fire, 18000);

    function cleanup() {
      cleanedUp = true;
      document.removeEventListener("mouseout", onMouseOut);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("visibilitychange", onVisibility);
      window.clearTimeout(timer);
      window.clearTimeout(armTimer);
    }

    document.addEventListener("mouseout", onMouseOut);
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("visibilitychange", onVisibility);
    return cleanup;
  }, []);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="exit-title"
    >
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={() => setOpen(false)}
      />
      <div className="animate-pop-in relative w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-2xl">
        {/* topo azul */}
        <div className="relative bg-brand px-6 pb-5 pt-7 text-center text-white">
          <div className="absolute right-0 top-0 h-full w-2 bg-red-brand" />
          <p className="font-heading text-sm font-bold uppercase tracking-wider text-gold">
            Espera! Só um instante
          </p>
          <p className="mt-2 font-heading text-2xl font-extrabold leading-tight">
            Garanta{" "}
            <span className="box-decoration-clone bg-red-brand px-2 [-webkit-box-decoration-break:clone] [box-decoration-break:clone]">
              10% de desconto
            </span>
          </p>
        </div>

        <div className="px-6 py-6 text-center">
          <p id="exit-title" className="text-brand/80">
            Antes de sair, fale agora com a unidade <strong>{unidade.nome}</strong>{" "}
            no WhatsApp e use seu cupom de <strong>10% OFF</strong> na sua vistoria.
          </p>

          <a
            href={linkWhatsapp(MSG)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-zap px-6 py-4 text-lg font-bold text-white shadow-lg shadow-zap/30 transition hover:bg-zap-dark"
          >
            <WhatsappIcon className="h-6 w-6" />
            Quero meus 10% de desconto
          </a>

          <button
            onClick={() => setOpen(false)}
            className="mt-3 text-sm font-semibold text-brand/50 underline-offset-2 hover:text-brand hover:underline"
          >
            Não, prefiro pagar o valor cheio
          </button>
        </div>
      </div>
    </div>
  );
}
