"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { FillLink } from "@/components/site/ui"

const rawProjects = [
  // New Construction
  { category: "New Construction", image: "/images/pool6.jpg", aspect: "aspect-[4/5]" },
  { category: "New Construction", image: "/images/pool3.jpg", aspect: "aspect-square" },
  { category: "New Construction", image: "/images/pool7.jpg", aspect: "aspect-[4/3]" },
  { category: "New Construction", image: "/images/pool8.jpg", aspect: "aspect-square" },
  { category: "New Construction", image: "/images/pool9.jpg", aspect: "aspect-square" },
  { category: "New Construction", image: "/images/pool10.jpg", aspect: "aspect-[4/3]" },
  { category: "New Construction", image: "/images/pool11.jpeg", aspect: "aspect-square" },
  { category: "New Construction", image: "/images/pool12.jpg", aspect: "aspect-[5/4]" },
  { category: "New Construction", image: "/images/pool13.jpg", aspect: "aspect-square" },
  { category: "New Construction", image: "/images/pool14.jpg", aspect: "aspect-[4/5]" },
  { category: "New Construction", image: "/images/pool15.jpg", aspect: "aspect-[4/5]" },
  { category: "New Construction", image: "/images/pool16.jpg", aspect: "aspect-square" },
  { category: "New Construction", image: "/images/pool17.jpg", aspect: "aspect-[5/4]" },
  { category: "New Construction", image: "/images/pool18.jpg", aspect: "aspect-[4/3]" },
  { category: "New Construction", image: "/images/pool19.jpg", aspect: "aspect-[4/5]" },
  { category: "New Construction", image: "/images/pool20.jpg", aspect: "aspect-[5/4]" },
  { category: "New Construction", image: "/images/pool21.jpg", aspect: "aspect-[4/3]" },
  { category: "New Construction", image: "/images/pool22.jpg", aspect: "aspect-[5/4]" },
  { category: "New Construction", image: "/images/pool23.jpg", aspect: "aspect-square" },
  { category: "New Construction", image: "/images/pool24.jpg", aspect: "aspect-square" },
  { category: "New Construction", image: "/images/pool25.jpg", aspect: "aspect-[5/4]" },
  { category: "New Construction", image: "/images/pool26.jpg", aspect: "aspect-[4/5]" },
  // Remodels
  { category: "Remodels", image: "/images/remodel1.jpg", aspect: "aspect-[4/3]" },
  { category: "Remodels", image: "/images/remodel2.jpg", aspect: "aspect-square" },
  { category: "Remodels", image: "/images/remodel3.jpg", aspect: "aspect-[5/4]" },
  { category: "Remodels", image: "/images/remodel4.jpg", aspect: "aspect-[4/3]" },
  { category: "Remodels", image: "/images/remodel5.jpg", aspect: "aspect-[4/5]" },
  { category: "Remodels", image: "/images/remodel6.jpg", aspect: "aspect-[5/4]" },
  // Outdoor Living
  { category: "Outdoor Living", image: "/images/outdoor1.jpg", aspect: "aspect-square" },
  { category: "Outdoor Living", image: "/images/outdoor2.jpg", aspect: "aspect-[4/3]" },
  { category: "Outdoor Living", image: "/images/outdoor3.jpg", aspect: "aspect-[4/3]" },
  { category: "Outdoor Living", image: "/images/pool17.jpg", aspect: "aspect-[5/4]" },
  { category: "Outdoor Living", image: "/images/outdoor4.jpg", aspect: "aspect-square" },
  { category: "Outdoor Living", image: "/images/outdoor5.jpg", aspect: "aspect-[4/5]" },
  { category: "Outdoor Living", image: "/images/outdoor6.jpg", aspect: "aspect-[4/3]" },
  { category: "Outdoor Living", image: "/images/outdoor7.jpg", aspect: "aspect-[4/5]" },
  { category: "Outdoor Living", image: "/images/outdoor8.jpg", aspect: "aspect-square" },
  { category: "Outdoor Living", image: "/images/outdoor9.jpg", aspect: "aspect-[5/4]" },
  { category: "Outdoor Living", image: "/images/outdoor10.jpg", aspect: "aspect-square" },
]

const projects = rawProjects.map((project, index) => ({ id: index, ...project }))

