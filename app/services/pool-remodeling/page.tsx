import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { CheckCircle2, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Pool Remodeling in DFW — Renovation & Resurfacing Experts",
  description:
    "Upgrade your existing pool with Aqua Aesthetics Pools. We offer pool resurfacing, tile replacement, deck renovation, and equipment upgrades throughout Dallas, Plano, Southlake, and the DFW area.",
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.aquaaestheticspools.com" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://www.aquaaestheticspools.com/services" },
        { "@type": "ListItem", position: 3, name: "Pool Remodeling", item: "https://www.aquaaestheticspools.com/services/pool-remodeling" },
      ],
    },
    {
      "@type": "Service",
      name: "Pool Remodeling",
      description:
        "Expert pool renovation including resurfacing, tile replacement, deck renovation, and energy-efficient equipment upgrades for DFW homeowners.",
      provider: { "@type": "LocalBusiness", name: "Aqua Aesthetics Pools", telephone: "+12149715996" },
      areaServed: ["Dallas", "Frisco", "Plano", "Southlake", "Colleyville", "Fort Worth", "Flower Mound"],
      url: "https://www.aquaaestheticspools.com/services/pool-remodeling",
    },
  ],
}

export default function PoolRemodelingPage() {
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
            <span className="text-gray-900 font-medium">Pool Remodeling</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="relative h-[50vh] w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/pool2.jpg"
            alt="Pool remodeling and resurfacing project completed in Plano Texas"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Pool Remodeling &amp; Renovation in DFW
          </h1>
          <p className="max-w-2xl text-lg text-white/90">
            Give your existing pool a fresh look and modern upgrades—serving Dallas, Plano, Southlake, and surrounding communities.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-white py-16">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-[2fr,1fr]">
            <div>
              <h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-900">
                Breathe New Life Into Your Existing Pool
              </h2>
              <div className="space-y-5 text-lg text-gray-700">
                <p>
                  Pools age—surfaces crack, tiles fade, decks chip, and equipment becomes inefficient. If your DFW-area
                  pool is looking tired or underperforming, a professional remodel from Aqua Aesthetics Pools can
                  transform it into a stunning, like-new backyard centerpiece without the cost of building from scratch.
                  We've completed hundreds of pool renovations across Plano, Colleyville, Flower Mound, and throughout
                  the greater Dallas-Fort Worth area.
                </p>
                <p>
                  Our pool remodeling process begins with a thorough assessment of your pool's current condition. We
                  evaluate the surface, tile, coping, deck, plumbing, and equipment to identify what needs to be
                  replaced or upgraded. From there, we work with you to develop a renovation plan that fits your vision
                  and budget—whether you want a simple resurfacing or a complete transformation with new water features,
                  LED lighting, and a redesigned deck.
                </p>
                <p>
                  We're also specialists in energy-efficient equipment upgrades—a smart investment for Texas homeowners
                  who run their pools nine or more months out of the year. Variable-speed pumps, LED systems, and
                  modern automation controls can significantly reduce your monthly operating costs while improving
                  comfort and convenience.
                </p>
              </div>

              <h3 className="mb-5 mt-10 text-2xl font-bold text-gray-900">What's Included</h3>
              <ul className="grid gap-3 sm:grid-cols-2">
                {[
                  "Pool Resurfacing (Pebble, Plaster, Quartz)",
                  "Tile Replacement and Upgrades",
                  "Coping and Deck Renovation",
                  "Equipment Upgrades",
                  "Energy-Efficient Variable-Speed Pumps",
                  "Water Feature Additions",
                  "LED Lighting Enhancements",
                  "Safety Feature Installation",
                  "Automation & Smart Controls",
                  "Aesthetic Redesign Consultation",
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
                    How do I know if my pool needs resurfacing?
                  </h4>
                  <p className="text-gray-700">
                    Common signs include a rough or stained surface, visible cracks or peeling plaster, difficulty
                    maintaining water chemistry, and a faded or discolored appearance. Most pool surfaces last 10–15
                    years before needing replacement. If your DFW pool is showing any of these signs, give us a call for
                    a free assessment.
                  </p>
                </div>
                <div>
                  <h4 className="mb-2 text-lg font-semibold text-gray-900">
                    How long does a pool remodel take in North Texas?
                  </h4>
                  <p className="text-gray-700">
                    The timeline depends on the scope of work. A basic resurfacing typically takes 1–2 weeks, while a
                    full remodel with deck renovation, new equipment, and water features can take 4–8 weeks. We'll
                    provide a clear schedule before work begins.
                  </p>
                </div>
                <div>
                  <h4 className="mb-2 text-lg font-semibold text-gray-900">
                    Can I add a spa or water feature during a remodel?
                  </h4>
                  <p className="text-gray-700">
                    Absolutely. A pool remodel is an ideal time to add a spa, sheer descents, bubblers, grottos, or
                    other water features. Adding these during an existing renovation is almost always more
                    cost-effective than installing them separately later.
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar CTA */}
            <div className="lg:sticky lg:top-24 h-fit">
              <div className="rounded-xl border border-gray-200 bg-cyan-50 p-8 shadow-sm">
                <h3 className="mb-3 text-xl font-bold text-gray-900">Ready for a Renovation?</h3>
                <p className="mb-6 text-gray-600">
                  Get a free remodeling assessment from our team. Serving Dallas, Plano, Frisco, Southlake, and
                  surrounding DFW communities.
                </p>
                <Button asChild className="w-full bg-cyan-600 hover:bg-cyan-700">
                  <Link href="/contact">Get a Free Quote</Link>
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
                    { label: "Outdoor Living", href: "/services/outdoor-living" },
                    { label: "Pool Maintenance", href: "/services/pool-maintenance" },
                    { label: "Pool Repairs", href: "/services/pool-repairs" },
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
          <h2 className="mb-4 text-3xl font-bold">Transform Your Pool Today</h2>
          <p className="mx-auto mb-8 max-w-xl text-lg text-white/90">
            Serving homeowners across the DFW Metroplex. Contact us for a no-obligation remodeling consultation.
          </p>
          <Button asChild size="lg" className="bg-white text-cyan-700 hover:bg-gray-100">
            <Link href="/contact">Contact Us Today</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
