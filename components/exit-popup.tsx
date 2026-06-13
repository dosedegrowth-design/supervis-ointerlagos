"use client";

import { useEffect, useState } from "react";
import { type Unidade, linkWhatsapp } from "@/config/unidades";
import { WhatsappIcon } from "./icons";

export function ExitPopup({ unidade }: { unidade: Unidade }) {
  const [open, setOpen] = useState(false);

  const MSG = `Olá! Vim pelo anúncio e quero garantir os 10% de desconto na vistoria da unidade ${unidade.nome}. 🚗`;

  useEffect(() => {
    if (sessionStorage.getItem("spv_exit_shown")) return;

    let lastY = window.scrollY;
    let maxY = window.scrollY;
    let cleanedUp = false;
    let armed = false;
    const armTimer = window.setTimeout(() => {
      armed = true;
    }, 4000);

    const fire = () => {
      if (cleanedUp || !armed || sessionStorage.getItem("spv_exit_shown")) return;
      sessionStorage.setItem("spv_exit_shown", "1");
      setOpen(true);
      cleanup();
    };

    const onMouseOut = (e: MouseEvent) => {
      if (e.clientY <= 0 && !e.relatedTarget) fire();
    };
    const onScroll = () => {
      const y = window.scrollY;
      maxY = Math.max(maxY, y);
      if (maxY > 450 && lastY - y > 8) fire();
      lastY = y;
    };
    const onVisibility = () => {
      if (document.visibilityState === "visible") fire();
    };
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
      <div className="animate-pop-in relative w-full max-w-sm overflow-hidden rounded-2xl bg-white text-center shadow-2xl">
        <button
          onClick={() => setOpen(false)}
          aria-label="Fechar"
          className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white transition hover:bg-white/40"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>

        <div className="bg-brand px-6 pb-5 pt-6 text-white">
          <p className="font-heading text-xs font-bold uppercase tracking-wider text-gold">
            Espera! 👀
          </p>
          <p className="mt-1.5 font-heading text-2xl font-extrabold leading-tight">
            Ganhe{" "}
            <span className="box-decoration-clone bg-red-brand px-1.5 [-webkit-box-decoration-break:clone] [box-decoration-break:clone]">
              10% OFF
            </span>
          </p>
        </div>

        <div className="px-6 py-5">
          <p id="exit-title" className="text-sm text-brand/75">
            Fale agora no WhatsApp e garanta <strong>10% de desconto</strong> na
            sua vistoria na unidade {unidade.nome}.
          </p>

          <a
            href={linkWhatsapp(unidade, MSG)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-zap px-5 py-3 font-bold text-white shadow-lg shadow-zap/30 transition hover:bg-zap-dark"
          >
            <WhatsappIcon className="h-5 w-5" />
            Quero meu desconto
          </a>

          <button
            onClick={() => setOpen(false)}
            className="mt-2.5 text-xs font-semibold text-brand/45 hover:text-brand/70"
          >
            Agora não, obrigado
          </button>
        </div>
      </div>
    </div>
  );
}
