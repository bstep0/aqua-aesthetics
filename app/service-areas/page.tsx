import Image from "@/components/site/smart-image"
import Link from "next/link"
import { AREAS } from "@/lib/areas"
import { pageMeta, breadcrumbJsonLd } from "@/lib/seo"
import { Breadcrumbs, CtaBand } from "@/components/site/ui"

export const metadata = pageMeta({
  title: "Service areas — pool builder across Dallas–Fort Worth",
  description:
    "aqua aesthetics pools builds, remodels, repairs and maintains pools across the Dallas–Fort Worth Metroplex — McKinney, Frisco, Allen, Plano, Prosper, Dallas, Fort Worth, Southlake and more.",
  path: "/service-areas",
})

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Service areas", path: "/service-areas" }])],
}

export default function ServiceAreasPage() {
  // Group each city under the first county it sits in.
  const primary = (county: string) => `${county.split(/[ ,]/)[0]} County`
  const counties = Array.from(new Set(AREAS.map((a) => primary(a.county))))
  return (
    <div className="flex flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="aa-caustic-bg pb-20 pt-44 text-ivory">
        <div className="container flex max-w-5xl flex-col gap-6">
          <div className="aa-rise">
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Service areas" }]} />
          </div>
          <h1 className="aa-rise font-display text-5xl font-light leading-[0.98] tracking-[-0.025em] md:text-[88px]" style={{ animationDelay: "0.15s" }}>
            Building pools across <em className="aa-glint">Dallas–Fort Worth</em>
          </h1>
          <p className="aa-rise max-w-2xl text-lg leading-relaxed text-ivory/85 md:text-xl" style={{ animationDelay: "0.3s" }}>
            Based in McKinney and working throughout the Metroplex — from Collin County to Tarrant County and everywhere in between.
          </p>
        </div>
      </section>

      <section className="container py-20">
        {counties.map((county) => {
          const list = AREAS.filter((a) => primary(a.county) === county)
          return (
            <div key={county} className="mb-16">
              <h2 className="mb-6 font-display text-3xl font-light text-navy md:text-4xl">{county}</h2>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {list.map((a) => (
                  <Link key={a.slug} href={`/service-areas/${a.slug}`} className="aa-card relative flex h-56 flex-col justify-end overflow-hidden rounded-3xl text-ivory">
                    <Image src={a.image} alt={a.alt} fill sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" className="object-cover" />
                    <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(8,20,33,0.9)_0%,rgba(8,20,33,0)_65%)]" />
                    <div className="relative p-6">
                      <p className="text-xs font-bold uppercase tracking-[0.14em] text-sun">Pool builder in</p>
                      <p className="font-display text-3xl">{a.city}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )
        })}
      </section>

      <CtaBand title="Don't see your city?" accent="Just ask." sub="We work across most of the Dallas–Fort Worth Metroplex." />
    </div>
  )
}
