export type PlanId = "basica" | "intermedia" | "integral";
export type WordPressPlanId = "premium" | "business";

export interface Client {
  name: string;
  project: string;
  market: string;
  recipient: string;
}

export interface Deliverable {
  label: string;
  detail?: string;
}

export interface Milestone {
  id: string;
  label: string;
  /** Primera y última semana de la etapa (1 = primera semana desde el inicio). */
  startWeek: number;
  endWeek: number;
  /** Etapa que solo ocurre si el proyecto la necesita (según el alcance acordado). */
  conditional?: boolean;
  note?: string;
}

export interface PaymentMilestone {
  label: string;
  percent: number;
  amount: number;
}

export interface Technology {
  name: string;
  role: string;
}

export interface ComparisonFeature {
  id: string;
  group: "design" | "features" | "capture" | "delivery" | "investment";
  label: string;
  values: Record<PlanId, string>;
}

export interface Plan {
  id: PlanId;
  /** Nombre corto original del pedido: Básica, Intermedia, Integral. */
  name: string;
  /** Fragmento para el nombre del archivo exportado. */
  fileSlug: string;
  /** Nombre descriptivo, elemento principal de diferenciación: Presencia digital, etc. */
  descriptor: string;
  objective: string;
  /** Hilo conductor: Lanzar / Consolidar / Escalar. */
  stage: string;
  /** Pregunta estratégica que responde la propuesta. */
  question: string;
  /** Respuesta en una frase. */
  pitch: string;
  price: number;
  currency: "USD";
  durationLabel: string;
  durationWeeks: number;
  /** Cinco o seis entregables principales para la tarjeta de precio. */
  highlights: string[];
  /** Instancias principales de validación (comunes a las tres alternativas). */
  validations: number;
  supportDays: number;
  wordpressPlan: WordPressPlanId;
  // Los once puntos solicitados por Aparicio Brand
  scope: string[];
  deliverables: Deliverable[];
  process: { title: string; description: string }[];
  schedule: Milestone[];
  scheduleNote: string;
  technologies: Technology[];
  validationsText: string[];
  payments: PaymentMilestone[];
  paymentNote?: string;
  supportText: string;
  extraCosts: string[];
  professionalAdvice: string;
  exclusions?: string[];
}

export interface SuccessMetric {
  id: string;
  name: string;
  measures: string;
  why: string;
  source: string;
  dependencies: string;
  kind: "tecnico" | "comercial";
}

export interface CommercialCondition {
  id: string;
  title: string;
  items: string[];
}

export interface Stage {
  number: string;
  title: string;
  description: string;
}

export interface WordPressPlan {
  id: WordPressPlanId;
  name: string;
  monthlyBilling: number;
  monthlyEquivalentAnnual: number;
  annual: number;
  note: string;
}

export interface SourceLink {
  label: string;
  url: string;
}

export interface WordPressData {
  currency: "USD";
  consultedAt: string;
  consultedLabel: string;
  taxNote: string;
  plans: WordPressPlan[];
  links: SourceLink[];
  /** Plugins inmobiliarios a evaluar (sin compromiso de compatibilidad). */
  pluginLinks: SourceLink[];
}

export interface AdditionalCost {
  label: string;
  necessity: "necesario" | "segun-alcance" | "opcional";
  note: string;
}

export interface Maintenance {
  minUsd: number;
  maxUsd: number;
  unit: string;
  examples: string[];
  note: string;
}

export interface Proposal {
  slug: string;
  version: string;
  issuedAt: string;
  issuedLabel: string;
  wordpress: WordPressData;
  maintenance: Maintenance;
  additionalCosts: AdditionalCost[];
  title: string;
  client: Client;
  dateLabel: string;
  contact: { email: string; whatsappDisplay: string; whatsappDigits: string; portfolio: string };
  plans: Plan[];
  comparison: ComparisonFeature[];
  metrics: SuccessMetric[];
  conditions: CommercialCondition[];
  stages: Stage[];
}

