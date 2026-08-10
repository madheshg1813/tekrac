# TEKREC E Waste Recycling — Website

A premium, production-ready corporate website for TEKREC E Waste Recycling, built with Next.js 15 (App Router), TypeScript, Tailwind CSS 4 and Framer Motion.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Scripts

- `npm run dev` — start the development server
- `npm run build` — create a production build
- `npm run start` — serve the production build
- `npm run lint` — run ESLint

## Project Structure

- `app/` — routes (Home, About, Services, Industries, Process, Certifications, Contact), layout, SEO files (`sitemap.ts`, `robots.ts`, `opengraph-image.tsx`, `icon.tsx`)
- `components/` — reusable UI (`ui/`), layout (`layout/`), and shared components (Navbar, Footer, ContactForm, PageHero)
- `sections/` — page-specific sections grouped by page (`home/`, `about/`, `services/`, `industries/`, `process/`, `certifications/`, `contact/`, `shared/`)
- `lib/` — site configuration (`constants.ts`), content data (`data.ts`), and utilities (`utils.ts`)
- `types/` — shared TypeScript interfaces

## Notes

- Business details (address, phone, email, testimonials) in `lib/constants.ts` and `lib/data.ts` are placeholder content — replace with real business information before launch.
- The Google Maps embed in `lib/constants.ts` (`mapsEmbedSrc`) uses the keyless `output=embed` query format — swap in a Maps Embed API key/URL if you need guaranteed long-term availability.
- Update `siteConfig.url` in `lib/constants.ts` to the real production domain before deploying, as it feeds canonical URLs, Open Graph tags and the sitemap.
