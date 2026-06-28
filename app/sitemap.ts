import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.aquaaestheticspools.com",
      lastModified: new Date(),
      priority: 1.0,
    },
    {
      url: "https://www.aquaaestheticspools.com/services",
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: "https://www.aquaaestheticspools.com/services/new-pool-construction",
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: "https://www.aquaaestheticspools.com/services/pool-remodeling",
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: "https://www.aquaaestheticspools.com/services/outdoor-living",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: "https://www.aquaaestheticspools.com/services/pool-maintenance",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: "https://www.aquaaestheticspools.com/services/pool-repairs",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: "https://www.aquaaestheticspools.com/gallery",
      lastModified: new Date(),
      priority: 0.7,
    },
    {
      url: "https://www.aquaaestheticspools.com/about",
      lastModified: new Date(),
      priority: 0.6,
    },
    {
      url: "https://www.aquaaestheticspools.com/contact",
      lastModified: new Date(),
      priority: 0.7,
    },
  ]
}