export interface NumberedItem {
  number: string;
  title: string;
  description: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface ProposalContent {
  hero: { eyebrow: string; title: string; description: string; meta: { label: string; value: string }[] };
  business: {
    eyebrow: string;
    title: string;
    intro: string;
    objectives: { number: string; title: string; description: string }[];
  };
  diagnosis: {
    eyebrow: string;
    title: string;
    stats: { label: string; value: string; hint: string }[];
    source: string;
    body: string[];
    conclusion: string;
  };
  journey: {
    eyebrow: string;
    title: string;
    intro: string;
    badge: string;
    steps: { number: string; title: string; description: string }[];
    audiences: { title: string; description: string }[];
    audiencesNote: string;
  };
  architecture: {
    eyebrow: string;
    title: string;
    intro: string;
    tree: { label: string; children?: string[] }[];
    pendingTitle: string;
    pending: string[];
    pendingNote: string;
  };
  value: {
    eyebrow: string;
    title: string;
    intro: string;
    highlights: string[];
    linkLabel: string;
    references: { label: string; url: string }[];
  };
  pricing: { approach: string; limitsNote: string };
  services: {
    eyebrow: string;
    title: string;
    intro: string;
    items: { title: string; description: string }[];
    guideTitle: string;
    guide: string;
    validationsTitle: string;
    validations: string;
    supportTitle: string;
    support: string;
    maintenanceTitle: string;
    maintenance: string;
    paymentTitle: string;
    payment: string;
    colPlan: string;
    colAdvance: string;
    colBalance: string;
  };
  examples: {
    eyebrow: string;
    title: string;
    intro: string;
    disclaimer: string;
    frameLabel: string;
    plans: Record<PlanId, { caption: string; differentials: string[] }>;
  };
  philosophy: { eyebrow: string; title: string; message: string; intro: string; principles: NumberedItem[]; note: string };
  technology: {
    eyebrow: string;
    title: string;
    intro: string;
    rationaleTitle: string;
    rationale: string[];
    rationaleNote: string;
    toolsTitle: string;
    tools: { name: string; role: string }[];
    toolsNote: string;
    costsTitle: string;
    costsIntro: string;
    pricesNote: string;
    investmentTitle: string;
    investmentNote: string;
    domainTitle: string;
    domain: string[];
    additionalTitle: string;
    additionalIntro: string;
    maintenanceTitle: string;
    maintenanceNote: string;
    pluginsTitle: string;
    pluginsIntro: string;
    pluginsNote: string;
  };
  metricsIntro: { title: string; intro: string; note: string };
  termsExtras: {
    revisions: string;
    support: string;
    thirdParty: string;
    included: string[];
    future: string[];
    quoted: string[];
    ownership: string;
    cookies: string;
    homeStaging: string;
    recurring: string[];
  };
  roadmap: { title: string; intro: string; items: string[]; note: string };
  pending: { title: string; intro: string; groups: { title: string; items: string[] }[] };
  faq: FaqItem[];
  cta: { title: string; intro: string; steps: NumberedItem[] };
}

/** Textos traducibles de la propuesta. Los valores comerciales (precios, porcentajes, plazos, días) salen siempre de los datos base. */
export interface PlanTexts {
  name: string;
  fileSlug: string;
  descriptor: string;
  objective: string;
  stage: string;
  question: string;
  pitch: string;
  durationLabel: string;
  highlights: string[];
  scope: string[];
  deliverables: string[];
  process: { title: string; description: string }[];
  schedule: Record<string, { label: string; note?: string }>;
  scheduleNote: string;
  technologies: Technology[];
  validationsText: string[];
  paymentLabels: string[];
  paymentNote?: string;
  supportText: string;
  extraCosts: string[];
  professionalAdvice: string;
}

export interface ProposalTexts {
  title: string;
  dateLabel: string;
  issuedLabel: string;
  plans: Record<PlanId, PlanTexts>;
  comparison: Record<string, { label: string; values: Record<PlanId, string> }>;
  metrics: Record<string, { name: string; measures: string; why: string; source: string; dependencies: string }>;
  conditions: Record<string, { title: string; items: string[] }>;
  stages: { title: string; description: string }[];
  additionalCosts: { label: string; note: string }[];
  maintenance: { unit: string; examples: string[]; note: string };
  wordpress: { taxNote: string; notes: Record<WordPressPlanId, string>; links: string[]; pluginLinks: string[] };
}
