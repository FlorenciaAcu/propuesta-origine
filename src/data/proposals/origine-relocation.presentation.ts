import type { Locale } from "@/i18n/config";
import type { PlanId } from "@/types/proposal";

/**
 * Contenido de la presentación ejecutiva, tomado de los frames visibles de Figma
 * (archivo «FlorenciaUX · Propuesta comercial web», página «Aparicio Brand»):
 *   00 · Objetivos y metodología · 01 · Propuestas / Tabla comparativa ·
 *   02 · Tecnología y condiciones comunes · 03 · Mi valor agregado ·
 *   Detalle bajo demanda / Básica, Intermedia e Integral · Entregables.
 * Los frames ocultos o marcados como ARCHIVO no se usan.
 * Importes, pagos y subtotales se insertan desde los datos aprobados ({0}, {1}…), no se repiten aquí.
 */

export interface Step {
  kicker: string;
  title: string;
  text: string;
}

export interface Item {
  title: string;
  text: string;
}

export interface Presentation {
  eyebrow: string;
  role: string;
  objectives: { title: string; lead: string; label: string; items: string[] };
  method: { label: string; steps: Step[]; workLabel: string; work: string; supportLabel: string; support: Item[]; startNote: string };
  table: {
    title: string;
    lead: string;
    cornerLabel: string;
    cornerText: string;
    rows: { label: string; values: Record<PlanId, string> }[];
    commonLabel: string;
    common: string[];
    notes: string[];
  };
  tech: {
    title: string;
    platformName: string;
    platformTag: string;
    platformText: string;
    reasons: string[];
    plansLabel: string;
    planRows: { label: string; values: [string, string] }[];
    plansNote: string;
    pricingLinkLabel: string;
    includedLabel: string;
    included: string;
    externalLabel: string;
    external: string;
    pluginNote: string;
  };
  terms: {
    title: string;
    paymentLabel: string;
    paymentSteps: [string, string];
    paymentNote: string;
    maintenanceLabel: string;
    maintenanceText: string;
    extraLabel: string;
    extras: string[];
  };
  value: {
    title: string;
    lead: string;
    positionLabel: string;
    position: string;
    positionText: string;
    expLabel: string;
    years: { label: string; value: string; text: string };
    sector: { label: string };
    execution: { label: string; value: string; text: string };
    collabLabel: string;
    collab: string;
    portfolioLabel: string;
  };
  detail: {
    titleSuffix: string;
    deliverablesLabel: string;
    deliveryLabel: string;
    deliveryTitle: string;
    supportTitle: string;
    support: string;
    feesLabel: string;
    advance: string;
    termLabel: string;
    firstYear: string;
    adviceLabel: string;
    plans: Record<PlanId, { lead: string; deliverables: Item[]; delivery: string; advice: string; term: string }>;
  };
}

