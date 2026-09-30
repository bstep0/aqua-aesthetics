import { pageMeta } from "@/lib/seo"
import ServicePage, { serviceJsonLd } from "@/components/site/service-page"
import { OUTDOOR_LIVING } from "@/lib/services-content"

export const metadata = pageMeta({
  title: "Outdoor living spaces in DFW — patios, kitchens & fire pits",
  description:
    "Covered patios, outdoor kitchens, fire pits and pergolas designed and built by aqua aesthetics pools in McKinney, Southlake and across DFW.",
  path: "/services/outdoor-living",
  image: OUTDOOR_LIVING.hero.src,
})

const jsonLd = serviceJsonLd(
  "outdoor-living",
  "Outdoor Living",
  "Custom outdoor living design and construction including patios, outdoor kitchens, fire pits, pergolas, and landscape lighting for DFW homeowners.",
  OUTDOOR_LIVING.faqs,
)

export default function OutdoorLivingPage() {
  return (
    <ServicePage c={OUTDOOR_LIVING} jsonLd={jsonLd}></ServicePage>
  )
}