const filters = ["All", "New Construction", "Remodels", "Outdoor Living"]

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("All")
  // Index into the *filtered* array of whichever photo is open in the lightbox.
  // null means the lightbox is closed.
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

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

    function handleKeyDown(e: KeyboardEvent) {
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
    <div className="flex flex-col">
      <section className="container grid items-end gap-8 pb-10 pt-16 md:pt-20 lg:grid-cols-12">
        <h1 className="aa-rise font-display text-6xl font-light leading-[0.95] tracking-[-0.03em] text-navy md:text-[112px] lg:col-span-7">
          Our <em className="text-sun-dark">work.</em>
        </h1>
        <p className="aa-rise text-lg leading-relaxed text-slate lg:col-span-4 lg:col-start-9 lg:pb-3" style={{ animationDelay: "0.2s" }}>
          Browse pool projects completed across the DFW Metroplex — from new construction to full remodels and outdoor living spaces.
        </p>
      </section>

      <div className="container mb-10 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <div role="group" aria-label="Filter projects" className="flex flex-wrap gap-1.5 rounded-3xl bg-white p-1.5 shadow-[0_8px_24px_rgba(11,27,43,0.06)] md:rounded-full">
          {filters.map((filter) => {
            const count = filter === "All" ? projects.length : projects.filter((p) => p.category === filter).length
            const on = activeFilter === filter
            return (
              <button
                key={filter}
                type="button"
                aria-pressed={on}
                onClick={() => setActiveFilter(filter)}
                className={`flex h-12 items-center gap-2.5 rounded-full px-5 text-[15px] font-bold transition-colors ${on ? "bg-navy text-ivory" : "text-navy hover:bg-ivory"}`}
              >
                {filter}
                <span className={`rounded-full px-2 py-0.5 text-xs ${on ? "bg-sun text-navy" : "bg-sand"}`}>{count}</span>
              </button>
            )
          })}
        </div>
        <span className="font-semibold text-slate">Showing {filtered.length} projects · tap any photo to enlarge</span>
      </div>

      <div className="container gap-5 [column-count:1] sm:[column-count:2] lg:[column-count:3] xl:[column-count:4]">
        {filtered.map((project, index) => (
          <div key={project.id} className="group mb-5 break-inside-avoid overflow-hidden rounded-2xl" style={{ animation: `aa-rise .8s cubic-bezier(.2,.8,.2,1) ${Math.min(index, 12) * 0.04}s both` }}>
            <button
              type="button"
              onClick={() => setLightboxIndex(index)}
              className="relative block w-full cursor-zoom-in focus:outline-none focus-visible:ring-4 focus-visible:ring-teal/40"
              aria-label={`View full image of ${project.category} project`}
            >
              <div className={`relative w-full ${project.aspect} overflow-hidden`}>
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={`${project.category} project by Aqua Aesthetics Pools in DFW`}
                  fill
                  sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-x-3 bottom-3 flex translate-y-3 items-center justify-between rounded-xl bg-navy/90 px-4 py-3 text-ivory opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="font-display text-lg">{project.category}</span>
                  <span className="text-xs font-bold tracking-[0.1em] text-sun">{String(index + 1).padStart(2, "0")}</span>
                </div>
              </div>
            </button>
          </div>
        ))}
      </div>

      {filtered.length === 0 && <p className="py-20 text-center text-slate">No projects found for this category.</p>}

      <section className="container py-24">
        <div className="flex flex-col items-start justify-between gap-8 rounded-[32px] bg-navy px-8 py-14 text-ivory md:flex-row md:items-center md:px-16">
          <h2 className="max-w-2xl font-display text-4xl font-light leading-[1.02] tracking-[-0.02em] md:text-[52px]">
            See something you love? <em className="text-sun">Let&apos;s build yours.</em>
          </h2>
          <FillLink href="/contact" className="shrink-0">
            Get a free quote
          </FillLink>
        </div>
      </section>

      {activePhoto && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-navy/95 p-4" onClick={closeLightbox} role="dialog" aria-modal="true" aria-label={`${activePhoto.category} project photo`}>
          <button type="button" onClick={closeLightbox} aria-label="Close" className="absolute right-4 top-4 rounded-full bg-ivory/10 p-3 text-ivory transition-colors hover:bg-ivory/20">
            <X className="h-6 w-6" />
          </button>
          {filtered.length > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                showPrev()
              }}
              aria-label="Previous image"
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-ivory/10 p-3 text-ivory transition-colors hover:bg-ivory/20 md:left-6"
            >
              <ChevronLeft className="h-7 w-7" />
            </button>
          )}
          {filtered.length > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                showNext()
              }}
              aria-label="Next image"
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-ivory/10 p-3 text-ivory transition-colors hover:bg-ivory/20 md:right-6"
            >
              <ChevronRight className="h-7 w-7" />
            </button>
          )}
          <div className="relative h-[85vh] w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <Image src={activePhoto.image || "/placeholder.svg"} alt={`${activePhoto.category} project by Aqua Aesthetics Pools`} fill className="object-contain" sizes="100vw" />
            <span className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-sun px-4 py-1.5 text-sm font-bold text-navy">{activePhoto.category}</span>
          </div>
        </div>
      )}
    </div>
  )
}
