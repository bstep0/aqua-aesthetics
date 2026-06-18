import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { CheckCircle2, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Pool Repairs in DFW — Leak Detection, Pump & Equipment Repair",
  description:
    "Fast, reliable pool repairs in Dallas, Fort Worth, Frisco, and throughout the DFW Metroplex. Aqua Aesthetics Pools fixes leaks, pumps, heaters, filters, plumbing, and more.",
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.aquaaestheticspools.com" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://www.aquaaestheticspools.com/services" },
        { "@type": "ListItem", position: 3, name: "Pool Repairs", item: "https://www.aquaaestheticspools.com/services/pool-repairs" },
      ],
    },
    {
      "@type": "Service",
      name: "Pool Repairs",
      description:
        "Expert pool repair services including leak detection, pump and heater repair, plumbing, and electrical diagnosis for DFW homeowners.",
      provider: { "@type": "LocalBusiness", name: "Aqua Aesthetics Pools", telephone: "+12149715996" },
      areaServed: ["Dallas", "Frisco", "Plano", "Southlake", "Colleyville", "Fort Worth", "Flower Mound"],
      url: "https://www.aquaaestheticspools.com/services/pool-repairs",
    },
  ],
}

export default function PoolRepairsPage() {
  return (
    <div className="flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb */}
      <div className="border-b border-gray-200 bg-gray-50">
        <div className="container py-3">
          <nav className="flex items-center space-x-1 text-sm text-gray-600" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-cyan-600 transition-colors">Home</Link>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <Link href="/services" className="hover:text-cyan-600 transition-colors">Services</Link>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <span className="text-gray-900 font-medium">Pool Repairs</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="relative h-[50vh] w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/repair1.jpg"
            alt="Pool equipment repair and replacement in Fort Worth Texas"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Pool Repair Services in the DFW Metroplex
          </h1>
          <p className="max-w-2xl text-lg text-white/90">
            Fast, expert diagnosis and repair for pools across Dallas, Fort Worth, Frisco, and surrounding communities.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-white py-16">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-[2fr,1fr]">
            <div>
              <h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-900">
                Get Your Pool Back Up and Running Fast
              </h2>
              <div className="space-y-5 text-lg text-gray-700">
                <p>
                  A pool that isn't working isn't a retreat—it's a headache. Whether you're dealing with a mysterious
                  leak, a pump that won't prime, a heater that trips the breaker, or a filter running at half capacity,
                  Aqua Aesthetics Pools provides fast, professional pool repair services throughout the DFW Metroplex.
                  Our technicians are experienced with all major equipment brands and pool configurations, and we carry
                  common replacement parts to minimize downtime.
                </p>
                <p>
                  Pool leaks are one of the most common and costly issues for DFW homeowners—especially given the
                  region's clay-heavy soils, which shift seasonally and can stress underground plumbing. Our team uses
                  pressure testing and electronic detection equipment to precisely locate leaks in the structure,
                  plumbing, and equipment pad, so we're fixing the actual source of the problem rather than guessing.
                </p>
                <p>
                  We service pools throughout Dallas, Fort Worth, Frisco, Southlake, and surrounding areas, and we
                  prioritize getting your repair scheduled quickly so you're not stuck waiting. We provide a clear
                  diagnosis and cost estimate before any work begins—no surprises, no hidden fees.
                </p>
              </div>

              <h3 className="mb-5 mt-10 text-2xl font-bold text-gray-900">What We Repair</h3>
              <ul className="grid gap-3 sm:grid-cols-2">
                {[
                  "Leak Detection and Structural Repair",
                  "Pump Repair and Replacement",
                  "Heater Repair and Replacement",
                  "Filter Repair and Replacement",
                  "Underground Plumbing Repairs",
                  "Electrical System Diagnosis",
                  "Automation System Repairs",
                  "Salt System Service & Repair",
                  "Valve and Return Jet Repairs",
                  "Pool Light Replacement",
                ].map((item) => (
                  <li key={item} className="flex items-start">
                    <CheckCircle2 className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-cyan-600" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              {/* FAQ */}
              <h3 className="mb-5 mt-10 text-2xl font-bold text-gray-900">Frequently Asked Questions</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="mb-2 text-lg font-semibold text-gray-900">
                    How do I know if my pool has a leak?
                  </h4>
                  <p className="text-gray-700">
                    The most common signs are water loss beyond normal evaporation (more than 1 inch per day), wet
                    spots in the yard, unusually high water bills, or needing to add water frequently. Cracks in
                    the shell, loose fittings, or equipment pad water accumulation are also red flags. If you suspect a
                    leak, call us—early detection prevents much costlier repairs.
                  </p>
                </div>
                <div>
                  <h4 className="mb-2 text-lg font-semibold text-gray-900">
                    Why do pools in North Texas leak more than other areas?
                  </h4>
                  <p className="text-gray-700">
                    DFW's expansive clay soils are notorious for seasonal movement. During dry periods the soil
                    contracts, and during wet periods it swells—this constant pressure on underground plumbing and pool
                    shells can cause fittings to loosen or cracks to develop over time. It's one of the most common
                    repair issues we see across Dallas and Fort Worth.
                  </p>
                </div>
                <div>
                  <h4 className="mb-2 text-lg font-semibold text-gray-900">
                    Do you offer emergency pool repair in DFW?
                  </h4>
                  <p className="text-gray-700">
                    Yes. We understand that a broken pool pump or significant leak can't always wait. Contact us by
                    phone at (214) 971-5996 to discuss urgent repair needs, and we'll do our best to schedule a
                    priority visit.
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar CTA */}
            <div className="lg:sticky lg:top-24 h-fit">
              <div className="rounded-xl border border-gray-200 bg-cyan-50 p-8 shadow-sm">
                <h3 className="mb-3 text-xl font-bold text-gray-900">Pool Not Working Right?</h3>
                <p className="mb-6 text-gray-600">
                  Get a fast diagnosis from our repair team. Serving Dallas, Fort Worth, Frisco, Southlake, and the
                  entire DFW area.
                </p>
                <Button asChild className="w-full bg-cyan-600 hover:bg-cyan-700">
                  <Link href="/contact">Schedule a Repair</Link>
                </Button>
                <p className="mt-4 text-center text-sm text-gray-500">
                  Or call us at{" "}
                  <a href="tel:+12149715996" className="font-medium text-cyan-600 hover:underline">
                    (214) 971-5996
                  </a>
                </p>
              </div>

              <div className="mt-6 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <h4 className="mb-4 font-semibold text-gray-900">Other Services</h4>
                <ul className="space-y-2">
                  {[
                    { label: "New Pool Construction", href: "/services/new-pool-construction" },
                    { label: "Pool Remodeling", href: "/services/pool-remodeling" },
                    { label: "Outdoor Living", href: "/services/outdoor-living" },
                    { label: "Pool Maintenance", href: "/services/pool-maintenance" },
                  ].map((s) => (
                    <li key={s.href}>
                      <Link href={s.href} className="flex items-center text-gray-600 hover:text-cyan-600 transition-colors">
                        <ChevronRight className="mr-1 h-4 w-4" />
                        {s.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-cyan-700 py-14 text-white">
        <div className="container text-center">
          <h2 className="mb-4 text-3xl font-bold">Get Your Pool Fixed Fast</h2>
          <p className="mx-auto mb-8 max-w-xl text-lg text-white/90">
            Don't let a broken pool ruin your summer. Contact Aqua Aesthetics for prompt, professional repairs.
          </p>
          <Button asChild size="lg" className="bg-white text-cyan-700 hover:bg-gray-100">
            <Link href="/contact">Contact Us Today</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
