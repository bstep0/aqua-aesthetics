import type { Metadata } from "next"
import Image from "@/components/site/smart-image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Check, Plus } from "lucide-react"
import { AREAS, areaBySlug } from "@/lib/areas"
import { SITE, SERVICES, WHY_US } from "@/lib/site"
import { pageMeta, faqJsonLd, breadcrumbJsonLd, BUSINESS_ID } from "@/lib/seo"
import { Breadcrumbs, CtaBand, FillLink } from "@/components/site/ui"

export function generateStaticParams() {
  return AREAS.map((a) => ({ city: a.slug }))
}

export const dynamicParams = false

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const { city } = await params
  const a = areaBySlug(city)
  if (!a) return {}
  return pageMeta({
    title: `Pool Builder in ${a.city}, TX — Custom Pools, Remodels & Repairs`,
    description: `Custom pools, remodels, repairs and maintenance in ${a.city}, TX from a family-owned DFW pool builder since 1995. Free quote: ${SITE.phone}.`,
    path: `/service-areas/${a.slug}`,
    image: a.image,
  })
}

const faqsFor = (city: string) => [
  {
    q: `Do you build pools in ${city}, TX?`,
    a: `Yes. aqua aesthetics pools designs and builds custom in-ground pools in ${city} and across the Dallas–Fort Worth Metroplex, along with pool remodeling, outdoor living, weekly maintenance and repairs.`,
  },
  {
    q: `Do you handle pool permits in ${city}?`,
    a: `Yes. Pools in DFW cities require permits, and we handle the full process for you in ${city} — plan submission, inspections and final sign-off.`,
  },
  {
    q: `How long does it take to build a pool in ${city}?`,
    a: "Most new pool builds in the DFW area take between 8 and 14 weeks from permit approval to final inspection, depending on size, design complexity and weather. We'll give you a realistic timeline at your free consultation.",
  },
]

