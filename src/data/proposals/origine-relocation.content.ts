import type { ProposalContent } from "@/types/proposal";
import { SUPPORT_DAYS, maintenanceRange } from "./origine-relocation";

export const origineContent: ProposalContent = {
  hero: {
    eyebrow: "Propuesta de colaboración / Aparicio Brand",
    title: "Una experiencia digital que conecte propiedades con oportunidades reales.",
    description:
      "Propongo diseñar y desarrollar una presencia digital para Origine Relocation que combine estrategia de negocio, experiencia de usuario y tecnología, con el objetivo de generar confianza y favorecer la captación de potenciales clientes.",
    meta: [
      { label: "Proyecto", value: "Origine Relocation" },
      { label: "Cliente", value: "Aparicio Brand" },
      { label: "Mercado", value: "Suiza" },
      { label: "Fecha", value: "Noviembre de 2026" },
    ],
  },
  business: {
    eyebrow: "Propuesta para Aparicio Brand · Origine Relocation",
    title: "Objetivos del proyecto.",
    intro:
      "A partir del brief, estos son los objetivos que guían mi propuesta para el sitio de Origine Relocation. Me encantaría revisarlos juntos al comenzar.",
    objectives: [
      { number: "01", title: "Credibilidad institucional", description: "Presentar a Origine y a su equipo con una imagen profesional que genere confianza." },
      { number: "02", title: "Catálogo de propiedades", description: "Mostrar las propiedades en fichas individuales, cada una con su propia URL para compartir." },
      { number: "03", title: "Consultas y visitas", description: "Facilitar las solicitudes de información y de visita desde cada propiedad." },
      { number: "04", title: "Interesados mejor orientados", description: "Conocer el presupuesto, el tipo de propiedad, la fecha prevista y las necesidades antes del primer contacto." },
      { number: "05", title: "Campañas y medición", description: "Contar con páginas de destino y medición de conversiones para Meta Ads y Google Ads." },
      { number: "06", title: "Ciudad y cantón", description: "Identificar la ciudad y el cantón de cada propiedad y filtrar por localidad, sin presentar el inventario como exclusivo de Ginebra." },
    ],
  },
  diagnosis: {
    eyebrow: "Antecedentes del brief",
    title: "Antecedentes de las campañas publicitarias.",
    stats: [
      { label: "Registros", value: "26", hint: "Obtenidos mediante formularios" },
      { label: "Costo por registro", value: "USD 5,77", hint: "Promedio" },
      { label: "Mensajes a WhatsApp", value: "0", hint: "Conversaciones registradas en esa campaña" },
    ],
    source: "Fuente: Brief Origine Relocation · septiembre–octubre de 2026",
    body: [
      "El feedback comercial indica que los contactos evaluados no tenían el presupuesto adecuado para la propiedad anunciada. No hay información suficiente para establecer la causa exacta.",
    ],
    conclusion:
      "Estos antecedentes orientan la propuesta hacia una experiencia que facilite la calificación de interesados y permita medir posteriormente la calidad de las consultas.",
  },
  journey: {
    eyebrow: "Recorrido propuesto",
    title: "Cómo podría recorrer el sitio una persona interesada.",
    intro:
      "Es una hipótesis de diseño derivada del brief, no un journey map validado con investigación de usuarios. Se ajusta en el relevamiento.",
    badge: "Recorrido propuesto · hipótesis de diseño",
    steps: [
      { number: "01", title: "Llegada", description: "Desde una campaña o una búsqueda." },
      { number: "02", title: "Exploración", description: "De servicios y propiedades." },
      { number: "03", title: "Información", description: "Consulta de los datos relevantes." },
      { number: "04", title: "Formulario", description: "Contacto y calificación." },
      { number: "05", title: "Seguimiento", description: "Recepción y atención del equipo comercial." },
    ],
    audiences: [
      { title: "Profesionales internacionales y expatriados", description: "Según el brief." },
      { title: "Parejas y familias", description: "Según el brief." },
      { title: "Personas interesadas en propiedades", description: "Según el brief." },
      { title: "Propietarios", description: "Solo si se confirma que Origine ofrece ese servicio." },
    ],
    audiencesNote:
      "Los públicos provienen del brief. No hay personas detalladas ni investigación propia: eso forma parte del relevamiento del proyecto.",
  },
  architecture: {
    eyebrow: "Arquitectura sugerida",
    title: "Cómo podría organizarse el sitio inmobiliario.",
    intro:
      "Es la estructura sugerida en el brief. Las tres propuestas incluyen un catálogo administrable con fichas individuales; la Básica la presenta en un MVP con landing institucional y páginas legales, y Intermedia e Integral la amplían a un sitio multipágina.",
    tree: [
      { label: "Inicio" },
      { label: "Propiedades", children: ["Listado", "Ficha individual"] },
      { label: "Servicios", children: ["Real Estate", "Relocation"] },
      { label: "Nosotros" },
      { label: "Contacto" },
      { label: "Información legal" },
    ],
    pendingTitle: "Sujeto a confirmación por Origine",
    pending: ["Venta", "Atención a propietarios", "Trámites", "Escuelas", "Mudanzas", "Empresas"],
    pendingNote:
      "No incorporo estos servicios ni una cobertura geográfica hasta que Origine los confirme.",
  },
  value: {
    eyebrow: "Mi valor agregado",
    title: "Combino estrategia, diseño UX/UI y desarrollo web para transformar necesidades de negocio en soluciones digitales funcionales.",
    intro: "Lo que puedo aportar al equipo de Origine:",
    highlights: [
      "Más de cinco años de experiencia en productos digitales.",
      "Experiencia en el sector inmobiliario con InfoCasas y Finca Raíz.",
      "Capacidad para trabajar desde la arquitectura y el diseño hasta la implementación y la publicación.",
      "Experiencia colaborando con equipos multidisciplinarios.",
      "Capacidad de acompañar la evolución del producto.",
    ],
    linkLabel: "Conocer mi experiencia profesional",
    references: [
      { label: "InfoCasas", url: "https://www.infocasas.com.uy/" },
      { label: "Finca Raíz", url: "https://www.fincaraiz.com.co/" },
    ],
  },
  pricing: {
    approach:
      "Las tres propuestas responden al enfoque de lanzamiento y evolución del brief y comparten la misma base tecnológica: se puede empezar por Lanzar y ampliar progresivamente hacia Consolidar y Escalar. No son niveles de calidad: la calidad profesional es la misma.",
    limitsNote:
      "Las cantidades de propiedades (3, 10 y 20) corresponden al servicio de carga inicial, no a límites técnicos del catálogo: el cliente puede gestionar propiedades adicionales dentro de las capacidades de la infraestructura contratada. La búsqueda por mapa y las integraciones con CRM, portales y servicios externos no se garantizan sin una validación técnica de compatibilidad.",
  },
  services: {
    eyebrow: "Incluido en las tres",
    title: "Lo que incluyen las tres propuestas.",
    intro:
      "Estos servicios no dependen de la propuesta elegida. Cada propuesta suma funcionalidades sobre esta base común.",
    items: [
      { title: "Estrategia", description: "Objetivos, públicos y criterios de éxito antes de diseñar." },
      { title: "UX/UI", description: "Arquitectura, recorridos, formularios y prototipo en Figma." },
      { title: "Diseño responsive", description: "Interfaces adaptadas a móvil, tableta y escritorio." },
      { title: "Desarrollo en WordPress.com", description: "Implementación sobre WordPress.com con un plugin inmobiliario escalable, a evaluar (Estatik o Easy Property Listings)." },
      { title: "SEO inicial", description: "Títulos, metadescripciones, URLs, sitemap y metadatos para compartir." },
      { title: "Analítica", description: "GA4 y Google Tag Manager, con eventos de conversión." },
      { title: "Medición de campañas", description: "Medición para Google Ads y Meta Pixel." },
      { title: "Privacidad", description: "Consentimiento, aviso de privacidad y antispam en los formularios, y gestión del consentimiento de cookies según los requisitos legales y la validación del cliente." },
      { title: "Seguridad inicial", description: "Configuración básica de seguridad y de copias de seguridad, según las capacidades del plan de WordPress.com." },
      { title: "Dominio y publicación", description: "Configuración inicial del dominio, DNS, HTTPS y publicación." },
    ],
    guideTitle: "Guía escrita en inglés",
    guide:
      "Incluyo una guía escrita en inglés para que el equipo gestione de forma autónoma los contenidos y las propiedades. No incluye capacitación en vivo.",
    validationsTitle: "Dos momentos de validación",
    validations:
      "Uno durante el diseño y otro antes de la publicación, con las iteraciones necesarias dentro del alcance acordado.",
    supportTitle: "30 días de soporte",
    support:
      "Desde la publicación: correcciones funcionales, ajustes menores, pequeñas modificaciones de contenido y consultas sobre el sitio.",
    maintenanceTitle: "Mantenimiento bajo demanda",
    maintenance:
      "USD 50–80 por intervención puntual, según volumen y complejidad. No es una suscripción obligatoria.",
    paymentTitle: "Condiciones de pago",
    payment:
      "Iguales para las tres propuestas: 30 % de anticipo y 70 % contra entrega final, calculados solo sobre los honorarios.",
    colPlan: "Propuesta",
    colAdvance: "Anticipo (30 %)",
    colBalance: "Contra entrega (70 %)",
  },
  examples: {
    eyebrow: "Ejemplos visuales",
    title: "Cómo podrían verse las funcionalidades de cada propuesta.",
    intro:
      "Son wireframes ilustrativos del futuro sitio, que estaría en inglés. Muestran lo que suma cada propuesta.",
    disclaimer:
      "Ilustrativo: no es el diseño final ni una funcionalidad ya implementada. Datos ficticios; lo definitivo depende de la validación técnica del plugin.",
    frameLabel: "Wireframe ilustrativo",
    plans: {
      basica: {
        caption: "Lanzamiento funcional: catálogo con fichas, filtro por ciudad y cantón, y formulario general.",
        differentials: ["Catálogo administrable", "Filtro por ciudad y cantón", "Formulario con presupuesto y fecha de mudanza"],
      },
      intermedia: {
        caption: "Búsqueda más completa: filtros por precio y tipo, ordenación y consulta vinculada a cada propiedad.",
        differentials: ["Filtros por precio y tipo", "Ordenación de resultados", "Formulario contextualizado por propiedad"],
      },
      integral: {
        caption: "Capacidad comercial ampliada: sitio EN / FR, mapa, filtros adicionales y solicitudes de visita.",
        differentials: ["Inglés y francés", "Filtros por habitaciones y superficie", "Búsqueda por mapa*", "Solicitud de visita con confirmación del equipo"],
      },
    },
  },
  philosophy: {
    eyebrow: "Mi filosofía de trabajo",
    title: "El alcance cambia. Mi compromiso con la calidad se mantiene.",
    message: "El alcance cambia. Mi compromiso con la calidad se mantiene.",
    intro:
      "Las tres propuestas comparten la misma metodología, el mismo criterio y el mismo cuidado de los entregables. Lo que varía es la complejidad: páginas, funcionalidades e integraciones.",
    principles: [
      { number: "01", title: "Comprender antes de diseñar", description: "Objetivos, contenidos y referentes antes de dibujar." },
      { number: "02", title: "Validar antes de desarrollar", description: "El diseño se aprueba antes de implementarlo." },
      { number: "03", title: "Implementar con atención al detalle", description: "Pruebas funcionales, responsive y de accesibilidad básica." },
      { number: "04", title: "Acompañar después de publicar", description: `${SUPPORT_DAYS} días de soporte en las tres propuestas.` },
    ],
    note: "Es un compromiso de trabajo, no una promesa de resultados comerciales.",
  },
  technology: {
    eyebrow: "Tecnología y costos recurrentes",
    title: "Qué tecnología recomiendo y cuánto cuesta sostenerla.",
    intro:
      "Esta sección describe el futuro sitio de Origine Relocation: la plataforma, las herramientas y los costos de infraestructura.",
    rationaleTitle: "Por qué recomiendo WordPress.com",
    rationale: [
      "Autonomía de gestión: el cliente tiene acceso administrativo y gestiona los contenidos del alcance contratado.",
      "Facilidad de administración con el editor de bloques.",
      "Gestión de contenidos y propiedades con campos y tipos de contenido personalizados.",
      "Alojamiento administrado.",
      "Escalabilidad hacia más propiedades, idiomas e integraciones.",
      "Ecosistema de plugins para formularios, búsqueda, idiomas y SEO.",
      "Menor complejidad de mantenimiento.",
      "Optimización de los costos de implementación: no se desarrolla un gestor inmobiliario desde cero cuando WordPress y herramientas existentes resuelven la necesidad.",
    ],
    rationaleNote:
      "El brief requiere autonomía en la gestión de propiedades. WordPress permite resolver este requerimiento mediante un gestor de contenidos existente, evitando desarrollar un sistema administrativo personalizado desde cero. Es mi recomendación profesional; el brief no exige WordPress.",
    toolsTitle: "Herramientas según el alcance",
    tools: [
      { name: "Figma", role: "Diseño UX/UI, arquitectura y prototipado" },
      { name: "WordPress.com", role: "Desarrollo, alojamiento y gestión de contenidos" },
      { name: "Plugin inmobiliario escalable (Estatik o Easy Property Listings)", role: "Catálogo, fichas, filtros, ordenación y mapa, a evaluar" },
      { name: "Editor de bloques y componentes de WordPress", role: "Administración visual" },
      { name: "HTML, CSS y JavaScript", role: "Personalización cuando sea necesaria" },
      { name: "Plugins de formularios y antispam", role: "Formularios de consulta" },
      { name: "WPML, Polylang o una solución compatible", role: "Gestión multilingüe (Integral)" },
      { name: "Google Analytics 4 y Google Tag Manager", role: "Analítica y administración de eventos" },
      { name: "Google Ads y Meta Pixel", role: "Medición de conversiones y publicidad" },
      { name: "Herramientas SEO, de consentimiento y privacidad", role: "Visibilidad y cumplimiento" },
      { name: "CRM mediante integración existente compatible", role: "Propuesta Integral" },
    ],
    toolsNote:
      "La elección definitiva de plugins se valida antes de contratar servicios: compatibilidad, licencias, rendimiento y funcionalidades. No garantizo que todo pueda implementarse sin licencias adicionales.",
    costsTitle: "Suscripciones oficiales de WordPress.com",
    costsIntro:
      "Los planes de WordPress.com no son las propuestas de Florencia UX: son la infraestructura que contrata el cliente, directamente y a su nombre. Los planes de pago permiten instalar plugins, sujetos a compatibilidad. El equivalente mensual de un plan anual es solo una referencia para comparar: el plan anual se abona en un único pago anual, no por mes.",
    pricesNote: "Fuente: wordpress.com/pricing, consultada el 25/11/2026. Verificar los valores y las condiciones de renovación antes de contratar.",
    investmentTitle: "Inversión del primer año, por separado",
    investmentNote:
      "Los honorarios y la infraestructura se muestran por separado. La suscripción no se descuenta de los honorarios. El subtotal es una estimación y no incluye impuestos, licencias adicionales, registro o renovación del dominio cuando corresponda, ni otros servicios externos.",
    domainTitle: "Dominio y alojamiento",
    domain: [
      "Si Origine tiene un dominio: configuración y vinculación.",
      "Si no lo tiene: asesoramiento para elegir y registrar uno disponible.",
      "Configuración de DNS, HTTPS y SSL, y publicación del sitio.",
      "Los planes anuales pueden incluir un dominio elegible durante el primer año; la renovación posterior es anual y depende de la extensión y del proveedor.",
      "Dominio, suscripción, cuentas y accesos quedan a nombre del cliente. No contrato servicios ni registro dominios sin aprobación.",
      "La configuración inicial de dominio y alojamiento está incluida en los honorarios de las tres propuestas.",
    ],
    additionalTitle: "Posibles costos adicionales",
    additionalIntro:
      "No todos serán necesarios. Se confirman antes de contratar y los abona el cliente. No se indican precios que no hayan sido verificados.",
    maintenanceTitle: "Mantenimiento posterior",
    maintenanceNote: "Finalizado el soporte incluido, ofrezco intervenciones puntuales bajo demanda.",
    pluginsTitle: "Plugins inmobiliarios a evaluar",
    pluginsIntro:
      "El catálogo se apoyaría en un plugin inmobiliario escalable. Evaluaría Estatik o Easy Property Listings; la elección se confirma antes de implementar.",
    pluginsNote:
      "No garantizo la compatibilidad de los plugins ni de funcionalidades concretas (por ejemplo, el mapa) sin una validación técnica previa. Algunas versiones pueden requerir licencias.",
  },
  metricsIntro: {
    title: "Cómo se sabría si funciona.",
    intro:
      "Algunos indicadores se miden con eventos digitales. Otros requieren datos de campañas y validación del equipo comercial.",
    note: "GA4 y GTM miden eventos digitales. Los indicadores comerciales requieren validación humana, datos de campañas o información de un CRM. Esta propuesta no garantiza aumentos de ventas, conversiones, posicionamiento SEO ni resultados publicitarios.",
  },
  termsExtras: {
    revisions:
      "Hay dos momentos principales de validación, comunes a las tres propuestas: Validación 01, durante el diseño, y Validación 02, antes de la publicación. Se realizan las iteraciones necesarias dentro del alcance acordado hasta alcanzar la conformidad del cliente. Las nuevas funcionalidades, los cambios sustanciales de alcance y las redefiniciones de entregables ya aprobados se evalúan y presupuestan por separado.",
    support: `Las tres propuestas incluyen ${SUPPORT_DAYS} días de soporte desde la publicación: correcciones funcionales, ajustes menores, pequeñas modificaciones de contenido y consultas. No incluye nuevas páginas, rediseños completos, integraciones adicionales ni ampliaciones funcionales.`,
    thirdParty:
      "Los costos de terceros se confirman antes de contratar y los abona el cliente directamente al proveedor. Los importes de WordPress.com son de referencia; no se indican precios de licencias, proveedores ni servicios cuya tarifa no se haya verificado.",
    included: [
      "Los servicios transversales y las funcionalidades de la propuesta elegida.",
      "Configuración inicial de dominio y publicación en WordPress.com.",
      "Medición de eventos con GA4 y GTM, con gestión del consentimiento de cookies.",
      "Configuración inicial de copias de seguridad, según las capacidades del plan de WordPress.com.",
      "Guía escrita en inglés para la gestión de contenidos y propiedades.",
    ],
    future: [
      "Favoritos y alertas de propiedades.",
      "Integraciones con portales y feeds automáticos.",
      "Meta Conversions API.",
      "Automatizaciones complejas y CRM avanzado.",
    ],
    quoted: [
      "Suscripción de WordPress.com, dominio y licencias de plugins.",
      "Producción fotográfica, traducciones profesionales y redacción legal.",
      "Carga de propiedades adicionales a la inicial y nuevas funcionalidades.",
      "Mantenimiento posterior, por intervención puntual.",
    ],
    ownership:
      "El dominio, la suscripción, las cuentas de analítica y los accesos administrativos quedan a nombre del cliente. No contrato servicios ni registro dominios sin su aprobación. Los archivos de diseño y los accesos se entregan al finalizar.",
    cookies:
      "La gestión del consentimiento de cookies y de las herramientas de medición se configura según los requisitos legales aplicables y la validación del cliente. No constituye asesoramiento legal.",
    homeStaging:
      "Si se utilizan imágenes con home staging digital, se identifican expresamente como tales.",
    recurring: [],
  },
  roadmap: {
    title: "Cómo podría evolucionar Origine Relocation.",
    intro:
      "Las tres propuestas comparten la misma base tecnológica y permiten ampliar la solución progresivamente. Estas evoluciones no están incluidas, salvo lo que cada propuesta indica expresamente.",
    items: [
      "Favoritos para guardar propiedades.",
      "Alertas de nuevas propiedades.",
      "Automatizaciones de seguimiento comercial.",
      "CRM avanzado.",
      "Integraciones con portales inmobiliarios.",
      "Nuevos idiomas.",
      "Optimización continua de la experiencia de búsqueda y de los formularios.",
    ],
    note: "Las integraciones con Homegate y Acheter-Louer dependen de sus condiciones, compatibilidad, elegibilidad y posibles tarifas. No se garantiza presencia en portales específicos. Cada evolución se evalúa y se cotiza de forma independiente.",
  },
  pending: {
    title: "Qué conviene definir antes de empezar.",
    intro: "Dependencias que condicionan el alcance o el cronograma.",
    groups: [
      {
        title: "Contenidos",
        items: [
          "Servicios que se comunicarán (venta, propietarios, trámites, escuelas, mudanzas, empresas).",
          "Cobertura geográfica, incluida Ginebra como uno de los mercados.",
          "Identidad visual: logotipo, colores y tipografías vigentes.",
          "Textos y fotografías, con las autorizaciones correspondientes.",
          "Inventario inicial: las propiedades a cargar y sus datos.",
          "Idioma del sitio (inglés) y, en Integral, traducciones al francés y quién las valida.",
          "Textos legales, tratamiento de datos personales y consentimiento de cookies.",
        ],
      },
      {
        title: "Operación",
        items: [
          "Dominio existente, o registro de uno nuevo.",
          "Persona responsable de administrar el sitio con la guía escrita.",
          "Accesos de analítica (GA4, Tag Manager, Google Ads y Meta), a nombre del cliente.",
        ],
      },
      {
        title: "Tecnología",
        items: [
          "Plan de WordPress.com y plugin inmobiliario (Estatik o Easy Property Listings), antes de contratar servicios.",
          "Plataforma CRM que ya se utiliza, si corresponde, para verificar su compatibilidad.",
        ],
      },
    ],
  },
  faq: [
    {
      id: "diferencia",
      question: "¿Qué diferencia a las tres propuestas?",
      answer:
        "Son tres momentos de un mismo camino sobre la misma base tecnológica. Lanzar (Presencia digital): una primera versión funcional con catálogo administrable, fichas, filtro por ciudad y cantón y formulario. Consolidar (Experiencia inmobiliaria): búsqueda más completa, con filtros por precio y tipo, ordenación y formularios por propiedad. Escalar (Ecosistema digital): sitio en inglés y francés, mapa, solicitudes de visita, landings de campaña y una integración CRM compatible. No son niveles de calidad: la calidad es la misma.",
    },
    {
      id: "empezar",
      question: "¿Puedo comenzar por Lanzar y ampliar la solución después?",
      answer:
        "Sí. Como comparten la base tecnológica, se puede ampliar de forma progresiva. Para pasar a otra propuesta evalúo el trabajo realizado y cotizo las diferencias; no puedo garantizar de antemano un precio fijo de actualización.",
    },
    {
      id: "administrar",
      question: "¿Podré administrar las propiedades sin depender de una desarrolladora?",
      answer:
        "Sí, en las tres propuestas. El catálogo se administra desde WordPress.com: puedes crear, editar, publicar, despublicar y actualizar propiedades sin depender de Florencia UX. Incluyo una guía escrita en inglés; no incluye capacitación en vivo.",
    },
    {
      id: "revisiones",
      question: "¿Cuántas revisiones incluye?",
      answer:
        "No trabajo con una cantidad de rondas. Hay dos momentos principales de validación: durante el diseño y antes de la publicación. Las iteraciones necesarias se realizan dentro del alcance acordado. Las nuevas funcionalidades o los cambios sustanciales se evalúan y presupuestan aparte.",
    },
    {
      id: "soporte",
      question: "¿Qué incluye el soporte posterior y qué pasa después?",
      answer: `Las tres propuestas incluyen ${SUPPORT_DAYS} días de soporte desde la publicación: correcciones funcionales, ajustes menores, pequeñas modificaciones de contenido y consultas. Después ofrezco intervenciones puntuales bajo demanda, con un valor orientativo de ${maintenanceRange} por intervención según volumen y complejidad. No es una suscripción mensual obligatoria.`,
    },
    {
      id: "crm",
      question: "¿Se puede integrar un CRM?",
      answer:
        "En la propuesta Integral, mediante una integración existente compatible, cuya viabilidad se confirma antes de implementarla. No incluye desarrollo de un CRM propio, integraciones personalizadas por API ni automatizaciones complejas.",
    },
    {
      id: "inicio",
      question: "¿Cuándo comienza el proyecto?",
      answer:
        "Cuando se confirma el alcance, se recibe el anticipo y están disponibles los materiales necesarios. Las demoras en la información o en las aprobaciones pueden modificar el cronograma.",
    },
    {
      id: "pagos",
      question: "¿Cómo se realizan los pagos?",
      answer:
        "La inversión es por proyecto, con las mismas condiciones de pago para las tres propuestas: 30 % de anticipo y 70 % contra entrega final. Los porcentajes se calculan solo sobre los honorarios profesionales.",
    },
  ],
  cta: {
    title: "Construyamos una solución alineada con lo que Origine necesita.",
    intro:
      "Puedes consultarme directamente por correo o WhatsApp, sin necesidad de coordinar una reunión. El mensaje expresa interés en conversar y no implica una contratación.",
    steps: [
      { number: "01", title: "Seleccionar", description: "Elegir la propuesta que mejor se adapte al proyecto." },
      { number: "02", title: "Confirmar", description: "Confirmar alcance, contenidos y dependencias." },
      { number: "03", title: "Acordar", description: "Acordar las condiciones comerciales e iniciar el trabajo." },
    ],
  },
};
