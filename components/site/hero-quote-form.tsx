"use client"

import { useState } from "react"
import { SITE } from "@/lib/site"

const PROJECTS = [
  { id: "new-construction", label: "New pool" },
  { id: "remodeling", label: "Remodel" },
  { id: "outdoor-living", label: "Outdoor living" },
  { id: "maintenance", label: "Service" },
  { id: "repairs", label: "Repair" },
]

type Status = "idle" | "sending" | "sent" | "error"

export default function HeroQuoteForm() {
  const [service, setService] = useState("new-construction")
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [status, setStatus] = useState<Status>("idle")

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    setStatus("sending")
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, service, source: "hero" }),
      })
      if (!res.ok) throw new Error("failed")
      setStatus("sent")
    } catch {
      setStatus("error")
    }
  }

  if (status === "sent") {
    return (
      <div className="flex flex-col items-center gap-4 rounded-3xl bg-ivory/95 p-10 text-center text-navy shadow-[0_40px_80px_rgba(0,0,0,0.35)]" style={{ animation: "aa-rise .7s cubic-bezier(.2,.8,.2,1) both" }}>
        <svg width="72" height="72" viewBox="0 0 72 72" fill="none" aria-hidden="true">
          <circle cx="36" cy="36" r="33" stroke="#0B7285" strokeWidth="3" strokeDasharray="208" strokeDashoffset="208" style={{ animation: "aa-draw .8s ease-out forwards" }} />
          <path d="M22 37l10 10 19-21" stroke="#0B7285" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="48" strokeDashoffset="48" style={{ animation: "aa-draw .5s ease-out .6s forwards" }} />
        </svg>
        <p className="font-display text-3xl">Thanks, we&apos;ll be in touch.</p>
        <p className="text-slate">Expect a call {SITE.hours}.</p>
      </div>
    )
  }

  return (
    <form onSubmit={submit} className="flex flex-col gap-4 rounded-3xl bg-ivory/95 p-7 text-navy shadow-[0_40px_80px_rgba(0,0,0,0.35)] md:p-8">
      <div>
        <p className="font-display text-[30px] leading-tight">Get a free quote</p>
        <p className="text-[15px] text-slate">The owner calls you back, not a salesperson.</p>
      </div>
      <fieldset>
        <legend className="mb-2.5 text-sm font-bold">What are you planning?</legend>
        <div className="flex flex-wrap gap-2">
          {PROJECTS.map((p) => (
            <button
              key={p.id}
              type="button"
              aria-pressed={service === p.id}
              onClick={() => setService(p.id)}
              className={`h-11 rounded-full border-[1.5px] px-4 text-[15px] font-semibold transition-colors ${
                service === p.id ? "border-navy bg-navy text-ivory" : "border-[#C9D2D4] bg-white text-navy hover:border-navy"
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>
      </fieldset>
      <label className="flex flex-col gap-1.5 text-sm font-bold">
        Name
        <input required value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" placeholder="Jane Smith" className="h-12 rounded-xl border border-[#C9D2D4] bg-white px-3.5 text-base font-normal focus:border-teal focus:outline-none focus:ring-4 focus:ring-teal/15" />
      </label>
      <label className="flex flex-col gap-1.5 text-sm font-bold">
        Phone
        <input required type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} autoComplete="tel" placeholder="(214) 555-0123" className="h-12 rounded-xl border border-[#C9D2D4] bg-white px-3.5 text-base font-normal focus:border-teal focus:outline-none focus:ring-4 focus:ring-teal/15" />
      </label>
      <button type="submit" disabled={status === "sending"} className="h-14 rounded-full bg-sun text-[17px] font-bold text-navy transition-transform hover:-translate-y-0.5 disabled:opacity-70">
        {status === "sending" ? "Sending…" : "Request my free quote"}
      </button>
      {status === "error" && (
        <p role="alert" className="text-center text-sm font-semibold text-red-700">
          Something went wrong. Please call {SITE.phone}.
        </p>
      )}
    </form>
  )
}