const es: Presentation = {
  eyebrow: "Aparicio Brand / Origine Relocation · Suiza",
  role: "Diseño y desarrollo web",
  objectives: {
    title: "Objetivos del proyecto",
    lead: "Diseño y desarrollo del sitio de Origine Relocation.",
    label: "Objetivos",
    items: [
      "Presentar a Origine y sus servicios inmobiliarios y de relocation con claridad y confianza.",
      "Gestionar y publicar propiedades de forma autónoma.",
      "Mostrar fichas individuales con ciudad y cantón, con cobertura en distintas zonas de Suiza.",
      "Facilitar consultas y solicitudes de visita según el alcance.",
      "Calificar a los interesados por presupuesto, tipo de propiedad, fecha prevista y necesidades.",
      "Preparar el sitio para campañas y medición de conversiones.",
    ],
  },
  method: {
    label: "Metodología de trabajo",
    steps: [
      { kicker: "01 / Definir", title: "Descubrir y definir", text: "Acordamos objetivos, alcance, contenidos y arquitectura." },
      { kicker: "02 / Diseñar", title: "Diseñar y validar", text: "Diseño UX/UI responsive en Figma y validación antes de desarrollar." },
      { kicker: "03 / Implementar", title: "Desarrollar", text: "Implementación en WordPress.com, funcionalidades y medición." },
      { kicker: "04 / Entregar", title: "Validar y publicar", text: "Pruebas, ajustes, publicación, entrega de accesos y guía en inglés." },
    ],
    workLabel: "Forma de trabajo",
    work: "Las etapas y prioridades se acuerdan en equipo. Realizamos las iteraciones necesarias dentro del alcance.",
    supportLabel: "Acompañamiento",
    support: [
      { title: "Revisiones incluidas", text: "Revisaremos juntos el diseño antes de comenzar el desarrollo y el sitio antes de su publicación. Realizaremos los ajustes necesarios dentro del alcance acordado." },
      { title: "{0} días de soporte", text: "Todas las propuestas incluyen {0} días de soporte desde la publicación para resolver consultas, corregir errores y realizar pequeños ajustes visuales o de contenido." },
      { title: "Continuidad", text: "Después de este período, podemos continuar trabajando juntos según las necesidades del proyecto, coordinando mejoras y actualizaciones." },
    ],
    startNote: "El cronograma comienza una vez acordado el alcance, recibido el anticipo y disponibles los materiales necesarios.",
  },
  table: {
    title: "Tres alternativas, una base escalable",
    lead: "Podemos ajustarlas según las prioridades de Origine Relocation, sobre una misma base administrable.",
    cornerLabel: "Inversión por proyecto",
    cornerText: "Compara funcionalidades y plazos.",
    rows: [
      { label: "Estructura institucional", values: { basica: "Landing", intermedia: "Multipágina", integral: "Multipágina" } },
      { label: "Idioma del sitio", values: { basica: "EN", intermedia: "EN", integral: "EN + FR" } },
      { label: "Catálogo administrable", values: { basica: "Incluido", intermedia: "Incluido", integral: "Incluido" } },
      { label: "Ficha con URL individual", values: { basica: "Incluida", intermedia: "Incluida", integral: "Incluida" } },
      { label: "Carga inicial de propiedades", values: { basica: "Hasta 3", intermedia: "Hasta 10", integral: "Hasta 20" } },
      { label: "Gestión de disponibilidad", values: { basica: "Incluida", intermedia: "Incluida", integral: "Incluida" } },
      { label: "Filtros ciudad / cantón", values: { basica: "Incluidos", intermedia: "Incluidos", integral: "Incluidos" } },
      { label: "Filtros precio y tipo", values: { basica: "—", intermedia: "Incluidos", integral: "Incluidos" } },
      { label: "Filtros habitaciones / superficie", values: { basica: "—", intermedia: "—", integral: "Incluidos" } },
      { label: "Ordenar por precio o fecha", values: { basica: "—", intermedia: "Incluido", integral: "Incluido" } },
      { label: "Búsqueda por mapa*", values: { basica: "—", intermedia: "—", integral: "Incluida" } },
      { label: "Formulario con referencia", values: { basica: "General", intermedia: "Por propiedad", integral: "Por propiedad" } },
      { label: "Solicitud de visita", values: { basica: "—", intermedia: "—", integral: "Incluida" } },
      { label: "Landings adicionales", values: { basica: "—", intermedia: "—", integral: "Hasta 2" } },
      { label: "Integración CRM*", values: { basica: "—", intermedia: "—", integral: "1 compatible" } },
      { label: "SEO y medición (GA4, GTM, Google Ads y Meta Pixel)", values: { basica: "Incluidos", intermedia: "Incluidos", integral: "Incluidos" } },
      { label: "Plazo estimado", values: { basica: "2 semanas", intermedia: "3–4 semanas", integral: "4–5 semanas" } },
    ],
    commonLabel: "Incluido en las tres",
    common: ["Estrategia", "UX/UI", "SEO", "Analítica", "Guía en inglés para gestionar contenidos y propiedades"],
    notes: ["La carga inicial no limita el catálogo.", "* Mapa y CRM sujetos a compatibilidad."],
  },
  tech: {
    title: "Tecnología e infraestructura",
    platformName: "WordPress.com",
    platformTag: "Plataforma propuesta para el desarrollo y alojamiento del sitio web.",
    platformText: "La recomiendo porque ofrece:",
    reasons: ["Gestión autónoma de contenidos y propiedades.", "Alojamiento administrado por el proveedor.", "Posibilidad de ampliar las funcionalidades."],
    plansLabel: "Planes de referencia de WordPress.com",
    planRows: [
      { label: "Propuesta", values: ["Básica e Intermedia", "Integral"] },
      { label: "Almacenamiento", values: ["13 GB", "50 GB"] },
      { label: "Pago anual", values: ["{annual}/año", "{annual}/año"] },
      { label: "Pago mensual", values: ["{monthly}/mes", "{monthly}/mes"] },
    ],
    plansNote: "Tarifas orientativas de WordPress.com, sin impuestos. Se elige un único plan y una modalidad de pago; la suscripción se contrata directamente con el proveedor, a nombre de Origine.",
    pricingLinkLabel: "Consultar precios oficiales",
    includedLabel: "Configuración incluida",
    included: "Instalación y configuración de herramientas, dominio, HTTPS/SSL, seguridad, respaldos según el plan y entrega de accesos.",
    externalLabel: "Servicios externos",
    external: "Suscripción de WordPress.com, registro o renovación del dominio y licencias adicionales, si fueran necesarias.",
    pluginNote: "Estatik o una herramienta equivalente se evaluará según las funcionalidades y la compatibilidad requeridas.",
  },
  terms: {
    title: "Condiciones comerciales",
    paymentLabel: "Forma de pago",
    paymentSteps: ["Anticipo", "Al finalizar el proyecto"],
    paymentNote: "Corresponde exclusivamente a los honorarios profesionales de la propuesta seleccionada.",
    maintenanceLabel: "Mantenimiento opcional",
    maintenanceText: "Por intervención puntual, según las necesidades y el alcance acordado, una vez finalizado el soporte incluido.",
    extraLabel: "Consideraciones adicionales",
    extras: [
      "Las traducciones, la producción de contenidos, la gestión publicitaria y las ampliaciones funcionales se evalúan y cotizan por separado cuando sean necesarias.",
      "Las integraciones, automatizaciones y conexiones con portales están sujetas a viabilidad técnica y presupuesto.",
    ],
  },
  value: {
    title: "Mi enfoque y valor agregado",
    lead: "Product Design, UX/UI y desarrollo web.",
    positionLabel: "Estrategia + diseño + tecnología",
    position: "Combino estrategia, diseño UX/UI y desarrollo web para crear soluciones digitales funcionales.",
    positionText: "Más de cinco años diseñando productos digitales, con experiencia en InfoCasas y Finca Raíz y colaboración con equipos multidisciplinarios.",
    expLabel: "Experiencia relevante",
    years: { label: "Experiencia", value: "+5 años", text: "Diseño de productos digitales" },
    sector: { label: "Sector inmobiliario" },
    execution: { label: "Ejecución", value: "UX/UI + Web", text: "Diseño, prototipado e implementación." },
    collabLabel: "Colaboración con Aparicio Brand",
    collab: "Me gusta trabajar en equipo, acordar prioridades y acompañar cada proyecto desde su definición hasta su evolución.",
    portfolioLabel: "Portfolio",
  },
  detail: {
    titleSuffix: "Entregables",
    deliverablesLabel: "Entregables incluidos",
    deliveryLabel: "Entrega, revisiones y soporte",
    deliveryTitle: "Entrega y revisiones",
    supportTitle: "Soporte y mantenimiento",
    support: "{0} días desde publicación: correcciones, ajustes menores y consultas. Después: {1} por intervención puntual; extras a cotizar.",
    feesLabel: "Honorarios",
    advance: "Anticipo {0} · saldo {1}",
    termLabel: "Plazo",
    firstYear: "Primer año estimado: {0}",
    adviceLabel: "Recomendaciones y condiciones",
    plans: {
      basica: {
        lead: "Primera versión funcional para lanzar la marca, administrar propiedades y medir consultas.",
        deliverables: [
          { title: "Estrategia y experiencia", text: "Relevamiento inicial, referencias del sector, definición de propuesta de valor, recorrido de contacto y prototipo responsive editable en Figma." },
          { title: "MVP inmobiliario", text: "Landing institucional, catálogo sencillo con filtro por ubicación, ficha individual reutilizable, legales. Inglés; carga inicial de hasta 3 propiedades." },
          { title: "Consultas y CMS", text: "Formulario general con presupuesto, fecha y tipo de consulta. CMS para publicar, editar o retirar propiedades; consentimiento y antispam." },
          { title: "SEO y medición", text: "SEO inicial, metadatos, sitemap, SSL, GA4, GTM, Google Ads y Meta Pixel. Verificación responsive y eventos." },
        ],
        delivery: "Semana 1: definición y diseño. Semana 2: desarrollo, pruebas y entrega. Figma editable, accesos y guía escrita en inglés.",
        advice: "Precios y gastos visibles antes de contactar. El cliente facilita textos, fotos, datos de propiedades y textos legales. Ver condiciones comunes.",
        term: "2 semanas",
      },
      intermedia: {
        lead: "Sitio multipágina con catálogo estructurado, filtros y contacto vinculado a cada propiedad.",
        deliverables: [
          { title: "Estrategia y diseño", text: "Benchmark acotado, arquitectura, recorrido de búsqueda y contacto, diseño UX/UI y prototipo Figma de las plantillas principales." },
          { title: "Web y catálogo", text: "Inicio, servicios, equipo, contacto, legales, catálogo y ficha. Inglés. Carga inicial de hasta 10 propiedades; CMS reutilizable." },
          { title: "Búsqueda y fichas", text: "Filtro por ciudad/cantón, precio y tipo de propiedad; orden por precio o fecha. Galería, gastos, superficie y disponibilidad." },
          { title: "Consultas por propiedad", text: "Formulario contextual con referencia, presupuesto, fecha y contacto. Consentimiento, antispam, SEO, GA4, GTM, Google Ads y Meta Pixel." },
        ],
        delivery: "Semanas 1–2: definición y diseño. Semanas 2–4: desarrollo, pruebas y entrega. Figma editable, accesos y guía en inglés.",
        advice: "El cliente facilita textos, fotos, inventario y textos legales. Ver condiciones comunes.",
        term: "3–4 semanas",
      },
      integral: {
        lead: "Experiencia bilingüe, búsqueda avanzada y captación de consultas y visitas mediante herramientas compatibles.",
        deliverables: [
          { title: "Estrategia y diseño", text: "Benchmark, segmentación, arquitectura bilingüe, recorridos de búsqueda y conversión; prototipo Figma de plantillas y hasta 2 landings." },
          { title: "Catálogo bilingüe", text: "Inglés y francés; hasta 20 propiedades iniciales. Filtros por ubicación, precio, tipo, habitaciones y superficie; búsqueda por mapa compatible." },
          { title: "Visitas y CRM", text: "Solicitud de visita (sin reserva automática), consulta contextual, notificación por correo y 1 integración CRM existente compatible." },
          { title: "SEO y campañas", text: "SEO bilingüe, GA4, GTM, Google Ads, Meta Pixel, eventos de consulta y visita, QA. Hasta 2 landings para campañas." },
        ],
        delivery: "Semanas 1–2: definición y diseño. Semanas 2–5: desarrollo, pruebas y entrega. Figma editable, accesos y guía en inglés.",
        advice: "El cliente facilita traducciones, textos legales e inventario. CRM y mapa sujetos a compatibilidad técnica. Ver condiciones comunes.",
        term: "4–5 semanas",
      },
    },
  },
};

