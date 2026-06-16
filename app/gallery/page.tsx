"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

// No `id` field here — ids are generated automatically below, so you
// never have to pick (or accidentally repeat) a number by hand, and
// the same image/file can be reused across as many entries as you like.
const rawProjects = [
  // New Construction
  { category: "New Construction", image: "/images/pool6.jpg", aspect: "aspect-[4/5]" },
  { category: "New Construction", image: "/images/outdoor3.jpg", aspect: "aspect-[4/3]" },
  { category: "New Construction", image: "/images/pool3.jpg", aspect: "aspect-square" },
  { category: "New Construction", image: "/images/pool7.jpg", aspect: "aspect-[4/3]" },
  { category: "New Construction", image: "/images/pool8.jpg", aspect: "aspect-square" },
  { category: "New Construction", image: "/images/pool9.jpg", aspect: "aspect-square" },
  { category: "New Construction", image: "/images/pool10.jpg", aspect: "aspect-[4/3]" },
  { category: "New Construction", image: "/images/pool11.jpeg", aspect: "aspect-[4/5]" },
  { category: "New Construction", image: "/images/pool12.jpg", aspect: "aspect-[5/4]" },
  { category: "New Construction", image: "/images/pool13.jpg", aspect: "aspect-square" },
  { category: "New Construction", image: "/images/pool14.jpg", aspect: "aspect-[4/5]" },
  { category: "New Construction", image: "/images/pool15.jpg", aspect: "aspect-[4/5]" },
  { category: "New Construction", image: "/images/pool16.jpg", aspect: "aspect-square" },
  // Remodels
  { category: "Remodels", image: "/images/remodel1.jpg", aspect: "aspect-[4/3]" },
  // Outdoor Living
  { category: "Outdoor Living", image: "/images/outdoor1.jpg", aspect: "aspect-square" },
  { category: "Outdoor Living", image: "/images/outdoor2.jpg", aspect: "aspect-[4/3]" },
  { category: "Outdoor Living", image: "/images/outdoor3.jpg", aspect: "aspect-[4/3]" },
]

const projects = rawProjects.map((project, index) => ({ id: index, ...project }))

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
            key={project.id}
            className="group mb-4 break-inside-avoid overflow-hidden rounded-xl"
          >
            <div className={`relative w-full ${project.aspect} overflow-hidden`}>
              <Image
                src={project.image || "/placeholder.svg"}
                alt={`${project.category} project`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 via-black/10 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="mb-1.5 w-fit rounded-full bg-cyan-600 px-2.5 py-0.5 text-xs font-semibold text-white">
                  {project.category}
                </span>
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