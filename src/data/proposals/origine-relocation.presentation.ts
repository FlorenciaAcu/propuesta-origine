import type { Locale } from "@/i18n/config";
import type { PlanId } from "@/types/proposal";

/**
 * Contenido de la presentación ejecutiva de Origine Relocation (ES / EN).
 * Redactado para personas sin conocimientos técnicos. Los importes, pagos y días de soporte
 * se insertan desde los datos aprobados ({0}, {annual}, {monthly}); no se repiten aquí.
 */

export interface Item {
  title: string;
  text: string;
}

export interface Presentation {
  eyebrow: string;
  role: string;
  objectives: { title: string; intro: string[]; label: string; items: string[]; journeyLabel: string; journey: Item[] };
  table: {
    title: string;
    lead: string;
    cornerLabel: string;
    cornerText: string;
    rows: { label: string; values: Record<PlanId, string> }[];
    summaries: Record<PlanId, string>;
    notes: Item[];
    deliverablesLabel: string;
    deliverablesIntro: string;
    deliverables: Item[];
    measurement: { title: string; text: string; tools: string };
    listing: Item;
    forms: Item;
  };
  method: {
    label: string;
    steps: Item[];
    timelineLabel: string;
    timelineLegend: [string, string];
    weekShort: string;
    weekLabel: string;
    timeline: Record<PlanId, { design: [number, number]; build: [number, number] }>;
    timelineNote: string;
    supportLabel: string;
    support: Item[];
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
    intro: string;
    approach: string;
    teamwork: string;
    years: { label: string; value: string; text: string };
    sector: { label: string };
    execution: { label: string; value: string; text: string };
    collabLabel: string;
    collab: string;
    portfolioLabel: string;
  };
}

/** Duraciones acordadas (en semanas): definición y diseño / desarrollo y entrega. */
const TIMELINE: Presentation["method"]["timeline"] = {
  basica: { design: [1, 1], build: [2, 2] },
  intermedia: { design: [1, 2], build: [2, 4] },
  integral: { design: [1, 2], build: [2, 5] },
};

