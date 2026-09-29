import Image from "next/image"
import Link from "next/link"
import type { ReactNode } from "react"
import { Check, Phone, Plus } from "lucide-react"
import { SITE, SERVICES, ALL_CITIES } from "@/lib/site"
import { faqJsonLd, BUSINESS_ID } from "@/lib/seo"
import { Breadcrumbs, CtaBand, FillLink } from "@/components/site/ui"

export type ServiceContent = {
  slug: string
  name: string
  h1: ReactNode
  sub: string
  hero: { src: string; alt: string; position?: string }
  facts?: { big: string; small: string }[]
  introTitle: string
  paragraphs: string[]
  includedTitle: string
  included: string[]
  faqs: { q: string; a: string }[]
  gallery?: { src: string; alt: string }[]
  cta: { title: string; accent: string }
}

export default function ServicePage({ c, jsonLd, children }: { c: ServiceContent; jsonLd: object; children?: ReactNode }) {
  const others = SERVICES.filter((s) => s.slug !== c.slug)
  return (
    <div className="flex flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative flex min-h-[640px] flex-col justify-end overflow-hidden bg-navy pb-20 pt-40 text-ivory md:min-h-[720px]">
        <Image src={c.hero.src} alt={c.hero.alt} fill priority sizes="100vw" className="aa-kenburns object-cover" style={{ objectPosition: c.hero.position ?? "50% 50%" }} />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,20,33,0.92)_0%,rgba(8,20,33,0.6)_50%,rgba(8,20,33,0.2)_100%)]" />
        <div className="container relative flex flex-col gap-6">
          <div className="aa-rise">
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: c.name }]} />
          </div>
          <h1 className="aa-rise max-w-4xl font-display text-5xl font-light leading-[0.98] tracking-[-0.025em] md:text-[88px]" style={{ animationDelay: "0.15s" }}>
            {c.h1}
          </h1>
          <p className="aa-rise max-w-2xl text-lg leading-relaxed text-ivory/85 md:text-[21px]" style={{ animationDelay: "0.3s" }}>
            {c.sub}
          </p>
          {c.facts && (
            <div className="aa-rise mt-6 grid gap-6 border-t border-ivory/20 pt-6 sm:grid-cols-3" style={{ animationDelay: "0.5s" }}>
              {c.facts.map((f, i) => (
                <div key={f.big} className={i ? "sm:border-l sm:border-ivory/20 sm:pl-8" : ""}>
                  <p className="font-display text-3xl">{f.big}</p>
                  <p className="text-[15px] text-ivory/75">{f.small}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="container grid gap-16 py-24 lg:grid-cols-12">
        <div className="flex flex-col gap-6 lg:col-span-7">
          <h2 className="font-display text-4xl font-light leading-[1.05] tracking-[-0.02em] text-navy md:text-[52px]">{c.introTitle}</h2>
          {c.paragraphs.map((p) => (
            <p key={p.slice(0, 24)} className="text-lg leading-[1.75] text-slate-2">
              {p}
            </p>
          ))}

          <h3 className="mt-8 font-display text-3xl text-navy">{c.includedTitle}</h3>
          <ul className="grid gap-3 sm:grid-cols-2">
            {c.included.map((item) => (
              <li key={item} className="flex items-start gap-3 rounded-2xl bg-white p-4 text-[16px] font-medium text-navy shadow-[0_4px_14px_rgba(11,27,43,0.05)]">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal text-white">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} aria-hidden="true" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <aside className="lg:col-span-4 lg:col-start-9">
          <div className="flex flex-col gap-4 rounded-[28px] bg-white p-8 shadow-[0_24px_60px_rgba(11,27,43,0.1)] lg:sticky lg:top-28">
            <p className="font-display text-3xl text-navy">Free consultation</p>
            <p className="leading-relaxed text-slate">
              Meet the owner at your home. Leave with a clear plan and a firm price. Based in McKinney, serving Frisco, Allen, Plano, Dallas, Fort Worth, Southlake and all of DFW.
            </p>
            <FillLink href={`/contact?service=${serviceKey(c.slug)}`}>Get a free quote</FillLink>
            <a href={SITE.phoneHref} className="flex items-center justify-center gap-2 rounded-full border-[1.5px] border-navy py-4 font-bold text-navy">
              <Phone className="h-4 w-4" aria-hidden="true" />
              {SITE.phone}
            </a>
            <div className="mt-4 border-t border-navy/10 pt-5">
              <p className="mb-2 text-sm font-bold uppercase tracking-[0.14em] text-teal">Other services</p>
              <ul className="flex flex-col gap-1">
                {others.map((s) => (
                  <li key={s.href}>
                    <Link href={s.href} className="aa-link-u font-semibold text-navy">
                      {s.name} →
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>
      </section>

      {children}

      <section className="bg-white py-24">
        <div className="container grid gap-12 lg:grid-cols-12">
          <h2 className="font-display text-4xl font-light leading-[1.02] tracking-[-0.02em] text-navy md:text-[56px] lg:col-span-4">
            Frequently asked <em>questions.</em>
          </h2>
          <div className="lg:col-span-7 lg:col-start-6">
            {c.faqs.map((f, i) => (
              <details key={f.q} className="aa-faq group border-t border-navy/15 last:border-b" open={i === 0}>
                <summary className="flex min-h-[84px] cursor-pointer list-none items-center justify-between gap-6 py-4 text-lg font-bold text-navy md:text-xl">
                  {f.q}
                  <span className="aa-faq-chip flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ivory text-navy transition-transform duration-300">
                    <Plus className="h-5 w-5" aria-hidden="true" />
                  </span>
                </summary>
                <p className="pb-7 pr-4 text-[17px] leading-[1.7] text-slate-2 md:pr-20">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {c.gallery && (
        <section className="container py-24">
          <div className="mb-9 flex items-end justify-between">
            <h2 className="font-display text-4xl font-light text-navy md:text-5xl">Recent projects</h2>
            <Link href="/gallery" className="aa-link-u pb-1 font-bold text-teal">
              See the full gallery →
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {c.gallery.map((g) => (
              <div key={g.src} className="aa-card relative h-[320px] overflow-hidden rounded-3xl md:h-[360px]">
                <Image src={g.src} alt={g.alt} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
              </div>
            ))}
          </div>
        </section>
      )}

      <CtaBand title={c.cta.title} accent={c.cta.accent} />
    </div>
  )
}

function serviceKey(slug: string) {
  return (
    {
      "new-pool-construction": "new-construction",
      "pool-remodeling": "remodeling",
      "outdoor-living": "outdoor-living",
      "pool-maintenance": "maintenance",
      "pool-repairs": "repairs",
    }[slug] ?? "other"
  )
}

export function serviceJsonLd(slug: string, name: string, description: string, faqs: { q: string; a: string }[] = []) {
  const url = `${SITE.url}/services/${slug}`
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
          { "@type": "ListItem", position: 2, name: "Services", item: `${SITE.url}/services` },
          { "@type": "ListItem", position: 3, name, item: url },
        ],
      },
      {
        "@type": "Service",
        name,
        description,
        provider: { "@id": BUSINESS_ID },
        areaServed: ALL_CITIES.map((c) => ({ "@type": "City", name: `${c}, TX` })),
        url,
      },
      ...(faqs.length ? [faqJsonLd(faqs)] : []),
    ],
  }
}
