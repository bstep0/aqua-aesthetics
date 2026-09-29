import type React from "react"

/** Plain reading layout shared by the privacy policy and terms of use. */
export default function LegalPage({ title, updated, children }: { title: string; updated: string; children: React.ReactNode }) {
  return (
    <div className="container max-w-3xl py-16 md:py-24">
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal">Legal</p>
      <h1 className="mt-4 font-display text-5xl font-light leading-[1.02] tracking-[-0.02em] text-navy md:text-6xl">{title}</h1>
      <p className="mt-4 text-sm text-slate">Last updated {updated}</p>
      <div className="mt-10 flex flex-col gap-5 text-[17px] leading-relaxed text-ink [&_a]:font-semibold [&_a]:text-teal [&_a:hover]:underline [&_h2]:mt-6 [&_h2]:font-display [&_h2]:text-3xl [&_h2]:font-light [&_h2]:text-navy [&_ul]:flex [&_ul]:list-disc [&_ul]:flex-col [&_ul]:gap-2 [&_ul]:pl-6">
        {children}
      </div>
    </div>
  )
}
