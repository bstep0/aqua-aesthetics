import { pageMeta } from "@/lib/seo"
import ServicePage, { serviceJsonLd } from "@/components/site/service-page"
import { REMODELING } from "@/lib/services-content"

export const metadata = pageMeta({
  title: "Pool Remodeling in DFW — Renovation & Resurfacing Experts",
  description:
    "Upgrade your existing pool with Aqua Aesthetics Pools. We offer pool resurfacing, tile replacement, deck renovation, and equipment upgrades throughout Dallas, Plano, Southlake, and the DFW area.",
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
