import Link from "next/link"
import { SITE, SERVICES } from "@/lib/site"
import { AREAS } from "@/lib/areas"
import { Marquee } from "@/components/site/ui"

export default function Footer() {
  return (
    <footer className="bg-navy text-ivory">
      <div aria-hidden="true" className="aa-ribbon flex h-[58px] items-center overflow-hidden bg-sun">
        <Marquee
          items={["Free consultations", SITE.phone, "Mon–Fri 8am–5pm", "Owner-led", "Based in McKinney, TX", "Serving all of DFW"]}
          className="gap-9 pr-9 text-base font-extrabold uppercase tracking-[0.14em] text-navy md:text-lg"
          sepClass=""
        />
      </div>
      <div className="container py-14">
        <div className="grid gap-10 text-[15px] leading-8 text-ivory/75 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="font-display text-3xl leading-tight text-ivory">aqua aesthetics</p>
            <p className="mt-3 max-w-xs leading-relaxed">
              Family-owned pool builders based in McKinney, TX and serving the Dallas–Fort Worth Metroplex since 1995. Construction, remodeling, repairs and maintenance.
            </p>
          </div>
          <div className="lg:col-span-3">
            <h3 className="mb-2 font-bold text-ivory">Services</h3>
            <ul>
              {SERVICES.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="hover:text-sun">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-2">
            <h3 className="mb-2 font-bold text-ivory">Company</h3>
            <ul>
              <li><Link href="/gallery" className="hover:text-sun">Our Work</Link></li>
              <li><Link href="/design" className="hover:text-sun">Design Your Pool</Link></li>
              <li><Link href="/service-areas" className="hover:text-sun">Service Areas</Link></li>
              <li><Link href="/about" className="hover:text-sun">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-sun">Contact</Link></li>
            </ul>
          </div>
          <div className="lg:col-span-3">
            <h3 className="mb-2 font-bold text-ivory">Contact</h3>
            <ul>
              <li><a href={SITE.phoneHref} className="font-bold text-sun">{SITE.phone}</a></li>
              <li><a href={`mailto:${SITE.email}`} className="hover:text-sun">{SITE.email}</a></li>
              <li>{SITE.hours}</li>
              <li>{SITE.base}</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-2 border-t border-ivory/15 pt-6 text-sm text-ivory/60 md:flex-row md:justify-between">
          <span className="flex flex-wrap gap-x-4 gap-y-1">
            <span>© {new Date().getFullYear()} Aqua Aesthetics Pools. All rights reserved.</span>
            <Link href="/privacy" className="hover:text-sun">Privacy</Link>
            <Link href="/terms" className="hover:text-sun">Terms</Link>
          </span>
          <nav aria-label="Service areas" className="flex flex-wrap gap-x-3 gap-y-1">
            {AREAS.slice(0, 12).map((a) => (
              <Link key={a.slug} href={`/service-areas/${a.slug}`} className="hover:text-sun">
                {a.city}
              </Link>
            ))}
            <Link href="/service-areas" className="font-semibold text-ivory hover:text-sun">
              All Services Areas →
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
