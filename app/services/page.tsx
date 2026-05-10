import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { CheckCircle2, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Pool Services in DFW — Construction, Remodeling & Maintenance",
  description:
    "Explore all pool services from Aqua Aesthetics Pools: new construction, remodeling, outdoor living, maintenance, and repairs throughout Dallas, Frisco, Plano, Southlake, and the DFW Metroplex.",
}

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

export default function ServicesPage() {
  const services = [
    {
      id: "new-construction",
      title: "New Pool Construction",
      href: "/services/new-pool-construction",
      description: "Custom-designed pools built to your specifications with quality materials and craftsmanship.",
      features: [
        "Personalized Design Consultation",
        "3D Renderings",
        "Permit Acquisition and Processing",
        "Excavation and Pool Shell Construction",
        "Plumbing and Electrical Installation",
        "Coping, Tiling, and Plastering",
        "Deck Construction and Landscaping",
        "Final Inspection and Pool Startup",
      ],
      image: "/images/pool5.jpg",
      imageAlt: "Custom new pool construction with spa in Frisco Texas",
    },
    {
      id: "remodels",
      title: "Pool Remodeling",
      href: "/services/pool-remodeling",
      description: "Breathe new life into your existing pool with our expert renovation services.",
      features: [
        "Pool Resurfacing",
        "Tile Replacement and Upgrades",
        "Coping and Deck Renovation",
        "Equipment Upgrades",
        "Energy-Efficient Equipment Installation",
        "Water Feature Additions",
        "Lighting Enhancements",
        "Safety Feature Installation",
      ],
      image: "/images/pool2.jpg",
      imageAlt: "Pool remodeling and resurfacing project in Plano Texas",
    },
    {
      id: "outdoor-living",
      title: "Outdoor Living",
      href: "/services/outdoor-living",
      description: "Enhance your backyard with custom outdoor living solutions.",
      features: [
        "Patio Design and Installation",
        "Outdoor Kitchens",
        "Fire Pits and Fireplaces",
        "Pergolas and Shade Structures",
        "Landscape Design and Installation",
        "Lighting Design",
        "Irrigation Systems",
      ],
      image: "/images/pool5.jpg",
      imageAlt: "Custom outdoor living space with pergola and fire pit in Southlake Texas",
    },
    {
      id: "maintenance",
      title: "Regular Maintenance",
      href: "/services/pool-maintenance",
      description: "Regular maintenance programs to ensure your pool remains in pristine condition year-round.",
      features: [
        "Weekly or Bi-Weekly Service Options",
        "Chemical Balancing",
        "Detailed Service Reports",
        "Equipment Inspection",
        "Algae Prevention and Treatment",
        "Filter Cleaning",
        "Preventative Maintenance",
      ],
      image: "/images/pool3.jpg",
      imageAlt: "Pool maintenance and chemical balancing service in Dallas Texas",
    },
    {
      id: "repairs",
      title: "Pool Repairs",
      href: "/services/pool-repairs",
      description: "Expert diagnosis and repair of all pool-related issues to minimize downtime.",
      features: [
        "Leak Detection and Repair",
        "Pump Repair and Replacement",
        "Heater Repair and Replacement",
        "Filter Repair and Replacement",
        "Plumbing Repairs",
        "Electrical System Diagnosis",
        "Automation System Repairs",
      ],
      image: "/images/pool4.jpg",
      imageAlt: "Pool equipment repair and leak detection in Fort Worth Texas",
    },
  ]

  return (
    <div className="container py-12 md:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />

      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Pool Services in the DFW Metroplex
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600">
          From concept to completion and beyond, we provide comprehensive pool solutions for homeowners throughout
          Dallas, Frisco, Plano, Southlake, Colleyville, Fort Worth, and Flower Mound.
        </p>
      </div>

      <div className="space-y-16">
        {services.map((service, index) => (
          <section key={service.id} id={service.id} className="scroll-mt-20">
            <div
              className={`grid gap-8 ${index % 2 === 0 ? "lg:grid-cols-[1fr,1.5fr]" : "lg:grid-cols-[1.5fr,1fr] lg:grid-flow-dense"}`}
            >
              <div className={`flex flex-col justify-center ${index % 2 !== 0 && "lg:order-2"}`}>
                <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900">{service.title}</h2>
                <p className="mb-6 text-lg text-gray-600">{service.description}</p>
                <div className="mb-8 grid gap-y-6 gap-x-6 sm:grid-cols-2">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-start">
                      <CheckCircle2 className="mr-2 h-5 w-5 flex-shrink-0 text-cyan-600" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button asChild className="bg-cyan-600 hover:bg-cyan-700">
                    <Link href="/contact">Request a Quote</Link>
                  </Button>
                  <Button asChild variant="outline" className="border-cyan-600 text-cyan-600 hover:bg-cyan-50">
                    <Link href={service.href} className="flex items-center gap-2">
                      Learn More <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div
                className={`relative h-[300px] overflow-hidden rounded-lg sm:h-[400px] lg:h-auto ${index % 2 !== 0 && "lg:order-1"}`}
              >
                <Image src={service.image || "/placeholder.svg"} alt={service.imageAlt} fill className="object-cover" />
              </div>
            </div>
          </section>
        ))}
      </div>

      <section className="mt-20 rounded-2xl bg-cyan-50/50 p-8 md:p-12">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900">
            Not Sure What You Need?
          </h2>
          <p className="mb-6 text-lg leading-relaxed text-gray-700">
            Our experts can help you determine the best services for your pool based on its condition, your goals, and
            your budget. Contact us for a free consultation and personalized recommendation.
          </p>
          <Button asChild size="lg" className="bg-cyan-600 hover:bg-cyan-700">
            <Link href="/contact">Schedule a Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
