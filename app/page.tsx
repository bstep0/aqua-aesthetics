import { pageMeta, localBusinessJsonLd, BUSINESS_ID } from "@/lib/seo"
import { AREAS } from "@/lib/areas"
import Image from "@/components/site/smart-image"
import Link from "next/link"
import { Phone, PencilLine, ShieldCheck, Wrench } from "lucide-react"
import { SITE, SERVICES, WHY_US, ALL_CITIES } from "@/lib/site"
import { CrossingRibbons, CtaBand, Eyebrow, FillLink } from "@/components/site/ui"
import { Droplet } from "@/components/site/logo"
import HeroQuoteForm from "@/components/site/hero-quote-form"
import DesignerFrame from "@/components/designer/designer-frame"

export const metadata = pageMeta({
  title: "DFW pool builder — custom pools, remodels & repairs | aqua aesthetics pools",
  description:
    "Family-owned DFW pool builder based in McKinney, TX. Custom pool construction, remodeling, outdoor living, maintenance and repairs in McKinney, Frisco, Allen, Plano, Dallas, Fort Worth, Southlake and across the Metroplex. Free quote.",
  path: "/",
})

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "aqua aesthetics pools",
  url: "https://www.aquaaestheticspools.com",
  publisher: { "@id": BUSINESS_ID },
}

const HEADLINE = ["Backyards", "built", "for", "the"]

