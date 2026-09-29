import { pageMeta } from "@/lib/seo"
import Image from "next/image"
import { Check } from "lucide-react"
import { SERVICES } from "@/lib/site"
import { Breadcrumbs, CtaBand, FillLink } from "@/components/site/ui"

export const metadata = pageMeta({
  title: "Pool Services in DFW — Construction, Remodeling & Maintenance",
  description:
    "Explore all pool services from Aqua Aesthetics Pools: new construction, remodeling, outdoor living, maintenance, and repairs throughout Dallas, Frisco, Plano, Southlake, and the DFW Metroplex.",
  path: "/services",
})

const servicesJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Pool Services by Aqua Aesthetics Pools",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Service",
        name: "New Pool Construction",
        description: "Custom-designed pools built to your specifications with quality materials and craftsmanship throughout the DFW Metroplex.",
        url: "https://www.aquaaestheticspools.com/services/new-pool-construction",
        provider: { "@type": "LocalBusiness", name: "Aqua Aesthetics Pools" },
        areaServed: ["Dallas", "Frisco", "Plano", "Southlake", "Colleyville", "Fort Worth", "Flower Mound"],
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Service",
        name: "Pool Remodeling",
        description: "Expert pool renovation services including resurfacing, tile replacement, deck renovation, and equipment upgrades in DFW.",
        url: "https://www.aquaaestheticspools.com/services/pool-remodeling",
        provider: { "@type": "LocalBusiness", name: "Aqua Aesthetics Pools" },
        areaServed: ["Dallas", "Frisco", "Plano", "Southlake", "Colleyville", "Fort Worth", "Flower Mound"],
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Service",
        name: "Outdoor Living",
        description: "Custom outdoor living solutions including patios, outdoor kitchens, fire pits, and pergolas in the DFW area.",
        url: "https://www.aquaaestheticspools.com/services/outdoor-living",
        provider: { "@type": "LocalBusiness", name: "Aqua Aesthetics Pools" },
        areaServed: ["Dallas", "Frisco", "Plano", "Southlake", "Colleyville", "Fort Worth", "Flower Mound"],
      },
    },
    {
      "@type": "ListItem",
      position: 4,
      item: {
        "@type": "Service",
        name: "Pool Maintenance",
        description: "Weekly and bi-weekly pool maintenance programs to keep your pool pristine year-round across DFW.",
        url: "https://www.aquaaestheticspools.com/services/pool-maintenance",
        provider: { "@type": "LocalBusiness", name: "Aqua Aesthetics Pools" },
        areaServed: ["Dallas", "Frisco", "Plano", "Southlake", "Colleyville", "Fort Worth", "Flower Mound"],
      },
    },
    {
      "@type": "ListItem",
      position: 5,
      item: {
        "@type": "Service",
        name: "Pool Repairs",
        description: "Expert diagnosis and repair of leaks, pumps, heaters, filters, and plumbing throughout the DFW Metroplex.",
        url: "https://www.aquaaestheticspools.com/services/pool-repairs",
        provider: { "@type": "LocalBusiness", name: "Aqua Aesthetics Pools" },
        areaServed: ["Dallas", "Frisco", "Plano", "Southlake", "Colleyville", "Fort Worth", "Flower Mound"],
      },
    },
  ],
}


const FEATURES: Record<string, string[]> = {
  "new-pool-construction": ["Personalized Design Consultation", "3D Renderings", "Permit Acquisition and Processing", "Excavation and Pool Shell Construction", "Plumbing and Electrical Installation", "Coping, Tiling, and Plastering", "Deck Construction and Landscaping", "Final Inspection and Pool Startup"],
  "pool-remodeling": ["Pool Resurfacing", "Tile Replacement and Upgrades", "Coping and Deck Renovation", "Equipment Upgrades", "Energy-Efficient Equipment Installation", "Water Feature Additions", "Lighting Enhancements", "Safety Feature Installation"],
  "outdoor-living": ["Patio Design and Installation", "Outdoor Kitchens", "Fire Pits and Fireplaces", "Pergolas and Shade Structures", "Landscape Design and Installation", "Lighting Design", "Irrigation Systems"],
  "pool-maintenance": ["Weekly or Bi-Weekly Service Options", "Chemical Balancing", "Equipment Inspection", "Algae Prevention and Treatment", "Filter Cleaning", "Preventative Maintenance"],
  "pool-repairs": ["Leak Detection and Repair", "Pump Repair and Replacement", "Heater Repair and Replacement", "Filter Repair and Replacement", "Plumbing Repairs", "Electrical System Diagnosis", "Automation System Repairs"],
}

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }} />

      <section className="aa-caustic-bg relative overflow-hidden pb-24 pt-44 text-ivory">
        <div className="container flex max-w-5xl flex-col gap-7">
          <div className="aa-rise">
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Services" }]} />
          </div>
          <h1 className="aa-rise font-display text-5xl font-light leading-[0.98] tracking-[-0.025em] md:text-[88px]" style={{ animationDelay: "0.15s" }}>
            Pool services in the <em className="aa-glint">DFW Metroplex</em>
          </h1>
          <p className="aa-rise max-w-2xl text-lg leading-relaxed text-ivory/85 md:text-xl" style={{ animationDelay: "0.3s" }}>
            From concept to completion and beyond, we provide comprehensive pool solutions for homeowners throughout Dallas, Frisco, Plano, Southlake, Colleyville, Fort Worth, and Flower Mound.
          </p>
          <div className="aa-rise flex flex-wrap gap-2.5" style={{ animationDelay: "0.45s" }}>
            {SERVICES.map((s) => (
              <a key={s.slug} href={`#${s.slug}`} className="rounded-full border border-ivory/40 px-5 py-3 text-[15px] font-semibold transition-colors hover:bg-ivory hover:text-navy">
                {s.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="container flex flex-col gap-24 py-24">
        {SERVICES.map((s, i) => (
          <article key={s.slug} id={s.slug} className="grid scroll-mt-28 items-center gap-10 lg:grid-cols-12">
            <div className={`aa-card relative h-[320px] overflow-hidden rounded-[28px] md:h-[440px] lg:col-span-7 ${i % 2 ? "lg:order-2 lg:col-start-6" : ""}`}>
              <Image src={s.image} alt={s.alt} fill sizes="(min-width: 1024px) 58vw, 100vw" className="object-cover" />
              {i === 0 && <span className="absolute left-6 top-6 rounded-full bg-sun px-3.5 py-2 text-xs font-bold uppercase tracking-[0.12em] text-navy">Most requested</span>}
            </div>
            <div className={`flex flex-col gap-5 lg:col-span-4 ${i % 2 ? "lg:order-1 lg:col-start-1" : "lg:col-start-9"}`}>
              <span className="font-display text-[22px] text-sun-dark">0{i + 1}</span>
              <h2 className="font-display text-4xl font-light leading-[1.02] tracking-[-0.02em] text-navy md:text-5xl">{s.name}</h2>
              <p className="text-[17px] leading-relaxed text-slate">{s.blurb}</p>
              <ul className="flex flex-col gap-2.5">
                {FEATURES[s.slug].map((f) => (
                  <li key={f} className="flex items-center gap-2.5 font-medium text-navy">
                    <Check className="h-[18px] w-[18px] text-teal" strokeWidth={2.6} aria-hidden="true" />
                    {f}
                  </li>
                ))}
              </ul>
              <FillLink href={s.href} variant="navy" arrow className="mt-2 self-start">
                Learn more
              </FillLink>
            </div>
          </article>
        ))}
      </section>

      <CtaBand title="Not sure where to start?" accent="Just ask." />
    </div>
  )
}
