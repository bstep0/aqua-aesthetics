import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  const team = [
    {
      name: "Larry Wieland",
      role: "Owner",
      bio: "With over 30 years in the pool industry, Larry founded Aqua Aesthetics with a vision to create extraordinary outdoor living spaces.",
      image: "/placeholder.svg?height=400&width=400",
    },
  ]

  return (
    <div className="container py-12 md:py-16">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">About Aqua Aesthetics</h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600">
          Creating beautiful, functional pool environments in DFW since 2025.
        </p>
      </div>

      {/* Company Story */}
      <section className="mb-20">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="relative h-[300px] overflow-hidden rounded-lg sm:h-[400px] lg:h-auto">
            <Image src="/images/pool1.jpg" alt="Aqua Aesthetics team at work" fill className="object-cover" />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-900">Our Story</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean
                massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
                felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean
                massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
                felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean
                massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
                felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean
                massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
                felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="mb-20 rounded-lg bg-cyan-50 p-8 md:p-12">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-900">Our Mission</h2>
            <p className="text-lg text-gray-700">
              To create exceptional aquatic environments that enhance our clients' lives through innovative design,
              superior craftsmanship, and unparalleled service. We strive to exceed expectations on every project,
              delivering pools that are both beautiful and functional for years to come.
            </p>
          </div>
          <div>
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-900">Our Values</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="mr-2 font-bold">Quality:</span>
                <span>We never compromise on materials or workmanship, ensuring lasting results.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 font-bold">Integrity:</span>
                <span>We operate with honesty and transparency in all client and business relationships.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 font-bold">Innovation:</span>
                <span>We continuously seek new designs, technologies, and methods to improve our offerings.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 font-bold">Service:</span>
                <span>We provide responsive, attentive service throughout the entire customer journey.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="mb-20">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900">Meet Our Team</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Our experienced professionals bring expertise and passion to every project.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-1">
          {team.map((member, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-1 text-xl font-bold text-gray-900">{member.name}</h3>
                <p className="mb-3 text-cyan-600">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="rounded-lg bg-cyan-700 p-8 text-white md:p-12">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">Ready to Work With Us?</h2>
            <p className="mb-6 text-lg text-white/90">
              Whether you're dreaming of a new pool, need to renovate an existing one, or are looking for reliable
              maintenance services, we're ready to help. Contact us today to schedule a consultation.
            </p>
            <Button asChild size="lg" className="bg-white text-cyan-700 hover:bg-gray-100">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
          <div className="relative hidden overflow-hidden rounded-lg md:block">
            <Image src="/images/pool6.jpg" alt="Beautiful pool design" fill className="object-cover" />
          </div>
        </div>
      </section>
    </div>
  )
}
