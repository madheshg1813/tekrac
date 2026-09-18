import type { FAQItem } from "@/types";

export interface ChennaiArea {
  slug: string;
  area: string;
  pincode: string;
}

/**
 * Rollout order: one new locality page goes live per day, starting the day this
 * feature shipped. Ordered by commercial priority — business hubs first, then
 * residential neighbourhoods, then the outer suburbs / OMR corridor.
 */
export const chennaiAreas: ChennaiArea[] = [
  { slug: "e-waste-recycling-service-in-t-nagar", area: "T. Nagar", pincode: "600017" },
  { slug: "e-waste-recycling-service-in-anna-nagar", area: "Anna Nagar", pincode: "600040" },
  { slug: "e-waste-recycling-service-in-velachery", area: "Velachery", pincode: "600042" },
  { slug: "e-waste-recycling-service-in-adyar", area: "Adyar", pincode: "600020" },
  { slug: "e-waste-recycling-service-in-nungambakkam", area: "Nungambakkam", pincode: "600034" },
  { slug: "e-waste-recycling-service-in-guindy", area: "Guindy", pincode: "600032" },
  { slug: "e-waste-recycling-service-in-porur", area: "Porur", pincode: "600116" },
  { slug: "e-waste-recycling-service-in-vadapalani", area: "Vadapalani", pincode: "600026" },
  { slug: "e-waste-recycling-service-in-ashok-nagar", area: "Ashok Nagar", pincode: "600083" },
  { slug: "e-waste-recycling-service-in-kodambakkam", area: "Kodambakkam", pincode: "600024" },
  { slug: "e-waste-recycling-service-in-mylapore", area: "Mylapore", pincode: "600004" },
  { slug: "e-waste-recycling-service-in-egmore", area: "Egmore", pincode: "600008" },
  { slug: "e-waste-recycling-service-in-chetpet", area: "Chetpet", pincode: "600031" },
  { slug: "e-waste-recycling-service-in-perambur", area: "Perambur", pincode: "600011" },
  { slug: "e-waste-recycling-service-in-tambaram", area: "Tambaram", pincode: "600045" },
  { slug: "e-waste-recycling-service-in-chromepet", area: "Chromepet", pincode: "600044" },
  { slug: "e-waste-recycling-service-in-pallavaram", area: "Pallavaram", pincode: "600043" },
  { slug: "e-waste-recycling-service-in-alandur", area: "Alandur", pincode: "600016" },
  { slug: "e-waste-recycling-service-in-saidapet", area: "Saidapet", pincode: "600015" },
  { slug: "e-waste-recycling-service-in-teynampet", area: "Teynampet", pincode: "600018" },
  { slug: "e-waste-recycling-service-in-royapettah", area: "Royapettah", pincode: "600014" },
  { slug: "e-waste-recycling-service-in-west-mambalam", area: "West Mambalam", pincode: "600033" },
  { slug: "e-waste-recycling-service-in-raja-annamalai-puram", area: "Raja Annamalai Puram", pincode: "600028" },
  { slug: "e-waste-recycling-service-in-nandanam", area: "Nandanam", pincode: "600035" },
  { slug: "e-waste-recycling-service-in-kilpauk", area: "Kilpauk", pincode: "600010" },
  { slug: "e-waste-recycling-service-in-vepery", area: "Vepery", pincode: "600007" },
  { slug: "e-waste-recycling-service-in-anna-salai", area: "Anna Salai", pincode: "600002" },
  { slug: "e-waste-recycling-service-in-george-town", area: "George Town", pincode: "600001" },
  { slug: "e-waste-recycling-service-in-washermanpet", area: "Washermanpet", pincode: "600021" },
  { slug: "e-waste-recycling-service-in-tondiarpet", area: "Tondiarpet", pincode: "600081" },
  { slug: "e-waste-recycling-service-in-vyasarpadi", area: "Vyasarpadi", pincode: "600039" },
  { slug: "e-waste-recycling-service-in-villivakkam", area: "Villivakkam", pincode: "600049" },
  { slug: "e-waste-recycling-service-in-ambattur", area: "Ambattur", pincode: "600053" },
  { slug: "e-waste-recycling-service-in-ambattur-industrial-estate", area: "Ambattur Industrial Estate", pincode: "600058" },
  { slug: "e-waste-recycling-service-in-avadi", area: "Avadi", pincode: "600054" },
  { slug: "e-waste-recycling-service-in-madhavaram", area: "Madhavaram", pincode: "600060" },
  { slug: "e-waste-recycling-service-in-kolathur", area: "Kolathur", pincode: "600099" },
  { slug: "e-waste-recycling-service-in-anna-nagar-west", area: "Anna Nagar West", pincode: "600101" },
  { slug: "e-waste-recycling-service-in-virugambakkam", area: "Virugambakkam", pincode: "600092" },
  { slug: "e-waste-recycling-service-in-nolambur", area: "Nolambur", pincode: "600095" },
  { slug: "e-waste-recycling-service-in-iyyapanthangal", area: "Iyyapanthangal", pincode: "600056" },
  { slug: "e-waste-recycling-service-in-ramapuram", area: "Ramapuram", pincode: "600089" },
  { slug: "e-waste-recycling-service-in-manapakkam", area: "Manapakkam", pincode: "600125" },
  { slug: "e-waste-recycling-service-in-kk-nagar", area: "KK Nagar", pincode: "600078" },
  { slug: "e-waste-recycling-service-in-karapakkam", area: "Karapakkam", pincode: "600097" },
  { slug: "e-waste-recycling-service-in-thiruvanmiyur", area: "Thiruvanmiyur", pincode: "600041" },
  { slug: "e-waste-recycling-service-in-besant-nagar", area: "Besant Nagar", pincode: "600090" },
  { slug: "e-waste-recycling-service-in-neelankarai", area: "Neelankarai", pincode: "600115" },
  { slug: "e-waste-recycling-service-in-perungudi", area: "Perungudi", pincode: "600096" },
  { slug: "e-waste-recycling-service-in-sholinganallur", area: "Sholinganallur", pincode: "600119" },
];

