"use client"

import { useEffect, useState } from "react"
import { Check, Phone } from "lucide-react"
import { SITE, CORE_CITIES } from "@/lib/site"

type FormState = "idle" | "submitting" | "success"

const SERVICES = [
  { id: "new-construction", label: "New pool" },
  { id: "remodeling", label: "Remodel" },
  { id: "outdoor-living", label: "Outdoor living" },
  { id: "maintenance", label: "Maintenance" },
  { id: "repairs", label: "Repair" },
  { id: "other", label: "Not sure" },
]
const TIMING = [
  { id: "asap", label: "As soon as possible" },
  { id: "soon", label: "In 1–3 months" },
  { id: "exploring", label: "Just exploring" },
]
const EMPTY = { name: "", phone: "", email: "", service: "new-construction", city: "", timing: "soon", message: "", design: "" }

const input = "h-[52px] w-full rounded-2xl border border-[#C9D2D4] bg-white px-4 text-base text-navy placeholder:text-slate/60 focus:border-teal focus:outline-none focus:ring-4 focus:ring-teal/15"

export default function ContactPage() {
  const [formState, setFormState] = useState<FormState>("idle")
  const [error, setError] = useState("")
  const [form, setForm] = useState(EMPTY)

  // Pre-fill from links like /contact?service=repairs&design=...
  useEffect(() => {
    const q = new URLSearchParams(window.location.search)
    const service = q.get("service")
    const design = q.get("design")
    setForm((f) => ({
      ...f,
      ...(service && SERVICES.some((s) => s.id === service) ? { service } : {}),
      ...(design ? { design: design.slice(0, 600) } : {}),
    }))
  }, [])

  const set = (k: keyof typeof EMPTY, v: string) => setForm((f) => ({ ...f, [k]: v }))

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!form.phone && !form.email) {
      setError("Please add a phone number or email so we can reach you.")
      return
    }
    setError("")
    setFormState("submitting")
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error("Send failed")
      setFormState("success")
    } catch {
      setFormState("idle")
      setError(`Something went wrong — please call ${SITE.phone} or email ${SITE.email}.`)
    }
  }

  return (
    <div className="container grid gap-6 py-12 md:py-16 lg:grid-cols-12">
      <aside className="aa-caustic-bg flex flex-col gap-10 rounded-[32px] p-8 text-ivory md:p-12 lg:col-span-5">
        <div className="aa-rise flex flex-col gap-5">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-aqua">Contact</p>
          <h1 className="font-display text-5xl font-light leading-[0.98] tracking-[-0.025em] md:text-7xl">
            Let&apos;s talk about your <em className="text-sun">backyard.</em>
          </h1>
          <p className="text-lg leading-relaxed text-ivory/80">
            Building new, remodeling, or need regular maintenance? Reach out below and we&apos;ll get back to you within one business day.
          </p>
        </div>
        <a href={SITE.phoneHref} className="aa-rise flex items-center gap-5" style={{ animationDelay: "0.15s" }}>
          <span className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-sun">
            <span className="absolute inset-0 rounded-full border-2 border-sun" style={{ animation: "aa-ring 2.4s ease-out infinite" }} aria-hidden="true" />
            <Phone className="h-6 w-6 text-navy" aria-hidden="true" />
          </span>
          <span className="flex flex-col">
            <span className="text-sm text-ivory/70">Call the owner directly</span>
            <span className="font-display text-4xl">{SITE.phone}</span>
          </span>
        </a>
        <dl className="grid grid-cols-2 gap-6 text-[15px] leading-relaxed text-ivory/80">
          <div>
            <dt className="font-bold text-ivory">Email</dt>
            <dd className="break-all">
              <a href={`mailto:${SITE.email}`} className="hover:text-sun">
                {SITE.email}
              </a>
            </dd>
          </div>
          <div>
            <dt className="font-bold text-ivory">Hours</dt>
            <dd>{SITE.hours}</dd>
          </div>
          <div>
            <dt className="font-bold text-ivory">Based in</dt>
            <dd>{SITE.base}</dd>
          </div>
          <div>
            <dt className="font-bold text-ivory">Serving</dt>
            <dd>The entire DFW Metroplex</dd>
          </div>
        </dl>
        <ul className="mt-auto flex flex-col gap-3.5 border-t border-ivory/20 pt-8">
          {["30+ years of experience in DFW", "Custom solutions tailored to your style and budget", "Reliable, friendly service for maintenance and repairs", "Free consultations and transparent pricing"].map((t) => (
            <li key={t} className="flex items-center gap-3">
              <Check className="h-5 w-5 shrink-0 text-aqua" strokeWidth={2.6} aria-hidden="true" />
              {t}
            </li>
          ))}
        </ul>
      </aside>

      <div className="rounded-[32px] bg-white p-8 shadow-[0_24px_60px_rgba(11,27,43,0.08)] md:p-12 lg:col-span-7">
        {formState === "success" ? (
          <div className="flex min-h-[640px] flex-col items-center justify-center gap-6 text-center" style={{ animation: "aa-rise .7s cubic-bezier(.2,.8,.2,1) both" }}>
            <svg width="120" height="120" viewBox="0 0 72 72" fill="none" aria-hidden="true">
              <circle cx="36" cy="36" r="33" stroke="#0B7285" strokeWidth="2.5" strokeDasharray="208" strokeDashoffset="208" style={{ animation: "aa-draw .8s ease-out forwards" }} />
              <path d="M22 37l10 10 19-21" stroke="#0B7285" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="48" strokeDashoffset="48" style={{ animation: "aa-draw .5s ease-out .6s forwards" }} />
            </svg>
            <h2 className="font-display text-5xl font-light text-navy">Request received.</h2>
            <p className="max-w-md text-lg text-slate">Thanks for reaching out. We&apos;ll be in touch {SITE.hours}.</p>
            <button type="button" onClick={() => { setFormState("idle"); setForm(EMPTY) }} className="rounded-full border border-[#C9D2D4] px-6 py-3 font-semibold text-navy">
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-7">
            <div>
              <h2 className="font-display text-4xl text-navy">Get a free quote</h2>
              <p className="mt-1 text-slate">Tell us a little, and the owner will reach out personally.</p>
            </div>

            <fieldset>
              <legend className="mb-3 font-bold text-navy">What are you planning?</legend>
              <div className="flex flex-wrap gap-2">
                {SERVICES.map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    aria-pressed={form.service === s.id}
                    onClick={() => set("service", s.id)}
                    className={`h-12 rounded-full border-[1.5px] px-5 text-[15px] font-semibold transition-colors ${
                      form.service === s.id ? "border-navy bg-navy text-ivory" : "border-[#C9D2D4] bg-white text-navy hover:border-navy"
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </fieldset>

            {form.design && (
              <div className="rounded-2xl border border-teal/30 bg-teal/5 p-4 text-[15px] text-navy">
                <p className="mb-1 font-bold text-teal">Your backyard design is attached</p>
                <p className="text-slate-2">{form.design}</p>
              </div>
            )}

            <div className="grid gap-5 sm:grid-cols-2">
              <label className="flex flex-col gap-2 font-bold text-navy">
                <span>
                  Full name <span className="text-red-700" aria-hidden="true">*</span>
                </span>
                <input required name="name" autoComplete="name" value={form.name} onChange={(e) => set("name", e.target.value)} placeholder="Jane Smith" className={input} />
              </label>
              <label className="flex flex-col gap-2 font-bold text-navy">
                Phone
                <input type="tel" name="phone" autoComplete="tel" value={form.phone} onChange={(e) => set("phone", e.target.value)} placeholder="(214) 555-0100" className={input} />
              </label>
              <label className="flex flex-col gap-2 font-bold text-navy">
                Email
                <input type="email" name="email" autoComplete="email" value={form.email} onChange={(e) => set("email", e.target.value)} placeholder="jane@example.com" className={input} />
              </label>
              <label className="flex flex-col gap-2 font-bold text-navy">
                City
                <select name="city" value={form.city} onChange={(e) => set("city", e.target.value)} className={input}>
                  <option value="">Select your city…</option>
                  {CORE_CITIES.map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                  <option>Other DFW city</option>
                </select>
              </label>
            </div>

            <fieldset>
              <legend className="mb-3 font-bold text-navy">When would you like to start?</legend>
              <div className="grid gap-2 sm:grid-cols-3">
                {TIMING.map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    aria-pressed={form.timing === t.id}
                    onClick={() => set("timing", t.id)}
                    className={`h-12 rounded-2xl border-[1.5px] text-[15px] font-semibold transition-colors ${
                      form.timing === t.id ? "border-navy bg-navy text-ivory" : "border-[#C9D2D4] bg-white text-navy hover:border-navy"
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </fieldset>

            <label className="flex flex-col gap-2 font-bold text-navy">
              Tell us about your project
              <textarea
                name="message"
                rows={5}
                value={form.message}
                onChange={(e) => set("message", e.target.value)}
                placeholder="Tell us about your project or what you're looking for…"
                className="w-full resize-none rounded-2xl border border-[#C9D2D4] bg-white px-4 py-3.5 text-base font-normal text-navy placeholder:text-slate/60 focus:border-teal focus:outline-none focus:ring-4 focus:ring-teal/15"
              />
            </label>

            {error && (
              <p role="alert" className="font-semibold text-red-700">
                {error}
              </p>
            )}

            <button type="submit" disabled={formState === "submitting"} className="h-[60px] rounded-full bg-sun text-lg font-bold text-navy transition-transform hover:-translate-y-0.5 disabled:opacity-70">
              {formState === "submitting" ? "Sending…" : "Send my request"}
            </button>
            <p className="text-center text-sm text-slate">We typically respond within one business day.</p>
          </form>
        )}
      </div>
    </div>
  )
}
