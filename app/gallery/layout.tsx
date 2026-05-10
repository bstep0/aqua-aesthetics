import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Pool Portfolio & Gallery — DFW Projects",
  description:
    "Browse Aqua Aesthetics Pools' portfolio of completed pool construction, remodeling, and outdoor living projects across Dallas, Frisco, Plano, Southlake, and the DFW Metroplex.",
}

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
