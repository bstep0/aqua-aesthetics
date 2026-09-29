"use client"

import dynamic from "next/dynamic"
import { useEffect, useRef, useState } from "react"

// three.js and the designer only load in the browser, and only where this frame is used.
const YardDesigner = dynamic(() => import("./yard-designer"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center rounded-3xl bg-navy-2 text-ivory/70">Loading the backyard designer…</div>
  ),
})

const W = 1280
const H = 900

/** Renders the fixed-size designer scaled to the available width. */
export default function DesignerFrame() {
  const ref = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(1)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const ro = new ResizeObserver(([entry]) => setScale(Math.min(1, entry.contentRect.width / W)))
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  return (
    <div ref={ref} className="w-full">
      <div style={{ height: H * scale }} className="relative">
        <div style={{ width: W, height: H, transform: `scale(${scale})`, transformOrigin: "0 0" }} className="absolute left-0 top-0">
          <YardDesigner />
        </div>
      </div>
      {scale < 0.7 && (
        <p className="mt-4 text-center text-sm text-ivory/70">Tip: the designer is easiest to use on a laptop or tablet.</p>
      )}
    </div>
  )
}
