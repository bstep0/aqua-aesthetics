import { pageMeta } from "@/lib/seo"
import ServicePage, { serviceJsonLd } from "@/components/site/service-page"
import { REPAIRS } from "@/lib/services-content"

export const metadata = pageMeta({
  title: "Pool repairs in DFW — leak detection, pump & equipment repair",
  description:
    "Fast, reliable pool repairs in Dallas, Fort Worth, Frisco, and throughout the DFW Metroplex. aqua aesthetics pools fixes leaks, pumps, heaters, filters, plumbing, and more.",
  path: "/services/pool-repairs",
  image: REPAIRS.hero.src,
})

const jsonLd = serviceJsonLd(
  "pool-repairs",
  "Pool repairs",
  "Expert pool repair services including leak detection, pump and heater repair, plumbing, and electrical diagnosis for DFW homeowners.",
  REPAIRS.faqs,
)

export default function PoolRepairsPage() {
  return (
    <ServicePage c={REPAIRS} jsonLd={jsonLd}></ServicePage>
  )
}