const es: Presentation = {
  eyebrow: "Aparicio Brand / Origine Relocation · Suiza",
  role: "Diseño y desarrollo web",
  objectives: {
    title: "Propuesta de diseño y desarrollo web",
    intro: [
      "Origine Relocation ofrece servicios inmobiliarios y de acompañamiento a personas que buscan establecerse en Suiza.",
      "Propongo desarrollar un sitio web que permita presentar sus servicios, generar confianza, publicar propiedades y recibir consultas de personas cuyo presupuesto y necesidades estén más alineados con su oferta inmobiliaria.",
    ],
    label: "Objetivos del proyecto",
    journeyLabel: "De la búsqueda al contacto",
    journey: [
      { title: "Descubrimiento", text: "La persona llega al sitio desde Google, redes sociales o un enlace compartido." },
      { title: "Exploración", text: "Consulta las propiedades disponibles, sus fotografías, características, ubicación y precios." },
      { title: "Contacto", text: "Comparte sus datos, presupuesto, preferencias y fecha prevista de mudanza." },
      { title: "Seguimiento comercial", text: "El equipo de Origine recibe la información necesaria para evaluar la consulta y contactar a la persona interesada." },
    ],
    items: [
      "Presentar a Origine, su equipo y sus servicios inmobiliarios y de relocation en Suiza.",
      "Permitir que el equipo gestione y publique propiedades sin depender de un desarrollador.",
      "Presentar cada propiedad en una página individual que pueda compartirse fácilmente.",
      "Facilitar las consultas de interesados y las solicitudes de visita, según la propuesta elegida.",
      "Conocer el presupuesto, las preferencias y las necesidades de las personas interesadas.",
      "Preparar el sitio para campañas publicitarias y medir las consultas recibidas.",
    ],
  },
  table: {
    title: "Comparativa de propuestas",
    lead: "He preparado tres alternativas con diferentes funcionalidades y niveles de inversión, que podemos ajustar según las necesidades y prioridades de Origine Relocation.",
    cornerLabel: "Inversión por proyecto",
    cornerText: "Compara funcionalidades y plazos.",
    rows: [
      { label: "Estructura del sitio web", values: { basica: "Página institucional única", intermedia: "Sitio con varias páginas", integral: "Sitio con varias páginas" } },
      { label: "Idioma del sitio", values: { basica: "Inglés", intermedia: "Inglés", integral: "Inglés y francés" } },
      { label: "Catálogo de propiedades autogestionable", values: { basica: "Incluido", intermedia: "Incluido", integral: "Incluido" } },
      { label: "Página individual por propiedad", values: { basica: "Incluida", intermedia: "Incluida", integral: "Incluida" } },
      { label: "Carga inicial de propiedades", values: { basica: "Hasta 3", intermedia: "Hasta 10", integral: "Hasta 20" } },
      { label: "Actualización del estado de las propiedades", values: { basica: "Incluida", intermedia: "Incluida", integral: "Incluida" } },
      { label: "Filtros por ciudad y cantón", values: { basica: "Incluidos", intermedia: "Incluidos", integral: "Incluidos" } },
      { label: "Filtros por precio y tipo de propiedad", values: { basica: "—", intermedia: "Incluidos", integral: "Incluidos" } },
      { label: "Filtros por habitaciones y superficie", values: { basica: "—", intermedia: "—", integral: "Incluidos" } },
      { label: "Ordenar propiedades por precio o fecha", values: { basica: "—", intermedia: "Incluido", integral: "Incluido" } },
      { label: "Búsqueda de propiedades en un mapa interactivo", values: { basica: "—", intermedia: "—", integral: "Incluida" } },
      { label: "Formulario de contacto", values: { basica: "General", intermedia: "Por propiedad", integral: "Por propiedad" } },
      { label: "Solicitud de visita", values: { basica: "—", intermedia: "—", integral: "Incluida" } },
      { label: "Páginas adicionales para campañas publicitarias", values: { basica: "—", intermedia: "—", integral: "Hasta 2" } },
      { label: "Integración con el sistema de gestión de clientes (CRM)", values: { basica: "—", intermedia: "—", integral: "1 sistema compatible" } },
      { label: "Configuración inicial para buscadores y medición de consultas", values: { basica: "Incluida", intermedia: "Incluida", integral: "Incluida" } },
      { label: "Plazo estimado de entrega", values: { basica: "2 semanas", intermedia: "3–4 semanas", integral: "4–5 semanas" } },
    ],
    summaries: {
      basica: "Primera versión del sitio para presentar los servicios, publicar propiedades y recibir consultas.",
      intermedia: "Más páginas, búsqueda de propiedades más simple y consultas sobre una propiedad específica.",
      integral: "Sitio bilingüe, búsqueda avanzada, solicitudes de visita y conexión con la gestión de clientes.",
    },
    notes: [
      { title: "Sobre la carga inicial", text: "La cantidad indicada corresponde únicamente a las propiedades que cargaré durante el desarrollo inicial. No limita el catálogo: el equipo podrá añadir todas las que necesite." },
      { title: "Mapas y gestión de clientes", text: "Para la propuesta Integral, definiremos las herramientas de mapas y la conexión con el sistema de gestión de clientes, considerando su compatibilidad y posibles costos de licencia." },
    ],
    deliverablesLabel: "Qué recibirás al finalizar (en las tres propuestas)",
    deliverablesIntro: "El equipo de Origine podrá realizar las actualizaciones habituales del sitio sin depender de un desarrollador.",
    deliverables: [
      { title: "Sitio web publicado", text: "Diseñado según la identidad de Origine, desarrollado y disponible en su dominio, adaptado a computadoras, tablets y celulares." },
      { title: "Diseño editable en Figma", text: "Entrega de los archivos originales del diseño para futuras modificaciones o ampliaciones." },
      { title: "Panel de administración", text: "Acceso a WordPress para gestionar contenidos, publicar propiedades y actualizar su disponibilidad." },
      { title: "Guía de gestión de contenidos", text: "Documento personalizado en inglés, con instrucciones paso a paso para añadir, editar y retirar propiedades, actualizar precios, fotografías y disponibilidad, y modificar los contenidos habilitados para edición." },
      { title: "Configuración para buscadores y medición", text: "Configuración inicial para facilitar la presencia del sitio en buscadores y medir sus resultados." },
      { title: "Accesos y titularidad", text: "Entrega de los accesos correspondientes. Las cuentas y servicios contratados estarán a nombre del cliente." },
    ],
    measurement: {
      title: "Medición de resultados",
      text: "El sitio estará preparado para medir las visitas, conocer qué propiedades generan mayor interés y registrar las consultas recibidas, facilitando la evaluación de futuras campañas publicitarias.",
      tools: "Herramientas incluidas: Google Analytics 4, Google Tag Manager, seguimiento de conversiones de Google Ads y Meta Pixel, respetando los requisitos de privacidad y consentimiento aplicables.",
    },
    listing: { title: "Fichas de propiedades", text: "Incluirán fotografías, descripción, precio, moneda, gastos, ubicación, superficie, habitaciones y disponibilidad." },
    forms: { title: "Formularios", text: "Permitirán conocer los datos de contacto, el presupuesto, la fecha prevista de mudanza y el tipo de consulta. Incluirán protección contra spam, consentimiento, aviso de privacidad y confirmación de envío." },
  },
  method: {
    label: "Metodología de trabajo",
    steps: [
      { title: "Definición del proyecto", text: "Acordamos los objetivos, las funcionalidades, las páginas y los contenidos del sitio." },
      { title: "Diseño visual", text: "Diseño la propuesta en Figma para que podamos revisarla juntos antes de comenzar el desarrollo." },
      { title: "Desarrollo web", text: "Construyo el sitio en WordPress.com e incorporo las funcionalidades acordadas." },
      { title: "Pruebas y publicación", text: "Revisamos el funcionamiento, la adaptación a dispositivos, el rendimiento y la accesibilidad básica. Realizamos los últimos ajustes y entrego los accesos y la guía de gestión de contenidos." },
    ],
    timelineLabel: "Cronograma estimado por propuesta",
    timelineLegend: ["Definición y diseño", "Desarrollo y entrega"],
    weekShort: "S{0}",
    weekLabel: "Semana {0}",
    timeline: TIMELINE,
    timelineNote: "Los plazos son estimados. El inicio se coordina una vez acordado el alcance, recibido el anticipo y disponibles los materiales necesarios.",
    supportLabel: "Revisiones y acompañamiento",
    support: [
      { title: "Decisiones y revisiones compartidas", text: "Participarás en las decisiones de cada etapa. Revisaremos juntos el diseño antes de comenzar el desarrollo y el sitio antes de su publicación, con los ajustes necesarios dentro del alcance acordado." },
      { title: "{0} días de soporte", text: "Todas las propuestas incluyen {0} días de soporte desde la publicación para resolver consultas, corregir errores y realizar pequeños ajustes visuales o de contenido." },
      { title: "Continuidad", text: "Después de este período, el mantenimiento es opcional. Podemos seguir colaborando según las necesidades del proyecto, sin una suscripción mensual." },
    ],
  },
  tech: {
    title: "Tecnología e infraestructura",
    platformName: "WordPress.com",
    platformTag: "Plataforma propuesta para el desarrollo y alojamiento del sitio web.",
    platformText: "La recomiendo porque:",
    reasons: [
      "Permite gestionar contenidos y propiedades sin conocimientos de programación.",
      "Incluye el alojamiento del sitio web.",
      "Permite incorporar nuevas funcionalidades en el futuro.",
    ],
    plansLabel: "Planes de referencia de WordPress.com",
    planRows: [
      { label: "Propuesta", values: ["Básica e Intermedia", "Integral"] },
      { label: "Almacenamiento", values: ["13 GB", "50 GB"] },
      { label: "Pago anual", values: ["{annual} al año", "{annual} al año"] },
      { label: "Pago mensual", values: ["{monthly} al mes", "{monthly} al mes"] },
    ],
    plansNote: "Se contratará un único plan. Estos precios corresponden a WordPress.com, no a mis honorarios profesionales, y son tarifas orientativas sin impuestos.",
    pricingLinkLabel: "Consultar precios oficiales",
    includedLabel: "Configuración que realizaré",
    included: "Configuración del sitio, instalación de las herramientas necesarias, conexión del dominio, certificado de seguridad, copias de seguridad según el plan y entrega de los accesos.",
    externalLabel: "Servicios que se contratan por separado",
    external: "Suscripción de WordPress.com, registro o renovación del dominio y licencias adicionales, si fueran necesarias.",
  },
  terms: {
    title: "Condiciones comerciales",
    paymentLabel: "Forma de pago",
    paymentSteps: ["Anticipo", "Al finalizar el proyecto"],
    paymentNote: "Corresponde a los honorarios profesionales de la propuesta seleccionada.",
    maintenanceLabel: "Mantenimiento opcional",
    maintenanceText: "Después de los {0} días de soporte incluido, podemos coordinar intervenciones puntuales según las necesidades y el alcance del trabajo.",
    extraLabel: "Consideraciones adicionales",
    extras: [
      "Los contenidos, fotografías autorizadas, traducciones y textos legales necesarios serán facilitados por el cliente.",
      "La producción de contenidos, las traducciones, la gestión publicitaria y las nuevas funcionalidades podrán evaluarse y cotizarse por separado cuando sean necesarias.",
      "Las automatizaciones y conexiones con portales inmobiliarios se podrán evaluar en futuras ampliaciones.",
    ],
  },
  value: {
    title: "Mi experiencia y forma de trabajar",
    intro: "Cuento con más de cinco años de experiencia en diseño de productos digitales y he participado en proyectos del sector inmobiliario como InfoCasas y Finca Raíz.",
    approach: "Puedo acompañar el proyecto desde la organización de la información y el diseño de la experiencia hasta el desarrollo y la publicación del sitio web.",
    teamwork: "Me gusta trabajar en equipo, acordar prioridades y encontrar soluciones que se adapten a las necesidades de cada proyecto.",
    years: { label: "Experiencia", value: "+5 años", text: "Diseño de productos digitales" },
    sector: { label: "Sector inmobiliario" },
    execution: { label: "Ejecución", value: "UX/UI + Web", text: "Diseño, prototipado e implementación." },
    collabLabel: "Colaboración con Aparicio Brand",
    collab: "Me interesa establecer una relación de colaboración a largo plazo con Aparicio Brand, aportando mi experiencia en diseño y desarrollo web tanto para este proyecto como para futuras iniciativas.",
    portfolioLabel: "Portfolio",
  },
};