const ROLLOUT_START = Date.UTC(2026, 8, 18); // 18 Sep 2026 — first locality goes live at launch
const DAY_MS = 24 * 60 * 60 * 1000;

export function getPublishDate(index: number): Date {
  return new Date(ROLLOUT_START + index * DAY_MS);
}

export function isAreaPublished(index: number): boolean {
  return Date.now() >= getPublishDate(index).getTime();
}

export function getChennaiAreaBySlug(
  slug: string
): { area: ChennaiArea; index: number } | null {
  const index = chennaiAreas.findIndex((a) => a.slug === slug);
  if (index === -1) return null;
  return { area: chennaiAreas[index], index };
}

export function getPublishedChennaiAreas(): (ChennaiArea & { index: number })[] {
  return chennaiAreas
    .map((area, index) => ({ ...area, index }))
    .filter((entry) => isAreaPublished(entry.index));
}

export function buildAreaFaqs(areaName: string): FAQItem[] {
  return [
    {
      question: `Do you provide free e-waste pickup in ${areaName}?`,
      answer: `Yes. We offer free doorstep pickup for households and small offices in ${areaName} and the surrounding neighbourhood. For bulk or corporate volumes, we schedule a dedicated collection slot at your convenience.`,
    },
    {
      question: `Is there a minimum quantity for pickup in ${areaName}?`,
      answer: `No minimum quantity is required for residential pickups in ${areaName} — even a single laptop or phone qualifies. Corporate and institutional clients can arrange scheduled bulk collections.`,
    },
    {
      question: `Will I get a certificate after recycling my e-waste in ${areaName}?`,
      answer: `Every pickup from ${areaName} is accompanied by a signed handover manifest, and on completion you receive a certificate of recycling and, where applicable, a certificate of data destruction.`,
    },
    {
      question: `What kind of electronics do you accept from ${areaName}?`,
      answer: `We accept laptops, desktops, servers, monitors, printers, networking equipment, mobile phones, batteries and most household or office electronics from ${areaName} and nearby areas.`,
    },
  ];
}
