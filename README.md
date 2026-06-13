# LP de Vendas — Super Visão Interlagos

Landing page de **conversão** (não institucional) feita para rodar **em anúncios**
(Google/Meta). Objetivo único: gerar contato no **WhatsApp da unidade**, que cai na
IA Soffia e entra no funil Zona Sul.

Template **replicável**: para criar a LP de outra unidade, basta editar
`config/unidade.ts`.

## Stack
- Next.js 15.5.19 (App Router) + Tailwind 3.4 — deploy Vercel
- 100% estático, ~108 kB first load (rápido p/ Quality Score do anúncio)

## Rodar local
```bash
npm install
npm run dev   # http://localhost:3010 (preview do Claude) ou 3000
```

## Estrutura
```
config/unidade.ts        ← DADOS DA UNIDADE (edite aqui p/ replicar)
app/page.tsx             ← seções da LP
app/layout.tsx           ← metadata / SEO
components/sticky-cta.tsx ← barra fixa WhatsApp (mobile) + flutuante (desktop)
components/icons.tsx      ← ícones SVG
public/img/              ← imagens recicladas da página da unidade
referencias/             ← dados brutos extraídos da página institucional
```

## Elementos de conversão
- Barra WhatsApp **fixa no rodapé** (mobile) — sempre visível
- Botão WhatsApp **flutuante** (desktop) com pulso
- Cada CTA usa link `wa.me` com **mensagem pré-preenchida e contextual** por serviço
  (ajuda a Soffia a ler o contexto do lead)
- Header com CTA, hero de dor/promessa, faixa de confiança, FAQ de objeção

## Como replicar para outra unidade
1. Duplicar a pasta.
2. Editar `config/unidade.ts`: nome, `whatsapp`, endereço, horário, `servicos[]`
   (preços), `depoimentos[]`.
3. Trocar imagens em `public/img/` pelas da nova unidade.
4. Deploy.

## Deploy (Vercel)
- Pendente conectar o repo (Lucas).
- Usar **next 15.5.19** (Vercel bloqueia versões vulneráveis).

## Regras de negócio respeitadas
- Nunca usar a palavra "Chatwoot" em texto visível (regra global DDG).
- Escopo correto dos serviços (Certicar não faz elétrica/mecânica/suspensão/freios).
- WhatsApp = mesmo número da página institucional (fluxo Zona Sul / Soffia).
