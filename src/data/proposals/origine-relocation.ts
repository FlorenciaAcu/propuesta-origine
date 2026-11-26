import { formatUsd as fmt } from "@/i18n/config";
import type { AdditionalCost, Maintenance, PaymentMilestone, Proposal, WordPressData, WordPressPlanId } from "@/types/proposal";

/**
 * Fuente única de datos de la propuesta para Aparicio Brand · Origine Relocation.
 * Tarjetas, matriz, detalle, cronograma, condiciones, tecnología, FAQ, exportación PNG y servicios leen de acá.
 * Los textos en inglés están en origine-relocation.en.ts: solo reemplazan palabras, nunca valores.
 */

/** Precios oficiales de WordPress.com consultados el 25/11/2026. Editar solo acá. */
export const wordpress: WordPressData = {
  currency: "USD",
  consultedAt: "2026-11-25",
  consultedLabel: "25 de noviembre de 2026",
  taxNote:
    "Importes en USD y sin impuestos. Pueden variar por país, impuestos, promociones y condiciones de renovación. La selección de cada plan es preliminar y se confirma antes de contratar.",
  plans: [
    { id: "premium", name: "Premium", monthlyBilling: 18, monthlyEquivalentAnnual: 8, annual: 96, note: "Referencia para las propuestas Básica e Intermedia." },
    {
      id: "business",
      name: "Business",
      monthlyBilling: 40,
      monthlyEquivalentAnnual: 25,
      annual: 300,
      note: "Referencia para la propuesta Integral. Incorpora funcionalidades avanzadas, copias de seguridad automáticas y entorno de pruebas.",
    },
  ],
  links: [{ label: "Planes y precios de WordPress.com", url: "https://wordpress.com/pricing/" }],
  pluginLinks: [
    { label: "Estatik en WordPress.org", url: "https://wordpress.org/plugins/estatik/" },
    { label: "Estatik: elegir versión", url: "https://estatik.net/choose-your-version/" },
    { label: "Estatik: demo", url: "https://major.estatik.net/" },
    { label: "Easy Property Listings en WordPress.org", url: "https://wordpress.org/plugins/easy-property-listings/" },
  ],
};

export function wordpressPlan(id: WordPressPlanId) {
  const plan = wordpress.plans.find((p) => p.id === id);
  if (!plan) throw new Error(`Plan de WordPress.com inexistente: ${id}`);
  return plan;
}

export const maintenance: Maintenance = {
  minUsd: 50,
  maxUsd: 80,
  unit: "por intervención puntual",
  examples: [
    "Actualización de textos.",
    "Sustitución de fotografías.",
    "Modificación de información institucional.",
    "Ajustes visuales menores.",
    "Revisión y mantenimiento técnico acotado.",
  ],
  note: "Es un valor orientativo, según volumen y complejidad. No es una suscripción mensual obligatoria. Las nuevas funcionalidades, las integraciones complejas y las ampliaciones se cotizan de manera independiente.",
};

/** Honorarios profesionales en USD: única fuente. Pagos, subtotales y textos se calculan a partir de acá. */
export const FEES = { basica: 600, intermedia: 1000, integral: 1600 } as const;

export const SUPPORT_DAYS = 30;
export const maintenanceRange = `USD ${maintenance.minUsd}–${maintenance.maxUsd}`;

/** Condiciones de pago idénticas para las tres propuestas, calculadas sobre los honorarios. */
function standardPayments(price: number): PaymentMilestone[] {
  return [
    { label: "Anticipo", percent: 30, amount: Math.round(price * 0.3) },
    { label: "Contra entrega final", percent: 70, amount: Math.round(price * 0.7) },
  ];
}

const VALIDATIONS: string[] = [
  "Validación 01 — Durante el diseño: revisión de arquitectura, contenidos, navegación, experiencia de usuario, interfaces, adaptación responsive y prototipo. Se realizan las iteraciones necesarias dentro del alcance acordado hasta alcanzar la conformidad del cliente. El diseño se aprueba antes de pasar a su implementación definitiva.",
  "Validación 02 — Antes de la publicación: revisión visual, funcional y técnica del sitio implementado. Se verifica la correspondencia con el diseño aprobado, la navegación, los formularios, las funcionalidades, el responsive, la accesibilidad básica y la configuración técnica. Las correcciones necesarias se realizan antes de publicar.",
];