const en: Presentation = {
  eyebrow: "Aparicio Brand / Origine Relocation · Switzerland",
  role: "Web design and development",
  objectives: {
    title: "Web design and development proposal",
    intro: [
      "Origine Relocation offers real-estate and relocation support services to people who want to settle in Switzerland.",
      "I propose building a website that presents its services, builds trust, publishes properties and receives enquiries from people whose budget and needs are better aligned with its property offering.",
    ],
    label: "Project objectives",
    journeyLabel: "From search to contact",
    journey: [
      { title: "Discovery", text: "The person reaches the site from Google, social media or a shared link." },
      { title: "Exploration", text: "They browse the available properties, with photos, features, location and prices." },
      { title: "Contact", text: "They share their details, budget, preferences and expected move-in date." },
      { title: "Sales follow-up", text: "The Origine team receives the information needed to assess the enquiry and contact the person." },
    ],
    items: [
      "Present Origine, its team and its real-estate and relocation services in Switzerland.",
      "Let the team manage and publish properties without depending on a developer.",
      "Present each property on its own page that can be easily shared.",
      "Make it easy for interested people to send enquiries and request viewings, depending on the chosen proposal.",
      "Understand the budget, preferences and needs of interested people.",
      "Prepare the site for advertising campaigns and measure the enquiries received.",
    ],
  },
  table: {
    title: "Proposal comparison",
    lead: "I have prepared three alternatives with different features and investment levels, which we can adapt to Origine Relocation's needs and priorities.",
    cornerLabel: "Project investment",
    cornerText: "Compare features and timelines.",
    rows: [
      { label: "Website structure", values: { basica: "Single institutional page", intermedia: "Multi-page site", integral: "Multi-page site" } },
      { label: "Site language", values: { basica: "English", intermedia: "English", integral: "English and French" } },
      { label: "Self-managed property catalogue", values: { basica: "Included", intermedia: "Included", integral: "Included" } },
      { label: "Individual page for each property", values: { basica: "Included", intermedia: "Included", integral: "Included" } },
      { label: "Initial property upload", values: { basica: "Up to 3", intermedia: "Up to 10", integral: "Up to 20" } },
      { label: "Property status updates", values: { basica: "Included", intermedia: "Included", integral: "Included" } },
      { label: "Filters by city and canton", values: { basica: "Included", intermedia: "Included", integral: "Included" } },
      { label: "Filters by price and property type", values: { basica: "—", intermedia: "Included", integral: "Included" } },
      { label: "Filters by rooms and area", values: { basica: "—", intermedia: "—", integral: "Included" } },
      { label: "Sort properties by price or date", values: { basica: "—", intermedia: "Included", integral: "Included" } },
      { label: "Property search on an interactive map", values: { basica: "—", intermedia: "—", integral: "Included" } },
      { label: "Contact form", values: { basica: "General", intermedia: "Per property", integral: "Per property" } },
      { label: "Viewing request", values: { basica: "—", intermedia: "—", integral: "Included" } },
      { label: "Additional pages for advertising campaigns", values: { basica: "—", intermedia: "—", integral: "Up to 2" } },
      { label: "Integration with the customer management system (CRM)", values: { basica: "—", intermedia: "—", integral: "1 compatible system" } },
      { label: "Initial set-up for search engines and enquiry tracking", values: { basica: "Included", intermedia: "Included", integral: "Included" } },
      { label: "Estimated delivery time", values: { basica: "2 weeks", intermedia: "3–4 weeks", integral: "4–5 weeks" } },
    ],
    summaries: {
      basica: "A first version of the site to present the services, publish properties and receive enquiries.",
      intermedia: "More pages, easier property search and enquiries about a specific property.",
      integral: "Bilingual site, advanced search, viewing requests and a connection with customer management.",
    },
    notes: [
      { title: "About the initial upload", text: "The number shown refers only to the properties I will upload during the initial development. It does not limit the catalogue: the team will be able to add as many as needed." },
      { title: "Maps and customer management", text: "For the Comprehensive proposal, we will define the map tools and the connection with the customer management system, taking into account their compatibility and any licence costs." },
    ],
    deliverablesLabel: "What you will receive at the end (in all three proposals)",
    deliverablesIntro: "The Origine team will be able to make everyday updates to the site without depending on a developer.",
    deliverables: [
      { title: "Published website", text: "Designed around Origine's identity, built and live on its domain, adapted to computers, tablets and phones." },
      { title: "Editable design in Figma", text: "Handover of the original design files for future changes or extensions." },
      { title: "Admin panel", text: "Access to WordPress to manage content, publish properties and update their availability." },
      { title: "Content management guide", text: "A personalised document in English with step-by-step instructions to add, edit and remove properties, update prices, photos and availability, and change the content enabled for editing." },
      { title: "Search engine and tracking set-up", text: "Initial set-up to help the site appear in search engines and to measure its results." },
      { title: "Access and ownership", text: "Handover of the corresponding access details. Accounts and purchased services will be in the client's name." },
    ],
    measurement: {
      title: "Results tracking",
      text: "The site will be ready to measure visits, see which properties attract the most interest and record the enquiries received, making it easier to evaluate future advertising campaigns.",
      tools: "Tools included: Google Analytics 4, Google Tag Manager, Google Ads conversion tracking and Meta Pixel, respecting the applicable privacy and consent requirements.",
    },
    listing: { title: "Property listings", text: "They will include photos, description, price, currency, charges, location, area, rooms and availability." },
    forms: { title: "Forms", text: "They will collect contact details, budget, expected move-in date and enquiry type. They will include spam protection, consent, a privacy notice and a submission confirmation." },
  },
  method: {
    label: "Working method",
    steps: [
      { title: "Project definition", text: "We agree on the goals, features, pages and content of the site." },
      { title: "Visual design", text: "I design the proposal in Figma so we can review it together before development starts." },
      { title: "Web development", text: "I build the site on WordPress.com and add the agreed features." },
      { title: "Testing and launch", text: "We check how the site works, how it adapts to devices, its performance and basic accessibility. We make the final adjustments and I hand over the access details and the content management guide." },
    ],
    timelineLabel: "Estimated timeline by proposal",
    timelineLegend: ["Definition and design", "Development and delivery"],
    weekShort: "W{0}",
    weekLabel: "Week {0}",
    timeline: TIMELINE,
    timelineNote: "Timelines are estimates. The start date is agreed once the scope is defined, the advance payment is received and the necessary materials are available.",
    supportLabel: "Reviews and ongoing support",
    support: [
      { title: "Shared decisions and reviews", text: "You will take part in the decisions at each stage. We will review the design together before development starts and the site before it is published, making the necessary adjustments within the agreed scope." },
      { title: "{0} days of support", text: "All proposals include {0} days of support from publication to answer questions, fix errors and make small visual or content adjustments." },
      { title: "Continuity", text: "After that period, maintenance is optional. We can keep collaborating as the project needs, with no monthly subscription." },
    ],
  },
  tech: {
    title: "Technology and infrastructure",
    platformName: "WordPress.com",
    platformTag: "Proposed platform for building and hosting the website.",
    platformText: "I recommend it because it:",
    reasons: [
      "Lets the team manage content and properties without programming knowledge.",
      "Includes website hosting.",
      "Allows new features to be added in the future.",
    ],
    plansLabel: "WordPress.com reference plans",
    planRows: [
      { label: "Proposal", values: ["Basic and Intermediate", "Comprehensive"] },
      { label: "Storage", values: ["13 GB", "50 GB"] },
      { label: "Annual billing", values: ["{annual} per year", "{annual} per year"] },
      { label: "Monthly billing", values: ["{monthly} per month", "{monthly} per month"] },
    ],
    plansNote: "A single plan will be purchased. These prices belong to WordPress.com, not to my professional fees, and are indicative rates excluding taxes.",
    pricingLinkLabel: "See official prices",
    includedLabel: "Set-up I will handle",
    included: "Site configuration, installation of the necessary tools, domain connection, security certificate, backups according to the plan and handover of access.",
    externalLabel: "Services purchased separately",
    external: "WordPress.com subscription, domain registration or renewal and additional licences, if needed.",
  },
  terms: {
    title: "Commercial terms",
    paymentLabel: "Payment schedule",
    paymentSteps: ["Advance", "On project completion"],
    paymentNote: "Applies to the professional fees of the selected proposal.",
    maintenanceLabel: "Optional maintenance",
    maintenanceText: "After the {0} days of included support, we can arrange one-off interventions according to needs and the scope of the work.",
    extraLabel: "Additional considerations",
    extras: [
      "The client will provide the content, authorised photos, translations and legal texts needed.",
      "Content production, translations, ad management and new features can be assessed and quoted separately when needed.",
      "Automations and connections with property portals can be assessed in future extensions.",
    ],
  },
  value: {
    title: "My experience and way of working",
    intro: "I have more than five years of experience in digital product design and have worked on real-estate projects such as InfoCasas and Finca Raíz.",
    approach: "I can support the project from organising the information and designing the experience through to developing and publishing the website.",
    teamwork: "I enjoy working as a team, agreeing on priorities and finding solutions that fit the needs of each project.",
    years: { label: "Experience", value: "5+ years", text: "Digital product design" },
    sector: { label: "Real-estate sector" },
    execution: { label: "Execution", value: "UX/UI + Web", text: "Design, prototyping and implementation." },
    collabLabel: "Working with Aparicio Brand",
    collab: "I would like to build a long-term working relationship with Aparicio Brand, bringing my web design and development experience to this project and to future initiatives.",
    portfolioLabel: "Portfolio",
  },
};

export const presentation: Record<Locale, Presentation> = { es, en };
