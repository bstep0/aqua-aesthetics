import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function GalleryPage() {
  const categories = [
    {
      id: "new-construction",
      title: "New Construction",
      description: "Custom-designed pools built from the ground up",
      projects: [
        { id: 1, title: "Modern Infinity Pool", location: "Dallas, TX", image: "/images/pool6.jpg" },
        { id: 2, title: "Family Resort Style", location: "Plano, TX", image: "/images/pool2.jpg" },
        { id: 3, title: "Tropical Paradise", location: "Fort Worth, TX", image: "/images/pool3.jpg" },
      ],
    },
    {
      id: "remodels",
      title: "Remodels",
      description: "Transforming existing pools into modern masterpieces",
      projects: [
        { id: 1, title: "Classic to Contemporary", location: "Frisco, TX", image: "/images/pool5.jpg" },
        { id: 2, title: "Expanded Deck Space", location: "Allen, TX", image: "/images/pool1.jpg" },
        { id: 3, title: "Added Water Features", location: "McKinney, TX", image: "/images/pool4.jpg" },
      ],
    },
    {
      id: "outdoor-living",
      title: "Outdoor Living",
      description: "Enhance your outdoor space with a beautiful patio, landscaping, or hardscaping",
      projects: [
        { id: 1, title: "Patio Oasis", location: "Frisco, TX", image: "/images/pool1.jpg" },
        { id: 2, title: "Backyard Retreat", location: "Plano, TX", image: "/images/pool2.jpg" },
        { id: 3, title: "Garden Paradise", location: "McKinney, TX", image: "/images/pool3.jpg" },
      ],
    }
  ]

  return (
    <div className="container py-12 md:py-16">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Our Portfolio</h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600">
          Browse our galleries of stunning pool projects completed around the DFW metroplex. From new construction to
          remodels to outdoor living, discover the possibilities for your own backyard.
        </p>
      </div>

      <Tabs defaultValue="new-construction" className="w-full">
        <TabsList className="mb-8 grid w-full grid-cols-2 md:grid-cols-3">
          {categories.map((category) => (
            <TabsTrigger key={category.id} value={category.id} className="text-sm md:text-base">
              {category.title}
            </TabsTrigger>
          ))}
        </TabsList>

        {categories.map((category) => (
          <TabsContent key={category.id} value={category.id}>
            <div className="mb-6">
              <h2 className="mb-2 text-2xl font-bold text-gray-900">{category.title}</h2>
              <p className="text-gray-600">{category.description}</p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {category.projects.map((project) => (
                <div
                  key={project.id}
                  className="group overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md"
                >
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="mb-1 text-xl font-semibold text-gray-900">{project.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
