import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "About Us — 30+ Years of Pool Excellence in DFW",
  description:
    "Learn about Aqua Aesthetics Pools — a family-owned DFW pool company with over 30 years of experience building, remodeling, and maintaining pools across Dallas, Frisco, Southlake, and the Metroplex.",
}

export default function AboutPage() {
  const team = [
    {
      name: "Larry Wieland",
      role: "Owner",
      bio: "With over 30 years in the pool industry, Larry founded Aqua Aesthetics with a vision to create extraordinary outdoor living spaces. His hands-on approach and commitment to quality have made Aqua Aesthetics one of the most trusted pool companies in the DFW Metroplex.",
      image: "/placeholder.svg?height=600&width=450",
    },
  ]

  return (
    <div className="container py-12 md:py-16">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">About Aqua Aesthetics</h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600">
          Creating beautiful, functional pool environments in DFW since 1995.
        </p>
      </div>

      {/* Our Story */}
      <section className="mb-24 rounded-2xl md:p-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-900">Our Story</h2>

          <div className="space-y-5 text-lg leading-relaxed text-gray-700">
            <p>
              Aqua Aesthetics Pools was founded in 2026 by Larry Wieland, having a passion for
              craftsmanship and a belief that every backyard has the potential to become something extraordinary. What
              started as a small pool service operation has grown into a full-service pool construction, remodeling, and
              maintenance company trusted by homeowners across Dallas, Frisco, Plano, Southlake, Colleyville, Fort
              Worth, and Flower Mound.
            </p>
            <p>
              Over three decades in the poool industry have given us a deep understanding of what North Texas homeowners
              need from their pools — designs that handle the summer heat, construction methods that account for the
              region's clay-heavy soils, and maintenance programs that keep water pristine through long swimming
              seasons. We've built our reputation one project at a time, and most of our new clients come through
              referrals from neighbors and friends who've experienced our work firsthand.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="mb-24 rounded-2xl md:p-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-900">Our Mission</h2>

          <p className="max-w-6xl text-lg leading-relaxed text-gray-700">
            To create exceptional aquatic environments that enhance our clients' lives through innovative design, superior craftsmanship,
            and dependable service. We aim to exceed expectations on every project, delivering pools that stay beautiful, functional, and easy to
            enjoy for years to come.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg border border-cyan-500/30 bg-white/70 px-4 py-3 text-lg text-gray-700">
              <span className="font-semibold text-gray-900">Design-led</span> from concept to completion.
            </div>
            <div className="rounded-lg border border-cyan-500/30 bg-white/70 px-4 py-3 text-lg text-gray-700">
              <span className="font-semibold text-gray-900">Built to last</span> premium materials &amp; workmanship.
            </div>
            <div className="rounded-lg border border-cyan-500/30 bg-white/70 px-4 py-3 text-lg text-gray-700">
              <span className="font-semibold text-gray-900">Clear communication</span>, no surprises.
            </div>
            <div className="rounded-lg border border-cyan-500/30 bg-white/70 px-4 py-3 text-lg text-gray-700">
              <span className="font-semibold text-gray-900">Reliable service</span> before &amp; after completion.
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="mb-20">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900">Meet Our Team</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">Our experienced professionals bring expertise and passion to every project.</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-1">
          {team.map((member, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md"
            >
              <div className="p-6 sm:p-8">
                <div className="flex flex-col items-center gap-8 md:flex-row md:items-center">
                  <div className="relative h-[360px] w-[270px] shrink-0 overflow-hidden rounded-xl">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  <div className="w-full">
                    <h3 className="mb-1 text-2xl font-bold text-gray-900">{member.name}</h3>
                    <p className="mb-4 text-cyan-600">{member.role}</p>
                    <p className="text-lg leading-relaxed text-gray-700">{member.bio}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="rounded-2xl bg-cyan-700 p-8 text-white md:p-12">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">Ready to Work With Us?</h2>
            <p className="mb-6 text-lg text-white/90">
              Whether you&apos;re dreaming of a new pool, need to renovate an existing one, or are looking for reliable maintenance services,
              we&apos;re ready to help. Contact us today to schedule a consultation!
            </p>
            <Button asChild size="lg" className="bg-white text-cyan-700 hover:bg-gray-100">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>

          <div className="relative hidden overflow-hidden rounded-xl md:block">
            <Image src="/images/pool6.jpg" alt="Custom pool built by Aqua Aesthetics Pools in DFW" fill className="object-cover" />
          </div>
        </div>
      </section>
    </div>
  )
}
