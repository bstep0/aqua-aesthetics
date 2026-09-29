import type { Metadata } from "next"
import { SITE, ALL_CITIES, SERVICES } from "@/lib/site"

const DEFAULT_IMAGE = "/images/pool18.jpg"

/** Page metadata with a canonical URL and matching social previews. */
export function pageMeta({ title, description, path, image = DEFAULT_IMAGE }: { title: string; description: string; path: string; image?: string }): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: SITE.name,
      locale: "en_US",
      url: path,
      title,
      description,
      images: [{ url: image, width: 1200, height: 630, alt: `${SITE.name} — ${title}` }],
    },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  }
}

export const BUSINESS_ID = `${SITE.url}/#business`

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": BUSINESS_ID,
  name: SITE.name,
  url: SITE.url,
  telephone: "+12149715996",
  email: SITE.email,
  description:
    "Family-owned pool builder based in McKinney, TX offering custom pool construction, pool remodeling, outdoor living, pool maintenance and pool repairs across Collin County and the Dallas–Fort Worth Metroplex since 1995.",
  foundingDate: "1995",
  founder: { "@type": "Person", name: "Larry Wieland" },
  address: {
    "@type": "PostalAddress",
    addressLocality: "McKinney",
    addressRegion: "TX",
    addressCountry: "US",
  },
  image: `${SITE.url}/images/pool18.jpg`,
  logo: `${SITE.url}/icon.svg`,
  areaServed: ALL_CITIES.map((c) => ({ "@type": "City", name: `${c}, TX` })),
  sameAs: ["https://share.google/yyhmW0NSpBeLPA5TP"],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "17:00",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Pool services",
    itemListElement: SERVICES.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s.name, url: `${SITE.url}${s.href}` },
    })),
  },
}

export function faqJsonLd(faqs: { q: string; a: string }[]) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  }
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, item: `${SITE.url}${it.path}` })),
  }
}
