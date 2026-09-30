import { pageMeta } from "@/lib/seo"
import ServicePage, { serviceJsonLd } from "@/components/site/service-page"
import { REMODELING } from "@/lib/services-content"

export const metadata = pageMeta({
  title: "Pool remodeling in DFW — renovation & resurfacing experts",
  description:
    "Pool resurfacing, tile, coping, decks and equipment upgrades from aqua aesthetics pools in McKinney, Plano, Southlake and across DFW.",
  path: "/services/pool-remodeling",
  image: REMODELING.hero.src,
})

const jsonLd = serviceJsonLd(
  "pool-remodeling",
  "Pool Remodeling",
  "Expert pool renovation including resurfacing, tile replacement, deck renovation, and energy-efficient equipment upgrades for DFW homeowners.",
  REMODELING.faqs,
)

export default function PoolRemodelingPage() {
  return (
    <ServicePage c={REMODELING} jsonLd={jsonLd}></ServicePage>
  )
}
