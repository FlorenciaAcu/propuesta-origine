import type { ProposalContent } from "@/types/proposal";
import { SUPPORT_DAYS, maintenanceRange } from "./origine-relocation";

export const origineContentEn: ProposalContent = {
  hero: {
    eyebrow: "Collaboration proposal / Aparicio Brand",
    title: "A digital experience that connects properties with real opportunities.",
    description:
      "I propose to design and build a digital presence for Origine Relocation that combines business strategy, user experience and technology, aiming to build trust and support the capture of potential clients.",
    meta: [
      { label: "Project", value: "Origine Relocation" },
      { label: "Client", value: "Aparicio Brand" },
      { label: "Market", value: "Switzerland" },
      { label: "Date", value: "November 2026" },
    ],
  },
  business: {
    eyebrow: "Proposal for Aparicio Brand · Origine Relocation",
    title: "Project objectives.",
    intro:
      "Based on the brief, these are the objectives that guide my proposal for Origine Relocation's website. I would love to review them together at the start.",
    objectives: [
      { number: "01", title: "Institutional credibility", description: "Present Origine and its team with a professional image that builds trust." },
      { number: "02", title: "Property catalogue", description: "Show properties in individual listings, each with its own shareable URL." },
      { number: "03", title: "Enquiries and viewings", description: "Make it easy to request information and viewings from each property." },
      { number: "04", title: "Better-informed leads", description: "Know the budget, property type, expected date and needs before the first contact." },
      { number: "05", title: "Campaigns and measurement", description: "Provide landing pages and conversion measurement for Meta Ads and Google Ads." },
      { number: "06", title: "City and canton", description: "Identify the city and canton of each property and filter by location, without presenting the inventory as exclusive to Geneva." },
    ],
  },
  diagnosis: {
    eyebrow: "Background from the brief",
    title: "Background of the advertising campaigns.",
    stats: [
      { label: "Sign-ups", value: "26", hint: "Obtained through forms" },
      { label: "Cost per sign-up", value: "USD 5.77", hint: "Average" },
      { label: "WhatsApp messages", value: "0", hint: "Conversations recorded in that campaign" },
    ],
    source: "Source: Origine Relocation brief · September–October 2026",
    body: [
      "Sales feedback indicates that the contacts assessed did not have a suitable budget for the advertised property. There is not enough information to establish the exact cause.",
    ],
    conclusion:
      "This background points the proposal towards an experience that makes it easier to qualify interested people and later measure the quality of enquiries.",
  },
  journey: {
    eyebrow: "Proposed journey",
    title: "How an interested person might move through the site.",
    intro:
      "This is a design hypothesis derived from the brief, not a journey map validated through user research. It is refined during discovery.",
    badge: "Proposed journey · design hypothesis",
    steps: [
      { number: "01", title: "Arrival", description: "From a campaign or a search." },
      { number: "02", title: "Exploration", description: "Of services and properties." },
      { number: "03", title: "Information", description: "Reading the relevant details." },
      { number: "04", title: "Form", description: "Contact and qualification." },
      { number: "05", title: "Follow-up", description: "Receipt and handling by the sales team." },
    ],
    audiences: [
      { title: "International professionals and expatriates", description: "According to the brief." },
      { title: "Couples and families", description: "According to the brief." },
      { title: "People interested in properties", description: "According to the brief." },
      { title: "Property owners", description: "Only if Origine confirms it offers that service." },
    ],
    audiencesNote:
      "The audiences come from the brief. There are no detailed personas or primary research: that is part of the project's discovery.",
  },
  architecture: {
    eyebrow: "Suggested architecture",
    title: "How the real-estate site could be organised.",
    intro:
      "This is the structure suggested in the brief. All three proposals include a manageable catalogue with individual listings; Basic presents it in an MVP with an institutional landing page and legal pages, and Intermediate and Comprehensive extend it into a multi-page site.",
    tree: [
      { label: "Home" },
      { label: "Properties", children: ["Listing", "Individual listing page"] },
      { label: "Services", children: ["Real Estate", "Relocation"] },
      { label: "About" },
      { label: "Contact" },
      { label: "Legal information" },
    ],
    pendingTitle: "Subject to confirmation by Origine",
    pending: ["Sales", "Services for property owners", "Administrative procedures", "Schools", "Removals", "Companies"],
    pendingNote: "I do not include these services, or any geographic coverage, until Origine confirms them.",
  },
  value: {
    eyebrow: "What I bring",
    title: "I combine strategy, UX/UI design and web development to turn business needs into functional digital solutions.",
    intro: "What I can contribute to the Origine team:",
    highlights: [
      "More than five years of experience in digital products.",
      "Real-estate experience with InfoCasas and Finca Raíz.",
      "Ability to work from architecture and design through to implementation and publishing.",
      "Experience collaborating with multidisciplinary teams.",
      "Ability to support the evolution of the product.",
    ],
    linkLabel: "See my professional experience",
    references: [
      { label: "InfoCasas", url: "https://www.infocasas.com.uy/" },
      { label: "Finca Raíz", url: "https://www.fincaraiz.com.co/" },
    ],
  },
  pricing: {
    approach:
      "All three proposals follow the launch-and-evolution approach set out in the brief and share the same technology base: you can start with Launch and expand progressively towards Consolidate and Scale. They are not quality tiers: the professional quality is the same.",
    limitsNote:
      "The property counts (3, 10 and 20) refer to the initial upload service, not to technical limits of the catalogue: the client can manage additional properties within the capabilities of the contracted infrastructure. Map search and integrations with CRMs, portals and external services are not guaranteed without a technical compatibility check.",
  },
  services: {
    eyebrow: "Included in all three",
    title: "What all three proposals include.",
    intro:
      "These services do not depend on the proposal chosen. Each proposal adds functionality on top of this common base.",
    items: [
      { title: "Strategy", description: "Goals, audiences and success criteria before designing." },
      { title: "UX/UI", description: "Architecture, journeys, forms and a Figma prototype." },
      { title: "Responsive design", description: "Interfaces adapted to mobile, tablet and desktop." },
      { title: "WordPress.com development", description: "Implementation on WordPress.com with a scalable real-estate plugin, to be assessed (Estatik or Easy Property Listings)." },
      { title: "Initial SEO", description: "Titles, meta descriptions, URLs, sitemap and sharing metadata." },
      { title: "Analytics", description: "GA4 and Google Tag Manager, with conversion events." },
      { title: "Campaign measurement", description: "Measurement for Google Ads and Meta Pixel." },
      { title: "Privacy", description: "Consent, privacy notice and anti-spam in forms, and cookie-consent management according to legal requirements and the client's validation." },
      { title: "Initial security", description: "Basic security and backup configuration, according to the capabilities of the WordPress.com plan." },
      { title: "Domain and publishing", description: "Initial domain set-up, DNS, HTTPS and publishing." },
    ],
    guideTitle: "Written guide in English",
    guide:
      "I include a written guide in English so the team can manage content and properties on its own. Live training is not included.",
    validationsTitle: "Two validation moments",
    validations:
      "One during design and another before publishing, with the iterations needed within the agreed scope.",
    supportTitle: "30 days of support",
    support:
      "From publication: functional fixes, minor adjustments, small content changes and questions about the site.",
    maintenanceTitle: "Maintenance on demand",
    maintenance:
      "USD 50–80 per one-off intervention, depending on volume and complexity. It is not a mandatory subscription.",
    paymentTitle: "Payment terms",
    payment:
      "The same for all three proposals: 30% advance and 70% on final delivery, calculated only on the fees.",
    colPlan: "Proposal",
    colAdvance: "Advance (30%)",
    colBalance: "On delivery (70%)",
  },
  examples: {
    eyebrow: "Visual examples",
    title: "How each proposal's features could look.",
    intro:
      "These are illustrative wireframes of the future site, which would be in English. They show what each proposal adds.",
    disclaimer:
      "Illustrative: not the final design nor an implemented feature. Fictional data; what is final depends on the technical validation of the plugin.",
    frameLabel: "Illustrative wireframe",
    plans: {
      basica: {
        caption: "Functional launch: catalogue with listings, city and canton filter, and a general form.",
        differentials: ["Manageable catalogue", "City and canton filter", "Form with budget and move date"],
      },
      intermedia: {
        caption: "A more complete search: filters by price and type, sorting and an enquiry linked to each property.",
        differentials: ["Filters by price and type", "Result sorting", "Per-property contextual form"],
      },
      integral: {
        caption: "Expanded commercial capacity: EN / FR site, map, additional filters and viewing requests.",
        differentials: ["English and French", "Filters by rooms and area", "Map search*", "Viewing request confirmed by the team"],
      },
    },
  },
  philosophy: {
    eyebrow: "My working philosophy",
    title: "The scope changes. My commitment to quality does not.",
    message: "The scope changes. My commitment to quality does not.",
    intro:
      "All three proposals share the same method, the same judgement and the same care for every deliverable. What varies is complexity: pages, features and integrations.",
    principles: [
      { number: "01", title: "Understand before designing", description: "Goals, content and references before drawing anything." },
      { number: "02", title: "Validate before developing", description: "The design is approved before it is built." },
      { number: "03", title: "Implement with attention to detail", description: "Functional, responsive and basic accessibility testing." },
      { number: "04", title: "Support after publishing", description: `${SUPPORT_DAYS} days of support in all three proposals.` },
    ],
    note: "This is a working commitment, not a promise of commercial results.",
  },
  technology: {
    eyebrow: "Technology and recurring costs",
    title: "Which technology I recommend and what it costs to keep it running.",
    intro:
      "This section describes Origine Relocation's future website: the platform, the tools and the infrastructure costs.",
    rationaleTitle: "Why I recommend WordPress.com",
    rationale: [
      "Management autonomy: the client has administrative access and manages the content included in the contracted scope.",
      "Easy administration with the block editor.",
      "Content and property management with custom fields and content types.",
      "Managed hosting.",
      "Scalability towards more properties, languages and integrations.",
      "A plugin ecosystem for forms, search, languages and SEO.",
      "Lower maintenance complexity.",
      "Optimised implementation costs: no real-estate manager is built from scratch when WordPress and existing tools solve the need.",
    ],
    rationaleNote:
      "The brief requires autonomy in managing properties. WordPress meets that requirement through an existing content management system, avoiding a custom administration system built from scratch. This is my professional recommendation; the brief does not require WordPress.",
    toolsTitle: "Tools according to scope",
    tools: [
      { name: "Figma", role: "UX/UI design, architecture and prototyping" },
      { name: "WordPress.com", role: "Development, hosting and content management" },
      { name: "Scalable real-estate plugin (Estatik or Easy Property Listings)", role: "Catalogue, listings, filters, sorting and map, to be assessed" },
      { name: "Block editor and WordPress components", role: "Visual administration" },
      { name: "HTML, CSS and JavaScript", role: "Customisation where needed" },
      { name: "Forms and anti-spam plugins", role: "Enquiry forms" },
      { name: "WPML, Polylang or a compatible solution", role: "Multilingual management (Comprehensive)" },
      { name: "Google Analytics 4 and Google Tag Manager", role: "Analytics and event management" },
      { name: "Google Ads and Meta Pixel", role: "Conversion measurement and advertising" },
      { name: "SEO, consent and privacy tools", role: "Visibility and compliance" },
      { name: "CRM through a compatible existing integration", role: "Comprehensive proposal" },
    ],
    toolsNote:
      "The final choice of plugins is validated before signing up for services: compatibility, licences, performance and features. I cannot guarantee that everything can be implemented without additional licences.",
    costsTitle: "Official WordPress.com subscriptions",
    costsIntro:
      "WordPress.com plans are not Florencia UX's proposals: they are the infrastructure the client contracts, directly and in its own name. Paid plans allow plugin installation, subject to compatibility. The monthly equivalent of an annual plan is only a reference for comparison: the annual plan is paid in a single yearly payment, not month by month.",
    pricesNote: "Source: wordpress.com/pricing, checked on 25/11/2026. Verify the amounts and renewal terms before signing up.",
    investmentTitle: "First-year investment, shown separately",
    investmentNote:
      "Fees and infrastructure are shown separately. The subscription is not deducted from the fees. The subtotal is an estimate and excludes taxes, additional licences, domain registration or renewal where applicable, and other external services.",
    domainTitle: "Domain and hosting",
    domain: [
      "If Origine has a domain: configuration and connection.",
      "If it does not: advice on choosing and registering an available one.",
      "DNS, HTTPS and SSL configuration, and publishing the site.",
      "Annual plans may include an eligible domain for the first year; later renewal is annual and depends on the extension and provider.",
      "Domain, subscription, accounts and access remain in the client's name. I do not contract services or register domains without approval.",
      "Initial domain and hosting set-up is included in the fees of all three proposals.",
    ],
    additionalTitle: "Possible additional costs",
    additionalIntro:
      "Not all of them will be needed. They are confirmed before signing up and are paid by the client. No prices are given where they have not been verified.",
    maintenanceTitle: "Later maintenance",
    maintenanceNote: "Once the included support ends, I offer one-off interventions on request.",
    pluginsTitle: "Real-estate plugins to be assessed",
    pluginsIntro:
      "The catalogue would rely on a scalable real-estate plugin. I would assess Estatik or Easy Property Listings; the choice is confirmed before implementation.",
    pluginsNote:
      "I do not guarantee the compatibility of plugins or of specific features (for example, the map) without a prior technical check. Some versions may require licences.",
  },
  metricsIntro: {
    title: "How we would know whether it works.",
    intro: "Some indicators are measured with digital events. Others need campaign data and validation by the sales team.",
    note: "GA4 and GTM measure digital events. Commercial indicators require human validation, campaign data or CRM information. This proposal does not guarantee increased sales, conversions, SEO ranking or advertising results.",
  },
  termsExtras: {
    revisions:
      "There are two main validation moments, common to all three proposals: Validation 01, during design, and Validation 02, before publishing. The iterations needed are made within the agreed scope until the client is satisfied. New features, substantial scope changes and redefinitions of deliverables that were already approved are assessed and quoted separately.",
    support: `All three proposals include ${SUPPORT_DAYS} days of support from publication: functional fixes, minor adjustments, small content changes and questions. It does not include new pages, full redesigns, additional integrations or functional expansions.`,
    thirdParty:
      "Third-party costs are confirmed before signing up and are paid by the client directly to the provider. WordPress.com amounts are reference values; no prices are given for licences, providers or services whose rates have not been verified.",
    included: [
      "The cross-cutting services and the features of the chosen proposal.",
      "Initial domain set-up and publishing on WordPress.com.",
      "Event measurement with GA4 and GTM, with cookie-consent management.",
      "Initial backup configuration, according to the capabilities of the WordPress.com plan.",
      "Written guide in English for managing content and properties.",
    ],
    future: [
      "Favourites and property alerts.",
      "Portal integrations and automatic feeds.",
      "Meta Conversions API.",
      "Complex automations and an advanced CRM.",
    ],
    quoted: [
      "WordPress.com subscription, domain and plugin licences.",
      "Photography production, professional translations and legal drafting.",
      "Properties beyond the initial upload and new features.",
      "Later maintenance, per one-off intervention.",
    ],
    ownership:
      "The domain, subscription, analytics accounts and administrative access remain in the client's name. I do not contract services or register domains without approval. Design files and access credentials are handed over at the end.",
    cookies:
      "Cookie-consent and measurement-tool management is configured according to applicable legal requirements and the client's validation. It is not legal advice.",
    homeStaging: "If digitally staged images are used, they are expressly labelled as such.",
    recurring: [],
  },
  roadmap: {
    title: "How Origine Relocation could evolve.",
    intro:
      "All three proposals share the same technology base and let the solution grow progressively. These evolutions are not included, except where each proposal expressly says so.",
    items: [
      "Favourites to save properties.",
      "Alerts for new properties.",
      "Sales follow-up automations.",
      "Advanced CRM.",
      "Integrations with property portals.",
      "New languages.",
      "Continuous optimisation of the search experience and forms.",
    ],
    note: "Integrations with Homegate and Acheter-Louer depend on their terms, compatibility, eligibility and possible fees. Presence on specific portals is not guaranteed. Each evolution is assessed and quoted independently.",
  },
  pending: {
    title: "What is worth defining before starting.",
    intro: "Dependencies that affect the scope or the schedule.",
    groups: [
      {
        title: "Content",
        items: [
          "Services to be communicated (sales, owners, administrative procedures, schools, removals, companies).",
          "Geographic coverage, including Geneva as one of the markets.",
          "Visual identity: current logo, colours and typefaces.",
          "Copy and photography, with the corresponding authorisations.",
          "Initial inventory: the properties to upload and their data.",
          "Site language (English) and, in Comprehensive, French translations and who validates them.",
          "Legal texts, personal data handling and cookie consent.",
        ],
      },
      {
        title: "Operations",
        items: [
          "Existing domain, or registering a new one.",
          "The person who will manage the site using the written guide.",
          "Analytics access (GA4, Tag Manager, Google Ads and Meta), in the client's name.",
        ],
      },
      {
        title: "Technology",
        items: [
          "WordPress.com plan and real-estate plugin (Estatik or Easy Property Listings), before signing up for services.",
          "The CRM platform already in use, if applicable, to verify its compatibility.",
        ],
      },
    ],
  },
  faq: [
    {
      id: "diferencia",
      question: "What sets the three proposals apart?",
      answer:
        "They are three stages of one path on the same technology base. Launch (Digital Presence): a first functional version with a manageable catalogue, listings, a city and canton filter and a form. Consolidate (Real Estate Experience): a more complete search, with filters by price and type, sorting and per-property forms. Scale (Digital Ecosystem): a site in English and French, map, viewing requests, campaign landing pages and one compatible CRM integration. They are not quality tiers: the quality is the same.",
    },
    {
      id: "empezar",
      question: "Can I start with Launch and expand the solution later?",
      answer:
        "Yes. Since they share the technology base, it can be expanded progressively. To move to another proposal I assess the work done and quote the difference; I cannot guarantee a fixed upgrade price in advance.",
    },
    {
      id: "administrar",
      question: "Will I be able to manage the properties without depending on a developer?",
      answer:
        "Yes, in all three proposals. The catalogue is managed from WordPress.com: you can create, edit, publish, unpublish and update properties without depending on Florencia UX. I include a written guide in English; live training is not included.",
    },
    {
      id: "revisiones",
      question: "How many revisions are included?",
      answer:
        "I do not work with a set number of rounds. There are two main validation moments: during design and before publishing. The iterations needed are made within the agreed scope. New features or substantial scope changes are assessed and quoted separately.",
    },
    {
      id: "soporte",
      question: "What does post-delivery support include, and what happens afterwards?",
      answer: `All three proposals include ${SUPPORT_DAYS} days of support from publication: fixes, minor adjustments, small content changes and questions. Afterwards I offer one-off interventions on request, with an indicative price of ${maintenanceRange} per intervention depending on volume and complexity. It is not a mandatory monthly subscription.`,
    },
    {
      id: "crm",
      question: "Can a CRM be integrated?",
      answer:
        "In the Comprehensive proposal, through a compatible existing integration, whose feasibility is confirmed before implementation. It does not include developing a custom CRM, custom API integrations or complex automations.",
    },
    {
      id: "inicio",
      question: "When does the project start?",
      answer:
        "Once the scope is confirmed, the advance payment is received and the necessary materials are available. Delays in information or approvals may change the schedule.",
    },
    {
      id: "pagos",
      question: "How are payments made?",
      answer:
        "The investment is per project, with the same payment terms for all three proposals: 30% advance and 70% on final delivery. Percentages are calculated only on the professional fees.",
    },
  ],
  cta: {
    title: "Let's build a solution aligned with what Origine needs.",
    intro:
      "You can contact me directly by email or WhatsApp, with no need to arrange a meeting. The message expresses interest in talking and does not commit you to anything.",
    steps: [
      { number: "01", title: "Select", description: "Choose the proposal that best fits the project." },
      { number: "02", title: "Confirm", description: "Confirm scope, content and dependencies." },
      { number: "03", title: "Agree", description: "Agree the commercial terms and start the work." },
    ],
  },
};
