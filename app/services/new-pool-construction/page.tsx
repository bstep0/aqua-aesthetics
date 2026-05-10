import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { CheckCircle2, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "New Pool Construction in DFW — Custom Pools Built to Last",
  description:
    "Aqua Aesthetics Pools builds custom in-ground pools for homeowners throughout Dallas, Frisco, Plano, Southlake, and the DFW Metroplex. Get your free design consultation today.",
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.aquaaestheticspools.com" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://www.aquaaestheticspools.com/services" },
        { "@type": "ListItem", position: 3, name: "New Pool Construction", item: "https://www.aquaaestheticspools.com/services/new-pool-construction" },
      ],
    },
    {
      "@type": "Service",
      name: "New Pool Construction",
      description:
        "Custom in-ground pool design and construction for homeowners in Dallas, Frisco, Plano, Southlake, Colleyville, Fort Worth, and Flower Mound.",
      provider: { "@type": "LocalBusiness", name: "Aqua Aesthetics Pools", telephone: "+12149715996" },
      areaServed: ["Dallas", "Frisco", "Plano", "Southlake", "Colleyville", "Fort Worth", "Flower Mound"],
      url: "https://www.aquaaestheticspools.com/services/new-pool-construction",
    },
  ],
}

export default function NewPoolConstructionPage() {
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
            <span className="text-gray-900 font-medium">New Pool Construction</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="relative h-[50vh] w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/pool5.jpg"
            alt="Custom new pool construction with waterfall and spa in Frisco Texas"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Custom Pool Construction in the DFW Metroplex
          </h1>
          <p className="max-w-2xl text-lg text-white/90">
            Transforming backyards across Dallas, Frisco, Plano, Southlake, and beyond since 1995.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-white py-16">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-[2fr,1fr]">
            <div>
              <h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-900">
                Build the Pool You've Always Dreamed Of
              </h2>
              <div className="space-y-5 text-lg text-gray-700">
                <p>
                  When you choose Aqua Aesthetics Pools for new pool construction in DFW, you're partnering with a team
                  that has spent over 30 years perfecting the art of custom pool design and installation. From sleek
                  modern lap pools in Plano to resort-style pools with waterfalls and fire features in Southlake, we
                  handle every detail from the first design sketch to the day you take your first swim.
                </p>
                <p>
                  Every pool we build in the Dallas-Fort Worth area starts with a thorough site evaluation and a
                  personalized design consultation. We account for your yard's soil composition, drainage, and sun
                  exposure—factors that are especially important in North Texas, where clay-heavy soils and hot summers
                  require specific engineering approaches. Our team manages all permits and inspections required by
                  local municipalities so you never have to navigate that process alone.
                </p>
                <p>
                  We use premium materials and proven construction methods to ensure your pool stands up to the Texas
                  heat for decades. Whether you envision a classic gunite pool, a tiled Roman-style design, or a
                  zero-entry lagoon pool, Aqua Aesthetics delivers the craftsmanship and the durability you deserve.
                </p>
              </div>

              <h3 className="mb-5 mt-10 text-2xl font-bold text-gray-900">What's Included</h3>
              <ul className="grid gap-3 sm:grid-cols-2">
                {[
                  "Personalized Design Consultation",
                  "3D Renderings & Visualizations",
                  "Permit Acquisition and Processing",
                  "Excavation and Pool Shell Construction",
                  "Plumbing and Electrical Installation",
                  "Coping, Tiling, and Plastering",
                  "Deck Construction and Landscaping",
                  "Equipment Setup (Pump, Filter, Heater)",
                  "Optional Water Features & Lighting",
                  "Final Inspection and Pool Startup",
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
                    How long does pool construction take in Texas?
                  </h4>
                  <p className="text-gray-700">
                    Most new pool builds in the DFW area take between 8 and 14 weeks from permit approval to final
                    inspection, depending on pool size, design complexity, and weather. We'll give you a realistic
                    timeline during your initial consultation and keep you updated throughout the process.
                  </p>
                </div>
                <div>
                  <h4 className="mb-2 text-lg font-semibold text-gray-900">
                    Do I need a permit to build a pool in Dallas or Fort Worth?
                  </h4>
                  <p className="text-gray-700">
                    Yes. All municipalities in DFW require permits for new pool construction. Aqua Aesthetics handles the
                    entire permitting process on your behalf, including plan submission, inspections, and final
                    sign-off—saving you time and hassle.
                  </p>
                </div>
                <div>
                  <h4 className="mb-2 text-lg font-semibold text-gray-900">
                    What type of pool is best for North Texas soil and climate?
                  </h4>
                  <p className="text-gray-700">
                    Gunite (shotcrete) pools are the most popular choice in North Texas because they're engineered to
                    handle the region's expansive clay soils and temperature extremes. We design and engineer every pool
                    specifically for local soil conditions to minimize the risk of shifting or cracking over time.
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar CTA */}
            <div className="lg:sticky lg:top-24 h-fit">
              <div className="rounded-xl border border-gray-200 bg-cyan-50 p-8 shadow-sm">
                <h3 className="mb-3 text-xl font-bold text-gray-900">Ready to Get Started?</h3>
                <p className="mb-6 text-gray-600">
                  Contact us for a free design consultation. We serve homeowners across Dallas, Frisco, Plano,
                  Southlake, Colleyville, Fort Worth, and Flower Mound.
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
                    { label: "Pool Remodeling", href: "/services/pool-remodeling" },
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
          <h2 className="mb-4 text-3xl font-bold">Let's Build Your Dream Pool</h2>
          <p className="mx-auto mb-8 max-w-xl text-lg text-white/90">
            Serving homeowners across the DFW Metroplex. Get in touch today for a no-obligation consultation.
          </p>
          <Button asChild size="lg" className="bg-white text-cyan-700 hover:bg-gray-100">
            <Link href="/contact">Contact Us Today</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
