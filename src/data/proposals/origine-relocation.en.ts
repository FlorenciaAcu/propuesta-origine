import { formatUsd } from "@/i18n/config";
import type { PlanTexts, ProposalTexts, WordPressPlanId } from "@/types/proposal";
import { maintenance, wordpressPlan } from "./origine-relocation";

/**
 * English texts of the proposal. They only carry words: prices, percentages, durations, support days and
 * subscription amounts are read from the shared data in origine-relocation.ts.
 */

const VALIDATIONS = [
  "Validation 01 — During design: review of architecture, content, navigation, user experience, interfaces, responsive behaviour and prototype. The iterations needed are made within the agreed scope until the client is satisfied. The design is approved before moving on to its final implementation.",
  "Validation 02 — Before publishing: visual, functional and technical review of the implemented site. I check that it matches the approved design, and verify navigation, forms, features, responsive behaviour, basic accessibility and technical set-up. Any fixes needed are made before publishing.",
];

const SUPPORT =
  "Thirty days of support from the publication date: functional fixes, minor adjustments, small content changes and questions about the site. It does not include new pages, full redesigns, additional integrations or functional expansions.";

const TRANSVERSAL =
  "Includes the cross-cutting services: strategy, UX/UI, responsive design, WordPress.com development, initial SEO, analytics (GA4, GTM, Google Ads and Meta Pixel), privacy, initial security, domain and publishing.";

const GUIDE = "Written guide in English for self-managed content and property administration";

function subscription(id: WordPressPlanId): string {
  const p = wordpressPlan(id);
  return `WordPress.com ${p.name} subscription (reference: ${formatUsd(p.annual, "en")} per year), contracted and paid by the client directly to the provider.`;
}

const COMMON_EXTRA = [
  "Domain registration and annual renewal, depending on the extension and provider, unless the client uses the domain included in an eligible annual plan for the first year.",
  "Licences for the real-estate plugin (for example, paid Estatik versions) or other plugins, only if the scope requires them. They are confirmed before signing up.",
  "Corporate email, email-sending services and consent and privacy tools, only if they are needed.",
  "Copywriting and photography production, and legal drafting.",
  `Later maintenance: USD ${maintenance.minUsd}–${maintenance.maxUsd} per one-off intervention.`,
  "New features and expansions: quoted separately.",
];

const basica: PlanTexts = {
  name: "Basic",
  fileSlug: "Basic",
  descriptor: "Digital Presence",
  objective: "Communicate, position and capture.",
  stage: "Launch",
  question: "What do we need to go to market?",
  pitch: "A first functional version that lets you communicate the services, manage properties and start capturing enquiries.",
  durationLabel: "2 weeks",
  highlights: [
    "Functional MVP of the site, in English",
    "Institutional landing page and manageable catalogue",
    "Individual listings with their own URL and a city and canton filter",
    "General form with budget and move date",
    "Initial upload of up to 3 properties",
  ],
  scope: [
    "Functional MVP of the future site, in English.",
    "Institutional landing page presenting services, team and contact.",
    "Manageable catalogue on WordPress.com: the client creates, edits, publishes and unpublishes properties without depending on Florencia UX.",
    "Individual listings with their own shareable URL. Each listing includes price, currency, charges, area, rooms, location, city, canton, image gallery, description and availability.",
    "Simple filter by city and canton.",
    "General form with enquiry type, budget and move date, consent, anti-spam and submission confirmation.",
    "Legal pages, with text provided and validated by the client.",
    "Initial upload of up to 3 properties. The number refers to the initial upload service, not to a technical limit of the catalogue.",
    "Editable responsive prototype in Figma.",
    TRANSVERSAL,
  ],
  deliverables: [
    "Editable responsive prototype in Figma",
    "MVP published on WordPress.com, in English",
    "Manageable catalogue with up to 3 properties uploaded",
    "General form with notification to the agreed email address",
    "GA4, GTM and conversion event set-up",
    GUIDE,
    "Access credentials and design files in the client's name",
  ],
  process: [
    { title: "Discover and define", description: "We talk about goals, content and priorities, and define the site structure. Milestone: scope confirmed." },
    { title: "Design", description: "Structure of the landing page and catalogue, and Figma prototype, with Validation 01." },
    { title: "Implement", description: "I build the site on WordPress.com, with the catalogue, forms and measurement. Milestone: site ready for review." },
    { title: "Validate and deliver", description: "We test everything together, I make the necessary adjustments and publish the site with a guide for the team. Milestone: site approved and published." },
  ],
  schedule: {
    estrategia: { label: "Strategy", note: "Goals and architecture" },
    diseno: { label: "Design", note: "Design and validation" },
    desarrollo: { label: "Development", note: "Landing page, catalogue and form" },
    integraciones: { label: "Measurement", note: "GA4, GTM and events" },
    qa: { label: "QA" },
    publicacion: { label: "Publishing" },
  },
  scheduleNote: "Week 1: strategy, architecture, design and validation. Week 2: implementation, measurement, testing and publishing.",
  technologies: [
    { name: "Figma", role: "UX/UI design, architecture and prototype" },
    { name: "WordPress.com Premium (indicative)", role: "Development, hosting and content management" },
    { name: "Scalable real-estate plugin (Estatik or Easy Property Listings, to be assessed)", role: "Catalogue, listings and city and canton filter" },
    { name: "WordPress block editor and components", role: "Visual content administration" },
    { name: "HTML, CSS and JavaScript", role: "Customisation, where needed" },
    { name: "Forms plugin and anti-spam protection", role: "General form" },
    { name: "GA4, GTM, Google Ads and Meta Pixel", role: "Analytics and conversion measurement" },
    { name: "SEO and consent tools", role: "Initial SEO, metadata and cookie management" },
  ],
  validationsText: VALIDATIONS,
  paymentLabels: ["Advance", "On final delivery"],
  supportText: SUPPORT,
  extraCosts: [subscription("premium"), ...COMMON_EXTRA, "Uploading properties beyond the initial 3 by Florencia UX (the client can upload them directly)."],
  professionalAdvice: "I recommend launching with this functional base and expanding it with real enquiry and catalogue-usage data.",
};

