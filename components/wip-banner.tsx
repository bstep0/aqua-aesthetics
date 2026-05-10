"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"

export default function WipBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const dismissed = localStorage.getItem("wip-banner-dismissed")
    if (!dismissed) setVisible(true)
  }, [])

  function dismiss() {
    localStorage.setItem("wip-banner-dismissed", "1")
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="relative z-50 bg-cyan-700 px-4 py-2.5 text-center text-sm text-white">
      <p className="pr-8">
        🏗️ Our website is still getting its finish coat — good thing we&apos;re better at building pools than building websites{" "}
        <span className="italic">(for now)</span>.
      </p>
      <button
        onClick={dismiss}
        aria-label="Dismiss banner"
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded p-1 hover:bg-white/20 transition-colors"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  )
}
