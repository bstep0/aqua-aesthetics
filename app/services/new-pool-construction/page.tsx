import { pageMeta } from "@/lib/seo"
import ServicePage, { serviceJsonLd } from "@/components/site/service-page"
import { NEW_POOL } from "@/lib/services-content"
import BuildAnimation from "@/components/site/build-animation"

export const metadata = pageMeta({
  title: "New pool construction in DFW — custom pools built to last",
  description:
    "Custom in-ground pools designed with you and built from permit to first swim in McKinney, Frisco, Plano and across DFW. Free consultation.",
  path: "/services/new-pool-construction",
  image: NEW_POOL.hero.src,
})

const jsonLd = serviceJsonLd(
  "new-pool-construction",
  "New pool construction",
  "Custom in-ground pool design and construction for homeowners in Dallas, Frisco, Plano, Southlake, Colleyville, Fort Worth, and Flower Mound.",
  NEW_POOL.faqs,
)

export default function NewPoolConstructionPage() {
  return (
    <ServicePage c={NEW_POOL} jsonLd={jsonLd}>
      <BuildAnimation />
    </ServicePage>
  )
}
