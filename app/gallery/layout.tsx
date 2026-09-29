import { pageMeta } from "@/lib/seo"

export const metadata = pageMeta({
  title: "Pool portfolio & gallery — DFW projects",
  description:
    "See completed pool builds, remodels and outdoor living projects by aqua aesthetics pools across McKinney, Frisco, Plano and the DFW Metroplex.",
  path: "/gallery",
})

export default function GalleryLayout({ children }: { children: import("react").ReactNode }) {
  return <>{children}</>
}
