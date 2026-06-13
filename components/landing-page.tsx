import Image from "next/image";
import {
  type Unidade,
  rede,
  SERVICOS,
  DEPOIMENTOS,
  FAQ,
  sobreUnidade,
  linkWhatsapp,
} from "@/config/unidades";
import {
  WhatsappIcon,
  PhoneIcon,
  CheckIcon,
  PinIcon,
  ClockIcon,
  StarIcon,
  ShieldIcon,
} from "@/components/icons";
import { MobileStickyBar, DesktopFloatCta } from "@/components/sticky-cta";
import { Reveal } from "@/components/reveal";
import { ExitPopup } from "@/components/exit-popup";

function SectionHead({
  eyebrow,
  title,
  sub,
  light = false,
}: {
  eyebrow: string;
  title: string;
  sub?: string;
  light?: boolean;
}) {
  return (
    <div className="text-center">
      <p
        className={`font-heading text-sm font-bold uppercase tracking-wider ${
          light ? "text-gold" : "text-red-brand"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-2 font-heading text-3xl font-extrabold md:text-4xl ${
          light ? "text-white" : "text-brand"
        }`}
      >
        {title}
      </h2>
      {sub && (
        <p
          className={`mx-auto mt-3 max-w-2xl ${
            light ? "text-white/75" : "text-brand/70"
          }`}
        >
          {sub}
        </p>
      )}
    </div>
  );
}

