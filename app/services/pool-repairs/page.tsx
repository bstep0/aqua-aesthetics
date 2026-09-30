import { pageMeta } from "@/lib/seo"
import ServicePage, { serviceJsonLd } from "@/components/site/service-page"
import { REPAIRS } from "@/lib/services-content"

export const metadata = pageMeta({
  title: "Pool repairs in DFW — leak detection, pump & equipment repair",
  description:
    "Fast pool repairs across DFW. Leaks, pumps, heaters, filters and plumbing, diagnosed and fixed by aqua aesthetics pools. Call (214) 971-5996.",
  path: "/services/pool-repairs",
  image: REPAIRS.hero.src,
})

const jsonLd = serviceJsonLd(
  "pool-repairs",
  "Pool Repairs",
  "Expert pool repair services including leak detection, pump and heater repair, plumbing, and electrical diagnosis for DFW homeowners.",
  REPAIRS.faqs,
)

export default function PoolRepairsPage() {
  return (
    <ServicePage c={REPAIRS} jsonLd={jsonLd}></ServicePage>
  )
}
