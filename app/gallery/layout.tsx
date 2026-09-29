import { pageMeta } from "@/lib/seo"

export const metadata = pageMeta({
  title: "Pool Portfolio & Gallery — DFW Projects",
  description:
    "Browse Aqua Aesthetics Pools' portfolio of completed pool construction, remodeling, and outdoor living projects across Dallas, Frisco, Plano, Southlake, and the DFW Metroplex.",
  path: "/gallery",
})

export default function GalleryLayout({ children }: { children: import("react").ReactNode }) {
  return <>{children}</>
}
