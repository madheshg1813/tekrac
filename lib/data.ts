import {
  Truck,
  ShieldCheck,
  Recycle,
  Monitor,
  Laptop,
  Server,
  Cpu,
  Building2,
  BarChart3,
  FileCheck2,
  School,
  Landmark,
  Hospital,
  Factory,
  BadgeCheck,
  Timer,
  MapPin,
  FileText,
  Award,
  Leaf,
  Package,
  Wrench,
  ClipboardCheck,
  Boxes,
} from "lucide-react";

import type {
  Service,
  Industry,
  ProcessStep,
  Stat,
  WhyUsPoint,
  Testimonial,
  Certification,
  FAQItem,
} from "@/types";

export const services: Service[] = [
  {
    slug: "e-waste-collection",
    title: "E-Waste Collection",
    description:
      "Scheduled and on-demand pickup of electronic waste from corporate offices, factories, institutions and homes across the region.",
    heroDescription:
      "We run a dedicated collection fleet and logistics network so your e-waste is picked up on your schedule, not ours — from a single household laptop to a multi-site corporate rollout.",
    icon: Truck,
    points: [
      "Doorstep & bulk pickup scheduling",
      "Dedicated collection fleet",
      "Pan-India logistics network",
    ],
    idealFor: ["Corporates", "IT Companies", "Educational Institutions", "Households"],
  },
  {
    slug: "secure-data-destruction",
    title: "Secure Data Destruction",
    description:
      "Certified data wiping, degaussing and physical destruction of storage media to eliminate any risk of data breach.",
    heroDescription:
      "Every drive, disk and storage chip we process goes through certified wiping or physical destruction before it ever reaches the recycling floor — with a signed certificate as proof.",
    icon: ShieldCheck,
    points: [
      "DoD 5220.22-M standard wiping",
      "Physical shredding of drives",
      "Certificate of data destruction",
    ],
    idealFor: ["Banking Sector", "IT Companies", "Government Organisations", "Hospitals"],
  },
  {
    slug: "it-asset-disposal",
    title: "IT Asset Disposal (ITAD)",
    description:
      "End-to-end IT asset disposition covering inventory audit, secure transport, refurbishment and compliant disposal.",
    heroDescription:
      "A single accountable program for retiring IT assets — inventory audit, secure chain-of-custody transport, refurbishment where possible, and fully compliant disposal for the rest.",
    icon: FileCheck2,
    points: [
      "Full asset chain-of-custody",
      "Detailed disposal reporting",
      "Regulatory compliant documentation",
    ],
    idealFor: ["Corporates", "IT Companies", "Government Organisations"],
  },
  {
    slug: "computer-recycling",
    title: "Computer Recycling",
    description:
      "Environmentally sound recycling of desktops, monitors and peripherals with maximum material recovery.",
    heroDescription:
      "Desktops, monitors, keyboards and peripherals are broken down at the component level so metals, plastics and glass are recovered rather than landfilled.",
    icon: Monitor,
    points: [
      "Component-level segregation",
      "Zero landfill commitment",
      "Metal & plastic recovery",
    ],
    idealFor: ["Educational Institutions", "Corporates", "Households"],
  },
  {
    slug: "laptop-recycling",
    title: "Laptop Recycling",
    description:
      "Safe dismantling and recycling of laptops and notebooks, including battery handling under strict safety protocols.",
    heroDescription:
      "Laptops and notebooks are dismantled under strict safety protocols, with lithium-ion batteries and data-bearing components handled separately for safe, compliant processing.",
    icon: Laptop,
    points: [
      "Certified battery disposal",
      "Data-bearing part destruction",
      "Precious metal recovery",
    ],
    idealFor: ["IT Companies", "Corporates", "Educational Institutions", "Households"],
  },
  {
    slug: "server-disposal",
    title: "Server Disposal",
    description:
      "Secure decommissioning of servers and data-centre hardware with strict chain-of-custody and destruction protocols.",
    heroDescription:
      "Our teams decommission racks and data-centre hardware on-site where required, tracking every drive individually through secure erasure and disposal.",
    icon: Server,
    points: [
      "On-site data centre decommissioning",
      "Rack & drive-level tracking",
      "Verified secure erasure",
    ],
    idealFor: ["IT Companies", "Banking Sector", "Government Organisations"],
  },
  {
    slug: "electronics-recycling",
    title: "Electronics Recycling",
    description:
      "Responsible recycling of a wide range of consumer and industrial electronics, from small appliances to circuit boards.",
    heroDescription:
      "From small appliances to industrial control boards, we accept a broad range of electronics and process them through certified downstream recycling partners.",
    icon: Cpu,
    points: [
      "Wide category acceptance",
      "PCB & e-scrap processing",
      "Downstream vendor audits",
    ],
    idealFor: ["Manufacturing Industries", "Corporates", "Households"],
  },
  {
    slug: "corporate-e-waste-management",
    title: "Corporate E-Waste Management",
    description:
      "Tailored e-waste management programs for enterprises, including EPR compliance support and sustainability reporting.",
    heroDescription:
      "A recurring, managed program built around your organisation's asset-retirement cycle — collection schedules, EPR target support and sustainability reporting handled for you.",
    icon: Building2,
    points: [
      "Custom collection schedules",
      "EPR target support",
      "Annual sustainability reports",
    ],
    idealFor: ["Corporates", "Manufacturing Industries", "Government Organisations"],
  },
  {
    slug: "asset-recovery",
    title: "Asset Recovery",
    description:
      "Maximise return on retired IT assets through refurbishment, resale and material recovery programs.",
    heroDescription:
      "Retired assets aren't automatically scrapped — we assess for refurbishment and resale value first, sharing the recovered revenue back through transparent reporting.",
    icon: BarChart3,
    points: [
      "Fair market valuation",
      "Refurbish & resale channels",
      "Revenue-share reporting",
    ],
    idealFor: ["Corporates", "IT Companies", "Banking Sector"],
  },
  {
    slug: "recycling-compliance",
    title: "Recycling Compliance",
    description:
      "Guidance and documentation support to help organisations meet e-waste and EPR regulatory requirements.",
    heroDescription:
      "We help your compliance and procurement teams navigate E-Waste (Management) Rules and EPR obligations with audit-ready documentation at every step.",
    icon: ClipboardCheck,
    points: [
      "CPCB / SPCB compliant process",
      "Audit-ready documentation",
      "Ongoing regulatory updates",
    ],
    idealFor: ["Corporates", "Government Organisations", "Manufacturing Industries"],
  },
];

