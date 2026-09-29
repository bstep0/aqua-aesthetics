import { pageMeta } from "@/lib/seo"
import { Breadcrumbs } from "@/components/site/ui"
import DesignerFrame from "@/components/designer/designer-frame"

export const metadata = pageMeta({
  title: "Design Your Backyard — Free 3D Pool Designer",
  description:
    "Sketch your dream pool, add a spa, fire pit, pergola or outdoor kitchen, and see it in 3D. Send your design to Aqua Aesthetics Pools for a free consultation anywhere in DFW.",
  path: "/design",
})

const TIPS = [
  { n: "01", t: "Shape the pool", d: "Start from a classic shape, or press and drag to sketch your own. Use Edit points to fine-tune it." },
  { n: "02", t: "Place the extras", d: "Add a spa, fire pit, pergola, kitchen or plants, then drag, rotate, resize and copy them into place." },
  { n: "03", t: "Send it to the owner", d: "We review your sketch before your consultation and come ready with ideas and a firm price." },
]

export default function DesignPage() {
  return (
    <div className="bg-navy pb-24 pt-36 text-ivory md:pt-40">
      <section className="container mb-12 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
        <div className="aa-rise flex flex-col gap-5">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Backyard designer" }]} />
          <h1 className="font-display text-5xl font-light leading-[0.98] tracking-[-0.025em] md:text-[88px]">
            Design your <em className="text-sun">backyard.</em>
          </h1>
        </div>
        <p className="aa-rise max-w-md text-lg leading-relaxed text-ivory/80" style={{ animationDelay: "0.2s" }}>
          Sketch your dream yard in a few minutes. It doesn&apos;t need to be perfect — it gives us a head start at your free consultation.
        </p>
      </section>

      <section className="container">
        <DesignerFrame />
      </section>

      <section className="container mt-16 grid gap-6 md:grid-cols-3">
        {TIPS.map((tip) => (
          <div key={tip.n} className="flex flex-col gap-2.5 rounded-3xl border border-ivory/10 bg-ivory/5 p-7">
            <span className="font-display text-3xl text-sun">{tip.n}</span>
            <span className="text-lg font-bold">{tip.t}</span>
            <span className="leading-relaxed text-ivory/75">{tip.d}</span>
          </div>
        ))}
      </section>
    </div>
  )
}
