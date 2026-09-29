import { pageMeta } from "@/lib/seo"
import ServicePage, { serviceJsonLd } from "@/components/site/service-page"
import { OUTDOOR_LIVING } from "@/lib/services-content"

export const metadata = pageMeta({
  title: "Outdoor living spaces in DFW — patios, kitchens & fire pits",
  description:
    "Transform your backyard with custom outdoor living spaces by aqua aesthetics pools. We design and build patios, outdoor kitchens, fire pits, and pergolas across Southlake, Colleyville, Dallas, and the DFW Metroplex.",
  path: "/services/outdoor-living",
  image: OUTDOOR_LIVING.hero.src,
})

const jsonLd = serviceJsonLd(
  "outdoor-living",
  "Outdoor living",
  "Custom outdoor living design and construction including patios, outdoor kitchens, fire pits, pergolas, and landscape lighting for DFW homeowners.",
  OUTDOOR_LIVING.faqs,
)

export default function OutdoorLivingPage() {
  return (
    <ServicePage c={OUTDOOR_LIVING} jsonLd={jsonLd}></ServicePage>
  )
}
