import { pageMeta } from "@/lib/seo"
import ServicePage, { serviceJsonLd } from "@/components/site/service-page"
import { MAINTENANCE } from "@/lib/services-content"

export const metadata = pageMeta({
  title: "Pool maintenance service in DFW — weekly & bi-weekly plans",
  description:
    "Weekly and bi-weekly pool maintenance plans from aqua aesthetics pools. Clear, balanced water year-round in McKinney, Frisco and across DFW.",
  path: "/services/pool-maintenance",
  image: MAINTENANCE.hero.src,
})

const jsonLd = serviceJsonLd(
  "pool-maintenance",
  "Pool Maintenance",
  "Professional weekly and bi-weekly pool maintenance plans including chemical balancing, filter cleaning, and equipment inspection for DFW homeowners.",
  MAINTENANCE.faqs,
)

export default function PoolMaintenancePage() {
  return (
    <ServicePage c={MAINTENANCE} jsonLd={jsonLd}></ServicePage>
  )
}
