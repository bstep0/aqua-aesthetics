import { pageMeta } from "@/lib/seo"
import ServicePage, { serviceJsonLd } from "@/components/site/service-page"
import { NEW_POOL } from "@/lib/services-content"
import BuildAnimation from "@/components/site/build-animation"

export const metadata = pageMeta({
  title: "New Pool Construction in DFW — Custom Pools Built to Last",
  description:
    "Aqua Aesthetics Pools builds custom in-ground pools for homeowners throughout Dallas, Frisco, Plano, Southlake, and the DFW Metroplex. Get your free design consultation today.",
  path: "/services/new-pool-construction",
  image: NEW_POOL.hero.src,
})

const jsonLd = serviceJsonLd(
  "new-pool-construction",
  "New Pool Construction",
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
