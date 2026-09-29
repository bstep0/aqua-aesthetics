import type { MetadataRoute } from "next"
import { SERVICES } from "@/lib/site"
import { AREAS } from "@/lib/areas"

const BASE = "https://www.aquaaestheticspools.com"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const page = (path: string, priority: number, changeFrequency: "weekly" | "monthly" = "monthly") => ({
    url: `${BASE}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  })
  return [
    page("", 1.0, "weekly"),
    page("/services", 0.9),
    ...SERVICES.map((s) => page(s.href, s.slug === "new-pool-construction" || s.slug === "pool-remodeling" ? 0.9 : 0.8)),
    page("/service-areas", 0.8),
    ...AREAS.map((a) => page(`/service-areas/${a.slug}`, a.slug === "mckinney" ? 0.9 : 0.7)),
    page("/design", 0.7),
    page("/gallery", 0.7, "weekly"),
    page("/about", 0.6),
    page("/contact", 0.7),
  ]
}
