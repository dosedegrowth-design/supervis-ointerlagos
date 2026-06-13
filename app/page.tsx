import Image from "next/image";
import {
  unidade,
  rede,
  servicos,
  depoimentos,
  faq,
  linkWhatsapp,
} from "@/config/unidade";
import {
  WhatsappIcon,
  CheckIcon,
  PinIcon,
  ClockIcon,
  StarIcon,
  ShieldIcon,
} from "@/components/icons";
import { MobileStickyBar, DesktopFloatCta } from "@/components/sticky-cta";

const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${unidade.mapsQuery}`;

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      {/* ===================== HEADER ===================== */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-navy-900/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <Image
            src="/img/logo.png"
            alt="Super Visão"
            width={150}
            height={40}
            className="h-8 w-auto brightness-0 invert"
            priority
          />
          <a
            href={linkWhatsapp()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-lg bg-zap px-4 py-2 text-sm font-bold text-white transition hover:bg-zap-dark sm:flex"
          >
            <WhatsappIcon className="h-5 w-5" />
            {unidade.whatsappDisplay}
          </a>
        </div>
      </header>

      {/* ===================== HERO ===================== */}
      <section className="relative overflow-hidden bg-navy-900 text-white">
        <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-brand/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-brand-light/20 blur-3xl" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 md:grid-cols-2 md:py-20">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold text-brand-light">
              <ShieldIcon className="h-4 w-4" /> Unidade {unidade.nome} · Zona Sul de SP
            </span>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight md:text-5xl">
              Não compre um carro com{" "}
              <span className="text-brand-light">problema escondido</span>.
            </h1>
            <p className="mt-4 max-w-lg text-lg text-navy-100/90">
              Vistoria veicular completa na {unidade.nomeCompleto}. Descubra batidas
              camufladas, adulterações e pendências <strong>antes</strong> de fechar
              negócio. Atendimento rápido e laudo confiável.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href={linkWhatsapp()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-zap px-6 py-4 text-base font-bold text-white shadow-lg shadow-zap/30 transition hover:bg-zap-dark"
              >
                <WhatsappIcon className="h-6 w-6" />
                Agendar pelo WhatsApp
              </a>
              <a
                href="#servicos"
                className="flex items-center justify-center gap-2 rounded-xl border border-white/20 px-6 py-4 text-base font-semibold text-white transition hover:bg-white/10"
              >
                Ver serviços e preços
              </a>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-navy-100/80">
              <span className="flex items-center gap-2">
                <CheckIcon className="h-4 w-4 text-zap" /> Desde {rede.ano}
              </span>
              <span className="flex items-center gap-2">
                <CheckIcon className="h-4 w-4 text-zap" /> {rede.laudosMes} laudos/mês
              </span>
              <span className="flex items-center gap-2">
                <CheckIcon className="h-4 w-4 text-zap" /> Atendimento na hora
              </span>
            </div>
          </div>

          <div className="animate-fade-up">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
              <Image
                src="/img/unidade.jpg"
                alt={`Unidade ${unidade.nomeCompleto}`}
                width={640}
                height={420}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===================== FAIXA DE CONFIANÇA ===================== */}
      <section className="border-y border-navy-100 bg-navy-50">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-4 py-6 text-center md:grid-cols-4">
          {[
            { n: rede.laudosMes, l: "laudos por mês" },
            { n: `${new Date().getFullYear() - rede.ano}+ anos`, l: "de experiência" },
            { n: "Zona Sul", l: "Av. Interlagos, 2474" },
            { n: "5★", l: "avaliações de clientes" },
          ].map((s) => (
            <div key={s.l}>
              <p className="text-2xl font-extrabold text-brand-dark md:text-3xl">{s.n}</p>
              <p className="text-sm text-navy-700/70">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===================== SERVIÇOS ===================== */}
      <section id="servicos" className="mx-auto max-w-6xl px-4 py-16">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-navy-900 md:text-4xl">
            Serviços e preços da unidade
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-navy-700/70">
            Escolha o serviço ideal e chame no WhatsApp para agendar. Combos saem mais
            em conta.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {servicos.map((s) => (
            <div
              key={s.nome}
              className={`group flex flex-col overflow-hidden rounded-2xl border bg-white transition hover:-translate-y-1 hover:shadow-xl ${
                s.destaque
                  ? "border-brand/40 shadow-lg shadow-brand/5 ring-1 ring-brand/20"
                  : "border-navy-100"
              }`}
            >
              <div className="relative bg-navy-50">
                {s.destaque && (
                  <span className="absolute left-3 top-3 z-10 rounded-full bg-brand px-3 py-1 text-xs font-bold text-white">
                    Mais procurado
                  </span>
                )}
                <Image
                  src={s.imagem}
                  alt={s.nome}
                  width={300}
                  height={300}
                  className="mx-auto h-44 w-44 object-contain p-4"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-base font-bold text-navy-900">{s.nome}</h3>
                <p className="mt-2 flex-1 text-sm text-navy-700/70">{s.descricao}</p>
                <div className="mt-4 flex items-end justify-between">
                  <div>
                    {s.precoDe && (
                      <span className="block text-xs text-navy-700/50 line-through">
                        {s.precoDe}
                      </span>
                    )}
                    <span className="text-xl font-extrabold text-brand-dark">
                      {s.preco}
                    </span>
                  </div>
                  <a
                    href={linkWhatsapp(
                      `Olá! Quero agendar ${s.nome} na unidade ${unidade.nome}.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 rounded-lg bg-zap px-3.5 py-2 text-sm font-bold text-white transition hover:bg-zap-dark"
                  >
                    <WhatsappIcon className="h-4 w-4" /> Agendar
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===================== COMO FUNCIONA ===================== */}
      <section className="bg-navy-900 text-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-center text-3xl font-extrabold md:text-4xl">
            Simples assim, em 3 passos
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                n: "1",
                t: "Chame no WhatsApp",
                d: "Fale com a gente, tire dúvidas e escolha o melhor horário sem complicação.",
              },
              {
                n: "2",
                t: "Leve o veículo",
                d: "Você traz o carro ou a moto até a unidade na Av. Interlagos. Atendimento rápido.",
              },
              {
                n: "3",
                t: "Receba o laudo",
                d: "Nossa equipe faz a análise criteriosa e entrega um laudo confiável pra você decidir com segurança.",
              },
            ].map((p) => (
              <div
                key={p.n}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand text-lg font-extrabold">
                  {p.n}
                </div>
                <h3 className="mt-4 text-lg font-bold">{p.t}</h3>
                <p className="mt-2 text-sm text-navy-100/80">{p.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <a
              href={linkWhatsapp()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-zap px-7 py-4 text-base font-bold text-white shadow-lg shadow-zap/30 transition hover:bg-zap-dark"
            >
              <WhatsappIcon className="h-6 w-6" /> Quero agendar minha vistoria
            </a>
          </div>
        </div>
      </section>

      {/* ===================== POR QUE ===================== */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-center text-3xl font-extrabold text-navy-900 md:text-4xl">
          Por que vistoriar na Super Visão
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            {
              icon: <ShieldIcon className="h-7 w-7" />,
              t: "Evita prejuízo",
              d: "Identificamos batidas camufladas, adulterações e pendências antes da compra.",
            },
            {
              icon: <ClockIcon className="h-7 w-7" />,
              t: "Atendimento rápido",
              d: "Boa parte dos clientes é atendida em poucos minutos. Sem enrolação.",
            },
            {
              icon: <StarIcon className="h-7 w-7" />,
              t: "Confiança da rede",
              d: `Desde ${rede.ano}, com ${rede.laudosMes} laudos por mês em todo o Brasil.`,
            },
          ].map((c) => (
            <div
              key={c.t}
              className="rounded-2xl border border-navy-100 p-6 text-center"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand/10 text-brand">
                {c.icon}
              </div>
              <h3 className="mt-4 text-lg font-bold text-navy-900">{c.t}</h3>
              <p className="mt-2 text-sm text-navy-700/70">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===================== DEPOIMENTOS ===================== */}
      <section className="bg-navy-50">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-center text-3xl font-extrabold text-navy-900 md:text-4xl">
            Quem já vistoriou aprova
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {depoimentos.map((d) => (
              <figure
                key={d.nome}
                className="flex flex-col rounded-2xl border border-navy-100 bg-white p-6 shadow-sm"
              >
                <div className="flex gap-0.5 text-brand">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5" />
                  ))}
                </div>
                <blockquote className="mt-3 flex-1 text-navy-700/80">
                  “{d.texto}”
                </blockquote>
                <figcaption className="mt-4 font-bold text-navy-900">
                  {d.nome}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== FAQ ===================== */}
      <section className="mx-auto max-w-3xl px-4 py-16">
        <h2 className="text-center text-3xl font-extrabold text-navy-900 md:text-4xl">
          Perguntas frequentes
        </h2>
        <div className="mt-8 space-y-3">
          {faq.map((f) => (
            <details
              key={f.q}
              className="group rounded-xl border border-navy-100 bg-white p-5 open:shadow-md"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between font-bold text-navy-900">
                {f.q}
                <span className="ml-4 text-brand transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-navy-700/75">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* ===================== LOCALIZAÇÃO + CTA FINAL ===================== */}
      <section className="bg-navy-900 text-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-extrabold md:text-4xl">
              Estamos te esperando na Zona Sul
            </h2>
            <div className="mt-6 space-y-4 text-navy-100/90">
              <p className="flex items-start gap-3">
                <PinIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-light" />
                <span>
                  {unidade.endereco}
                  <br />
                  {unidade.bairro} · {unidade.cidade}
                </span>
              </p>
              <div className="flex items-start gap-3">
                <ClockIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-light" />
                <ul>
                  {unidade.horario.map((h) => (
                    <li key={h.dia}>
                      <strong>{h.dia}:</strong> {h.hora}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="flex items-center gap-3">
                <WhatsappIcon className="h-5 w-5 shrink-0 text-zap" />
                {unidade.whatsappDisplay}
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={linkWhatsapp()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-zap px-6 py-4 font-bold text-white transition hover:bg-zap-dark"
              >
                <WhatsappIcon className="h-6 w-6" /> Falar no WhatsApp
              </a>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl border border-white/20 px-6 py-4 font-semibold text-white transition hover:bg-white/10"
              >
                <PinIcon className="h-5 w-5" /> Traçar rota
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-white/10">
            <iframe
              title="Mapa da unidade"
              src={`https://www.google.com/maps?q=${unidade.mapsQuery}&output=embed`}
              className="h-full min-h-[280px] w-full"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ===================== RODAPÉ ===================== */}
      <footer className="bg-navy-950 text-navy-100/60">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm md:flex-row">
          <Image
            src="/img/logo.png"
            alt="Super Visão"
            width={130}
            height={34}
            className="h-7 w-auto brightness-0 invert opacity-80"
          />
          <p>
            {unidade.nomeCompleto} · {unidade.endereco} · {unidade.cidade}
          </p>
          <p>© {new Date().getFullYear()} Super Visão</p>
        </div>
      </footer>

      <MobileStickyBar />
      <DesktopFloatCta />
    </main>
  );
}
