import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { CheckCircle2, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Pool Maintenance Service in DFW — Weekly & Bi-Weekly Plans",
  description:
    "Keep your pool crystal clear year-round with Aqua Aesthetics Pools' professional maintenance plans. Serving homeowners in Dallas, Frisco, Flower Mound, Colleyville, and the DFW Metroplex.",
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.aquaaestheticspools.com" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://www.aquaaestheticspools.com/services" },
        { "@type": "ListItem", position: 3, name: "Pool Maintenance", item: "https://www.aquaaestheticspools.com/services/pool-maintenance" },
      ],
    },
    {
      "@type": "Service",
      name: "Pool Maintenance",
      description:
        "Professional weekly and bi-weekly pool maintenance plans including chemical balancing, filter cleaning, and equipment inspection for DFW homeowners.",
      provider: { "@type": "LocalBusiness", name: "Aqua Aesthetics Pools", telephone: "+12149715996" },
      areaServed: ["Dallas", "Frisco", "Plano", "Southlake", "Colleyville", "Fort Worth", "Flower Mound"],
      url: "https://www.aquaaestheticspools.com/services/pool-maintenance",
    },
  ],
}

export default function PoolMaintenancePage() {
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
            <span className="text-gray-900 font-medium">Pool Maintenance</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="relative h-[50vh] w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/pool3.jpg"
            alt="Sparkling clean pool maintained by professionals in Dallas Texas"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Professional Pool Maintenance in DFW
          </h1>
          <p className="max-w-2xl text-lg text-white/90">
            Reliable weekly and bi-weekly service plans keeping pools pristine across Dallas, Frisco, Flower Mound, and the entire Metroplex.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-white py-16">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-[2fr,1fr]">
            <div>
              <h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-900">
                Pool Care You Can Count On, All Year Long
              </h2>
              <div className="space-y-5 text-lg text-gray-700">
                <p>
                  With over nine months of swimming season in North Texas, a properly maintained pool isn't a
                  luxury—it's a necessity. Aqua Aesthetics Pools offers professional maintenance programs designed
                  specifically for DFW homeowners who want crystal-clear water without the hassle of doing it
                  themselves. Our trained technicians visit on a regular schedule—weekly or bi-weekly—to keep your pool
                  safe, clean, and chemically balanced.
                </p>
                <p>
                  Texas summers push pools hard. High temperatures accelerate algae growth, UV rays deplete chlorine
                  levels, and heavy rain can disrupt water chemistry overnight. Our maintenance technicians are trained
                  to anticipate these seasonal shifts and adjust your pool's chemistry proactively, not reactively. You
                  get a detailed service report after every visit so you always know exactly what was done and what your
                  water levels look like.
                </p>
                <p>
                  Beyond chemistry, our maintenance service includes equipment inspections that can catch small problems
                  before they turn into expensive repairs. A loose O-ring, a clogged impeller, or a worn pump seal
                  caught early saves you money—and keeps your pool running when it matters most. We serve homeowners
                  across Frisco, Colleyville, Flower Mound, and throughout the greater Dallas-Fort Worth area.
                </p>
              </div>

              <h3 className="mb-5 mt-10 text-2xl font-bold text-gray-900">What's Included</h3>
              <ul className="grid gap-3 sm:grid-cols-2">
                {[
                  "Weekly or Bi-Weekly Service Plans",
                  "Chemical Testing & Balancing",
                  "Chlorine & Shock Treatment",
                  "Algae Prevention and Treatment",
                  "Filter Cleaning & Backwashing",
                  "Skimmer & Basket Emptying",
                  "Brushing Walls and Floor",
                  "Equipment Inspection",
                  "Detailed Digital Service Reports",
                  "Preventative Maintenance Checks",
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
                    How often should I have my pool serviced in Texas?
                  </h4>
                  <p className="text-gray-700">
                    During the peak swimming season (April through October in DFW), weekly service is recommended to
                    stay ahead of algae, maintain chemical balance, and keep up with debris from summer storms. During
                    the cooler months, bi-weekly service is often sufficient for pools that aren't in heavy use.
                  </p>
                </div>
                <div>
                  <h4 className="mb-2 text-lg font-semibold text-gray-900">
                    Do you service pools in Frisco, Flower Mound, and Colleyville?
                  </h4>
                  <p className="text-gray-700">
                    Yes. We serve homeowners across the entire DFW Metroplex, including Dallas, Frisco, Plano,
                    Southlake, Colleyville, Fort Worth, and Flower Mound. Contact us to confirm service availability in
                    your specific area.
                  </p>
                </div>
                <div>
                  <h4 className="mb-2 text-lg font-semibold text-gray-900">
                    What happens if there's a problem with my equipment during a service visit?
                  </h4>
                  <p className="text-gray-700">
                    Our technicians are trained to identify equipment issues during routine visits. If we spot a
                    problem, we'll document it in your service report and contact you to discuss repair options. Our
                    team can often handle minor repairs on the same visit, and we offer full repair services for more
                    complex issues.
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar CTA */}
            <div className="lg:sticky lg:top-24 h-fit">
              <div className="rounded-xl border border-gray-200 bg-cyan-50 p-8 shadow-sm">
                <h3 className="mb-3 text-xl font-bold text-gray-900">Start Your Service Plan</h3>
                <p className="mb-6 text-gray-600">
                  Get hassle-free pool maintenance from a local team you can trust. Serving the DFW Metroplex since 1995.
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
                    { label: "Pool Remodeling", href: "/services/pool-remodeling" },
                    { label: "Outdoor Living", href: "/services/outdoor-living" },
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
          <h2 className="mb-4 text-3xl font-bold">Enjoy a Pristine Pool Without the Work</h2>
          <p className="mx-auto mb-8 max-w-xl text-lg text-white/90">
            Let Aqua Aesthetics handle your pool maintenance. Contact us to set up your service plan today.
          </p>
          <Button asChild size="lg" className="bg-white text-cyan-700 hover:bg-gray-100">
            <Link href="/contact">Contact Us Today</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
