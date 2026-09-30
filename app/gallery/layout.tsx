import { pageMeta } from "@/lib/seo"

export const metadata = pageMeta({
  title: "Pool Portfolio & Gallery — DFW Projects",
  description:
    "See completed pool builds, remodels and outdoor living projects by Aqua Aesthetics across McKinney, Frisco, Plano and the DFW Metroplex.",
  path: "/gallery",
})

export default function GalleryLayout({ children }: { children: import("react").ReactNode }) {
  return <>{children}</>
}