const intermedia: PlanTexts = {
  name: "Intermediate",
  fileSlug: "Intermediate",
  descriptor: "Real Estate Experience",
  objective: "Explore, manage and convert.",
  stage: "Consolidate",
  question: "How do we make it easier for users to find the right property?",
  pitch: "A more complete search experience, with filters, structured content and enquiries linked to each property.",
  durationLabel: "3 to 4 weeks",
  highlights: [
    "Includes the functional base of the Basic proposal",
    "Multi-page site, in English",
    "Filters by price and property type, and result sorting",
    "Per-property contextual forms",
    "Initial upload of up to 10 properties",
  ],
  scope: [
    "Includes the functional base of the Basic proposal: manageable catalogue, individual listings with their own URL, galleries, availability, city and canton filter, form with budget and move date, and legal pages.",
    "Multi-page site: home, properties, services, about, contact and legal information.",
    "Filters by price and property type, in addition to city and canton.",
    "Result sorting.",
    "Per-property contextual forms, with the property reference included in the enquiry.",
    "Language: English.",
    "Initial upload of up to 10 properties. The number refers to the initial upload service, not to a technical limit of the catalogue.",
    "Editable responsive Figma prototype of the main templates.",
    TRANSVERSAL,
  ],
  deliverables: [
    "Information architecture and search and contact journey",
    "Figma prototype of the main templates",
    "Multi-page site published on WordPress.com, in English",
    "Manageable catalogue with up to 10 properties uploaded",
    "Per-property forms and analytics set-up",
    GUIDE,
    "Access credentials and design files in the client's name",
  ],
  process: [
    { title: "Discover and define", description: "Discovery and information architecture of the multi-page site." },
    { title: "Design", description: "Search and contact journey, UX/UI design and prototype, with Validation 01." },
    { title: "Implement", description: "Catalogue, filters, sorting, forms and analytics." },
    { title: "Validate and deliver", description: "Validation 02, written guide and publishing." },
  ],
  schedule: {
    estrategia: { label: "Strategy", note: "Discovery and architecture" },
    diseno: { label: "Design", note: "UX/UI design and validation" },
    desarrollo: { label: "Development", note: "Catalogue, filters, sorting and forms" },
    qa: { label: "QA", note: "Testing and validation" },
    publicacion: { label: "Publishing", note: "Guide and publishing" },
  },
  scheduleNote:
    "Week 1: discovery and architecture. Weeks 1–2: UX/UI design and validation. Weeks 2–3: catalogue, filters, sorting and forms development. Weeks 3–4: testing and validation (QA), guide and publishing, depending on progress. If development finishes within the minimum timeframe, testing and validation are still carried out before publishing.",
  technologies: [
    { name: "Figma", role: "UX/UI design, architecture and prototype" },
    { name: "WordPress.com Premium (indicative)", role: "Development, hosting and content management" },
    { name: "Scalable real-estate plugin (Estatik or Easy Property Listings, to be assessed)", role: "Catalogue, listings, filters and sorting" },
    { name: "WordPress block editor and components", role: "Visual content administration" },
    { name: "HTML, CSS and JavaScript", role: "Customisation, where needed" },
    { name: "Forms plugin and anti-spam protection", role: "Per-property forms" },
    { name: "GA4, GTM, Google Ads and Meta Pixel", role: "Analytics and conversion measurement" },
    { name: "SEO and consent tools", role: "Initial SEO, metadata and cookie management" },
  ],
  validationsText: VALIDATIONS,
  paymentLabels: ["Advance", "On final delivery"],
  supportText: SUPPORT,
  extraCosts: [subscription("premium"), ...COMMON_EXTRA, "Uploading properties beyond the initial 10 by Florencia UX (the client can upload them directly)."],
  professionalAdvice: "I recommend prioritising complete listings, with price and charges visible, and making it easy to move between catalogue, listing and contact.",
};

