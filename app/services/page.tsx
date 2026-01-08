import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ServicesPage() {
  const services = [
    {
      id: "new-construction",
      title: "New Pool Construction",
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
    },
    {
      id: "remodels",
      title: "Pool Remodeling",
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
    },
    {
      id: "maintenance",
      title: "Regular Maintenance",
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
    },
    {
      id: "repairs",
      title: "Repairs",
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
    },
  ]

  return (
    <div className="container py-12 md:py-16">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Our Services</h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600">
          From concept to completion and beyond, we provide comprehensive pool solutions tailored to your specific needs
          and preferences.
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
                <div>
                  <Button asChild className="bg-cyan-600 hover:bg-cyan-700">
                    <Link href="/contact">Request a Quote</Link>
                  </Button>
                </div>
              </div>
              <div
                className={`relative h-[300px] overflow-hidden rounded-lg sm:h-[400px] lg:h-auto ${index % 2 !== 0 && "lg:order-1"}`}
              >
                <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
              </div>
            </div>
          </section>
        ))}
      </div>

      <section className="mt-20 rounded-lg p-8 md:p-12">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900">Not Sure What You Need?</h2>
            <p className="mb-6 text-lg text-gray-700">
              Our experts can help you determine the best services for your pool based on its condition, your goals, and
              your budget. Contact us for a free consultation and personalized recommendation.
            </p>
            <Button asChild size="lg" className="bg-cyan-600 hover:bg-cyan-700">
              <Link href="/contact">Schedule a Consultation</Link>
            </Button>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Maintenance Plans</CardTitle>
                <CardDescription>Regular service packages</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Choose from weekly or bi-weekly maintenance plans to keep your pool in sparkling condition.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>One-Time Services</CardTitle>
                <CardDescription>As-needed assistance</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  From green pool cleanup, equipment repair, or filter cleans, we offer many one-time services to address specific needs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
