import { pageMeta } from "@/lib/seo"
import ServicePage, { serviceJsonLd } from "@/components/site/service-page"
import { MAINTENANCE } from "@/lib/services-content"

export const metadata = pageMeta({
  title: "Pool maintenance service in DFW — weekly & bi-Weekly plans",
  description:
    "Keep your pool crystal clear year-round with aqua aesthetics pools' professional maintenance plans. Serving homeowners in Dallas, Frisco, Flower Mound, Colleyville, and the DFW Metroplex.",
  path: "/services/pool-maintenance",
  image: MAINTENANCE.hero.src,
})

const jsonLd = serviceJsonLd(
  "pool-maintenance",
  "Pool maintenance",
  "Professional weekly and bi-weekly pool maintenance plans including chemical balancing, filter cleaning, and equipment inspection for DFW homeowners.",
  MAINTENANCE.faqs,
)

export default function PoolMaintenancePage() {
  return (
    <ServicePage c={MAINTENANCE} jsonLd={jsonLd}></ServicePage>
  )
}
