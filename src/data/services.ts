export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  icon: string;
  category: "Commercial" | "Technical & Claims";
  image: string;
  excerpt: string;
  description: string;
  features: string[];
  deliverables: string[];
};

export const services: Service[] = [
  {
    slug: "chartering-shipbroking",
    title: "Chartering & Shipbroking",
    shortTitle: "Chartering & Shipbroking",
    icon: "Anchor",
    category: "Commercial",
    image: "https://images.pexels.com/photos/26224664/pexels-photo-26224664.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    excerpt: "Connecting shipowners and charterers worldwide with integrity and market insight.",
    description: "We connect shipowners and charterers worldwide with integrity, transparency and up-to-date market insight. From spot fixtures to period charters and contracts of affreightment, we negotiate terms that protect your position and keep cargo moving.",
    features: ["Spot & period chartering", "Dry bulk, tanker & general cargo", "Charter party negotiation & review", "Post-fixture operations support", "Freight market intelligence"],
    deliverables: ["Tailored tonnage shortlist within hours", "Recap & charter party drafting support", "Laytime & demurrage guidance"],
  },
  {
    slug: "freight-forwarding-logistics",
    title: "Freight Forwarding & Logistics",
    shortTitle: "Freight Forwarding & Logistics",
    icon: "Package",
    category: "Commercial",
    image: "https://images.pexels.com/photos/21234960/pexels-photo-21234960.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    excerpt: "Reliable and efficient freight forwarding and integrated logistics solutions for sea, land and air.",
    description: "Reliable and efficient freight forwarding and integrated logistics for sea, land and air. We coordinate door-to-door movements, project cargo and time-critical shipments with a single point of contact from booking to final delivery.",
    features: ["Sea, air & road freight", "Project & breakbulk cargo", "Customs & documentation", "Warehousing & distribution", "Door-to-door supply chain"],
    deliverables: ["End-to-end shipment visibility", "Consolidated documentation pack", "Costed route options in 24h"],
  },
  {
    slug: "marine-cargo-surveying",
    title: "Marine & Cargo Surveying",
    shortTitle: "Marine & Cargo Surveying",
    icon: "Search",
    category: "Technical & Claims",
    image: "https://images.pexels.com/photos/13757275/pexels-photo-13757275.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    excerpt: "Independent surveying and inspection services to protect your interests throughout the supply chain.",
    description: "Independent surveying and inspection services to protect your interests throughout the supply chain. Our surveyors attend vessels, terminals and warehouses worldwide — documenting condition, quantity and quality with impartial, evidence-based reports.",
    features: ["Draft & bunker surveys", "Pre-loading & discharge surveys", "Condition & damage surveys", "Container & lashing inspections", "Warranty & P&I surveys"],
    deliverables: ["Same-day preliminary findings", "Full photographic report in 48h", "Expert witness support if required"],
  },
  {
    slug: "maritime-claims-loss-adjusting",
    title: "Maritime Claims & Loss Adjuster Services",
    shortTitle: "Maritime Claims & Loss Adjusting",
    icon: "FileText",
    category: "Technical & Claims",
    image: "https://images.pexels.com/photos/3856438/pexels-photo-3856438.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    excerpt: "Professional claims support and loss adjusting for hull, cargo and related maritime matters.",
    description: "Professional claims support and loss adjusting for hull, cargo and related maritime matters. We investigate facts, quantify loss and help parties reach fair, well-documented settlements — reducing cost, delay and dispute.",
    features: ["Hull & machinery claims", "Cargo loss & damage claims", "General average support", "Liability & P&I matters", "Recovery & subrogation"],
    deliverables: ["Independent loss quantification", "Causation & liability analysis", "Settlement negotiation support"],
  },
  {
    slug: "maritime-consultancy",
    title: "Maritime Consultancy",
    shortTitle: "Maritime Consultancy",
    icon: "Settings",
    category: "Commercial",
    image: "https://images.pexels.com/photos/27275198/pexels-photo-27275198.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    excerpt: "Practical advice and commercial support across a wide range of maritime and trade matters.",
    description: "Practical advice and commercial support across a wide range of maritime and trade matters. From market entry and operational reviews to dispute avoidance, we give decision-makers clear options grounded in real shipping experience.",
    features: ["Commercial & operational advice", "Market & route studies", "Contract & risk reviews", "Dispute avoidance & mediation", "Sale & purchase support"],
    deliverables: ["Concise board-ready briefing", "Risk register & mitigations", "Implementation roadmap"],
  },
  {
    slug: "ship-cargo-solutions",
    title: "Ship & Cargo Solutions",
    shortTitle: "Ship & Cargo Solutions",
    icon: "Share2",
    category: "Commercial",
    image: "https://images.pexels.com/photos/20097614/pexels-photo-20097614.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    excerpt: "End-to-end solutions to keep your vessels, cargoes and operations moving safely and efficiently.",
    description: "End-to-end solutions to keep your vessels, cargoes and operations moving safely and efficiently. We combine commercial, technical and local expertise into one coordinated service — so problems are solved before they become delays.",
    features: ["Port agency coordination", "Cargo expediting", "Vessel attendance", "Crew & husbandry support", "Emergency response"],
    deliverables: ["Single point of coordination", "Live operation updates", "Post-call cost & lesson review"],
  },
];
