"use client"

import { useState, useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

const rawProjects = [
  // New Construction
  { category: "New Construction", image: "/images/pool6.jpg", aspect: "aspect-[4/5]" },
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
  { category: "New Construction", image: "/images/pool17.jpg", aspect: "aspect-[5/4]" },
  { category: "New Construction", image: "/images/pool18.jpg", aspect: "aspect-[4/3]" },
  // Remodels
  { category: "Remodels", image: "/images/remodel1.jpg", aspect: "aspect-[4/3]" },
  { category: "Remodels", image: "/images/remodel2.jpg", aspect: "aspect-[5/4]" },
  // Outdoor Living
  { category: "Outdoor Living", image: "/images/outdoor1.jpg", aspect: "aspect-square" },
  { category: "Outdoor Living", image: "/images/outdoor2.jpg", aspect: "aspect-[4/3]" },
  { category: "Outdoor Living", image: "/images/outdoor3.jpg", aspect: "aspect-[4/3]" },
  { category: "Outdoor Living", image: "/images/pool17.jpg", aspect: "aspect-[5/4]" },
  { category: "Outdoor Living", image: "/images/outdoor4.jpg", aspect: "aspect-square" },
  { category: "Outdoor Living", image: "/images/outdoor5.jpg", aspect: "aspect-[4/5]" },
  { category: "Outdoor Living", image: "/images/outdoor6.jpg", aspect: "aspect-[4/3]" },
  { category: "Outdoor Living", image: "/images/outdoor7.jpg", aspect: "aspect-[4/5]" },
]

const projects = rawProjects.map((project, index) => ({ id: index, ...project }))

const filters = ["All", "New Construction", "Remodels", "Outdoor Living"]

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("All")
  // Index into the *filtered* array of whichever photo is open in the lightbox.
  // null means the lightbox is closed.
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const filtered =
    activeFilter === "All" ? projects : projects.filter((p) => p.category === activeFilter)

  const closeLightbox = useCallback(() => setLightboxIndex(null), [])

  const showPrev = useCallback(() => {
    setLightboxIndex((i) => (i === null ? i : (i - 1 + filtered.length) % filtered.length))
  }, [filtered.length])

  const showNext = useCallback(() => {
    setLightboxIndex((i) => (i === null ? i : (i + 1) % filtered.length))
  }, [filtered.length])

  // Keyboard support: Escape closes, arrow keys navigate.
  useEffect(() => {
    if (lightboxIndex === null) return

    function handleKeyDown(e) {
      if (e.key === "Escape") closeLightbox()
      if (e.key === "ArrowLeft") showPrev()
      if (e.key === "ArrowRight") showNext()
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [lightboxIndex, closeLightbox, showPrev, showNext])

  // Prevent background scroll while the lightbox is open.
  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [lightboxIndex])

  // If the active filter changes while the lightbox is open and the index
  // no longer exists in the new filtered list, just close it.
  useEffect(() => {
    if (lightboxIndex !== null && lightboxIndex >= filtered.length) {
      setLightboxIndex(null)
    }
  }, [filtered.length, lightboxIndex])

  const activePhoto = lightboxIndex !== null ? filtered[lightboxIndex] : null

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
        {filtered.map((project, index) => (
          <div
            key={project.id}
            className="group mb-4 break-inside-avoid overflow-hidden rounded-xl"
          >
            <button
              type="button"
              onClick={() => setLightboxIndex(index)}
              className="relative block w-full cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600"
              aria-label={`View full image of ${project.category} project`}
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
            </button>
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

      {/* Lightbox */}
      {activePhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            type="button"
            onClick={closeLightbox}
            aria-label="Close"
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Prev arrow */}
          {filtered.length > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                showPrev()
              }}
              aria-label="Previous image"
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20 md:left-4"
            >
              <ChevronLeft className="h-7 w-7" />
            </button>
          )}

          {/* Next arrow */}
          {filtered.length > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                showNext()
              }}
              aria-label="Next image"
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20 md:right-4"
            >
              <ChevronRight className="h-7 w-7" />
            </button>
          )}

          {/* Full image — stop propagation so clicking the photo itself doesn't close it */}
          <div
            className="relative h-[85vh] w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={activePhoto.image || "/placeholder.svg"}
              alt={`${activePhoto.category} project`}
              fill
              className="object-contain"
              sizes="100vw"
            />
            <span className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-cyan-600 px-3 py-1 text-sm font-semibold text-white">
              {activePhoto.category}
            </span>
          </div>
        </div>
      )}
    </div>
  )
}