export default async function AreaPage({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params
  const a = areaBySlug(city)
  if (!a) notFound()
  const faqs = faqsFor(a.city)
  const path = `/service-areas/${a.slug}`
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      breadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "Service Areas", path: "/service-areas" },
        { name: `${a.city}, TX`, path },
      ]),
      {
        "@type": "Service",
        name: `Pool construction, remodeling and repair in ${a.city}, TX`,
        serviceType: "Pool Builder",
        provider: { "@id": BUSINESS_ID },
        areaServed: { "@type": "City", name: `${a.city}, TX` },
        url: `${SITE.url}${path}`,
      },
      faqJsonLd(faqs),
    ],
  }
  const nearby = a.nearby.map(areaBySlug).filter(Boolean) as typeof AREAS

  return (
    <div className="flex flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative flex min-h-[600px] flex-col justify-end overflow-hidden bg-navy pb-20 pt-40 text-ivory">
        <Image src={a.image} alt={a.alt} fill priority sizes="100vw" className="aa-kenburns object-cover" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,20,33,0.92)_0%,rgba(8,20,33,0.62)_55%,rgba(8,20,33,0.25)_100%)]" />
        <div className="container relative flex flex-col gap-6">
          <div className="aa-rise">
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Service Areas", href: "/service-areas" }, { label: a.city }]} />
          </div>
          <h1 className="aa-rise max-w-4xl font-display text-5xl font-light leading-[0.98] tracking-[-0.025em] md:text-[84px]" style={{ animationDelay: "0.15s" }}>
            Pool Builder in <em className="text-sun">{a.city}, TX</em>
          </h1>
          <p className="aa-rise max-w-2xl text-lg leading-relaxed text-ivory/85 md:text-xl" style={{ animationDelay: "0.3s" }}>
            Custom pools, remodels, outdoor living, maintenance and repairs for {a.city} homeowners — family-owned and owner-led since 1995.
          </p>
          <div className="aa-rise flex flex-wrap gap-4" style={{ animationDelay: "0.45s" }}>
            <FillLink href="/contact">Get a free quote</FillLink>
            <a href={SITE.phoneHref} className="inline-flex items-center rounded-full border border-ivory/50 px-7 py-4 text-[17px] font-bold">
              {SITE.phone}
            </a>
          </div>
        </div>
      </section>

      <section className="container grid gap-14 py-24 lg:grid-cols-12">
        <div className="flex flex-col gap-6 lg:col-span-7">
          <h2 className="font-display text-4xl font-light leading-[1.05] tracking-[-0.02em] text-navy md:text-[52px]">
            Your {a.city} backyard, designed and built for you.
          </h2>
          <p className="text-lg leading-[1.75] text-slate-2">{a.intro}</p>
          <p className="text-lg leading-[1.75] text-slate-2">
            Every project starts with a free consultation at your home in {a.city}. We walk the yard, talk through how you want to use it, and give you a clear design and a firm price — your quote is your price, and any scope change is flagged before it happens. We serve {a.county} and the rest of the Dallas–Fort Worth Metroplex from our base in McKinney.
          </p>
          <ul className="grid gap-3 sm:grid-cols-2">
            {WHY_US.map((w) => (
              <li key={w.heading} className="flex items-start gap-3 rounded-2xl bg-white p-4 font-semibold text-navy">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal text-white">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} aria-hidden="true" />
                </span>
                {w.heading}
              </li>
            ))}
          </ul>
        </div>
        <aside className="lg:col-span-4 lg:col-start-9">
          <div className="flex flex-col gap-3 rounded-[28px] bg-white p-8 shadow-[0_24px_60px_rgba(11,27,43,0.1)] lg:sticky lg:top-28">
            <p className="mb-1 text-sm font-bold uppercase tracking-[0.14em] text-teal">Services in {a.city}</p>
            {SERVICES.map((s) => (
              <Link key={s.href} href={s.href} className="aa-link-u self-start text-lg font-semibold text-navy">
                {s.name} →
              </Link>
            ))}
            <Link href="/design" className="mt-4 rounded-full bg-navy px-6 py-4 text-center font-bold text-ivory">
              Design your {a.city} pool in 3D
            </Link>
          </div>
        </aside>
      </section>

      <section className="bg-white py-24">
        <div className="container grid gap-12 lg:grid-cols-12">
          <h2 className="font-display text-4xl font-light leading-[1.02] tracking-[-0.02em] text-navy md:text-[52px] lg:col-span-4">
            {a.city} pool <em>questions.</em>
          </h2>
          <div className="lg:col-span-7 lg:col-start-6">
            {faqs.map((f, i) => (
              <details key={f.q} className="aa-faq border-t border-navy/15 last:border-b" open={i === 0}>
                <summary className="flex min-h-[80px] cursor-pointer list-none items-center justify-between gap-6 py-4 text-lg font-bold text-navy">
                  {f.q}
                  <span className="aa-faq-chip flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ivory transition-transform duration-300">
                    <Plus className="h-5 w-5" aria-hidden="true" />
                  </span>
                </summary>
                <p className="pb-7 text-[17px] leading-[1.7] text-slate-2 md:pr-20">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {nearby.length > 0 && (
        <section className="container py-20">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-teal">Nearby communities we serve</p>
          <div className="flex flex-wrap gap-2.5">
            {nearby.map((n) => (
              <Link key={n.slug} href={`/service-areas/${n.slug}`} className="rounded-full border border-navy/10 bg-white px-5 py-3 font-semibold text-navy transition-colors hover:bg-navy hover:text-ivory">
                Pool Builder in {n.city}
              </Link>
            ))}
            <Link href="/service-areas" className="rounded-full px-5 py-3 font-bold text-teal">
              All Service Areas →
            </Link>
          </div>
        </section>
      )}

      <CtaBand title={`Let's plan your ${a.city}`} accent="backyard." />
    </div>
  )
}