export const industries: Industry[] = [
  {
    title: "IT Companies",
    description:
      "Bulk retirement of laptops, servers and networking gear handled with secure data destruction end to end.",
    icon: Building2,
  },
  {
    title: "Schools & Colleges",
    description:
      "Safe, compliant disposal of computer labs and classroom electronics with student-safety in mind.",
    icon: School,
  },
  {
    title: "Government Offices",
    description:
      "EPR and CPCB-aligned e-waste programs built for public sector procurement and audit requirements.",
    icon: Landmark,
  },
  {
    title: "Hospitals",
    description:
      "Specialised handling of diagnostic and IT electronics with strict patient-data destruction protocols.",
    icon: Hospital,
  },
  {
    title: "Manufacturing Industries",
    description:
      "Large-scale industrial electronics and control-system e-waste processed with full material traceability.",
    icon: Factory,
  },
  {
    title: "Banking Sector",
    description:
      "High-security data destruction and ITAD for ATMs, servers and branch IT infrastructure.",
    icon: Landmark,
  },
];

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Collection",
    description:
      "Our fleet collects e-waste from your premises on a scheduled or on-demand basis, with a signed handover manifest.",
    icon: Truck,
  },
  {
    step: 2,
    title: "Sorting",
    description:
      "Collected devices are catalogued and sorted by category, condition and material composition at our facility.",
    icon: Boxes,
  },
  {
    step: 3,
    title: "Data Sanitization",
    description:
      "All storage media undergo certified data wiping or physical destruction before any further processing.",
    icon: ShieldCheck,
  },
  {
    step: 4,
    title: "Dismantling",
    description:
      "Devices are manually and mechanically dismantled to separate metals, plastics, glass and hazardous components.",
    icon: Wrench,
  },
  {
    step: 5,
    title: "Recycling",
    description:
      "Segregated materials are processed through certified downstream recyclers for maximum resource recovery.",
    icon: Recycle,
  },
  {
    step: 6,
    title: "Certification",
    description:
      "A certificate of recycling and data destruction is issued, giving you a fully auditable compliance trail.",
    icon: Award,
  },
];

export const stats: Stat[] = [
  { label: "Devices Recycled", value: 250000, suffix: "+", icon: Recycle },
  { label: "Corporate Clients", value: 480, suffix: "+", icon: Building2 },
  { label: "Years of Experience", value: 12, suffix: "+", icon: Timer },
  { label: "Tons of E-Waste Processed", value: 18500, suffix: "+", icon: Package },
];

export const whyUsPoints: WhyUsPoint[] = [
  {
    title: "Certified Recycling",
    description:
      "Every process step follows CPCB-authorised recycling standards, ensuring fully compliant disposal.",
    icon: BadgeCheck,
  },
  {
    title: "Secure Data Destruction",
    description:
      "Industry-standard wiping and physical destruction protocols eliminate any risk of data exposure.",
    icon: ShieldCheck,
  },
  {
    title: "Environmental Compliance",
    description:
      "We operate under strict environmental standards with a zero-landfill, zero-incineration commitment.",
    icon: Leaf,
  },
  {
    title: "Nationwide Collection",
    description:
      "A wide logistics network enables scheduled pickups from any location across the country.",
    icon: MapPin,
  },
  {
    title: "Fast Service",
    description:
      "Streamlined scheduling and processing means your e-waste is collected and cleared without delay.",
    icon: Timer,
  },
  {
    title: "Transparent Reporting",
    description:
      "Detailed asset-level reports and certificates give you a complete, auditable compliance record.",
    icon: FileText,
  },
];

