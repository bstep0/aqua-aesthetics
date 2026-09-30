import { pageMeta } from "@/lib/seo"
import Image from "@/components/site/smart-image"
import { ALL_CITIES } from "@/lib/site"
import { CtaBand } from "@/components/site/ui"
import CountUp from "@/components/site/count-up"

export const metadata = pageMeta({
  title: "About Us — 30+ years of pool excellence in DFW",
  description:
    "Meet Aqua Aesthetics, a family-owned, owner-led DFW pool builder with 30+ years building, remodeling and servicing pools.",
  path: "/about",
})

const TEAM = [
  {
    name: "Larry Wieland",
    role: "Owner",
    bio: "With over 30 years in the pool industry, Larry founded Aqua Aesthetics with a vision to create extraordinary outdoor living spaces. His hands-on approach and commitment to quality have made Aqua Aesthetics one of the most trusted pool companies in the DFW Metroplex.",
  },
  {
    name: "Brendon Stepanek",
    role: "Project manager",
    bio: "Brendon brings a wealth of experience in pool construction and pool service, ensuring every project runs smoothly from start to finish. His attention to detail and dedication to client satisfaction make him an invaluable part of our team.",
  },
]

const initials = (name: string) =>
  name
    .split(" ")
    .map((p) => p[0])
    .join("")

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <section className="container grid items-center gap-14 pb-24 pt-16 md:pt-20 lg:grid-cols-12">
        <div className="flex flex-col gap-7 lg:col-span-6">
          <p className="aa-rise text-sm font-bold uppercase tracking-[0.2em] text-teal">About Aqua Aesthetics</p>
          <h1 className="aa-rise font-display text-5xl font-light leading-[0.98] tracking-[-0.03em] text-navy md:text-[92px]" style={{ animationDelay: "0.15s" }}>
            Family-owned. <em className="text-sun-dark">Owner-built.</em>
          </h1>
          <p className="aa-rise max-w-xl text-lg leading-relaxed text-slate-2 md:text-xl" style={{ animationDelay: "0.3s" }}>
            Creating beautiful, functional pool environments in DFW since 1995. The person who quotes your project is the person who sees it through.
          </p>
        </div>
        <div className="relative lg:col-span-5 lg:col-start-8">
          <div className="relative h-[420px] overflow-hidden rounded-[28px] md:h-[560px]">
            <Image src="/images/outdoor6.jpg" alt="Outdoor living space and pool built by aqua aesthetics pools" fill priority sizes="(min-width: 1024px) 42vw, 100vw" className="object-cover" />
          </div>
          <div className="absolute -bottom-10 left-4 flex h-[160px] w-[160px] items-center justify-center rounded-full bg-navy shadow-[0_20px_50px_rgba(11,27,43,0.3)] md:-left-16 md:h-[180px] md:w-[180px]">
            <svg viewBox="0 0 180 180" className="absolute inset-0 h-full w-full" style={{ animation: "aa-spin 26s linear infinite" }} aria-hidden="true">
              <defs>
                <path id="aa-badge2" d="M90,90 m-66,0 a66,66 0 1,1 132,0 a66,66 0 1,1 -132,0" />
              </defs>
              <text fontFamily="var(--font-sans)" fontSize="12.5" fontWeight="700" letterSpacing="3" fill="#E8A04C">
                <textPath href="#aa-badge2">SERVING DFW · SINCE 1995 · </textPath>
              </text>
            </svg>
            <span className="font-display text-[40px] text-ivory">30+</span>
          </div>
        </div>
      </section>

      <section className="aa-caustic-bg py-20 text-ivory">
        <div className="container grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-display text-7xl font-light text-sun md:text-8xl">
              <CountUp to={30} suffix="+" />
            </p>
            <p className="mt-2 text-ivory/80">years in the pool industry</p>
          </div>
          <div className="lg:border-l lg:border-ivory/20 lg:pl-8">
            <p className="font-display text-7xl font-light md:text-8xl">
              <CountUp to={ALL_CITIES.length} />
            </p>
            <p className="mt-2 text-ivory/80">DFW communities served</p>
          </div>
          <div className="lg:border-l lg:border-ivory/20 lg:pl-8">
            <p className="font-display text-7xl font-light md:text-8xl">
              <CountUp to={5} />
            </p>
            <p className="mt-2 text-ivory/80">services under one roof</p>
          </div>
          <div className="lg:border-l lg:border-ivory/20 lg:pl-8">
            <p className="font-display text-7xl font-light text-aqua md:text-8xl">1</p>
            <p className="mt-2 text-ivory/80">point of contact, start to finish</p>
          </div>
        </div>
      </section>

      <section className="container grid gap-12 py-24 lg:grid-cols-12">
        <h2 className="font-display text-4xl font-light leading-[1.02] tracking-[-0.02em] text-navy md:text-6xl lg:col-span-4">
          Our <em>story.</em>
        </h2>
        <div className="flex flex-col gap-6 text-lg leading-[1.75] text-slate-2 lg:col-span-7 lg:col-start-6">
          <p>
            Aqua Aesthetics was founded by Larry Wieland, with a passion for craftsmanship and a belief that every backyard has the potential to become something extraordinary. What started as a small pool service operation has grown into a full-service pool construction, remodeling, and maintenance company trusted by homeowners across Dallas, Frisco, Plano, Southlake, Colleyville, Fort Worth, and Flower Mound.
          </p>
          <p>
            Over three decades in the pool industry has given us a deep understanding of what North Texas homeowners need from their pools — designs that handle the summer heat, construction methods that account for the region&apos;s clay-heavy soils, and maintenance programs that keep water pristine through long swimming seasons. We&apos;ve built our reputation one project at a time, and most of our new clients come through referrals from neighbors and friends who&apos;ve experienced our work firsthand.
          </p>
        </div>
      </section>

      <section className="container pb-24">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h2 className="font-display text-4xl font-light leading-[1.02] tracking-[-0.02em] text-navy md:text-6xl">
            The people <em>behind the pools.</em>
          </h2>
          <p className="max-w-md text-lg text-slate">Our experienced professionals bring expertise and passion to every project.</p>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          {TEAM.map((m) => (
            <article key={m.name} className="aa-card flex flex-col gap-6 rounded-[28px] bg-white p-8 sm:flex-row sm:items-start">
              <div aria-hidden="true" className="flex h-28 w-28 shrink-0 items-center justify-center rounded-full bg-navy font-display text-4xl text-sun">
                {initials(m.name)}
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-sm font-bold uppercase tracking-[0.16em] text-teal">{m.role}</span>
                <h3 className="font-display text-4xl text-navy">{m.name}</h3>
                <p className="leading-[1.7] text-slate-2">{m.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container grid gap-10 pb-24 lg:grid-cols-12">
        <div className="flex flex-col gap-5 lg:col-span-4">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal">Where we build</p>
          <h2 className="font-display text-4xl font-light leading-[1.02] tracking-[-0.02em] text-navy md:text-[52px]">
            Across the whole <em>Metroplex.</em>
          </h2>
          <p className="text-lg text-slate">We know the soil, the HOAs and the permitting offices in every one of these communities.</p>
        </div>
        <ul className="flex flex-wrap content-start gap-2.5 lg:col-span-7 lg:col-start-6">
          {ALL_CITIES.map((c) => (
            <li key={c} className="rounded-full border border-navy/10 bg-white px-5 py-3 font-semibold text-navy transition-colors hover:bg-navy hover:text-ivory">
              {c}
            </li>
          ))}
        </ul>
      </section>

      <CtaBand title="Meet us" accent="in your backyard." />
    </div>
  )
}
