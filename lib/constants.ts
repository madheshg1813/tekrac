import type { NavLink } from "@/types";

export const siteConfig = {
  name: "TEKREC E Waste Recycling",
  legalName: "Tekrec E Waste Recycling Pvt. Ltd.",
  shortName: "TEKREC",
  tagline: "Responsible E-Waste Recycling for a Sustainable Future",
  description:
    "TEKREC E Waste Recycling delivers secure, compliant and environmentally responsible electronic waste recycling, data destruction and IT asset disposal solutions for businesses, institutions and households across India.",
  url: "https://www.tekrecewaste.com",
  ogImage: "/opengraph-image",
  phone: "+91 73580 26779",
  phoneHref: "tel:+917358026779",
  email: "ewastetekrec@gmail.com",
  emailHref: "mailto:ewastetekrec@gmail.com",
  address: {
    line1: "No. 6, Ground Floor, Kalaignar Karunanidhi Street",
    line2: "Perungudi",
    city: "Chennai",
    state: "Tamil Nadu",
    zip: "600096",
    country: "India",
  },
  hours: "Mon – Sat: 10:00 AM – 8:00 PM",
  mapsEmbedSrc:
    "https://www.google.com/maps?q=Kalaignar+Karunanidhi+Street+Perungudi+Chennai+Tamil+Nadu&output=embed",
  googleBusinessUrl: "https://maps.app.goo.gl/PzZJD2SW7X87HWxe8?g_st=iw",
  social: {
    linkedin: "https://www.linkedin.com/",
    twitter: "https://twitter.com/",
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/",
  },
} as const;

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Chennai Locations", href: "/chennai" },
  { label: "Industries", href: "/industries" },
  { label: "Process", href: "/process" },
  { label: "Certifications", href: "/certifications" },
  { label: "Contact", href: "/contact" },
];