const integral: PlanTexts = {
  name: "Comprehensive",
  fileSlug: "Comprehensive",
  descriptor: "Digital Ecosystem",
  objective: "Integrate, optimise and scale.",
  stage: "Scale",
  question: "How do we expand our commercial capacity?",
  pitch: "A bilingual solution that adds map-based search, viewing requests, campaign pages and compatible commercial integrations.",
  durationLabel: "4 to 5 weeks",
  highlights: [
    "Includes the functionality of the previous proposals",
    "English and French, with bilingual SEO",
    "Filters by rooms and area, and map search*",
    "Viewing requests confirmed afterwards by the team",
    "Up to 2 additional landing pages and 1 compatible CRM integration",
    "Initial upload of up to 20 properties",
  ],
  scope: [
    "Includes the functionality of the Basic and Intermediate proposals.",
    "Site in English and French, with translations provided by the client.",
    "Filters by rooms and area, in addition to the previous filters.",
    "Map-based search, subject to the compatibility of the chosen plugin.",
    "Viewing requests confirmed afterwards by the team: there is no automatic booking.",
    "Up to 2 additional landing pages for campaigns.",
    "One integration with a compatible existing CRM, whose feasibility is confirmed before implementation, and lead notifications.",
    "Bilingual SEO and sharing metadata in both languages.",
    "Initial upload of up to 20 properties. The number refers to the initial upload service, not to a technical limit of the catalogue.",
    "Editable responsive Figma prototype of the templates and the additional landing pages.",
    TRANSVERSAL,
  ],
  deliverables: [
    "Bilingual architecture and Figma prototype of templates and additional landing pages",
    "English and French site published on WordPress.com",
    "Manageable catalogue with up to 20 properties uploaded",
    "Map search (subject to compatibility) and extended filters",
    "Viewing requests and per-property forms, with lead notifications",
    "Up to 2 additional landing pages and one compatible CRM integration",
    GUIDE,
    "Access credentials and design files in the client's name",
  ],
  process: [
    { title: "Discover and define", description: "Strategy, bilingual architecture and scope definition." },
    { title: "Design", description: "Search and conversion journeys, prototype and additional landing pages, with Validation 01." },
    { title: "Implement", description: "Catalogue, languages, map, viewing requests, analytics and compatible integration." },
    { title: "Validate and deliver", description: "Validation 02 in both languages, written guide and publishing." },
  ],
  schedule: {
    estrategia: { label: "Strategy", note: "Strategy and architecture" },
    diseno: { label: "Design", note: "Design and validation" },
    desarrollo: { label: "Development", note: "Catalogue, languages, map and forms" },
    integraciones: { label: "Integrations", note: "Landing pages, analytics and compatible integration" },
    qa: { label: "QA", note: "Testing and validation" },
    publicacion: { label: "Publishing", note: "Guide and publishing" },
  },
  scheduleNote:
    "Week 1: strategy and architecture. Weeks 1–2: design and validation. Weeks 2–4: catalogue, languages, map and forms development. Weeks 3–4: landing pages, analytics and compatible integration. Weeks 4–5: testing and validation (QA), guide and publishing, depending on progress. If development finishes within the minimum timeframe, testing and validation are still carried out before publishing.",
  technologies: [
    { name: "Figma", role: "UX/UI design, architecture and prototype" },
    { name: "WordPress.com Business (indicative)", role: "Development, hosting, automatic backups and staging environment" },
    { name: "Scalable real-estate plugin (Estatik or Easy Property Listings, to be assessed)", role: "Catalogue, listings, filters, sorting and map" },
    { name: "WordPress block editor and components", role: "Visual content administration" },
    { name: "WPML, Polylang or a compatible solution", role: "English and French site" },
    { name: "HTML, CSS and JavaScript", role: "Customisation, where needed" },
    { name: "Forms plugin and anti-spam protection", role: "Forms and viewing requests" },
    { name: "GA4, GTM, Google Ads and Meta Pixel", role: "Analytics and conversion measurement" },
    { name: "SEO and consent tools", role: "Bilingual SEO, metadata and cookie management" },
    { name: "Compatible existing CRM integration", role: "Sending leads to a tool already in use" },
  ],
  validationsText: VALIDATIONS,
  paymentLabels: ["Advance", "On final delivery"],
  paymentNote: "Map search and the CRM integration are subject to technical compatibility.",
  supportText: SUPPORT,
  extraCosts: [
    subscription("business"),
    ...COMMON_EXTRA,
    "Licences for multilingual tools, map services and the CRM, if applicable.",
    "Professional translations, if the client does not provide them.",
    "Uploading properties beyond the initial 20 by Florencia UX (the client can upload them directly).",
    "Developing a custom CRM, custom API integrations and complex automations: not included, subject to quotation.",
  ],
  professionalAdvice: "I recommend connecting ad capture with sales processes and assessing future integrations once there is enough data.",
};

