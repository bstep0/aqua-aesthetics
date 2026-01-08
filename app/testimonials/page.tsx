import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Star, Quote } from "lucide-react"
import Link from "next/link"

export default function TestimonialsPage() {
  // Categories of testimonials
  const categories = [
    { id: "all", label: "All Testimonials" },
    { id: "new-construction", label: "New Construction" },
    { id: "remodels", label: "Remodels" },
    { id: "service", label: "Service & Repairs" },
  ]

  // Testimonial data
  const testimonials = [
    {
      id: 1,
      name: "Person Name",
      location: "Dallas, TX",
      category: "new-construction",
      rating: 5,
      quote:
        "Working with Aqua Aesthetics was a dream come true. From the initial design consultation to the final walkthrough, their team was professional, responsive, and detail-oriented. Our new pool has transformed our backyard into the perfect entertainment space.",
      image: "/placeholder.svg?height=100&width=100",
      project: "Modern Infinity Pool",
    },
    {
      id: 2,
      name: "Person Name",
      location: "Plano, TX",
      category: "remodels",
      rating: 5,
      quote:
        "We had an outdated pool that needed a complete renovation. Aqua Aesthetics provided creative solutions that worked within our budget. The transformation is incredible - it's like having a brand new pool! Their team was respectful of our property and completed the work on schedule.",
      image: "/placeholder.svg?height=100&width=100",
      project: "Complete Pool Renovation",
    },
    {
      id: 3,
      name: "Person Name",
      location: "Fort Worth, TX",
      category: "service",
      rating: 5,
      quote:
        "I've been using Aqua Aesthetics for regular pool maintenance for over two years now. Their service is reliable, thorough, and fairly priced. The technicians are knowledgeable and always take the time to explain what they're doing and answer any questions I have.",
      image: "/placeholder.svg?height=100&width=100",
      project: "Weekly Pool Maintenance",
    },
    {
      id: 4,
      name: "Person Name",
      location: "Frisco, TX",
      category: "new-construction",
      rating: 5,
      quote:
        "Aqua Aesthetics exceeded our expectations in every way. They took our vague ideas and turned them into a stunning backyard oasis that perfectly suits our lifestyle. Their attention to detail and quality craftsmanship is evident in every aspect of our new pool.",
      image: "/placeholder.svg?height=100&width=100",
      project: "Family Resort Style Pool",
    },
    {
      id: 5,
      name: "Person Name",
      location: "Arlington, TX",
      category: "remodels",
      rating: 4,
      quote:
        "We hired Aqua Aesthetics to update our pool with new tile, coping, and a salt system. The results are beautiful and the process was smooth. The only reason for 4 stars instead of 5 is that there were a few minor delays, but they communicated well throughout.",
      image: "/placeholder.svg?height=100&width=100",
      project: "Pool Updates",
    },
    {
      id: 6,
      name: "Person Name",
      location: "Richardson, TX",
      category: "service",
      rating: 5,
      quote:
        "When our pool equipment failed unexpectedly, Aqua Aesthetics responded quickly and had everything up and running within days. Their diagnostic skills saved us from a more expensive repair, and they were transparent about all costs upfront.",
      image: "/placeholder.svg?height=100&width=100",
      project: "Equipment Repair",
    },
    {
      id: 7,
      name: "Person Name",
      location: "Southlake, TX",
      category: "new-construction",
      rating: 5,
      quote:
        "From the first meeting to the final reveal, Aqua Aesthetics demonstrated professionalism and expertise. They managed our complex project with ease, incorporating multiple water features and specialized lighting. The result is simply spectacular.",
      image: "/placeholder.svg?height=100&width=100",
      project: "Luxury Pool with Water Features",
    },
    {
      id: 8,
      name: "Person Name",
      location: "Grapevine, TX",
      category: "remodels",
      rating: 5,
      quote:
        "Our 20-year-old pool needed a complete overhaul. Aqua Aesthetics provided innovative solutions that modernized our pool while respecting its original character. The team was respectful, clean, and completed the work ahead of schedule.",
      image: "/placeholder.svg?height=100&width=100",
      project: "Pool Remodel",
    },
    {
      id: 9,
      name: "Person Name",
      location: "Carrollton, TX",
      category: "service",
      rating: 5,
      quote:
        "I've tried several pool service companies over the years, and Aqua Aesthetics is by far the best. Their attention to detail, consistent service, and proactive approach to maintenance has kept our pool in perfect condition year-round.",
      image: "/placeholder.svg?height=100&width=100",
      project: "Bi-weekly Maintenance",
    },
  ]

  // Featured testimonials for the hero section
  const featuredTestimonials = testimonials.filter((t) => t.id <= 3)

  return (
    <div className="container py-12 md:py-16">
      {/* Hero Section */}
      <div className="mb-16 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Customer Testimonials</h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600">
          Don't just take our word for it. Here's what our clients have to say about their experience working with Aqua
          Aesthetics.
        </p>
      </div>

      {/* Featured Testimonials */}
      <section className="mb-16">
        <h2 className="mb-8 text-2xl font-bold text-gray-900">Featured Reviews</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {featuredTestimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="relative overflow-hidden border-cyan-100 bg-gradient-to-br from-cyan-50 to-white"
            >
              <CardContent className="p-6">
                <Quote className="absolute right-4 top-4 h-12 w-12 text-cyan-100" />
                <div className="mb-4 flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-200"
                      }`}
                    />
                  ))}
                </div>
                <blockquote className="mb-6 text-gray-700">"{testimonial.quote}"</blockquote>
                <div className="flex items-center">
                  <Avatar className="mr-4 h-12 w-12 border">
                    <AvatarImage src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* All Testimonials with Filtering */}
      <section>
        <h2 className="mb-8 text-2xl font-bold text-gray-900">All Customer Reviews</h2>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="mb-8 grid w-full grid-cols-2 md:grid-cols-4">
            {categories.map((category) => (
              <TabsTrigger key={category.id} value={category.id} className="text-sm md:text-base">
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="all" className="space-y-6">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </TabsContent>

          {categories.slice(1).map((category) => (
            <TabsContent key={category.id} value={category.id} className="space-y-6">
              {testimonials
                .filter((t) => t.category === category.id)
                .map((testimonial) => (
                  <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                ))}
            </TabsContent>
          ))}
        </Tabs>
      </section>

      {/* CTA Section */}
      <section className="mt-16 rounded-lg bg-cyan-700 p-8 text-center text-white md:p-12">
        <h2 className="mb-4 text-3xl font-bold">Ready to Join Our Satisfied Customers?</h2>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-white/90">
          Contact us today to discuss your pool project or service needs. We're committed to delivering the same level
          of excellence that has earned us these glowing reviews.
        </p>
        <Button asChild size="lg" className="bg-white text-cyan-700 hover:bg-gray-100">
          <Link href="/contact">Get Your Free Quote</Link>
        </Button>
      </section>
    </div>
  )
}

// Testimonial Card Component
function TestimonialCard({ testimonial }: { testimonial: any }) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-6">
        <div className="grid gap-6 md:grid-cols-[auto_1fr]">
          <div className="flex flex-col items-center md:items-start">
            <Avatar className="mb-3 h-16 w-16 border">
              <AvatarImage src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} />
              <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="mb-2 flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-200"}`}
                />
              ))}
            </div>
            <div className="text-center md:text-left">
              <p className="font-semibold text-gray-900">{testimonial.name}</p>
              <p className="text-sm text-gray-500">{testimonial.location}</p>
              <p className="mt-1 text-xs text-cyan-600">{testimonial.project}</p>
            </div>
          </div>
          <div>
            <blockquote className="text-gray-700">"{testimonial.quote}"</blockquote>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