export default function Home() {
  const [feature, ...rest] = SERVICES
  return (
    <div className="flex flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-navy pb-44 pt-32 text-ivory md:min-h-[800px] md:pt-36">
        <Image
          src="/images/pool6.jpg"
          alt="Custom pool with fire feature and LED lighting built in the DFW Metroplex"
          fill
          priority
          sizes="100vw"
          className="aa-kenburns object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,20,33,0.93)_0%,rgba(8,20,33,0.72)_40%,rgba(8,20,33,0.2)_72%,rgba(8,20,33,0.35)_100%)]" />
        <div className="container relative grid items-start gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7 lg:pt-6">
            <p className="aa-rise mb-6 text-sm font-bold uppercase tracking-[0.2em] text-aqua">Pool builders · Dallas–Fort Worth · Based in McKinney</p>
            <h1 className="mb-7 font-display text-5xl font-light leading-[0.98] tracking-[-0.025em] sm:text-7xl lg:text-[92px]">
              {HEADLINE.map((w, i) => (
                <span key={w} className="aa-rise mr-[0.25em] inline-block" style={{ animationDelay: `${0.2 + i * 0.1}s` }}>
                  {w}
                </span>
              ))}
              <span className="aa-rise inline-block" style={{ animationDelay: "0.6s" }}>
                <em className="aa-glint">golden hour.</em>
              </span>
            </h1>
            <p className="aa-rise mb-10 max-w-[580px] text-lg leading-relaxed text-ivory/85 md:text-[21px]" style={{ animationDelay: "0.8s" }}>
              Custom pools, remodels, repairs and outdoor living, built by the owner who quotes it. One team, one point of contact, start to finish.
            </p>
            <div className="aa-rise flex flex-wrap items-center gap-4" style={{ animationDelay: "0.95s" }}>
              <FillLink href="/gallery" variant="outline-light" arrow>
                View our work
              </FillLink>
              <a href={SITE.phoneHref} className="flex items-center gap-3 px-2 py-3 text-[17px] font-semibold">
                <span className="relative flex h-11 w-11 items-center justify-center rounded-full bg-aqua/20">
                  <span className="absolute inset-0 rounded-full border-[1.5px] border-aqua" style={{ animation: "aa-ring 2.6s ease-out infinite" }} aria-hidden="true" />
                  <Phone className="h-[18px] w-[18px] text-aqua" aria-hidden="true" />
                </span>
                {SITE.phone}
              </a>
            </div>
          </div>
          <div className="aa-rise lg:col-span-4 lg:col-start-9" style={{ animationDelay: "0.7s" }}>
            <HeroQuoteForm />
          </div>
        </div>
      </section>

      <CrossingRibbons tape={["Owner-led", "Your quote is your price", "30+ years in DFW", "Permits handled", "Family-owned"]} ropeItems={ALL_CITIES.slice(0, 12)} />

      {/* Services */}
      <section className="container pb-28 pt-12">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="flex flex-col gap-5">
            <Eyebrow icon={<Wrench className="h-6 w-6" />}>What we do</Eyebrow>
            <h2 className="font-display text-4xl font-light leading-[1.02] tracking-[-0.02em] text-navy md:text-[64px]">
              From first dig to <em>every summer after.</em>
            </h2>
          </div>
          <Link href="/services" className="aa-link-u self-start pb-1 text-[17px] font-bold text-teal md:self-auto">
            All services →
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3 md:grid-rows-[350px_350px]">
          <ServiceCard s={feature} big />
          {rest.map((s) => (
            <ServiceCard key={s.href} s={s} />
          ))}
        </div>
      </section>

      {/* Designer */}
      <section id="designer" className="bg-navy py-24 text-ivory md:py-28">
        <div className="container">
          <div className="mb-12 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div className="flex flex-col gap-5">
              <Eyebrow light icon={<PencilLine className="h-6 w-6" />}>
                Design your backyard
              </Eyebrow>
              <h2 className="font-display text-4xl font-light leading-[1.02] tracking-[-0.02em] md:text-[64px]">
                Dream it up. <em className="text-sun">We&apos;ll build it.</em>
              </h2>
            </div>
            <p className="max-w-md text-lg leading-relaxed text-ivory/80">
              Sketch any pool shape, drag in a spa, fire pit or pergola, then walk around it in 3D. Send it with your quote request.{" "}
              <Link href="/design" className="aa-link-u font-bold text-sun">
                Open full screen →
              </Link>
            </p>
          </div>
          <DesignerFrame />
        </div>
      </section>

      {/* Why us */}
      <section className="container grid items-center gap-16 py-28 lg:grid-cols-12 lg:py-32">
        <div className="relative lg:col-span-6">
          <div className="relative h-[420px] overflow-hidden rounded-[28px] md:h-[640px]">
            <Image
              src="/images/pool4.jpg"
              alt="Covered outdoor living patio overlooking custom pool in Southlake Texas"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-10 right-4 flex h-[170px] w-[170px] items-center justify-center rounded-full bg-sun shadow-[0_20px_50px_rgba(11,27,43,0.25)] md:-right-12 md:h-[190px] md:w-[190px]">
            <svg viewBox="0 0 190 190" className="absolute inset-0 h-full w-full" style={{ animation: "aa-spin 26s linear infinite" }} aria-hidden="true">
              <defs>
                <path id="aa-badge" d="M95,95 m-70,0 a70,70 0 1,1 140,0 a70,70 0 1,1 -140,0" />
              </defs>
              <text fontFamily="var(--font-sans)" fontSize="13" fontWeight="700" letterSpacing="3.2" fill="#0B1B2B">
                <textPath href="#aa-badge">OWNER-LED · 30+ YEARS · FAMILY-OWNED · </textPath>
              </text>
            </svg>
            <Droplet className="h-11 w-11" stroke="#0B1B2B" />
          </div>
        </div>
        <div className="flex flex-col gap-8 lg:col-span-5 lg:col-start-8">
          <div className="flex flex-col gap-5">
            <Eyebrow icon={<ShieldCheck className="h-6 w-6" />}>Why aqua aesthetics</Eyebrow>
            <h2 className="font-display text-4xl font-light leading-[1.02] tracking-[-0.02em] text-navy md:text-[58px]">
              We build pools <em>we&apos;d swim in.</em>
            </h2>
          </div>
          <ol className="flex flex-col">
            {WHY_US.map((item, i) => (
              <li key={item.heading} className="flex gap-5 border-t border-navy/15 py-5 last:border-b">
                <span className="w-8 shrink-0 font-display text-[22px] text-sun-dark">0{i + 1}</span>
                <div>
                  <p className="text-lg font-bold text-navy">{item.heading}</p>
                  <p className="leading-relaxed text-slate">{item.detail}</p>
                </div>
              </li>
            ))}
          </ol>
          <FillLink href="/about" variant="navy" className="self-start">
            Meet the team
          </FillLink>
        </div>
      </section>

      {/* Where we build */}
      <section className="container pb-8">
        <div className="flex flex-col gap-6 rounded-[32px] bg-white p-8 md:p-12">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <h2 className="font-display text-3xl font-light leading-[1.05] tracking-[-0.02em] text-navy md:text-5xl">
              Building pools <em>across Dallas–Fort Worth.</em>
            </h2>
            <Link href="/service-areas" className="aa-link-u self-start pb-1 font-bold text-teal md:self-auto">
              All service areas →
            </Link>
          </div>
          <p className="max-w-3xl text-lg text-slate">
            Based in McKinney and working throughout the Metroplex — from Collin County to Tarrant County and everywhere in between.
          </p>
          <ul className="flex flex-wrap gap-2">
            {AREAS.map((a) => (
              <li key={a.slug}>
                <Link href={`/service-areas/${a.slug}`} className="block rounded-full border border-navy/10 px-4 py-2.5 text-[15px] font-semibold text-navy transition-colors hover:bg-navy hover:text-ivory">
                  {a.city}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand title="Let's plan your" accent="backyard." />
    </div>
  )
}

function ServiceCard({ s, big = false }: { s: (typeof SERVICES)[number]; big?: boolean }) {
  return (
    <Link
      href={s.href}
      className={`aa-card relative flex min-h-[300px] flex-col justify-end overflow-hidden rounded-3xl text-ivory ${big ? "md:row-span-2" : ""}`}
    >
      <Image src={s.image} alt={s.alt} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(8,20,33,0.9)_0%,rgba(8,20,33,0)_60%)]" />
      <div className={`relative flex flex-col gap-2 ${big ? "p-9" : "p-7"}`}>
        <h3 className={`font-display font-normal ${big ? "text-4xl" : "text-[28px]"}`}>{s.name}</h3>
        <p className={`text-ivory/85 ${big ? "text-[17px] leading-relaxed" : "text-[15px]"}`}>{s.blurb}</p>
      </div>
    </Link>
  )
}