export const certifications: Certification[] = [
  {
    title: "Government Compliance",
    description:
      "Registered and authorised under CPCB / State Pollution Control Board e-waste management rules.",
    icon: Landmark,
  },
  {
    title: "Environmental Standards",
    description:
      "Operations aligned with ISO 14001 environmental management practices across all facilities.",
    icon: Leaf,
  },
  {
    title: "Data Security Standards",
    description:
      "Data destruction procedures follow ISO 27001-aligned information security guidelines.",
    icon: ShieldCheck,
  },
  {
    title: "Recycling Certifications",
    description:
      "Facility processes benchmarked against R2 (Responsible Recycling) and e-Stewards guidelines.",
    icon: Award,
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Arvind Rao",
    role: "IT Director",
    company: "Nexora Technologies",
    quote:
      "TEKREC handled the decommissioning of our entire data centre with zero data security concerns. Their certificates made our audit painless.",
    rating: 5,
  },
  {
    name: "Priya Menon",
    role: "Admin Head",
    company: "Sunrise Public School",
    quote:
      "Our computer lab upgrade left us with dozens of old systems. TEKREC collected everything for free and gave us a clean compliance certificate.",
    rating: 5,
  },
  {
    name: "Suresh Kumar",
    role: "Procurement Manager",
    company: "Vantage Manufacturing Ltd.",
    quote:
      "Professional, punctual, and genuinely committed to sustainability. Their reporting dashboard makes EPR compliance simple for us every year.",
    rating: 5,
  },
  {
    name: "Ananya Iyer",
    role: "Operations Lead",
    company: "Meridian Bank",
    quote:
      "Given the sensitivity of banking data, we needed absolute assurance on destruction. TEKREC's process and documentation exceeded expectations.",
    rating: 5,
  },
];

export const sustainabilityGoals = [
  {
    year: "2026",
    title: "Zero Landfill Operations",
    description:
      "Achieve 100% diversion of processed e-waste from landfills across all TEKREC facilities.",
    icon: Leaf,
  },
  {
    year: "2027",
    title: "Carbon-Neutral Logistics",
    description:
      "Transition collection fleet to a low-emission model and offset residual transport emissions.",
    icon: Truck,
  },
  {
    year: "2028",
    title: "95% Material Recovery Rate",
    description:
      "Increase recoverable material yield per ton of processed e-waste through advanced sorting.",
    icon: Recycle,
  },
  {
    year: "2030",
    title: "Nationwide Circular Economy Network",
    description:
      "Expand refurbishment and resale programs to extend product life cycles across India.",
    icon: BarChart3,
  },
] as const;

export const environmentalCommitments = [
  {
    title: "Zero Landfill Policy",
    description:
      "No processed e-waste is sent to landfill or incinerated; all residual material is routed to certified downstream recyclers.",
    icon: Leaf,
  },
  {
    title: "Hazardous Material Control",
    description:
      "Lead, mercury and other hazardous substances are isolated and disposed of under strict environmental protocols.",
    icon: ShieldCheck,
  },
  {
    title: "Resource Recovery",
    description:
      "Metals, plastics and rare-earth elements are recovered and channelled back into manufacturing supply chains.",
    icon: Recycle,
  },
  {
    title: "Emission Reduction",
    description:
      "Route-optimised logistics and energy-efficient facility operations reduce our overall carbon footprint.",
    icon: Factory,
  },
] as const;

export const faqs: FAQItem[] = [
  {
    question: "What types of e-waste do you collect?",
    answer:
      "We collect all categories of IT and electronic equipment including laptops, desktops, servers, monitors, networking devices, printers, mobile phones, batteries and industrial electronics.",
  },
  {
    question: "Is there a minimum quantity required for pickup?",
    answer:
      "Households and small offices can request pickup for even a single device. For corporate and bulk collections, we offer scheduled pickups tailored to your volume.",
  },
  {
    question: "How is my data protected during recycling?",
    answer:
      "All storage devices go through certified data sanitization or physical destruction before any recycling step, and you receive a certificate of data destruction for your records.",
  },
  {
    question: "Do you provide compliance documentation?",
    answer:
      "Yes. Every collection is accompanied by a manifest, and on completion you receive a certificate of recycling along with EPR-aligned compliance reports.",
  },
  {
    question: "Do you operate across India?",
    answer:
      "We maintain a nationwide collection network and can arrange logistics for corporate clients with multiple office locations across the country.",
  },
  {
    question: "Is there a cost for recycling pickup?",
    answer:
      "Household and small-quantity pickups are typically free of charge. Corporate and bulk ITAD engagements are quoted based on volume, asset type and service requirements.",
  },
];