const en: Presentation = {
  eyebrow: "Aparicio Brand / Origine Relocation · Switzerland",
  role: "Web design and development",
  objectives: {
    title: "Project objectives",
    lead: "Design and development of the Origine Relocation website.",
    label: "Objectives",
    items: [
      "Present Origine and its real-estate and relocation services with clarity and confidence.",
      "Manage and publish properties independently.",
      "Show individual listings with city and canton, covering different areas of Switzerland.",
      "Make enquiries and viewing requests easy, depending on the scope.",
      "Qualify interested people by budget, property type, expected date and needs.",
      "Prepare the site for campaigns and conversion tracking.",
    ],
  },
  method: {
    label: "Working method",
    steps: [
      { kicker: "01 / Define", title: "Discover and define", text: "We agree on goals, scope, content and architecture." },
      { kicker: "02 / Design", title: "Design and validate", text: "Responsive UX/UI design in Figma, validated before development." },
      { kicker: "03 / Build", title: "Develop", text: "Implementation on WordPress.com, features and measurement." },
      { kicker: "04 / Deliver", title: "Validate and publish", text: "Testing, adjustments, publishing, handover of access and a guide in English." },
    ],
    workLabel: "How we work",
    work: "Stages and priorities are agreed as a team. We make the necessary iterations within the scope.",
    supportLabel: "Ongoing support",
    support: [
      { title: "Included reviews", text: "We will review the design together before development starts and the site before it is published, making the necessary adjustments within the agreed scope." },
      { title: "{0} days of support", text: "All proposals include {0} days of support from publication to answer questions, fix errors and make small visual or content adjustments." },
      { title: "Continuity", text: "After that period, we can keep working together as the project needs, coordinating improvements and updates." },
    ],
    startNote: "The timeline starts once the scope is agreed, the advance payment is received and the necessary materials are available.",
  },
  table: {
    title: "Three alternatives, one scalable base",
    lead: "We can adapt them to Origine Relocation's priorities, on the same manageable base.",
    cornerLabel: "Project investment",
    cornerText: "Compare features and timelines.",
    rows: [
      { label: "Institutional structure", values: { basica: "Landing page", intermedia: "Multi-page", integral: "Multi-page" } },
      { label: "Site language", values: { basica: "EN", intermedia: "EN", integral: "EN + FR" } },
      { label: "Manageable catalogue", values: { basica: "Included", intermedia: "Included", integral: "Included" } },
      { label: "Listing with its own URL", values: { basica: "Included", intermedia: "Included", integral: "Included" } },
      { label: "Initial property upload", values: { basica: "Up to 3", intermedia: "Up to 10", integral: "Up to 20" } },
      { label: "Availability management", values: { basica: "Included", intermedia: "Included", integral: "Included" } },
      { label: "City / canton filters", values: { basica: "Included", intermedia: "Included", integral: "Included" } },
      { label: "Price and type filters", values: { basica: "—", intermedia: "Included", integral: "Included" } },
      { label: "Rooms / area filters", values: { basica: "—", intermedia: "—", integral: "Included" } },
      { label: "Sort by price or date", values: { basica: "—", intermedia: "Included", integral: "Included" } },
      { label: "Map search*", values: { basica: "—", intermedia: "—", integral: "Included" } },
      { label: "Form with reference", values: { basica: "General", intermedia: "Per property", integral: "Per property" } },
      { label: "Viewing request", values: { basica: "—", intermedia: "—", integral: "Included" } },
      { label: "Additional landing pages", values: { basica: "—", intermedia: "—", integral: "Up to 2" } },
      { label: "CRM integration*", values: { basica: "—", intermedia: "—", integral: "1 compatible" } },
      { label: "SEO and measurement (GA4, GTM, Google Ads and Meta Pixel)", values: { basica: "Included", intermedia: "Included", integral: "Included" } },
      { label: "Estimated timeline", values: { basica: "2 weeks", intermedia: "3–4 weeks", integral: "4–5 weeks" } },
    ],
    commonLabel: "Included in all three",
    common: ["Strategy", "UX/UI", "SEO", "Analytics", "Guide in English for managing content and properties"],
    notes: ["The initial upload does not limit the catalogue.", "* Map and CRM subject to compatibility."],
  },
  tech: {
    title: "Technology and infrastructure",
    platformName: "WordPress.com",
    platformTag: "Proposed platform for building and hosting the website.",
    platformText: "I recommend it because it offers:",
    reasons: ["Independent management of content and properties.", "Hosting managed by the provider.", "Room to extend the functionality."],
    plansLabel: "WordPress.com reference plans",
    planRows: [
      { label: "Proposal", values: ["Basic and Intermediate", "Comprehensive"] },
      { label: "Storage", values: ["13 GB", "50 GB"] },
      { label: "Annual billing", values: ["{annual}/year", "{annual}/year"] },
      { label: "Monthly billing", values: ["{monthly}/month", "{monthly}/month"] },
    ],
    plansNote: "Indicative WordPress.com prices, excluding taxes. A single plan and billing option are chosen; the subscription is purchased directly from the provider, in Origine's name.",
    pricingLinkLabel: "See official prices",
    includedLabel: "Set-up included",
    included: "Installation and configuration of tools, domain, HTTPS/SSL, security, backups according to the plan and handover of access.",
    externalLabel: "External services",
    external: "WordPress.com subscription, domain registration or renewal and additional licences, if needed.",
    pluginNote: "Estatik or an equivalent tool will be assessed according to the required features and compatibility.",
  },
  terms: {
    title: "Commercial terms",
    paymentLabel: "Payment schedule",
    paymentSteps: ["Advance", "On project completion"],
    paymentNote: "Applies only to the professional fees of the selected proposal.",
    maintenanceLabel: "Optional maintenance",
    maintenanceText: "Per one-off intervention, according to needs and the agreed scope, once the included support has ended.",
    extraLabel: "Additional considerations",
    extras: [
      "Translations, content production, ad management and functional extensions are assessed and quoted separately when needed.",
      "Integrations, automations and connections with portals are subject to technical feasibility and budget.",
    ],
  },
  value: {
    title: "My approach and added value",
    lead: "Product Design, UX/UI and web development.",
    positionLabel: "Strategy + design + technology",
    position: "I combine strategy, UX/UI design and web development to create functional digital solutions.",
    positionText: "More than five years designing digital products, with experience at InfoCasas and Finca Raíz and collaboration with multidisciplinary teams.",
    expLabel: "Relevant experience",
    years: { label: "Experience", value: "5+ years", text: "Digital product design" },
    sector: { label: "Real-estate sector" },
    execution: { label: "Execution", value: "UX/UI + Web", text: "Design, prototyping and implementation." },
    collabLabel: "Working with Aparicio Brand",
    collab: "I enjoy working as a team, agreeing on priorities and supporting each project from definition to evolution.",
    portfolioLabel: "Portfolio",
  },
  detail: {
    titleSuffix: "Deliverables",
    deliverablesLabel: "Included deliverables",
    deliveryLabel: "Delivery, reviews and support",
    deliveryTitle: "Delivery and reviews",
    supportTitle: "Support and maintenance",
    support: "{0} days from publication: fixes, minor adjustments and questions. Afterwards: {1} per one-off intervention; extras quoted separately.",
    feesLabel: "Fees",
    advance: "Advance {0} · balance {1}",
    termLabel: "Timeline",
    firstYear: "Estimated first year: {0}",
    adviceLabel: "Recommendations and terms",
    plans: {
      basica: {
        lead: "A first functional version to launch the brand, manage properties and measure enquiries.",
        deliverables: [
          { title: "Strategy and experience", text: "Initial discovery, sector references, value proposition, contact journey and an editable responsive prototype in Figma." },
          { title: "Real-estate MVP", text: "Institutional landing page, simple catalogue with a location filter, reusable individual listing, legal pages. English; initial upload of up to 3 properties." },
          { title: "Enquiries and CMS", text: "General form with budget, date and enquiry type. CMS to publish, edit or remove properties; consent and anti-spam." },
          { title: "SEO and measurement", text: "Initial SEO, metadata, sitemap, SSL, GA4, GTM, Google Ads and Meta Pixel. Responsive and event checks." },
        ],
        delivery: "Week 1: definition and design. Week 2: development, testing and delivery. Editable Figma file, access and a written guide in English.",
        advice: "Prices and charges visible before contact. The client provides copy, photos, property data and legal texts. See shared terms.",
        term: "2 weeks",
      },
      intermedia: {
        lead: "Multi-page site with a structured catalogue, filters and contact linked to each property.",
        deliverables: [
          { title: "Strategy and design", text: "Focused benchmark, architecture, search and contact journey, UX/UI design and Figma prototype of the main templates." },
          { title: "Website and catalogue", text: "Home, services, team, contact, legal pages, catalogue and listing. English. Initial upload of up to 10 properties; reusable CMS." },
          { title: "Search and listings", text: "Filter by city/canton, price and property type; sort by price or date. Gallery, charges, area and availability." },
          { title: "Enquiries per property", text: "Contextual form with reference, budget, date and contact details. Consent, anti-spam, SEO, GA4, GTM, Google Ads and Meta Pixel." },
        ],
        delivery: "Weeks 1–2: definition and design. Weeks 2–4: development, testing and delivery. Editable Figma file, access and a guide in English.",
        advice: "The client provides copy, photos, inventory and legal texts. See shared terms.",
        term: "3–4 weeks",
      },
      integral: {
        lead: "Bilingual experience, advanced search and capture of enquiries and viewings with compatible tools.",
        deliverables: [
          { title: "Strategy and design", text: "Benchmark, segmentation, bilingual architecture, search and conversion journeys; Figma prototype of templates and up to 2 landing pages." },
          { title: "Bilingual catalogue", text: "English and French; up to 20 initial properties. Filters by location, price, type, rooms and area; compatible map search." },
          { title: "Viewings and CRM", text: "Viewing request (no automatic booking), contextual enquiry, email notification and 1 compatible existing CRM integration." },
          { title: "SEO and campaigns", text: "Bilingual SEO, GA4, GTM, Google Ads, Meta Pixel, enquiry and viewing events, QA. Up to 2 landing pages for campaigns." },
        ],
        delivery: "Weeks 1–2: definition and design. Weeks 2–5: development, testing and delivery. Editable Figma file, access and a guide in English.",
        advice: "The client provides translations, legal texts and inventory. CRM and map subject to technical compatibility. See shared terms.",
        term: "4–5 weeks",
      },
    },
  },
};

export const presentation: Record<Locale, Presentation> = { es, en };
