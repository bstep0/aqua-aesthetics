import Link from "next/link"
import type { ReactNode } from "react"
import { ArrowRight, Phone } from "lucide-react"
import { SITE, CORE_CITIES } from "@/lib/site"

/** A pill link that fills with water from the bottom on hover. */
export function FillLink({
  href,
  children,
  variant = "sun",
  className = "",
  arrow = false,
}: {
  href: string
  children: ReactNode
  variant?: "sun" | "outline-light" | "outline-dark" | "navy"
  className?: string
  arrow?: boolean
}) {
  const styles = {
    sun: "bg-sun text-navy",
    navy: "bg-navy text-ivory",
    "outline-light": "border border-ivory/50 text-ivory",
    "outline-dark": "border-[1.5px] border-navy text-navy",
  }[variant]
  return (
    <Link href={href} className={`aa-fill inline-flex items-center justify-center gap-2.5 rounded-full px-7 py-4 text-[17px] font-bold ${styles} ${className}`}>
      <span className="aa-water" aria-hidden="true">
        <svg viewBox="0 0 400 12" preserveAspectRatio="none" className="absolute -top-2.5 left-0 h-3 w-[200%]" style={{ animation: "aa-marquee 2.2s linear infinite" }}>
          <path d="M0 6 Q 25 0 50 6 T 100 6 T 150 6 T 200 6 T 250 6 T 300 6 T 350 6 T 400 6 V 12 H 0 Z" fill="#0B7285" />
        </svg>
        <span className="absolute inset-0 bg-teal" />
      </span>
      {children}
      {arrow && <ArrowRight className="h-[18px] w-[18px]" aria-hidden="true" />}
    </Link>
  )
}

export function Eyebrow({ children, light = false, icon }: { children: ReactNode; light?: boolean; icon?: ReactNode }) {
  return (
    <div className="flex items-center gap-4">
      {icon && (
        <span
          aria-hidden="true"
          className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full shadow-[0_6px_18px_rgba(11,27,43,0.12)] ${light ? "bg-sun text-navy" : "bg-white text-teal"}`}
        >
          {icon}
        </span>
      )}
      <p className={`text-sm font-bold uppercase tracking-[0.2em] ${light ? "text-aqua" : "text-teal"}`}>{children}</p>
    </div>
  )
}

export function Marquee({ items, className = "", separator = "✦", sepClass = "" }: { items: string[]; className?: string; separator?: string; sepClass?: string }) {
  const row = (key: string) =>
    items.flatMap((t, i) => [
      <span key={`${key}-${i}`}>{t}</span>,
      <span key={`${key}-s${i}`} className={sepClass} aria-hidden="true">
        {separator}
      </span>,
    ])
  return (
    <div className={`aa-marquee inline-flex items-center whitespace-nowrap ${className}`}>
      {row("a")}
      {row("b")}
    </div>
  )
}

/** Amber tape + navy lane-rope band, crossing at a gentle angle. */
export function CrossingRibbons({ tape, ropeItems }: { tape: string[]; ropeItems: string[] }) {
  return (
    <section aria-label="Highlights" className="aa-ribbon relative z-[3] -mt-32 h-[190px] overflow-hidden md:-mt-[150px]">
      <div aria-hidden="true" className="absolute -left-16 -right-16 top-[30px] flex h-[60px] -rotate-[1.4deg] items-center overflow-hidden bg-sun shadow-[0_12px_28px_rgba(0,0,0,0.22)]">
        <Marquee items={tape} className="gap-[34px] pr-[34px] text-[17px] font-extrabold uppercase tracking-[0.16em] text-navy md:text-[19px]" />
      </div>
      <div aria-hidden="true" className="absolute -left-16 -right-16 top-[100px] flex h-[76px] rotate-[0.9deg] flex-col shadow-[0_12px_28px_rgba(0,0,0,0.18)]">
        <div className="aa-rope h-[14px]" />
        <div className="flex flex-1 items-center overflow-hidden bg-navy">
          <Marquee
            items={ropeItems}
            separator="◦"
            sepClass="text-aqua"
            className="gap-[30px] pr-[30px] font-display text-[26px] font-light italic text-ivory [animation-direction:reverse] [animation-duration:56s]"
          />
        </div>
        <div className="aa-rope h-[14px] [animation-direction:reverse]" />
      </div>
      <p className="sr-only">Owner-led, 30+ years in DFW, serving {CORE_CITIES.join(", ")}.</p>
    </section>
  )
}

export function CtaBand({ title, accent, sub = "Free consultation anywhere in Dallas–Fort Worth." }: { title: string; accent: string; sub?: string }) {
  return (
    <section className="px-4 py-24 text-center md:py-32">
      <h2 className="font-display text-5xl font-light leading-[0.98] tracking-[-0.03em] text-navy md:text-[88px]">
        {title} <em className="text-sun-dark">{accent}</em>
      </h2>
      <p className="mt-5 text-lg text-slate md:text-xl">{sub}</p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <FillLink href="/contact">Get a free quote</FillLink>
        <a href={SITE.phoneHref} className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-navy px-7 py-4 text-[17px] font-bold text-navy">
          <Phone className="h-4 w-4" aria-hidden="true" />
          {SITE.phone}
        </a>
      </div>
    </section>
  )
}

export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm font-bold uppercase tracking-[0.2em] text-aqua">
      {items.map((it, i) => (
        <span key={it.label}>
          {i > 0 && <span className="px-2 text-ivory/50">/</span>}
          {it.href ? (
            <Link href={it.href} className="hover:text-ivory">
              {it.label}
            </Link>
          ) : (
            <span aria-current="page">{it.label}</span>
          )}
        </span>
      ))}
    </nav>
  )
}
