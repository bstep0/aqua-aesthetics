export const SITE = {
  name: "aqua aesthetics pools",
  url: "https://aquaaestheticspools.com",
  phone: "(214) 971-5996",
  phoneHref: "tel:+12149715996",
  email: "contact@aquaaestheticspools.com",
  hours: "Mon–Fri, 8am–5pm",
  base: "McKinney, TX",
}

export const CORE_CITIES = ["McKinney", "Frisco", "Allen", "Plano", "Dallas", "Fort Worth", "Southlake", "Colleyville", "Flower Mound"]

export const ALL_CITIES = [
  ...CORE_CITIES,
  "Prosper", "Celina", "Little Elm", "The Colony", "Denton", "Lewisville", "Highland Village", "Carrollton", "Coppell",
  "Irving", "Richardson", "Garland", "Wylie", "Lucas", "Fairview", "Rockwall", "Grapevine", "Keller", "Hurst", "Euless",
  "Bedford", "Arlington",
]

export type ServiceSummary = {
  slug: string
  href: string
  name: string
  short: string
  blurb: string
  image: string
  alt: string
}

export const SERVICES: ServiceSummary[] = [
  {
    slug: "new-pool-construction",
    href: "/services/new-pool-construction",
    name: "New Pool Construction",
    short: "New Construction",
    blurb: "Custom gunite pools, designed with you and built from permit to first swim.",
    image: "/images/pool18.jpg",
    alt: "Custom new pool construction with spa in Frisco Texas",
  },
  {
    slug: "pool-remodeling",
    href: "/services/pool-remodeling",
    name: "Pool Remodeling",
    short: "Remodels",
    blurb: "Resurfacing, tile, coping, decks and energy-efficient equipment upgrades.",
    image: "/images/remodel1.jpg",
    alt: "Pool remodeling and resurfacing project in Plano Texas",
  },
  {
    slug: "outdoor-living",
    href: "/services/outdoor-living",
    name: "Outdoor Living",
    short: "Outdoor Living",
    blurb: "Covered patios, outdoor kitchens, fire features and pergolas.",
    image: "/images/outdoor1.jpg",
    alt: "Cedar pergola with string lights beside a custom pool",
  },
  {
    slug: "pool-maintenance",
    href: "/services/pool-maintenance",
    name: "Pool Maintenance",
    short: "Maintenance",
    blurb: "Weekly and bi-weekly service plans that keep your water clear year-round.",
    image: "/images/pool16.jpg",
    alt: "Pool maintenance and chemical balancing service in Dallas Texas",
  },
  {
    slug: "pool-repairs",
    href: "/services/pool-repairs",
    name: "Pool Repairs",
    short: "Repairs",
    blurb: "Leaks, pumps, heaters, filters and plumbing, diagnosed and fixed fast.",
    image: "/images/repair1.jpg",
    alt: "Pool equipment repair and leak detection in Fort Worth Texas",
  },
]

export const WHY_US = [
  {
    heading: "You work directly with the owner",
    detail: "Not passed between salespeople and subcontractors. One team, one point of contact, start to finish.",
  },
  {
    heading: "30+ years building in DFW",
    detail: "We know local soil conditions, HOA requirements, and city permitting, so your project doesn't hit unexpected delays.",
  },
  {
    heading: "No hidden costs, ever",
    detail: "Your quote is your price. We flag any scope changes before they happen, not after.",
  },
  {
    heading: "Still here when you need us",
    detail: "Service, repairs, and remodels years after your build. We're invested in your pool long-term.",
  },
]