export function LandingPage({ unidade }: { unidade: Unidade }) {
  const { lat, lng } = unidade.coords;
  const mapaEmbed = `https://www.openstreetmap.org/export/embed.html?bbox=${
    lng - 0.006
  }%2C${lat - 0.004}%2C${lng + 0.006}%2C${lat + 0.004}&layer=mapnik&marker=${lat}%2C${lng}`;
  const mapaRota = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    unidade.enderecoMaps
  )}`;
  const sobre = sobreUnidade(unidade.nomeCompleto);

  return (
    <main className="overflow-x-hidden">
      {/* ===================== HERO ===================== */}
      <section className="relative isolate overflow-hidden bg-brand-dark text-white">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand to-brand-dark" />
        <Image
          src="/img/fundo-azul.webp"
          alt=""
          fill
          className="-z-10 object-cover opacity-25"
          priority
        />
        <div className="absolute right-0 top-0 -z-10 h-full w-2 bg-red-brand md:w-3" />

        <div className="relative mx-auto max-w-6xl px-4 pb-12 pt-8 md:pb-16 md:pt-10">
          <Image
            src="/img/logo.png"
            alt="Super Visão"
            width={170}
            height={44}
            className="h-9 w-auto brightness-0 invert md:h-10"
            priority
          />

          <div className="mt-8 grid items-center gap-10 md:mt-10 md:grid-cols-[1.05fr_0.95fr]">
            <div className="animate-fade-up text-center md:text-left">
              <span className="inline-flex items-center gap-2 rounded-full bg-red-brand px-3 py-1 text-xs font-bold uppercase tracking-wide text-white shadow-lg shadow-red-brand/30">
                <PinIcon className="h-4 w-4" /> Unidade {unidade.nome} · São Paulo
              </span>
              <h1 className="mt-5 font-heading text-4xl font-extrabold leading-[1.12] md:text-[3.3rem] md:leading-[1.08]">
                Não compre carro com{" "}
                <span className="box-decoration-clone bg-red-brand px-2 leading-tight [-webkit-box-decoration-break:clone] [box-decoration-break:clone]">
                  problema escondido
                </span>
              </h1>
              <p className="mx-auto mt-5 max-w-lg text-lg text-white/85 md:mx-0">
                Vistoria veicular completa em {unidade.nome}. A gente revela{" "}
                <strong className="text-white">batidas camufladas, adulterações e pendências</strong>{" "}
                antes de você fechar negócio.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center md:justify-start">
                <a
                  href={linkWhatsapp(
                    unidade,
                    `Olá! Vim pelo anúncio e quero agendar uma vistoria na unidade ${unidade.nome}.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="animate-pulseZap flex items-center justify-center gap-2 rounded-xl bg-zap px-7 py-4 text-lg font-bold text-white transition hover:scale-[1.03] hover:bg-zap-dark"
                >
                  <WhatsappIcon className="h-6 w-6" />
                  Agendar agora
                </a>
                <a
                  href={`tel:${unidade.telefoneLink}`}
                  className="flex items-center justify-center gap-2 rounded-xl bg-white/10 px-6 py-4 font-semibold text-white ring-1 ring-white/25 transition hover:bg-white/20"
                >
                  <PhoneIcon className="h-5 w-5" /> Ligar
                </a>
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm md:justify-start">
                <span className="flex items-center gap-1.5 font-semibold">
                  <span className="flex text-gold">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <StarIcon key={i} className="h-4 w-4" />
                    ))}
                  </span>
                  Clientes nota 5
                </span>
                <span className="flex items-center gap-1.5 text-white/80">
                  <CheckIcon className="h-4 w-4 text-zap" /> {rede.laudosMes} laudos/mês
                </span>
                <span className="flex items-center gap-1.5 text-white/80">
                  <CheckIcon className="h-4 w-4 text-zap" /> Desde {rede.ano}
                </span>
              </div>
            </div>

            <div className="relative animate-fade-up [animation-delay:150ms]">
              <div className="overflow-hidden rounded-2xl border-4 border-white shadow-2xl">
                <Image
                  src={unidade.foto}
                  alt={`Unidade ${unidade.nomeCompleto}`}
                  width={640}
                  height={440}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-4 left-4 flex animate-bounce-soft items-center gap-2.5 rounded-xl bg-white px-4 py-3 shadow-xl md:-left-4">
                <WhatsappIcon className="h-7 w-7 shrink-0 text-zap" />
                <div className="text-left leading-tight">
                  <p className="font-heading text-lg font-extrabold text-brand">
                    Agende em 5 min
                  </p>
                  <p className="text-xs font-semibold text-brand/60">
                    direto no WhatsApp
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== NÚMEROS DA REDE ===================== */}
      <section className="border-b border-black/5 bg-white py-8">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-x-12 gap-y-4 px-4">
          <Image
            src="/img/numeros.png"
            alt="Super Visão em números: +200 lojas, +90 mil laudos mensais, +22 estados"
            width={1024}
            height={238}
            className="h-auto w-full max-w-md"
          />
          <div className="flex items-center gap-5">
            <Image src="/img/selos-abf.png" alt="Selo ABF de excelência em franchising" width={120} height={60} className="h-12 w-auto object-contain" />
            <Image src="/img/selos-pegn.png" alt="Selo PEGN melhores franquias" width={120} height={60} className="h-12 w-auto object-contain" />
          </div>
        </div>
      </section>

      {/* ===================== SERVIÇOS ===================== */}
      <section id="servicos" className="bg-[#f5f5f5] py-16">
        <div className="mx-auto max-w-6xl px-4">
          <Reveal>
            <SectionHead
              eyebrow="Serviços Super Visão"
              title="Vistorias para você"
              sub="Escolha o serviço ideal e fale com a gente no WhatsApp para agendar. Os combos saem mais em conta."
            />
          </Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICOS.map((s, i) => (
              <Reveal key={s.nome} delay={(i % 3) * 90} className="h-full">
                <div className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-black/5 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <div className="absolute left-0 top-0 z-10 h-0 w-0 border-l-[36px] border-t-[36px] border-l-transparent border-t-red-brand" />
                  <div className="relative overflow-hidden border-b border-black/5 bg-white">
                    {s.destaque && (
                      <span className="absolute right-3 top-3 z-10 rounded-md bg-brand px-2.5 py-1 text-xs font-bold text-white">
                        Mais procurado
                      </span>
                    )}
                    <Image
                      src={s.imagem}
                      alt={s.nome}
                      width={300}
                      height={300}
                      className="mx-auto h-44 w-44 object-contain p-3 transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5 text-center md:text-left">
                    <h3 className="font-heading text-base font-bold text-brand">
                      {s.nome}
                    </h3>
                    <p className="mt-2 flex-1 text-sm text-brand/65">{s.descricao}</p>
                    <div className="mt-4 flex flex-col items-center gap-3 md:flex-row md:items-end md:justify-between">
                      <div>
                        {s.precoDe && (
                          <span className="block text-xs text-brand/40 line-through">
                            {s.precoDe}
                          </span>
                        )}
                        <span className="font-heading text-2xl font-extrabold text-brand md:text-xl">
                          {s.preco}
                        </span>
                      </div>
                      <a
                        href={linkWhatsapp(
                          unidade,
                          `Olá! Quero agendar ${s.nome} na unidade ${unidade.nome}.`
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex w-full items-center justify-center gap-1.5 rounded-lg bg-zap px-3.5 py-2.5 text-sm font-bold text-white transition hover:bg-zap-dark active:scale-95 md:w-auto md:py-2"
                      >
                        <WhatsappIcon className="h-4 w-4" /> Agendar
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== SOBRE A UNIDADE ===================== */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-4">
          <SectionHead
            eyebrow="Sobre a unidade"
            title="Veja os detalhes da unidade"
            sub={`Aqui na ${unidade.nomeCompleto} você encontra soluções completas em vistoria veicular. Entre em contato e conheça nossas soluções.`}
          />
          <div className="mt-10 grid gap-x-10 gap-y-8 md:grid-cols-2">
            {sobre.map((b, i) => (
              <Reveal key={b.titulo} delay={(i % 2) * 100} className="text-center md:text-left">
                <h3 className="flex items-center justify-center gap-2 font-heading text-lg font-bold text-brand md:justify-start">
                  <span className="h-5 w-1 rounded bg-red-brand" />
                  {b.titulo}
                </h3>
                <p className="mt-2 text-brand/70">{b.texto}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== COMO FUNCIONA ===================== */}
      <section className="bg-[#f5f5f5] py-16">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow="Como funciona" title="Simples assim, em 3 passos" />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                n: "1",
                t: "Chame no WhatsApp",
                d: "Fale com a gente, tire dúvidas e escolha o melhor horário, sem complicação.",
              },
              {
                n: "2",
                t: "Leve o veículo",
                d: `Você traz o carro ou a moto até a unidade na ${unidade.endereco}. Atendimento rápido.`,
              },
              {
                n: "3",
                t: "Receba o laudo",
                d: "Fazemos a análise criteriosa e entregamos um laudo confiável pra você decidir com segurança.",
              },
            ].map((p, i) => (
              <Reveal key={p.n} delay={i * 130} className="h-full">
                <div className="relative h-full rounded-xl border border-black/5 bg-white p-6 text-center transition duration-300 hover:-translate-y-1 hover:shadow-lg md:text-left">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand font-heading text-xl font-extrabold text-white shadow-lg shadow-brand/20 md:mx-0">
                    {p.n}
                  </div>
                  <h3 className="mt-4 font-heading text-lg font-bold text-brand">
                    {p.t}
                  </h3>
                  <p className="mt-2 text-sm text-brand/65">{p.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <a
              href={linkWhatsapp(
                unidade,
                `Olá! Acabei de ver a página da unidade ${unidade.nome} e quero agendar minha vistoria.`
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-zap px-7 py-4 text-base font-bold text-white shadow-lg shadow-zap/30 transition hover:scale-[1.02] hover:bg-zap-dark"
            >
              <WhatsappIcon className="h-6 w-6" /> Quero agendar minha vistoria
            </a>
          </div>
        </div>
      </section>

      {/* ===================== POR QUE ===================== */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead
            eyebrow="Por que a Super Visão"
            title="Vistorie com quem entende"
          />
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
            ].map((c, i) => (
              <Reveal key={c.t} delay={i * 130} className="h-full">
                <div className="group h-full rounded-xl border border-black/5 bg-[#f9f9f9] p-6 text-center transition duration-300 hover:-translate-y-1 hover:border-red-brand/20 hover:shadow-lg">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand/10 text-brand transition group-hover:bg-red-brand group-hover:text-white">
                    {c.icon}
                  </div>
                  <h3 className="mt-4 font-heading text-lg font-bold text-brand">
                    {c.t}
                  </h3>
                  <p className="mt-2 text-sm text-brand/65">{c.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== DEPOIMENTOS ===================== */}
      <section className="bg-brand py-16">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead
            eyebrow="Depoimentos"
            title="Veja o que dizem nossos clientes"
            light
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {DEPOIMENTOS.map((d, idx) => (
              <Reveal key={d.nome} delay={idx * 130} className="h-full">
                <figure className="flex h-full flex-col rounded-xl bg-white p-6 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
                  <figcaption className="font-heading font-bold text-brand">
                    {d.nome}
                  </figcaption>
                  <div className="mt-1 flex gap-0.5 text-gold">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <StarIcon key={i} className="h-5 w-5" />
                    ))}
                  </div>
                  <blockquote className="mt-3 flex-1 text-sm text-brand/75">
                    “{d.texto}”
                  </blockquote>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== FAQ ===================== */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-4">
          <SectionHead eyebrow="Dúvidas" title="Perguntas frequentes" />
          <div className="mt-8 space-y-3">
            {FAQ.map((f, i) => (
              <Reveal key={f.q} delay={i * 70}>
                <details className="group rounded-lg border border-black/10 bg-[#f9f9f9] p-5 transition open:bg-white open:shadow-md hover:border-red-brand/30">
                  <summary className="flex cursor-pointer list-none items-center justify-between font-heading font-bold text-brand">
                    {f.q}
                    <span className="ml-4 text-2xl leading-none text-red-brand transition-transform duration-300 group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-brand/70">{f.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== LOCALIZAÇÃO ===================== */}
      <section className="bg-[#f5f5f5] py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-2">
          <Reveal className="text-center md:text-left">
            <p className="font-heading text-sm font-bold uppercase tracking-wider text-red-brand">
              Onde estamos
            </p>
            <h2 className="mt-2 font-heading text-3xl font-extrabold text-brand md:text-4xl">
              Estamos te esperando em {unidade.nome}
            </h2>
            <div className="mt-6 space-y-4 text-brand/85">
              <p className="flex items-start justify-center gap-3 md:justify-start">
                <PinIcon className="mt-0.5 h-5 w-5 shrink-0 text-red-brand" />
                <span>
                  {unidade.endereco}
                  <br />
                  {unidade.bairro} · {unidade.cidade}
                </span>
              </p>
              <div className="flex items-start justify-center gap-3 md:justify-start">
                <ClockIcon className="mt-0.5 h-5 w-5 shrink-0 text-red-brand" />
                <ul>
                  {unidade.horario.map((h) => (
                    <li key={h.dia}>
                      <strong>{h.dia}:</strong> {h.hora}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="flex items-center justify-center gap-3 md:justify-start">
                <PhoneIcon className="h-5 w-5 shrink-0 text-red-brand" />
                {unidade.telefone}
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={linkWhatsapp(
                  unidade,
                  `Olá! Quero confirmar o endereço e o horário da unidade ${unidade.nome} para agendar minha vistoria.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-lg bg-zap px-6 py-3.5 font-bold text-white transition hover:scale-[1.02] hover:bg-zap-dark"
              >
                <WhatsappIcon className="h-6 w-6" /> Falar no WhatsApp
              </a>
              <a
                href={mapaRota}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-lg border border-brand/20 bg-white px-6 py-3.5 font-semibold text-brand transition hover:bg-brand hover:text-white"
              >
                <PinIcon className="h-5 w-5" /> Traçar rota
              </a>
            </div>
          </Reveal>

          <div className="overflow-hidden rounded-xl border border-black/10 shadow-sm">
            <iframe
              title={`Mapa da unidade ${unidade.nomeCompleto}`}
              src={mapaEmbed}
              className="h-full min-h-[300px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* ===================== RODAPÉ ===================== */}
      <footer className="bg-brand-dark py-8 text-white/60">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-sm md:flex-row">
          <Image
            src="/img/logo.png"
            alt="Super Visão"
            width={130}
            height={34}
            className="h-7 w-auto brightness-0 invert opacity-80"
          />
          <p className="text-center">
            {unidade.nomeCompleto} · {unidade.endereco} · {unidade.cidade}
          </p>
          <p>© {new Date().getFullYear()} Super Visão</p>
        </div>
      </footer>

      <MobileStickyBar unidade={unidade} />
      <DesktopFloatCta unidade={unidade} />
      <ExitPopup unidade={unidade} />
    </main>
  );
}