export const enTexts: ProposalTexts = {
  title: "Collaboration proposal · Aparicio Brand · Origine Relocation",
  dateLabel: "November 2026",
  issuedLabel: "26 November 2026",
  plans: { basica, intermedia, integral },
  comparison: {
    estructura: { label: "Site pages", values: { basica: "Landing page and legal pages", intermedia: "Multi-page", integral: "Multi-page" } },
    idiomas: { label: "Languages", values: { basica: "English", intermedia: "English", integral: "English and French" } },
    catalogo: { label: "Manageable catalogue and listings with their own URL", values: { basica: "Yes", intermedia: "Yes", integral: "Yes" } },
    propiedades: { label: "Properties I upload at launch", values: { basica: "3 properties", intermedia: "10 properties", integral: "20 properties" } },
    filtros: { label: "Filters", values: { basica: "City and canton", intermedia: "City, canton, price and type", integral: "City, canton, price, type, rooms and area" } },
    orden: { label: "Result sorting", values: { basica: "No", intermedia: "Yes", integral: "Yes" } },
    mapa: { label: "Map search (subject to plugin compatibility)", values: { basica: "No", intermedia: "No", integral: "Yes" } },
    formularios: { label: "Forms", values: { basica: "General", intermedia: "Per property", integral: "Per property and viewing request" } },
    landings: { label: "Additional landing pages for campaigns", values: { basica: "No", intermedia: "No", integral: "Up to 2" } },
    crm: { label: "CRM integration (subject to compatibility)", values: { basica: "No", intermedia: "No", integral: "1 existing CRM" } },
    seo: { label: "SEO", values: { basica: "Initial", intermedia: "Initial", integral: "Bilingual" } },
  },
  metrics: {
    conversion: { name: "Conversion rate", measures: "Forms submitted divided by visits.", why: "Shows whether the page turns interest into enquiries.", source: "GA4 and GTM.", dependencies: "Form event set up and measurement consent." },
    abandono: { name: "Form abandonment", measures: "People who start the form and do not submit it.", why: "Points to fields or steps that cause friction.", source: "GA4 and GTM, if instrumented.", dependencies: "Form start and submit events." },
    visitas: { name: "Viewing requests", measures: "Viewing requests received per property.", why: "A stronger intent signal than a general enquiry.", source: "GA4 and GTM, plus email or CRM.", dependencies: "Viewing requests (Comprehensive proposal) and event set up." },
    "leads-validos": { name: "Share of valid leads", measures: "Enquiries the sales team considers worth following up.", why: "Separates the volume of contacts from their quality.", source: "Sales team classification.", dependencies: "A validity criterion agreed with Origine and a team record." },
    presupuesto: { name: "Leads with a compatible budget", measures: "Enquiries whose stated budget fits the property.", why: "Lets us assess whether an enquiry matches the offer, which is not measured today.", source: "Form budget field and sales validation.", dependencies: "Budget ranges defined by Origine." },
    cpl: { name: "Cost per qualified lead", measures: "Ad spend divided by qualified leads.", why: "Compares channels by quality, not just by sign-ups.", source: "Aparicio Brand campaign data and sales classification.", dependencies: "Access to spend data and a qualification criterion." },
    cpv: { name: "Cost per booked viewing", measures: "Ad spend divided by booked viewings.", why: "Brings measurement closer to real progress in the sales process.", source: "Campaign data and viewing records.", dependencies: "A record of booked viewings kept by the team." },
    oportunidades: { name: "Lead-to-opportunity conversion", measures: "Leads that become commercial opportunities.", why: "Connects the website with the business outcome.", source: "CRM or sales records.", dependencies: "Enough information, sustained over time." },
  },
  conditions: {
    cliente: {
      title: "Client responsibilities",
      items: [
        "Provide the brand identity.",
        "Provide copy, authorised photos and property data.",
        "Sign up for and pay the WordPress.com subscription and the domain, in the client's name and directly to the provider.",
        "Provide access to the domain and analytics tools.",
        "Provide translations where applicable.",
        "Validate services, locations and geographic coverage.",
        "Validate legal texts and personal data handling.",
        "Consolidate the feedback for each validation.",
        "Approve project milestones.",
      ],
    },
    incluido: {
      title: "What is included",
      items: [
        "Design.",
        "Development of the selected scope.",
        "Functional implementation.",
        "Two validation moments, with the iterations needed within the agreed scope.",
        "Testing.",
        "Initial domain set-up and publishing.",
        "Written guide in English for managing content and properties.",
        "Thirty days of support from publication.",
      ],
    },
    "no-incluido": {
      title: "What is not included",
      items: [
        "WordPress.com subscription and domain registration or renewal.",
        "Plugin or tool licences.",
        "Live training.",
        "Photography production.",
        "Professional translations.",
        "Legal drafting.",
        "Ad management or ad spend.",
        "Uploading properties beyond the initial upload included, by Florencia UX.",
        "Later new features.",
        "Later maintenance, quoted per intervention.",
        "Custom integrations and feeds to property portals.",
        "Meta Conversions API.",
        "Complex automations.",
      ],
    },
  },
  stages: [
    { title: "Discover and define", description: "Discovery, business goals, architecture and definition of deliverables. Milestone: scope and architecture confirmed." },
    { title: "Design", description: "I design the experience and the screens in Figma, adapted to every device. Milestone: design approved before development." },
    { title: "Implement", description: "Development on WordPress.com, catalogue and feature set-up, analytics and initial technical optimisation. Milestone: site ready to validate." },
    { title: "Validate and deliver", description: "Functional QA, responsive testing, basic accessibility review, form and event checks, written guide and publishing. Milestone: Validation 02, before publishing." },
  ],
  additionalCosts: [
    { label: "WordPress.com subscription", note: "Annual plan according to the proposal; paid by the client to the provider." },
    { label: "Domain registration and annual renewal", note: "If the client does not have one, or when the first year included in an eligible annual plan ends." },
    { label: "Plugin licences", note: "Real-estate plugin or others, only if a feature requires them; confirmed before signing up." },
    { label: "Multilingual tools", note: "Comprehensive proposal: WPML, Polylang or a compatible solution." },
    { label: "Consent and privacy tools", note: "According to legal requirements and the client's validation." },
    { label: "CRM", note: "Comprehensive proposal: integration with a compatible existing tool." },
    { label: "Corporate email and email-sending services", note: "Not mandatory." },
    { label: "Additional storage or backups", note: "Only if the chosen plan does not cover the need." },
    { label: "Map services", note: "They may need a key or a plan from the map provider, depending on the plugin." },
    { label: "Translations", note: "Provided by the client; professional ones are contracted separately." },
    { label: "Copy and photography production", note: "Provided by the client." },
    { label: "Advertising on property portals", note: "Presence on specific portals is not guaranteed." },
    { label: "Google Ads and Meta Ads spend", note: "Not included: managed by Aparicio Brand or the client." },
    { label: "Later maintenance", note: `USD ${maintenance.minUsd}–${maintenance.maxUsd} per one-off intervention, with no mandatory subscription.` },
    { label: "Functional expansions", note: "Quoted separately." },
  ],
  maintenance: {
    unit: "per one-off intervention",
    examples: ["Text updates.", "Photo replacement.", "Changes to institutional information.", "Minor visual adjustments.", "Focused technical review and maintenance."],
    note: "This is an indicative price, depending on volume and complexity. It is not a mandatory monthly subscription. New features, complex integrations and expansions are quoted independently.",
  },
  wordpress: {
    taxNote:
      "Amounts in USD, excluding taxes. They may vary by country, taxes, promotions and renewal terms. The choice of each plan is preliminary and is confirmed before signing up.",
    notes: {
      premium: "Reference for the Basic and Intermediate proposals.",
      business: "Reference for the Comprehensive proposal. Adds advanced features, automatic backups and a staging environment.",
    },
    links: ["WordPress.com plans and pricing"],
    pluginLinks: ["Estatik on WordPress.org", "Estatik: choose a version", "Estatik: demo", "Easy Property Listings on WordPress.org"],
  },
};