const SUPPORT_TEXT =
  "Treinta días de soporte desde la publicación: correcciones funcionales, ajustes menores, pequeñas modificaciones de contenido y consultas sobre el sitio. No incluye nuevas páginas, rediseños completos, integraciones adicionales ni ampliaciones funcionales.";

const TRANSVERSAL_SCOPE =
  "Incluye los servicios transversales: estrategia, UX/UI, diseño responsive, desarrollo en WordPress.com, SEO inicial, analítica (GA4, GTM, Google Ads y Meta Pixel), privacidad, seguridad inicial, dominio y publicación.";

const GUIDE_DELIVERABLE = "Guía escrita en inglés para la gestión autónoma de contenidos y propiedades";

function subscriptionCost(id: WordPressPlanId): string {
  const p = wordpressPlan(id);
  return `Suscripción de WordPress.com ${p.name} (referencia: ${fmt(p.annual, "es")} al año), contratada y abonada por el cliente directamente al proveedor.`;
}

const COMMON_EXTRA_COSTS = [
  "Registro y renovación anual del dominio, según la extensión y el proveedor, si el cliente no utiliza el dominio incluido el primer año en un plan anual elegible.",
  "Licencias del plugin inmobiliario (por ejemplo, versiones de pago de Estatik) o de otros plugins, solo si el alcance las requiere. Se confirman antes de contratar.",
  "Correo corporativo, servicios de envío de correo y herramientas de consentimiento y privacidad, solo si son necesarios.",
  "Producción de textos y fotografías, y redacción legal.",
  `Mantenimiento posterior: ${maintenanceRange} ${maintenance.unit}.`,
  "Nuevas funcionalidades y ampliaciones: se cotizan por separado.",
];

export const additionalCosts: AdditionalCost[] = [
  { label: "Suscripción de WordPress.com", necessity: "necesario", note: "Plan anual según la propuesta; la abona el cliente al proveedor." },
  { label: "Registro y renovación anual del dominio", necessity: "necesario", note: "Si el cliente no posee uno, o cuando venza el primer año incluido en un plan anual elegible." },
  { label: "Licencias de plugins", necessity: "segun-alcance", note: "Plugin inmobiliario u otros, solo si una funcionalidad lo requiere; se confirma antes de contratar." },
  { label: "Herramientas multilingües", necessity: "segun-alcance", note: "Propuesta Integral: WPML, Polylang o una solución compatible." },
  { label: "Herramientas de consentimiento y privacidad", necessity: "segun-alcance", note: "Según los requisitos legales y la validación del cliente." },
  { label: "CRM", necessity: "segun-alcance", note: "Propuesta Integral: integración con una herramienta existente compatible." },
  { label: "Correo corporativo y servicios de envío de correo", necessity: "opcional", note: "No son obligatorios." },
  { label: "Almacenamiento o copias de seguridad adicionales", necessity: "opcional", note: "Solo si el plan elegido no cubre la necesidad." },
  { label: "Servicios de mapas", necessity: "opcional", note: "Pueden requerir una clave o un plan del proveedor del mapa, según el plugin." },
  { label: "Traducciones", necessity: "segun-alcance", note: "Las proporciona el cliente; las profesionales se contratan aparte." },
  { label: "Producción de textos y fotografías", necessity: "opcional", note: "A cargo del cliente." },
  { label: "Publicidad en portales inmobiliarios", necessity: "opcional", note: "No se garantiza presencia en portales específicos." },
  { label: "Inversión en Google Ads y Meta Ads", necessity: "opcional", note: "No está incluida: la gestiona Aparicio Brand o el cliente." },
  { label: "Mantenimiento posterior", necessity: "opcional", note: `${maintenanceRange} ${maintenance.unit}, sin suscripción obligatoria.` },
  { label: "Ampliaciones funcionales", necessity: "opcional", note: "Se cotizan de manera independiente." },
];

