import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { CheckCircle2, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Outdoor Living Spaces in DFW — Patios, Kitchens & Fire Pits",
  description:
    "Transform your backyard with custom outdoor living spaces by Aqua Aesthetics Pools. We design and build patios, outdoor kitchens, fire pits, and pergolas across Southlake, Colleyville, Dallas, and the DFW Metroplex.",
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.aquaaestheticspools.com" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://www.aquaaestheticspools.com/services" },
        { "@type": "ListItem", position: 3, name: "Outdoor Living", item: "https://www.aquaaestheticspools.com/services/outdoor-living" },
      ],
    },
    {
      "@type": "Service",
      name: "Outdoor Living",
      description:
        "Custom outdoor living design and construction including patios, outdoor kitchens, fire pits, pergolas, and landscape lighting for DFW homeowners.",
      provider: { "@type": "LocalBusiness", name: "Aqua Aesthetics Pools", telephone: "+12149715996" },
      areaServed: ["Dallas", "Frisco", "Plano", "Southlake", "Colleyville", "Fort Worth", "Flower Mound"],
      url: "https://www.aquaaestheticspools.com/services/outdoor-living",
    },
  ],
}

export default function OutdoorLivingPage() {
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
            <span className="text-gray-900 font-medium">Outdoor Living</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="relative h-[50vh] w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/pool1.jpg"
            alt="Custom outdoor living space with covered patio and pool in Southlake Texas"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Custom Outdoor Living Spaces in DFW
          </h1>
          <p className="max-w-2xl text-lg text-white/90">
            From covered patios to full outdoor kitchens and fire features—designed for Texas life in Southlake,
            Colleyville, Dallas, and beyond.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-white py-16">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-[2fr,1fr]">
            <div>
              <h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-900">
                Extend Your Living Space Into the Texas Outdoors
              </h2>
              <div className="space-y-5 text-lg text-gray-700">
                <p>
                  In the DFW Metroplex, the outdoor living season stretches well beyond summer—and a thoughtfully
                  designed outdoor space makes your backyard usable from early spring through late fall. Aqua Aesthetics
                  Pools specializes in creating complete outdoor living environments that complement your pool and
                  elevate the way you spend time at home. Whether you're in Southlake, Colleyville, Flower Mound, or
                  the heart of Dallas, we build spaces designed to match how you actually live.
                </p>
                <p>
                  Our outdoor living projects range from simple covered patio additions to full outdoor entertainment
                  centers complete with custom kitchens, built-in grills, refrigeration, stone fireplaces, and
                  pergolas. We design every space to flow naturally with your existing pool and landscaping, creating a
                  cohesive backyard retreat rather than a patchwork of disconnected features. Every project is managed
                  in-house by our experienced team, so you deal with one company from design through completion.
                </p>
                <p>
                  We also handle landscape design, irrigation, and outdoor lighting—the finishing touches that make a
                  backyard look professionally polished. Good lighting transforms an outdoor space after dark and adds
                  security, while a smart irrigation system protects your landscaping investment through the brutal
                  North Texas summers without wasting water.
                </p>
              </div>

              <h3 className="mb-5 mt-10 text-2xl font-bold text-gray-900">What's Included</h3>
              <ul className="grid gap-3 sm:grid-cols-2">
                {[
                  "Covered Patio Design & Installation",
                  "Outdoor Kitchens & Built-In Grills",
                  "Fire Pits and Stone Fireplaces",
                  "Pergolas and Shade Structures",
                  "Landscape Design and Installation",
                  "Outdoor Lighting Design",
                  "Smart Irrigation Systems",
                  "Decorative Concrete & Stonework",
                  "Privacy Screens and Walls",
                  "Seating Areas and Hardscaping",
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
                    Can you build an outdoor kitchen alongside a new pool in Southlake or Colleyville?
                  </h4>
                  <p className="text-gray-700">
                    Absolutely—and it's often the most cost-effective approach. Building your outdoor kitchen or patio
                    at the same time as your pool allows us to coordinate the plumbing, gas, and electrical rough-ins
                    simultaneously, reducing labor costs and minimizing disruption to your yard. It also ensures
                    everything is designed to work together aesthetically.
                  </p>
                </div>
                <div>
                  <h4 className="mb-2 text-lg font-semibold text-gray-900">
                    Do outdoor living projects in Texas require permits?
                  </h4>
                  <p className="text-gray-700">
                    Most structural additions like covered patios, pergolas, and outdoor kitchens with gas and
                    electrical components require building permits in DFW municipalities. Aqua Aesthetics manages all
                    permitting on your behalf, ensuring your project is up to code and properly inspected.
                  </p>
                </div>
                <div>
                  <h4 className="mb-2 text-lg font-semibold text-gray-900">
                    What outdoor living features are most popular among DFW homeowners?
                  </h4>
                  <p className="text-gray-700">
                    Covered pergolas with ceiling fans, outdoor kitchens with built-in grills, and gas fire pits or
                    fireplaces are consistently among the most requested features in the Metroplex. Fire features
                    are especially popular because they extend outdoor use into the cooler fall and winter months that
                    DFW homeowners enjoy.
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar CTA */}
            <div className="lg:sticky lg:top-24 h-fit">
              <div className="rounded-xl border border-gray-200 bg-cyan-50 p-8 shadow-sm">
                <h3 className="mb-3 text-xl font-bold text-gray-900">Design Your Outdoor Space</h3>
                <p className="mb-6 text-gray-600">
                  Start with a free design consultation. Serving Southlake, Colleyville, Dallas, Frisco, and the
                  greater DFW Metroplex.
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
          <h2 className="mb-4 text-3xl font-bold">Create Your Perfect Outdoor Retreat</h2>
          <p className="mx-auto mb-8 max-w-xl text-lg text-white/90">
            Serving homeowners across the DFW Metroplex. Let's design your dream backyard together.
          </p>
          <Button asChild size="lg" className="bg-white text-cyan-700 hover:bg-gray-100">
            <Link href="/contact">Contact Us Today</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
