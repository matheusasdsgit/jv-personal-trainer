/**
 * ============================================================
 *  CONFIGURAÇÃO CENTRAL — JV Personal Trainer.
 * ============================================================
 *  Todos os dados comerciais ficam aqui: contatos, preços, links,
 *  caminhos de imagens e flags de publicação.
 *  Para alterar um preço, telefone ou URL, edite SOMENTE este arquivo.
 */

export const brand = {
  name: 'JV Personal Trainer',
  city: 'João Pessoa, PB',
  cityFull: 'João Pessoa, Paraíba',
} as const;

export const contact = {
  /** Formato internacional: país (55) + DDD (83) + número */
  whatsappNumber: '5583987680610',
  whatsappDisplay: '(83) 98768-0610',
  instagramUrl: 'https://www.instagram.com/jvpersonaltrainerr/',
  instagramHandle: '@jvpersonaltrainerr',
  email: 'jvtreinamentofisico@gmail.com',
} as const;

export const links = {
  hotmartCourse:
    'https://hotmart.com/pt-br/marketplace/produtos/jvtreinamentofisico/M93405622W',
} as const;

/** Monta o link do WhatsApp com mensagem pré-preenchida e codificada. */
export function whatsappLink(message: string): string {
  return `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const whatsappMessages = {
  general:
    'Olá, João Victor! Vim pelo site e gostaria de conhecer as opções de treinamento.',
  bronze:
    'Olá, João Victor! Tenho interesse no plano Bronze da consultoria Musculação sem Medo. Gostaria de saber mais sobre o funcionamento e a contratação.',
  prata:
    'Olá, João Victor! Tenho interesse no plano Prata da consultoria Musculação sem Medo. Gostaria de saber mais sobre o funcionamento e a contratação.',
  ouro: 'Olá, João Victor! Tenho interesse no plano Ouro da consultoria Musculação sem Medo. Gostaria de saber mais sobre o funcionamento e a contratação.',
  presencial:
    'Olá, João Victor! Gostaria de consultar a disponibilidade para treinamento presencial em João Pessoa.',
} as const;

/** Navegação principal (âncoras). */
export const navItems = [
  { label: 'Início', href: '#inicio' },
  { label: 'Consultoria', href: '#consultoria' },
  { label: 'Curso de Corrida', href: '#curso' },
  { label: 'Presencial', href: '#presencial' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Contato', href: '#contato' },
] as const;

/**
 * IMAGENS — para trocar, coloque o arquivo na pasta indicada e
 * informe o caminho aqui, SEM barra no início (ex.: 'images/hero/joao-hero.jpg').
 * Enquanto o valor for '' (vazio), o site mostra uma composição
 * gráfica provisória no lugar da foto/logo.
 */
export const images = {
  /** public/images/brand/ — logo oficial para fundos claros e escuros */
  logoMark: 'images/brand/logo-simbolo.png',
  logoLight: '', // ex.: 'images/brand/logo-fundo-claro.svg'
  logoDark: '', // ex.: 'images/brand/logo-fundo-escuro.svg'
  /** public/images/hero/ — foto de destaque do hero (recomendado vertical, ~900x1100) */
  hero: '',
  heroAlt: 'João Victor, personal trainer, em treino',
  heroWidth: 900,
  heroHeight: 1100,
  /** public/images/about/ — foto do profissional na seção Sobre */
  about: 'images/about/joao-victor.webp',
  aboutAlt: 'João Victor, profissional de Educação Física, sorrindo de braços cruzados na academia',
  aboutWidth: 848,
  aboutHeight: 1060,
  /** public/images/training/ — fotos das seções de serviços */
  course: 'images/training/corrida-com-aluna.webp',
  courseAlt: 'João Victor correndo ao lado de uma aluna, os dois sorrindo',
  courseWidth: 853,
  courseHeight: 1280,
  consulting: 'images/training/execucao-exercicio.webp',
  consultingAlt: 'João Victor executando um exercício com halter na academia',
  consultingWidth: 1000,
  consultingHeight: 1192,
  inperson: 'images/training/atendimento-presencial.webp',
  inpersonAlt: 'João Victor medindo a circunferência da perna de um aluno durante uma avaliação presencial',
  inpersonWidth: 919,
  inpersonHeight: 1149,
} as const;

/** Flags de publicação. */
export const flags = {
  /** Só ative quando houver depoimentos REAIS e autorizados em `testimonials`. */
  showTestimonials: false,
} as const;

export interface Testimonial {
  name: string;
  text: string;
  /** Caminho opcional de foto autorizada */
  photo?: string;
}

/** Preencha apenas com depoimentos reais e autorizados. */
export const testimonials: Testimonial[] = [];

/* ------------------------------------------------------------------ */
/*  PLANOS DA CONSULTORIA — valores em centavos                        */
/* ------------------------------------------------------------------ */

export interface Plan {
  id: 'bronze' | 'prata' | 'ouro';
  name: string;
  monthly: number;
  quarterly: number;
  quarterlyCash: number;
  highlight?: boolean;
  /** Itens da matriz de benefícios: true = incluído */
  features: { label: string; included: boolean; note?: string }[];
  message: string;
}

/**
 * A MATRIZ DE BENEFÍCIOS segue as informações fornecidas pelo profissional.
 * PENDENTE DE CONFIRMAÇÃO: se a avaliação ISAK trimestral do plano Ouro está
 * de fato incluída no preço de R$ 200,00 antes da publicação definitiva.
 */
const featureLabels = {
  training: 'Treinamento individualizado e periodizado.',
  sheet: 'Planilha de treino disponibilizada pelo aplicativo.',
  videos: 'Vídeos explicativos dos exercícios.',
  support: 'Feedback e suporte de segunda a sexta-feira.',
  visit: 'Uma visita presencial por mês.',
  isak: 'Avaliação antropométrica e de composição corporal (protocolo ISAK) a cada três meses.',
} as const;

const visitNote =
  'Demonstração de exercícios, ajustes e esclarecimento de dúvidas. Em academias sem cobrança adicional para o profissional.';

export const plans: Plan[] = [
  {
    id: 'bronze',
    name: 'Bronze',
    monthly: 15000,
    quarterly: 41500,
    quarterlyCash: 40000,
    message: whatsappMessages.bronze,
    features: [
      { label: featureLabels.training, included: true },
      { label: featureLabels.sheet, included: true },
      { label: featureLabels.videos, included: true },
      { label: featureLabels.support, included: true },
      { label: featureLabels.visit, included: false },
      { label: featureLabels.isak, included: false },
    ],
  },
  {
    id: 'prata',
    name: 'Prata',
    monthly: 17500,
    quarterly: 51500,
    quarterlyCash: 50000,
    highlight: true,
    message: whatsappMessages.prata,
    features: [
      { label: featureLabels.training, included: true },
      { label: featureLabels.sheet, included: true },
      { label: featureLabels.videos, included: true },
      { label: featureLabels.support, included: true },
      { label: featureLabels.visit, included: true, note: visitNote },
      { label: featureLabels.isak, included: false },
    ],
  },
  {
    id: 'ouro',
    name: 'Ouro',
    monthly: 20000,
    quarterly: 58000,
    quarterlyCash: 55000,
    message: whatsappMessages.ouro,
    features: [
      { label: featureLabels.training, included: true },
      { label: featureLabels.sheet, included: true },
      { label: featureLabels.videos, included: true },
      { label: featureLabels.support, included: true },
      { label: featureLabels.visit, included: true, note: visitNote },
      { label: featureLabels.isak, included: true },
    ],
  },
];

export const course = {
  name: 'Do Zero aos 5 KM',
  /** valor em centavos — pagamento único */
  price: 2000,
} as const;

/** Formata centavos como moeda brasileira (R$ 150,00). */
export function formatBRL(cents: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(cents / 100);
}