export const origineRelocation: Proposal = {
  slug: "origine-relocation",
  version: "4.0.2",
  issuedAt: "2026-11-25",
  issuedLabel: "26 de noviembre de 2026",
  wordpress,
  maintenance,
  additionalCosts,
  title: "Propuesta de colaboración · Aparicio Brand · Origine Relocation",
  dateLabel: "Noviembre de 2026",
  client: {
    name: "Aparicio Brand",
    project: "Origine Relocation",
    market: "Suiza",
    recipient: "Katerinne Aparicio",
  },
  contact: {
    email: "contact@florenciaux.com",
    whatsappDisplay: "+54 9 264 627 1705",
    whatsappDigits: "5492646271705",
    portfolio: "https://florenciaux.com",
  },
  stages: [
    {
      number: "01",
      title: "Descubrir y definir",
      description:
        "Conversamos sobre objetivos, contenidos y prioridades, y definimos la estructura del sitio. Hito: alcance confirmado.",
    },
    {
      number: "02",
      title: "Diseñar",
      description:
        "Diseño la experiencia y las pantallas en Figma, adaptadas a todos los dispositivos. Hito: diseño aprobado antes de desarrollar.",
    },
    {
      number: "03",
      title: "Implementar",
      description:
        "Desarrollo el sitio en WordPress.com, con el catálogo, los formularios y la medición. Hito: sitio listo para revisar.",
    },
    {
      number: "04",
      title: "Validar y entregar",
      description:
        "Probamos todo juntos, ajusto lo necesario y publico el sitio con una guía para el equipo. Hito: sitio aprobado y publicado.",
    },
  ],
  plans: [
    {
      id: "basica",
      name: "Básica",
      fileSlug: "Basica",
      descriptor: "Presencia digital",
      objective: "Comunicar, posicionar y captar.",
      stage: "Lanzar",
      question: "¿Qué necesitamos para salir al mercado?",
      pitch: "Una primera versión funcional que permite comunicar los servicios, administrar propiedades y comenzar a captar consultas.",
      price: FEES.basica,
      currency: "USD",
      durationLabel: "2 semanas",
      durationWeeks: 2,
      wordpressPlan: "premium",
      highlights: [
        "MVP funcional del sitio, en inglés",
        "Landing institucional y catálogo administrable",
        "Fichas individuales con URL propia y filtro por ciudad y cantón",
        "Formulario general con presupuesto y fecha de mudanza",
        "Carga inicial de hasta 3 propiedades",
      ],
      validations: 2,
      supportDays: SUPPORT_DAYS,
      scope: [
        "MVP funcional del futuro sitio, en inglés.",
        "Landing institucional con presentación de servicios, equipo y contacto.",
        "Catálogo administrable en WordPress.com: el cliente crea, edita, publica y despublica propiedades sin depender de Florencia UX.",
        "Fichas individuales con URL propia y compartible. Cada ficha incluye precio, moneda, gastos, superficie, habitaciones, ubicación, ciudad, cantón, galería de imágenes, descripción y disponibilidad.",
        "Filtro sencillo por ciudad y cantón.",
        "Formulario general con tipo de consulta, presupuesto y fecha de mudanza, consentimiento, antispam y confirmación de envío.",
        "Páginas legales, con textos proporcionados y validados por el cliente.",
        "Carga inicial de hasta 3 propiedades. La cantidad corresponde al servicio de carga inicial, no a un límite técnico del catálogo.",
        "Prototipo responsive editable en Figma.",
        TRANSVERSAL_SCOPE,
      ],
      deliverables: [
        { label: "Prototipo responsive editable en Figma" },
        { label: "MVP publicado en WordPress.com, en inglés" },
        { label: "Catálogo administrable con hasta 3 propiedades cargadas" },
        { label: "Formulario general con notificación al correo acordado" },
        { label: "Configuración de GA4, GTM y eventos de conversión" },
        { label: GUIDE_DELIVERABLE },
        { label: "Accesos y archivos de diseño a nombre del cliente" },
      ],
      process: [
        { title: "Descubrir y definir", description: "Objetivos, contenidos y arquitectura del MVP." },
        { title: "Diseñar", description: "Estructura de la landing y del catálogo, y prototipo en Figma, con Validación 01." },
        { title: "Implementar", description: "Desarrollo, catálogo, formulario y medición." },
        { title: "Validar y entregar", description: "Validación 02, guía escrita y publicación." },
      ],
      schedule: [
        { id: "estrategia", label: "Estrategia", startWeek: 1, endWeek: 1, note: "Objetivos y arquitectura" },
        { id: "diseno", label: "Diseño", startWeek: 1, endWeek: 1, note: "Diseño y validación" },
        { id: "desarrollo", label: "Desarrollo", startWeek: 2, endWeek: 2, note: "Landing, catálogo y formulario" },
        { id: "integraciones", label: "Medición", startWeek: 2, endWeek: 2, note: "GA4, GTM y eventos" },
        { id: "qa", label: "QA", startWeek: 2, endWeek: 2 },
        { id: "publicacion", label: "Publicación", startWeek: 2, endWeek: 2 },
      ],
      scheduleNote:
        "Semana 1: estrategia, arquitectura, diseño y validación. Semana 2: implementación, medición, pruebas y publicación.",
      technologies: [
        { name: "Figma", role: "Diseño UX/UI, arquitectura y prototipo" },
        { name: "WordPress.com Premium (orientativo)", role: "Desarrollo, alojamiento y gestión de contenidos" },
        { name: "Plugin inmobiliario escalable (Estatik o Easy Property Listings, a evaluar)", role: "Catálogo, fichas y filtro por ciudad y cantón" },
        { name: "Editor de bloques y componentes de WordPress", role: "Administración visual de los contenidos" },
        { name: "HTML, CSS y JavaScript", role: "Personalización, cuando sea necesaria" },
        { name: "Plugin de formularios y protección antispam", role: "Formulario general" },
        { name: "GA4, GTM, Google Ads y Meta Pixel", role: "Analítica y medición de conversiones" },
        { name: "Herramientas SEO y de consentimiento", role: "SEO inicial, metadatos y gestión de cookies" },
      ],
      validationsText: VALIDATIONS,
      payments: standardPayments(FEES.basica),
      supportText: SUPPORT_TEXT,
      extraCosts: [subscriptionCost("premium"), ...COMMON_EXTRA_COSTS, "Carga por parte de Florencia UX de propiedades adicionales a las 3 iniciales (el cliente puede cargarlas por su cuenta)."],
      professionalAdvice:
        "Recomiendo lanzar con esta base funcional y ampliarla con los datos reales de consultas y de uso del catálogo.",
    },
    {
      id: "intermedia",
      name: "Intermedia",
      fileSlug: "Intermedia",
      descriptor: "Experiencia inmobiliaria",
      objective: "Explorar, gestionar y convertir.",
      stage: "Consolidar",
      question: "¿Cómo facilitamos que los usuarios encuentren la propiedad adecuada?",
      pitch: "Una experiencia de búsqueda más completa, con filtros, contenidos estructurados y consultas vinculadas a cada propiedad.",
      price: FEES.intermedia,
      currency: "USD",
      durationLabel: "3 a 4 semanas",
      durationWeeks: 4,
      wordpressPlan: "premium",
      highlights: [
        "Incluye la base funcional de la propuesta Básica",
        "Sitio multipágina, en inglés",
        "Filtros por precio y tipo de propiedad, y ordenación de resultados",
        "Formularios contextualizados por propiedad",
        "Carga inicial de hasta 10 propiedades",
      ],
      validations: 2,
      supportDays: SUPPORT_DAYS,
      scope: [
        "Incluye la base funcional de la propuesta Básica: catálogo administrable, fichas individuales con URL propia, galerías, disponibilidad, filtro por ciudad y cantón, formulario con presupuesto y fecha de mudanza, y páginas legales.",
        "Sitio multipágina: inicio, propiedades, servicios, nosotros, contacto e información legal.",
        "Filtros por precio y tipo de propiedad, además de ciudad y cantón.",
        "Ordenación de los resultados.",
        "Formularios contextualizados por propiedad, con la referencia de la propiedad incluida en la consulta.",
        "Idioma: inglés.",
        "Carga inicial de hasta 10 propiedades. La cantidad corresponde al servicio de carga inicial, no a un límite técnico del catálogo.",
        "Prototipo responsive editable en Figma de las plantillas principales.",
        TRANSVERSAL_SCOPE,
      ],
      deliverables: [
        { label: "Arquitectura de información y recorrido de búsqueda y contacto" },
        { label: "Prototipo de las plantillas principales en Figma" },
        { label: "Sitio multipágina publicado en WordPress.com, en inglés" },
        { label: "Catálogo administrable con hasta 10 propiedades cargadas" },
        { label: "Formularios por propiedad y configuración de analítica" },
        { label: GUIDE_DELIVERABLE },
        { label: "Accesos y archivos de diseño a nombre del cliente" },
      ],
      process: [
        { title: "Descubrir y definir", description: "Relevamiento y arquitectura de información del sitio multipágina." },
        { title: "Diseñar", description: "Recorrido de búsqueda y contacto, diseño UX/UI y prototipo, con Validación 01." },
        { title: "Implementar", description: "Catálogo, filtros, ordenación, formularios y analítica." },
        { title: "Validar y entregar", description: "Validación 02, guía escrita y publicación." },
      ],
      schedule: [
        { id: "estrategia", label: "Estrategia", startWeek: 1, endWeek: 1, note: "Relevamiento y arquitectura" },
        { id: "diseno", label: "Diseño", startWeek: 1, endWeek: 2, note: "Diseño UX/UI y validación" },
        { id: "desarrollo", label: "Desarrollo", startWeek: 2, endWeek: 3, note: "Catálogo, filtros, ordenación y formularios" },
        { id: "qa", label: "QA", startWeek: 3, endWeek: 4, note: "Pruebas y validación" },
        { id: "publicacion", label: "Publicación", startWeek: 3, endWeek: 4, note: "Guía y publicación" },
      ],
      scheduleNote:
        "Semana 1: relevamiento y arquitectura. Semanas 1–2: diseño UX/UI y validación. Semanas 2–3: desarrollo del catálogo, filtros, ordenación y formularios. Semanas 3–4: pruebas y validación (QA), guía y publicación, según el avance. Si el desarrollo termina dentro del plazo mínimo, las pruebas y validaciones se realizan igualmente antes de publicar.",
      technologies: [
        { name: "Figma", role: "Diseño UX/UI, arquitectura y prototipo" },
        { name: "WordPress.com Premium (orientativo)", role: "Desarrollo, alojamiento y gestión de contenidos" },
        { name: "Plugin inmobiliario escalable (Estatik o Easy Property Listings, a evaluar)", role: "Catálogo, fichas, filtros y ordenación" },
        { name: "Editor de bloques y componentes de WordPress", role: "Administración visual de los contenidos" },
        { name: "HTML, CSS y JavaScript", role: "Personalización, cuando sea necesaria" },
        { name: "Plugin de formularios y protección antispam", role: "Formularios por propiedad" },
        { name: "GA4, GTM, Google Ads y Meta Pixel", role: "Analítica y medición de conversiones" },
        { name: "Herramientas SEO y de consentimiento", role: "SEO inicial, metadatos y gestión de cookies" },
      ],
      validationsText: VALIDATIONS,
      payments: standardPayments(FEES.intermedia),
      supportText: SUPPORT_TEXT,
      extraCosts: [subscriptionCost("premium"), ...COMMON_EXTRA_COSTS, "Carga por parte de Florencia UX de propiedades adicionales a las 10 iniciales (el cliente puede cargarlas por su cuenta)."],
      professionalAdvice:
        "Recomiendo priorizar fichas completas, con precio y gastos visibles, y facilitar la navegación entre catálogo, ficha y contacto.",
    },
    {
      id: "integral",
      name: "Integral",
      fileSlug: "Integral",
      descriptor: "Ecosistema digital",
      objective: "Integrar, optimizar y escalar.",
      stage: "Escalar",
      question: "¿Cómo ampliamos nuestra capacidad comercial?",
      pitch: "Una solución bilingüe que incorpora búsqueda geográfica, solicitudes de visita, páginas para campañas e integraciones comerciales compatibles.",
      price: FEES.integral,
      currency: "USD",
      durationLabel: "4 a 5 semanas",
      durationWeeks: 5,
      wordpressPlan: "business",
      highlights: [
        "Incluye las funcionalidades de las propuestas anteriores",
        "Inglés y francés, con SEO bilingüe",
        "Filtros por habitaciones y superficie, y búsqueda por mapa*",
        "Solicitudes de visita con confirmación del equipo",
        "Hasta 2 landings adicionales y 1 integración CRM compatible",
        "Carga inicial de hasta 20 propiedades",
      ],
      validations: 2,
      supportDays: SUPPORT_DAYS,
      scope: [
        "Incluye las funcionalidades de las propuestas Básica e Intermedia.",
        "Sitio en inglés y francés, con traducciones proporcionadas por el cliente.",
        "Filtros por habitaciones y superficie, además de los filtros anteriores.",
        "Búsqueda mediante mapa, sujeta a la compatibilidad del plugin elegido.",
        "Solicitudes de visita con confirmación posterior del equipo: no hay reserva automática.",
        "Hasta 2 landing pages adicionales para campañas.",
        "Una integración con un CRM existente compatible, cuya viabilidad se confirma antes de implementarla, y notificaciones de leads.",
        "SEO bilingüe y metadatos para compartir en ambos idiomas.",
        "Carga inicial de hasta 20 propiedades. La cantidad corresponde al servicio de carga inicial, no a un límite técnico del catálogo.",
        "Prototipo responsive editable en Figma de las plantillas y de las landings adicionales.",
        TRANSVERSAL_SCOPE,
      ],
      deliverables: [
        { label: "Arquitectura bilingüe y prototipo en Figma de plantillas y landings adicionales" },
        { label: "Sitio en inglés y francés publicado en WordPress.com" },
        { label: "Catálogo administrable con hasta 20 propiedades cargadas" },
        { label: "Búsqueda por mapa (sujeta a compatibilidad) y filtros ampliados" },
        { label: "Solicitudes de visita y formularios por propiedad, con notificación de leads" },
        { label: "Hasta 2 landings adicionales y una integración CRM compatible" },
        { label: GUIDE_DELIVERABLE },
        { label: "Accesos y archivos de diseño a nombre del cliente" },
      ],
      process: [
        { title: "Descubrir y definir", description: "Estrategia, arquitectura bilingüe y definición del alcance." },
        { title: "Diseñar", description: "Recorridos de búsqueda y conversión, prototipo y landings adicionales, con Validación 01." },
        { title: "Implementar", description: "Catálogo, idiomas, mapa, solicitudes de visita, analítica e integración compatible." },
        { title: "Validar y entregar", description: "Validación 02 en ambos idiomas, guía escrita y publicación." },
      ],
      schedule: [
        { id: "estrategia", label: "Estrategia", startWeek: 1, endWeek: 1, note: "Estrategia y arquitectura" },
        { id: "diseno", label: "Diseño", startWeek: 1, endWeek: 2, note: "Diseño y validación" },
        { id: "desarrollo", label: "Desarrollo", startWeek: 2, endWeek: 4, note: "Catálogo, idiomas, mapa y formularios" },
        { id: "integraciones", label: "Integraciones", startWeek: 3, endWeek: 4, note: "Landings, analítica e integración compatible" },
        { id: "qa", label: "QA", startWeek: 4, endWeek: 5, note: "Pruebas y validación" },
        { id: "publicacion", label: "Publicación", startWeek: 4, endWeek: 5, note: "Guía y publicación" },
      ],
      scheduleNote:
        "Semana 1: estrategia y arquitectura. Semanas 1–2: diseño y validación. Semanas 2–4: desarrollo del catálogo, idiomas, mapa y formularios. Semanas 3–4: landings, analítica e integración compatible. Semanas 4–5: pruebas y validación (QA), guía y publicación, según el avance. Si el desarrollo termina dentro del plazo mínimo, las pruebas y validaciones se realizan igualmente antes de publicar.",
      technologies: [
        { name: "Figma", role: "Diseño UX/UI, arquitectura y prototipo" },
        { name: "WordPress.com Business (orientativo)", role: "Desarrollo, alojamiento, copias de seguridad automáticas y entorno de pruebas" },
        { name: "Plugin inmobiliario escalable (Estatik o Easy Property Listings, a evaluar)", role: "Catálogo, fichas, filtros, ordenación y mapa" },
        { name: "Editor de bloques y componentes de WordPress", role: "Administración visual de los contenidos" },
        { name: "WPML, Polylang o una solución compatible", role: "Sitio en inglés y francés" },
        { name: "HTML, CSS y JavaScript", role: "Personalización, cuando sea necesaria" },
        { name: "Plugin de formularios y protección antispam", role: "Formularios y solicitudes de visita" },
        { name: "GA4, GTM, Google Ads y Meta Pixel", role: "Analítica y medición de conversiones" },
        { name: "Herramientas SEO y de consentimiento", role: "SEO bilingüe, metadatos y gestión de cookies" },
        { name: "Integración existente compatible con CRM", role: "Envío de leads a una herramienta ya utilizada" },
      ],
      validationsText: VALIDATIONS,
      payments: standardPayments(FEES.integral),
      paymentNote: "La búsqueda por mapa y la integración CRM están sujetas a compatibilidad técnica.",
      supportText: SUPPORT_TEXT,
      extraCosts: [
        subscriptionCost("business"),
        ...COMMON_EXTRA_COSTS,
        "Licencias de herramientas multilingües, de mapas y del CRM, si corresponden.",
        "Traducciones profesionales, si el cliente no las proporciona.",
        "Carga por parte de Florencia UX de propiedades adicionales a las 20 iniciales (el cliente puede cargarlas por su cuenta).",
        "Desarrollo de un CRM propio, integraciones personalizadas mediante API y automatizaciones complejas: no incluidos, sujetos a cotización.",
      ],
      professionalAdvice:
        "Recomiendo conectar la captación publicitaria con los procesos comerciales y evaluar futuras integraciones cuando existan datos suficientes.",
    },
  ],
  comparison: [
    { id: "estructura", group: "features", label: "Páginas del sitio", values: { basica: "Landing y páginas legales", intermedia: "Multipágina", integral: "Multipágina" } },
    { id: "idiomas", group: "features", label: "Idiomas", values: { basica: "Inglés", intermedia: "Inglés", integral: "Inglés y francés" } },
    { id: "catalogo", group: "features", label: "Catálogo administrable y fichas con URL propia", values: { basica: "Sí", intermedia: "Sí", integral: "Sí" } },
    { id: "propiedades", group: "features", label: "Propiedades que cargo al inicio", values: { basica: "3 propiedades", intermedia: "10 propiedades", integral: "20 propiedades" } },
    { id: "filtros", group: "features", label: "Filtros", values: { basica: "Ciudad y cantón", intermedia: "Ciudad, cantón, precio y tipo", integral: "Ciudad, cantón, precio, tipo, habitaciones y superficie" } },
    { id: "orden", group: "features", label: "Ordenación de resultados", values: { basica: "No", intermedia: "Sí", integral: "Sí" } },
    { id: "mapa", group: "features", label: "Búsqueda por mapa (sujeta a compatibilidad del plugin)", values: { basica: "No", intermedia: "No", integral: "Sí" } },
    { id: "formularios", group: "capture", label: "Formularios", values: { basica: "General", intermedia: "Por propiedad", integral: "Por propiedad y solicitud de visita" } },
    { id: "landings", group: "capture", label: "Landings adicionales para campañas", values: { basica: "No", intermedia: "No", integral: "Hasta 2" } },
    { id: "crm", group: "capture", label: "Integración CRM (sujeta a compatibilidad)", values: { basica: "No", intermedia: "No", integral: "1 CRM existente" } },
    { id: "seo", group: "capture", label: "SEO", values: { basica: "Inicial", intermedia: "Inicial", integral: "Bilingüe" } },
  ],
  metrics: [
    {
      id: "conversion",
      name: "Tasa de conversión",
      measures: "Formularios enviados dividido por visitas.",
      why: "Indica si la página convierte el interés en consultas.",
      source: "GA4 y GTM.",
      dependencies: "Evento de formulario configurado y consentimiento de medición.",
      kind: "tecnico",
    },
    {
      id: "abandono",
      name: "Abandono del formulario",
      measures: "Personas que inician el formulario y no lo envían.",
      why: "Señala campos o pasos que generan fricción.",
      source: "GA4 y GTM, si se instrumenta.",
      dependencies: "Eventos de inicio y envío del formulario.",
      kind: "tecnico",
    },
    {
      id: "visitas",
      name: "Solicitudes de visita",
      measures: "Pedidos de visita recibidos por propiedad.",
      why: "Es una señal de intención más fuerte que una consulta general.",
      source: "GA4 y GTM, además del correo o el CRM.",
      dependencies: "Solicitudes de visita (propuesta Integral) y evento configurado.",
      kind: "tecnico",
    },
    {
      id: "leads-validos",
      name: "Porcentaje de leads válidos",
      measures: "Consultas que el equipo comercial considera atendibles.",
      why: "Separa el volumen de contactos de su calidad.",
      source: "Clasificación del equipo comercial.",
      dependencies: "Criterio de validez acordado con Origine y registro del equipo.",
      kind: "comercial",
    },
    {
      id: "presupuesto",
      name: "Leads con presupuesto compatible",
      measures: "Consultas cuyo presupuesto declarado se ajusta a la propiedad.",
      why: "Permite evaluar si la consulta es compatible con la oferta, algo que hoy no está medido.",
      source: "Campo de presupuesto del formulario y validación comercial.",
      dependencies: "Rangos de presupuesto definidos por Origine.",
      kind: "comercial",
    },
    {
      id: "cpl",
      name: "Costo por lead calificado",
      measures: "Inversión publicitaria dividida por leads calificados.",
      why: "Permite comparar canales por calidad y no solo por registro.",
      source: "Datos de campañas de Aparicio Brand y clasificación comercial.",
      dependencies: "Acceso a datos de inversión y criterio de calificación.",
      kind: "comercial",
    },
    {
      id: "cpv",
      name: "Costo por visita agendada",
      measures: "Inversión publicitaria dividida por visitas agendadas.",
      why: "Acerca la medición al avance real del proceso comercial.",
      source: "Datos de campañas y registro de visitas.",
      dependencies: "Registro de visitas agendadas por el equipo.",
      kind: "comercial",
    },
    {
      id: "oportunidades",
      name: "Conversión de leads en oportunidades",
      measures: "Leads que se convierten en oportunidades comerciales.",
      why: "Conecta la web con el resultado de negocio.",
      source: "CRM o registro comercial.",
      dependencies: "Información suficiente y sostenida en el tiempo.",
      kind: "comercial",
    },
  ],
  conditions: [
    {
      id: "cliente",
      title: "Responsabilidades del cliente",
      items: [
        "Entregar la identidad de marca.",
        "Proporcionar textos, fotos autorizadas y datos de propiedades.",
        "Contratar y abonar la suscripción de WordPress.com y el dominio, a su nombre y directamente al proveedor.",
        "Facilitar accesos a dominio y herramientas de analítica.",
        "Proporcionar traducciones cuando corresponda.",
        "Validar servicios, localidades y cobertura territorial.",
        "Validar textos legales y tratamiento de datos personales.",
        "Consolidar el feedback de cada validación.",
        "Aprobar los hitos del proyecto.",
      ],
    },
    {
      id: "incluido",
      title: "Qué incluye",
      items: [
        "Diseño.",
        "Desarrollo del alcance seleccionado.",
        "Implementación funcional.",
        "Dos momentos de validación, con las iteraciones necesarias dentro del alcance acordado.",
        "Pruebas.",
        "Configuración inicial de dominio y publicación.",
        "Guía escrita en inglés para la gestión de contenidos y propiedades.",
        "Treinta días de soporte desde la publicación.",
      ],
    },
    {
      id: "no-incluido",
      title: "Qué no incluye",
      items: [
        "Suscripción de WordPress.com y registro o renovación del dominio.",
        "Licencias de plugins o herramientas.",
        "Capacitación en vivo.",
        "Producción fotográfica.",
        "Traducciones profesionales.",
        "Redacción legal.",
        "Gestión o inversión publicitaria.",
        "Carga de propiedades adicionales a la carga inicial incluida, por parte de Florencia UX.",
        "Nuevas funcionalidades posteriores.",
        "Mantenimiento posterior, que se cotiza por intervención.",
        "Integraciones personalizadas y feeds a portales inmobiliarios.",
        "Meta Conversions API.",
        "Automatizaciones complejas.",
      ],
    },
  ],
};
