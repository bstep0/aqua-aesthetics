"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const projects = [
  // New Construction
  {
    id: 1,
    title: "Modern Infinity Pool",
    location: "Dallas, TX",
    category: "New Construction",
    image: "/images/pool6.jpg",
    aspect: "aspect-[4/5]",
  },
  {
    id: 2,
    title: "Family Resort Style",
    location: "Plano, TX",
    category: "New Construction",
    image: "/images/pool2.jpg",
    aspect: "aspect-[4/3]",
  },
  {
    id: 3,
    title: "Tropical Paradise",
    location: "Fort Worth, TX",
    category: "New Construction",
    image: "/images/pool3.jpg",
    aspect: "aspect-square",
  },
  // Remodels
  {
    id: 4,
    title: "Classic to Contemporary",
    location: "Frisco, TX",
    category: "Remodels",
    image: "/images/pool5.jpg",
    aspect: "aspect-[4/3]",
  },
  {
    id: 5,
    title: "Expanded Deck & Spa",
    location: "Allen, TX",
    category: "Remodels",
    image: "/images/pool1.jpg",
    aspect: "aspect-[4/5]",
  },
  {
    id: 6,
    title: "Added Water Features",
    location: "McKinney, TX",
    category: "Remodels",
    image: "/images/pool4.jpg",
    aspect: "aspect-square",
  },
  // Outdoor Living
  {
    id: 7,
    title: "Patio Oasis",
    location: "Frisco, TX",
    category: "Outdoor Living",
    image: "/images/pool1.jpg",
    aspect: "aspect-square",
  },
  {
    id: 8,
    title: "Backyard Retreat",
    location: "Southlake, TX",
    category: "Outdoor Living",
    image: "/images/pool2.jpg",
    aspect: "aspect-[4/5]",
  },
  {
    id: 9,
    title: "Garden Paradise",
    location: "Colleyville, TX",
    category: "Outdoor Living",
    image: "/images/pool3.jpg",
    aspect: "aspect-[4/3]",
  },
]

const filters = ["All", "New Construction", "Remodels", "Outdoor Living"]

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("All")

  const filtered =
    activeFilter === "All" ? projects : projects.filter((p) => p.category === activeFilter)

  return (
    <div className="container py-12 md:py-16">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Our Portfolio</h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600">
          Browse stunning pool projects completed across the DFW Metroplex — from new construction to full remodels
          and outdoor living spaces.
        </p>
      </div>

      {/* Filter Pills */}
      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
              activeFilter === filter
                ? "bg-cyan-600 text-white shadow-sm"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Masonry Grid */}
      <div className="gap-4 [column-count:2] md:[column-count:3]">
        {filtered.map((project) => (
          <div
            key={`${project.id}-${activeFilter}`}
            className="group mb-4 break-inside-avoid overflow-hidden rounded-xl"
          >
            <div className={`relative w-full ${project.aspect} overflow-hidden`}>
              <Image
                src={project.image || "/placeholder.svg"}
                alt={`${project.title} — ${project.category} project in ${project.location}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 via-black/10 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="mb-1.5 w-fit rounded-full bg-cyan-600 px-2.5 py-0.5 text-xs font-semibold text-white">
                  {project.category}
                </span>
                <h3 className="text-base font-semibold text-white">{project.title}</h3>
                <p className="mt-0.5 flex items-center gap-1 text-sm text-white/80">
                  <MapPin className="h-3 w-3 flex-shrink-0" />
                  {project.location}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty state */}
      {filtered.length === 0 && (
        <p className="py-20 text-center text-gray-500">No projects found for this category.</p>
      )}

      {/* CTA */}
      <section className="mt-20 rounded-2xl bg-cyan-50/50 p-8 md:p-12">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900">
            Ready to Start Your Project?
          </h2>
          <p className="mb-6 text-lg leading-relaxed text-gray-700">
            Every project in our portfolio started with a conversation. Reach out today and let's talk about
            bringing your backyard vision to life.
          </p>
          <Button asChild size="lg" className="bg-cyan-600 hover:bg-cyan-700">
            <Link href="/contact">Get a Free Quote</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
