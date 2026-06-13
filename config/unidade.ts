// ============================================================
// CONFIG CENTRAL DA UNIDADE — é só editar este arquivo pra
// replicar a LP pra qualquer outra unidade da rede Super Visão.
// ============================================================

export type Servico = {
  nome: string;
  descricao: string;
  preco: string;
  precoDe?: string; // preço "de" (quando há desconto)
  imagem: string;
  destaque?: boolean; // card em destaque (combos)
};

export const unidade = {
  nome: "Interlagos",
  nomeCompleto: "Super Visão Interlagos",
  // Mesmo link da página institucional (cai na Soffia / fluxo Zona Sul)
  whatsapp: "5511975102145",
  whatsappDisplay: "(11) 97510-2145",
  telefone: "(11) 99953-8083",
  mensagemPadrao:
    "Olá! Vim pelo anúncio e quero saber sobre vistoria veicular na unidade Interlagos.",

  endereco: "Av. Interlagos, 2474",
  bairro: "Interlagos — Zona Sul",
  cidade: "São Paulo / SP",
  mapsQuery: "Super+Visão+Interlagos+Av.+Interlagos+2474+São+Paulo",

  horario: [
    { dia: "Segunda a Sexta", hora: "09:00 às 18:00" },
    { dia: "Sábado", hora: "09:00 às 16:00" },
  ],
} as const;

export const rede = {
  ano: 2005,
  laudosMes: "+80 mil",
  estados: "diversos estados",
} as const;

export function linkWhatsapp(msg: string = unidade.mensagemPadrao): string {
  return `https://wa.me/${unidade.whatsapp}?text=${encodeURIComponent(msg)}`;
}

export const servicos: Servico[] = [
  {
    nome: "Combo Cautelar + Transferência",
    descricao: "Vistoria cautelar completa + laudo de transferência (ECV) num pacote só.",
    preco: "R$ 535,00",
    imagem: "/img/combo-cautelar.jpg",
    destaque: true,
  },
  {
    nome: "Combo Certicar + Transferência",
    descricao: "A vistoria premium Certicar somada ao laudo de transferência.",
    preco: "R$ 615,00",
    imagem: "/img/combo-certicar.jpg",
    destaque: true,
  },
  {
    nome: "Combo Moto + Transferência",
    descricao: "Vistoria de moto + laudo de transferência para regularizar de uma vez.",
    preco: "R$ 395,00",
    imagem: "/img/combo-moto.jpg",
    destaque: true,
  },
  {
    nome: "Vistoria Certicar",
    descricao: "Análise premium: pintura, estrutura, originalidade (motor, chassi, câmbio) e cadastro.",
    preco: "R$ 475,00",
    imagem: "/img/certicar.png",
  },
  {
    nome: "Vistoria Cautelar",
    descricao: "Verificação estrutural, de identificação e cadastro do veículo.",
    preco: "R$ 425,00",
    imagem: "/img/cautelar.png",
  },
  {
    nome: "Laudo de Transferência (ECV)",
    descricao: "Laudo presencial exigido pelo Detran para transferir o veículo.",
    preco: "R$ 211,31",
    imagem: "/img/transferencia.jpg",
  },
  {
    nome: "Vistoria de Moto",
    descricao: "Análise estrutural, de originalidade e documentação da motocicleta.",
    preco: "R$ 240,00",
    imagem: "/img/combo-moto.jpg",
  },
  {
    nome: "Diagnóstico Eletrônico (OBD)",
    descricao: "Leitura eletrônica dos sistemas do veículo.",
    preco: "R$ 320,00",
    precoDe: "R$ 400,00",
    imagem: "/img/certicar.png",
  },
  {
    nome: "Vistoria de Pintura",
    descricao: "Medição de espessura e análise da pintura para detectar repinturas e batidas.",
    preco: "R$ 285,00",
    imagem: "/img/cautelar.png",
  },
  {
    nome: "Vistoria de Infração de Trânsito",
    descricao: "Vistoria técnica voltada a processos de infração.",
    preco: "R$ 220,00",
    imagem: "/img/infracao.png",
  },
];

export const depoimentos = [
  {
    nome: "Priscila Lamarca",
    texto:
      "Experiência excelente. Rápidos, prestativos, atenciosos. Indico mil vezes, além do preço justo.",
  },
  {
    nome: "Marcos",
    texto: "Fui atendido na hora, por volta de 10 min. Muito profissionalismo.",
  },
  {
    nome: "Jose Renato A. Martins",
    texto:
      "Excelentes profissionais! Graças ao processo criterioso evitaram que eu comprasse um carro com uma batida camuflada.",
  },
];

export const faq = [
  {
    q: "O que a vistoria Certicar verifica?",
    a: "Pintura com medição de espessura, estrutura (longarinas, painéis, laterais, teto), originalidade (numeração de motor, chassi, câmbio, vidros e etiquetas), itens acessórios e cadastro (leilão, sinistro, roubo, restrições). É a análise mais completa para quem vai comprar.",
  },
  {
    q: "Qual a diferença entre Cautelar e Certicar?",
    a: "A Cautelar cobre a verificação estrutural, de identificação e cadastro. A Certicar é a versão premium e inclui também a análise de pintura por espessura e a checagem completa de originalidade.",
  },
  {
    q: "O laudo de transferência pode ser feito a distância?",
    a: "Não. O Laudo de Transferência (ECV) é presencial por exigência do Detran. Você traz o veículo até a unidade.",
  },
  {
    q: "Quanto tempo demora a vistoria?",
    a: "O atendimento costuma ser rápido — boa parte dos clientes é atendida em poucos minutos. Chame no WhatsApp para agendar o melhor horário.",
  },
];
