import type { Locale } from "@/i18n/config";
import type { PlanId } from "@/types/proposal";

/**
 * Contenido de la presentación ejecutiva de Origine Relocation (ES / EN).
 * Redactado para personas sin conocimientos técnicos. La primera persona se reserva para
 * la sección de experiencia y colaboración. Importes, pagos y días de soporte se insertan
 * desde los datos aprobados (origine-relocation.ts) mediante {0}, {annual} y {monthly}; no se repiten aquí.
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
    durationLabel: string;
    summaries: Record<PlanId, string>;
    notes: Item[];
    deliverablesLabel: string;
    deliverablesIntro: string;
    deliverables: Item[];
    measurement: { title: string; text: string; tools: string; scope: string };
    listing: Item;
    forms: Item;
  };
  method: {
    label: string;
    steps: Item[];
    timelineLabel: string;
    stageLabels: [string, string];
    weekShort: string;
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
    renewalNote: string;
    pricingLinkLabel: string;
    includedLabel: string;
    included: string;
    externalLabel: string;
    external: string;
  };
  terms: {
    title: string;
    requiredTag: string;
    optionalTag: string;
    asNeededTag: string;
    paymentLabel: string;
    paymentSteps: [string, string];
    paymentNote: string;
    maintenanceLabel: string;
    maintenanceText: string[];
    extraLabel: string;
    extras: string[];
  };
  value: {
    title: string;
    approach: string;
    teamwork: string;
    years: { label: string; value: string; text: string };
    sector: { label: string; text: string };
    collabLabel: string;
    collab: string;
    portfolioLabel: string;
  };
}

const es: Presentation = {
  eyebrow: "Aparicio Brand / Origine Relocation · Suiza",
  role: "Diseño y desarrollo web",
  objectives: {
    title: "Propuesta de diseño y desarrollo web",
    intro: [
      "Origine Relocation ofrece servicios inmobiliarios y de acompañamiento a personas que buscan establecerse en Suiza.",
      "Esta propuesta contempla el diseño y desarrollo de un sitio web para presentar sus servicios, generar confianza, publicar propiedades y recibir consultas de personas cuyo presupuesto y necesidades estén más alineados con su oferta inmobiliaria.",
    ],
    label: "Objetivos del proyecto",
    items: [
      "Presentar a Origine, su equipo y sus servicios inmobiliarios y de relocation en Suiza.",
      "Permitir que el equipo gestione y publique propiedades sin depender de un desarrollador.",
      "Presentar cada propiedad en una página individual que pueda compartirse fácilmente.",
      "Facilitar las consultas y las solicitudes de visita, según la propuesta elegida.",
      "Conocer el presupuesto, las preferencias y las necesidades de las personas interesadas.",
      "Preparar el sitio para campañas publicitarias y para medir las consultas recibidas.",
    ],
    journeyLabel: "De la búsqueda al contacto",
    journey: [
      { title: "Descubrimiento", text: "La persona llega al sitio desde Google, redes sociales o un enlace compartido." },
      { title: "Exploración", text: "Recorre las propiedades disponibles con sus fotografías, características, ubicación y precio." },
      { title: "Contacto", text: "Envía sus datos, presupuesto, preferencias y fecha prevista de mudanza." },
      { title: "Seguimiento comercial", text: "El equipo de Origine recibe la información necesaria para evaluar la consulta y contactar a la persona." },
    ],
  },
  table: {
    title: "Comparativa de propuestas",
    lead: "Tres alternativas con diferentes funcionalidades y niveles de inversión, que pueden ajustarse a las necesidades y prioridades de Origine Relocation.",
    cornerLabel: "Inversión por proyecto",
    cornerText: "Funcionalidades y plazos de cada alternativa.",
    summaries: {
      basica: "Primera versión del sitio para presentar los servicios, publicar propiedades y recibir consultas.",
      intermedia: "Sitio con varias secciones, más filtros de búsqueda y consultas asociadas a cada propiedad.",
      integral: "Sitio bilingüe, búsqueda avanzada, solicitudes de visita y conexión con la gestión de clientes.",
    },
    rows: [
      { label: "Estructura del sitio", values: { basica: "Página principal y catálogo", intermedia: "Sitio con varias secciones", integral: "Sitio con varias secciones" } },
      { label: "Idioma del sitio", values: { basica: "Inglés", intermedia: "Inglés", integral: "Inglés y francés" } },
      { label: "Catálogo de propiedades administrable", values: { basica: "Incluido", intermedia: "Incluido", integral: "Incluido" } },
      { label: "Página individual por propiedad", values: { basica: "Incluida", intermedia: "Incluida", integral: "Incluida" } },
      { label: "Carga inicial de propiedades", values: { basica: "Hasta 3", intermedia: "Hasta 10", integral: "Hasta 20" } },
      { label: "Actualización de la disponibilidad", values: { basica: "Incluida", intermedia: "Incluida", integral: "Incluida" } },
      { label: "Filtros por ciudad y cantón", values: { basica: "Incluidos", intermedia: "Incluidos", integral: "Incluidos" } },
      { label: "Filtros por precio y tipo de propiedad", values: { basica: "—", intermedia: "Incluidos", integral: "Incluidos" } },
      { label: "Filtros por habitaciones y superficie", values: { basica: "—", intermedia: "—", integral: "Incluidos" } },
      { label: "Orden de propiedades por precio o fecha", values: { basica: "—", intermedia: "Incluido", integral: "Incluido" } },
      { label: "Búsqueda en un mapa interactivo", values: { basica: "—", intermedia: "—", integral: "Incluida, sujeta a compatibilidad" } },
      { label: "Formulario de contacto", values: { basica: "General", intermedia: "Por propiedad", integral: "Por propiedad" } },
      { label: "Solicitudes de visita", values: { basica: "—", intermedia: "—", integral: "Incluidas" } },
      { label: "Páginas adicionales para campañas publicitarias", values: { basica: "—", intermedia: "—", integral: "Hasta 2" } },
      { label: "Conexión con un sistema de gestión de clientes (CRM) existente", values: { basica: "—", intermedia: "—", integral: "1 sistema compatible" } },
      { label: "Configuración inicial para buscadores y medición", values: { basica: "Incluida", intermedia: "Incluida", integral: "Incluida" } },
    ],
    durationLabel: "Plazo estimado",
    notes: [
      { title: "Detalle de la estructura", text: "Básica: una página principal que presenta los servicios y el equipo, junto con el catálogo, las páginas individuales de las propiedades, el contacto y las páginas legales. Intermedia e Integral: inicio, servicios, catálogo, páginas individuales de las propiedades, sobre Origine, contacto y páginas legales. Las tres propuestas incluyen las páginas de privacidad, cookies y aviso legal, con textos facilitados por el cliente." },
      { title: "Sobre la carga inicial", text: "La cantidad indicada corresponde a las propiedades incluidas en la carga inicial. Posteriormente, el equipo de Origine podrá añadir, editar y retirar propiedades de forma autónoma." },
      { title: "Cómo funcionan las solicitudes de visita", text: "En la propuesta Integral, las solicitudes de visita serán recibidas y coordinadas por el equipo de Origine directamente con cada persona interesada. No se incluye un sistema de reservas automáticas." },
      { title: "Mapa interactivo y gestión de clientes", text: "La propuesta Integral contempla la búsqueda mediante un mapa interactivo y la conexión con un sistema de gestión de clientes existente y compatible. Las herramientas y los posibles costos de licencia se definirán durante el proyecto, una vez comprobada su compatibilidad." },
    ],
    deliverablesLabel: "Entregables incluidos en las tres propuestas",
    deliverablesIntro: "Con el panel de administración y la guía, el equipo de Origine podrá realizar las actualizaciones habituales sin depender de un desarrollador.",
    deliverables: [
      { title: "Sitio web publicado", text: "Diseñado según la identidad de Origine y adaptado a computadoras, tablets y celulares." },
      { title: "Diseño editable en Figma", text: "Archivos originales del diseño, disponibles para futuras modificaciones o ampliaciones." },
      { title: "Panel de administración", text: "Acceso a WordPress para gestionar los contenidos y las propiedades del sitio." },
      { title: "Guía de gestión de contenidos", text: "Documento personalizado en inglés, con instrucciones paso a paso para añadir, editar y retirar propiedades, actualizar precios, fotografías y disponibilidad, y modificar los contenidos habilitados para edición." },
      { title: "Configuración para buscadores y medición", text: "Configuración inicial para facilitar la presencia del sitio en buscadores y registrar visitas y consultas." },
      { title: "Accesos y titularidad", text: "Entrega de los accesos correspondientes. El dominio, el alojamiento y las cuentas contratadas quedarán a nombre del cliente." },
    ],
    measurement: {
      title: "Medición de resultados",
      text: "El sitio estará preparado para conocer qué propiedades generan mayor interés, registrar las consultas recibidas y las solicitudes de visita cuando corresponda, y facilitar la evaluación de las campañas publicitarias. Cuando sea viable, también permitirá dar seguimiento a los contactos calificados mediante el CRM.",
      tools: "Herramientas incluidas: Google Analytics 4, Google Tag Manager, seguimiento de conversiones de Google Ads y Meta Pixel, sujetas a los requisitos de privacidad y consentimiento correspondientes.",
      scope: "Se incluye la configuración de estas herramientas; la creación y gestión de campañas publicitarias no forma parte de la propuesta.",
    },
    listing: { title: "Fichas de propiedades", text: "Fotografías, descripción, precio, moneda, gastos, ciudad, cantón, ubicación, superficie, habitaciones y disponibilidad. El precio y los gastos se muestran antes del formulario de contacto." },
    forms: { title: "Formularios de contacto", text: "Datos de contacto, presupuesto mensual, tipo de consulta y fecha prevista de mudanza, con aviso de privacidad, consentimiento, protección contra spam y confirmación de envío." },
  },
  method: {
    label: "Metodología de trabajo",
    steps: [
      { title: "Definición del proyecto", text: "Definición conjunta de los objetivos, las funcionalidades, las páginas y los contenidos del sitio." },
      { title: "Diseño UX/UI", text: "Diseño de las interfaces en Figma y revisión conjunta antes de comenzar el desarrollo." },
      { title: "Desarrollo web", text: "Implementación del sitio en WordPress.com y configuración de las funcionalidades acordadas." },
      { title: "Pruebas y publicación", text: "Pruebas de funcionamiento, adaptación a dispositivos, rendimiento y accesibilidad básica. Ajustes finales, publicación y entrega de accesos y documentación." },
    ],
    timelineLabel: "Cronogramas estimados",
    stageLabels: ["Definición y diseño", "Desarrollo, pruebas y entrega"],
    weekShort: "S{0}",
    timelineNote: "Los plazos comenzarán una vez aprobado el alcance, recibido el anticipo y disponibles los materiales necesarios, y dependerán de las validaciones durante el proyecto. Las etapas pueden solaparse parcialmente, según las validaciones y la organización del trabajo.",
    supportLabel: "Revisiones y acompañamiento",
    support: [
      { title: "Revisiones incluidas", text: "El diseño y el sitio web se revisarán en conjunto antes del desarrollo y de la publicación, respectivamente. Se realizarán los ajustes necesarios dentro del alcance acordado." },
      { title: "{0} días de soporte", text: "Todas las propuestas incluyen {0} días de soporte desde la publicación para resolver consultas, corregir errores y realizar pequeños ajustes visuales o de contenido." },
      { title: "Acompañamiento posterior", text: "Opcional. Una vez finalizado el soporte incluido, el acompañamiento se coordinará según las necesidades del proyecto." },
    ],
  },
  tech: {
    title: "Tecnología e infraestructura",
    platformName: "WordPress.com",
    platformTag: "Plataforma propuesta para el desarrollo y alojamiento del sitio web.",
    platformText: "Ventajas principales:",
    reasons: [
      "Gestión de contenidos y propiedades sin conocimientos de programación.",
      "Alojamiento del sitio web incluido.",
      "Posibilidad de incorporar nuevas funcionalidades en el futuro.",
    ],
    plansLabel: "Planes de WordPress.com",
    planRows: [
      { label: "Propuesta", values: ["Básica e Intermedia", "Integral"] },
      { label: "Almacenamiento", values: ["13 GB", "50 GB"] },
      { label: "Pago anual", values: ["{annual}/año", "{annual}/año"] },
      { label: "Pago mensual", values: ["{monthly}/mes", "{monthly}/mes"] },
    ],
    plansNote: "Se seleccionará un único plan, con facturación mensual o anual. La contratación se realiza directamente con WordPress.com, a nombre del cliente.",
    renewalNote: "Tarifas orientativas sin impuestos. Las renovaciones estarán sujetas a los precios y condiciones vigentes del proveedor.",
    pricingLinkLabel: "Consultar precios oficiales",
    includedLabel: "Configuración incluida",
    included: "Configuración del sitio, instalación de las herramientas necesarias, conexión del dominio, certificado de seguridad, configuración de copias de seguridad según el plan y entrega de accesos.",
    externalLabel: "Servicios contratados por separado",
    external: "Suscripción de WordPress.com, registro o renovación del dominio y licencias adicionales, cuando corresponda.",
  },
  terms: {
    title: "Condiciones comerciales",
    requiredTag: "Pago del proyecto",
    optionalTag: "Opcional",
    asNeededTag: "Según necesidad",
    paymentLabel: "Forma de pago",
    paymentSteps: ["Anticipo", "Al finalizar el proyecto"],
    paymentNote: "Los porcentajes se aplican al importe de la propuesta seleccionada.",
    maintenanceLabel: "Mantenimiento opcional",
    maintenanceText: [
      "Por intervención puntual, una vez finalizados los {0} días de soporte incluido. No es un pago obligatorio ni una suscripción mensual.",
      "Las intervenciones de mayor alcance se cotizarán por separado.",
    ],
    extraLabel: "Materiales y servicios adicionales",
    extras: [
      "Los textos, fotografías autorizadas, información de las propiedades, traducciones y textos legales necesarios serán facilitados por el cliente.",
      "La producción de contenidos, las traducciones, la gestión publicitaria y las ampliaciones del alcance podrán evaluarse y cotizarse por separado.",
      "Las automatizaciones y conexiones con portales inmobiliarios podrán considerarse en futuras ampliaciones, según su viabilidad técnica.",
    ],
  },
  value: {
    title: "Mi experiencia y forma de trabajar",
    approach: "Acompaño cada proyecto desde la organización de la información hasta el diseño, el desarrollo y la publicación del sitio web.",
    teamwork: "Me gusta trabajar en equipo, establecer prioridades en conjunto y encontrar soluciones que se adapten a las necesidades de cada proyecto.",
    years: { label: "Experiencia", value: "+5 años", text: "En diseño de productos digitales." },
    sector: { label: "Sector inmobiliario", text: "Experiencia en portales inmobiliarios." },
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
      "Origine Relocation offers real-estate and relocation support to people settling in Switzerland.",
      "This proposal covers the design and development of a website that presents its services, builds trust, showcases properties and brings in enquiries from people whose budget and needs are a better match for its property offering.",
    ],
    label: "Project objectives",
    items: [
      "Present Origine, its team and its real-estate and relocation services in Switzerland.",
      "Enable the team to manage and publish properties without relying on a developer.",
      "Give each property its own page that can be easily shared.",
      "Make it easy to send enquiries and request viewings, depending on the chosen proposal.",
      "Understand the budget, preferences and needs of prospective clients.",
      "Prepare the site for advertising campaigns and for tracking the enquiries received.",
    ],
    journeyLabel: "From search to contact",
    journey: [
      { title: "Discovery", text: "The visitor arrives from Google, social media or a shared link." },
      { title: "Exploration", text: "They browse available properties with photos, features, location and price." },
      { title: "Contact", text: "They send their details, budget, preferences and expected move-in date." },
      { title: "Sales follow-up", text: "The Origine team receives what it needs to assess the enquiry and get in touch." },
    ],
  },
  table: {
    title: "Proposal comparison",
    lead: "Three options with different features and levels of investment, which can be adapted to Origine Relocation's needs and priorities.",
    cornerLabel: "Project investment",
    cornerText: "Features and timeline for each option.",
    summaries: {
      basica: "A first version of the site to present the services, publish properties and receive enquiries.",
      intermedia: "Multi-section site, more search filters and enquiries linked to each property.",
      integral: "Bilingual site, advanced search, viewing requests and a connection to customer management.",
    },
    rows: [
      { label: "Site structure", values: { basica: "Home page and catalogue", intermedia: "Multi-section site", integral: "Multi-section site" } },
      { label: "Site language", values: { basica: "English", intermedia: "English", integral: "English and French" } },
      { label: "Manageable property catalogue", values: { basica: "Included", intermedia: "Included", integral: "Included" } },
      { label: "Individual page for each property", values: { basica: "Included", intermedia: "Included", integral: "Included" } },
      { label: "Initial property upload", values: { basica: "Up to 3", intermedia: "Up to 10", integral: "Up to 20" } },
      { label: "Availability updates", values: { basica: "Included", intermedia: "Included", integral: "Included" } },
      { label: "Filters by city and canton", values: { basica: "Included", intermedia: "Included", integral: "Included" } },
      { label: "Filters by price and property type", values: { basica: "—", intermedia: "Included", integral: "Included" } },
      { label: "Filters by rooms and floor area", values: { basica: "—", intermedia: "—", integral: "Included" } },
      { label: "Sort properties by price or date", values: { basica: "—", intermedia: "Included", integral: "Included" } },
      { label: "Search on an interactive map", values: { basica: "—", intermedia: "—", integral: "Included, subject to compatibility" } },
      { label: "Contact form", values: { basica: "General", intermedia: "Per property", integral: "Per property" } },
      { label: "Viewing requests", values: { basica: "—", intermedia: "—", integral: "Included" } },
      { label: "Additional landing pages for ad campaigns", values: { basica: "—", intermedia: "—", integral: "Up to 2" } },
      { label: "Connection to an existing customer management system (CRM)", values: { basica: "—", intermedia: "—", integral: "1 compatible system" } },
      { label: "Initial search engine and tracking set-up", values: { basica: "Included", intermedia: "Included", integral: "Included" } },
    ],
    durationLabel: "Estimated timeline",
    notes: [
      { title: "Structure in detail", text: "Basic: a home page presenting the services and the team, plus the catalogue, individual property pages, contact and legal pages. Intermediate and Comprehensive: home, services, catalogue, individual property pages, about Origine, contact and legal pages. All three proposals include privacy, cookie and legal notice pages, with texts provided by the client." },
      { title: "About the initial upload", text: "The number shown refers to the properties included in the initial upload. After that, the Origine team will be able to add, edit and remove properties on its own." },
      { title: "How viewing requests work", text: "In the Comprehensive proposal, viewing requests will be received and arranged by the Origine team directly with each prospective client. An automatic booking system is not included." },
      { title: "Interactive map and customer management", text: "The Comprehensive proposal includes search on an interactive map and a connection to an existing, compatible customer management system. The tools and any licence costs will be defined during the project, once compatibility has been confirmed." },
    ],
    deliverablesLabel: "Deliverables included in all three proposals",
    deliverablesIntro: "With the admin panel and the guide, the Origine team will be able to handle everyday updates without relying on a developer.",
    deliverables: [
      { title: "Live website", text: "Designed around Origine's identity and adapted to computers, tablets and phones." },
      { title: "Editable design in Figma", text: "The original design files, available for future changes or extensions." },
      { title: "Admin panel", text: "WordPress access to manage the site's content and properties." },
      { title: "Content management guide", text: "A tailored document in English with step-by-step instructions to add, edit and remove properties, update prices, photos and availability, and edit the content that can be changed." },
      { title: "Search engine and tracking set-up", text: "Initial set-up to help the site appear in search engines and to record visits and enquiries." },
      { title: "Access and ownership", text: "Handover of all access details. The domain, hosting and purchased accounts will be in the client's name." },
    ],
    measurement: {
      title: "Results tracking",
      text: "The site will be ready to show which properties attract the most interest, record the enquiries received and, where applicable, viewing requests, and make it easier to evaluate advertising campaigns. Where feasible, qualified contacts can also be followed up through the CRM.",
      tools: "Tools included: Google Analytics 4, Google Tag Manager, Google Ads conversion tracking and Meta Pixel, subject to the applicable privacy and consent requirements.",
      scope: "The set-up of these tools is included; creating and managing advertising campaigns is not part of the proposal.",
    },
    listing: { title: "Property listings", text: "Photos, description, price, currency, charges, city, canton, location, floor area, rooms and availability. Price and charges are shown before the contact form." },
    forms: { title: "Contact forms", text: "Contact details, monthly budget, enquiry type and expected move-in date, with a privacy notice, consent, spam protection and a submission confirmation." },
  },
  method: {
    label: "Working method",
    steps: [
      { title: "Project definition", text: "Goals, features, pages and content defined together." },
      { title: "UX/UI design", text: "Interface design in Figma, reviewed together before development begins." },
      { title: "Web development", text: "The site is built on WordPress.com and the agreed features are set up." },
      { title: "Testing and launch", text: "Testing of functionality, device adaptation, performance and basic accessibility. Final adjustments, launch and handover of access and documentation." },
    ],
    timelineLabel: "Estimated timelines",
    stageLabels: ["Definition and design", "Development, testing and delivery"],
    weekShort: "W{0}",
    timelineNote: "Timelines start once the scope has been approved, the advance payment received and the necessary materials are available, and they depend on approvals during the project. Stages may partly overlap, depending on approvals and how the work is organised.",
    supportLabel: "Reviews and support",
    support: [
      { title: "Included reviews", text: "The design and the website will be reviewed together before development and before launch, respectively, with the necessary adjustments made within the agreed scope." },
      { title: "{0} days of support", text: "All proposals include {0} days of support from launch to answer questions, fix errors and make small visual or content adjustments." },
      { title: "Ongoing support", text: "Optional. Once the included support period ends, further support will be arranged as the project needs it." },
    ],
  },
  tech: {
    title: "Technology and infrastructure",
    platformName: "WordPress.com",
    platformTag: "Proposed platform for building and hosting the website.",
    platformText: "Key advantages:",
    reasons: [
      "Content and properties can be managed without any coding knowledge.",
      "Website hosting is included.",
      "New features can be added in the future.",
    ],
    plansLabel: "WordPress.com plans",
    planRows: [
      { label: "Proposal", values: ["Basic and Intermediate", "Comprehensive"] },
      { label: "Storage", values: ["13 GB", "50 GB"] },
      { label: "Annual billing", values: ["{annual}/year", "{annual}/year"] },
      { label: "Monthly billing", values: ["{monthly}/month", "{monthly}/month"] },
    ],
    plansNote: "A single plan will be chosen, billed monthly or annually. It is purchased directly from WordPress.com, in the client's name.",
    renewalNote: "Indicative prices, excluding taxes. Renewals will be subject to the provider's prices and terms at the time.",
    pricingLinkLabel: "See official prices",
    includedLabel: "Set-up included",
    included: "Site configuration, installation of the necessary tools, domain connection, security certificate, backup set-up according to the plan and handover of access.",
    externalLabel: "Services purchased separately",
    external: "WordPress.com subscription, domain registration or renewal and additional licences, where applicable.",
  },
  terms: {
    title: "Commercial terms",
    requiredTag: "Project payment",
    optionalTag: "Optional",
    asNeededTag: "As needed",
    paymentLabel: "Payment schedule",
    paymentSteps: ["Advance", "On project completion"],
    paymentNote: "The percentages apply to the price of the selected proposal.",
    maintenanceLabel: "Optional maintenance",
    maintenanceText: [
      "Per one-off intervention, once the {0} days of included support have ended. It is neither a mandatory payment nor a monthly subscription.",
      "Larger pieces of work will be quoted separately.",
    ],
    extraLabel: "Materials and additional services",
    extras: [
      "The client will provide the copy, authorised photos, property information, translations and legal texts required.",
      "Content production, translations, ad management and scope extensions can be assessed and quoted separately.",
      "Automations and connections to property portals can be considered in future extensions, depending on technical feasibility.",
    ],
  },
  value: {
    title: "My experience and way of working",
    approach: "I take each project from organising the information through to designing, building and launching the website.",
    teamwork: "I enjoy working as part of a team, setting priorities together and finding solutions that fit the needs of each project.",
    years: { label: "Experience", value: "5+ years", text: "In digital product design." },
    sector: { label: "Real-estate sector", text: "Experience with real-estate portals." },
    collabLabel: "Working with Aparicio Brand",
    collab: "I would like to build a long-term working relationship with Aparicio Brand, bringing my web design and development experience to this project and to future initiatives.",
    portfolioLabel: "Portfolio",
  },
};

export const presentation: Record<Locale, Presentation> = { es, en };
