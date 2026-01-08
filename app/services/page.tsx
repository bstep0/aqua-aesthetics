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
        "Personalized design consultation",
        "3D renderings and virtual walkthroughs",
        "Permit acquisition and processing",
        "Excavation and pool shell construction",
        "Plumbing and electrical installation",
        "Interior finishing and coping",
        "Deck construction and landscaping",
        "Final inspection and pool startup",
      ],
      image: "/images/pool5.jpg",
    },
    {
      id: "remodels",
      title: "Pool Remodeling",
      description: "Breathe new life into your existing pool with our expert renovation services.",
      features: [
        "Pool resurfacing and refinishing",
        "Tile replacement and upgrades",
        "Coping and deck renovation",
        "Equipment upgrades and modernization",
        "Energy-efficient system installation",
        "Water feature additions",
        "Lighting enhancements",
        "Safety feature installation",
      ],
      image: "/images/pool2.jpg",
    },
    {
      id: "maintenance",
      title: "Regular Maintenance",
      description: "Regular maintenance programs to ensure your pool remains in pristine condition year-round.",
      features: [
        "Weekly or bi-weekly service options",
        "Customized maintenance schedules",
        "Chemical supply and management",
        "Seasonal opening and closing services",
        "Equipment performance monitoring",
        "Preventative maintenance",
        "Detailed service reports",
      ],
      image: "/images/pool3.jpg",
    },
    {
      id: "repairs",
      title: "Repairs",
      description: "Expert diagnosis and repair of all pool-related issues to minimize downtime.",
      features: [
        "Leak detection and repair",
        "Pump and motor replacement",
        "Heater repair and replacement",
        "Filter system troubleshooting",
        "Plumbing repairs",
        "Electrical system diagnosis",
        "Automation system repair",
        "Structural repairs",
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
                <div className="mb-8 grid gap-3 sm:grid-cols-2">
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

      <section className="mt-20 rounded-lg bg-cyan-50 p-8 md:p-12">
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
                  Choose from weekly, bi-weekly, or monthly maintenance plans to keep your pool in perfect condition.
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
                  From green pool cleanup to equipment repair, we offer one-time services to address specific needs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
