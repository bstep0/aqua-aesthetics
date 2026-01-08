import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/pool6.jpg"
            alt="Beautiful pool design with fire feature at sunset"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Transform Your Backyard <br />
            <span className="text-cyan-300">Into a Paradise</span>
          </h1>
          <p className="mb-8 max-w-2xl text-lg text-white/90">
            Aqua Aesthetics delivers premium pool construction, remodeling, and maintenance services that turn your
            outdoor space into a luxurious retreat.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Button asChild size="lg" className="bg-cyan-600 hover:bg-cyan-700">
              <Link href="/contact">Get a Free Quote</Link>
            </Button>
            <Button asChild size="lg" className="bg-cyan-600 hover:bg-cyan-700">
              <Link href="/gallery">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Services</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              From concept to completion, we provide comprehensive pool solutions tailored to your needs.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "New Construction",
                description:
                  "Custom-designed pools built to your specifications with quality materials and craftsmanship.",
                icon: "/images/pool5.jpg",
                link: "/gallery/new-construction",
              },
              {
                title: "Remodels",
                description: "Breathe new life into your existing pool with our expert renovation services.",
                icon: "/images/pool2.jpg",
                link: "/gallery/remodels",
              },
              {
                title: "Service",
                description:
                  "Professional pool service to keep your water crystal clear and equipment running smoothly.",
                icon: "/images/pool3.jpg",
                link: "/services#maintenance",
              },
              {
                title: "Repairs",
                description: "Expert diagnosis and repair of all pool-related issues to minimize downtime.",
                icon: "/images/pool4.jpg",
                link: "/services#repairs",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md"
              >
                <div className="mb-4 h-48 w-full overflow-hidden rounded-lg">
                  <Image
                    src={service.icon || "/placeholder.svg"}
                    alt={service.title}
                    width={300}
                    height={300}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">{service.title}</h3>
                <p className="mb-4 text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-cyan-50 py-20">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="flex flex-col justify-center">
              <h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Why Choose Aqua Aesthetics?
              </h2>
              <div className="space-y-4">
                {[
                  "25+ years of industry experience",
                  "Custom designs tailored to your space",
                  "Premium materials and equipment",
                  "Small, local business offering a more personal experience",
                  "Transparent pricing with no hidden fees",
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle2 className="mr-3 h-6 w-6 flex-shrink-0 text-cyan-600" />
                    <p className="text-lg text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Button asChild className="bg-cyan-600 hover:bg-cyan-700">
                  <Link href="/about">About Our Company</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] overflow-hidden rounded-lg lg:h-auto">
              <Image src="/images/pool1.jpg" alt="Covered patio overlooking pool" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">What Our Clients Say</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Don't just take our word for it. Here's what our satisfied customers have to say.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Person Name",
                location: "Dallas, TX",
                quote:
                  "Aqua Aesthetics transformed our outdated pool into a modern oasis. Their attention to detail and craftsmanship exceeded our expectations.",
              },
              {
                name: "Person Name",
                location: "Southlake, TX",
                quote:
                  "From design to completion, the team was professional and responsive. Our new pool is the highlight of our home and perfect for entertaining.",
              },
              {
                name: "Person Name",
                location: "Fort Worth, TX",
                quote:
                  "We've tried other pool services, but none compare to the quality and reliability of Aqua Aesthetics. Their maintenance program keeps our pool pristine year-round.",
              },
            ].map((testimonial, index) => (
              <div key={index} className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <div className="mb-4 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="mb-4 text-gray-700">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-cyan-700 py-16 text-white">
        <div className="container text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Ready to Transform Your Pool?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-white/90">
            Contact us today for a free consultation and quote. Let's create your dream pool together.
          </p>
          <Button asChild size="lg" className="bg-white text-cyan-700 hover:bg-gray-100">
            <Link href="/contact">Get Started Today</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
