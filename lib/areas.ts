export type Area = {
  slug: string
  city: string
  county: string
  image: string
  alt: string
  intro: string
  nearby: string[]
}

// Priority service-area pages. McKinney is home base; Collin County neighbors come first.
export const AREAS: Area[] = [
  {
    slug: "mckinney",
    city: "McKinney",
    county: "Collin County",
    image: "/images/pool6.jpg",
    alt: "Custom pool with fire feature and LED lighting built by a McKinney TX pool builder",
    intro:
      "McKinney is our home base. From Stonebridge Ranch to Craig Ranch and the newer neighborhoods on the north side of town, we design, build, remodel and service pools for our own neighbors — and because we're local, the owner is never more than a short drive from your project.",
    nearby: ["allen", "frisco", "prosper", "celina", "plano"],
  },
  {
    slug: "frisco",
    city: "Frisco",
    county: "Collin and Denton Counties",
    image: "/images/pool18.jpg",
    alt: "Custom pool and spa built in Frisco TX",
    intro:
      "Frisco's fast-growing neighborhoods are full of new homes with blank backyards — and HOA guidelines to match. We plan pools, spas and outdoor living spaces that fit your lot, your HOA's rules and the way your family actually uses the yard.",
    nearby: ["mckinney", "prosper", "plano", "little-elm", "the-colony"],
  },
  {
    slug: "allen",
    city: "Allen",
    county: "Collin County",
    image: "/images/pool24.jpg",
    alt: "Backyard pool built in Allen TX",
    intro:
      "Right next door to our McKinney base, Allen homeowners get the same owner-led service we give our own street: custom pool construction, remodels of established pools, and weekly maintenance from a team that knows Collin County's clay soil.",
    nearby: ["mckinney", "plano", "frisco"],
  },
  {
    slug: "prosper",
    city: "Prosper",
    county: "Collin and Denton Counties",
    image: "/images/pool3.jpg",
    alt: "Custom pool built in Prosper TX",
    intro:
      "Larger lots in Prosper leave room for the full backyard — pool, spa, outdoor kitchen and a covered patio. We design it as one plan and build it as one project, so everything fits together from day one.",
    nearby: ["celina", "frisco", "mckinney"],
  },
  {
    slug: "celina",
    city: "Celina",
    county: "Collin and Denton Counties",
    image: "/images/pool5.jpg",
    alt: "New pool construction in Celina TX",
    intro:
      "Celina is one of the fastest-growing communities in North Texas, and many new homes are ready for their first pool. We handle the design, permits and construction so you can go from new build to first swim without juggling contractors.",
    nearby: ["prosper", "mckinney", "frisco"],
  },
  {
    slug: "plano",
    city: "Plano",
    county: "Collin and Denton Counties",
    image: "/images/remodel1.jpg",
    alt: "Pool remodel completed in Plano TX",
    intro:
      "Many Plano backyards already have a pool that's ready for a refresh. We resurface, retile, update coping and decks, and swap in energy-efficient equipment — or build something entirely new if you're starting from scratch.",
    nearby: ["allen", "frisco", "mckinney", "dallas"],
  },
  {
    slug: "little-elm",
    city: "Little Elm",
    county: "Denton County",
    image: "/images/pool7.jpg",
    alt: "Custom backyard pool in Little Elm TX",
    intro:
      "Near the shores of Lewisville Lake, Little Elm homeowners want a backyard that feels like a getaway. We build custom pools and outdoor living spaces designed for long North Texas summers.",
    nearby: ["the-colony", "frisco", "prosper"],
  },
  {
    slug: "the-colony",
    city: "The Colony",
    county: "Denton County",
    image: "/images/pool8.jpg",
    alt: "Pool built in The Colony TX",
    intro:
      "From new construction to leak detection and weekly service, we take care of pools across The Colony with the same owner-led attention we're known for throughout DFW.",
    nearby: ["little-elm", "frisco", "plano"],
  },
  {
    slug: "dallas",
    city: "Dallas",
    county: "Dallas County",
    image: "/images/pool9.jpg",
    alt: "Custom pool built in Dallas TX",
    intro:
      "Dallas lots range from compact urban yards to sprawling estates. We design pools that make the most of the space you have, and we manage the city's permitting and inspections for you.",
    nearby: ["plano", "southlake", "fort-worth"],
  },
  {
    slug: "fort-worth",
    city: "Fort Worth",
    county: "Tarrant County",
    image: "/images/pool10.jpg",
    alt: "Custom pool built in Fort Worth TX",
    intro:
      "Fort Worth homeowners count on us for new pools, full remodels and fast repairs — especially leak detection, since shifting clay soil is one of the most common causes of plumbing problems here.",
    nearby: ["southlake", "colleyville", "dallas"],
  },
  {
    slug: "southlake",
    city: "Southlake",
    county: "Tarrant County",
    image: "/images/pool4.jpg",
    alt: "Covered outdoor living patio overlooking custom pool in Southlake TX",
    intro:
      "Southlake backyards call for resort-style details: waterfalls, fire features, spas and covered outdoor living. We design and build it all in-house so the whole space feels like one design.",
    nearby: ["colleyville", "flower-mound", "fort-worth"],
  },
  {
    slug: "colleyville",
    city: "Colleyville",
    county: "Tarrant County",
    image: "/images/outdoor3.jpg",
    alt: "Outdoor living and pool project in Colleyville TX",
    intro:
      "Colleyville homeowners often pair a new pool or remodel with an outdoor kitchen, pergola or fire pit. Building them together lets us coordinate plumbing, gas and electrical once — saving time and money.",
    nearby: ["southlake", "fort-worth", "flower-mound"],
  },
  {
    slug: "flower-mound",
    city: "Flower Mound",
    county: "Denton County",
    image: "/images/pool12.jpg",
    alt: "Sparkling pool maintained in Flower Mound TX",
    intro:
      "Whether you're building new, refreshing an older pool or looking for dependable weekly service, Flower Mound homeowners get one team and one point of contact from start to finish.",
    nearby: ["southlake", "colleyville", "the-colony"],
  },
  {
    slug: "denton",
    city: "Denton",
    county: "Denton County",
    image: "/images/pool17.jpg",
    alt: "Pool project by Aqua Aesthetics Pools serving Denton TX",
    intro:
      "From established neighborhoods near the square to new builds on the edges of town, we design, build and service pools for Denton families who want more from their backyard.",
    nearby: ["lewisville", "highland-village", "flower-mound"],
  },
  {
    slug: "lewisville",
    city: "Lewisville",
    county: "Denton County",
    image: "/images/pool19.jpg",
    alt: "Pool project by Aqua Aesthetics Pools serving Lewisville TX",
    intro:
      "Lewisville homeowners call us for everything from resurfacing a tired pool to building a brand-new one with a spa and outdoor kitchen — one team handles it all.",
    nearby: ["flower-mound", "highland-village", "carrollton"],
  },
  {
    slug: "highland-village",
    city: "Highland Village",
    county: "Denton County",
    image: "/images/outdoor8.jpg",
    alt: "Pool project by Aqua Aesthetics Pools serving Highland Village TX",
    intro:
      "Highland Village backyards are made for entertaining. We pair custom pools with pergolas, fire features and outdoor kitchens designed as a single space.",
    nearby: ["flower-mound", "lewisville", "denton"],
  },
  {
    slug: "carrollton",
    city: "Carrollton",
    county: "Dallas, Denton and Collin Counties",
    image: "/images/remodel2.jpg",
    alt: "Pool project by Aqua Aesthetics Pools serving Carrollton TX",
    intro:
      "Many Carrollton pools are ready for an update. We handle resurfacing, tile, coping, decks and equipment upgrades — plus new construction for homeowners starting fresh.",
    nearby: ["coppell", "lewisville", "plano"],
  },
  {
    slug: "coppell",
    city: "Coppell",
    county: "Dallas County",
    image: "/images/remodel3.jpg",
    alt: "Pool project by Aqua Aesthetics Pools serving Coppell TX",
    intro:
      "Coppell homeowners get owner-led pool construction, remodeling and repair, with permitting and inspections handled for you from start to finish.",
    nearby: ["carrollton", "irving", "grapevine"],
  },
  {
    slug: "irving",
    city: "Irving",
    county: "Dallas County",
    image: "/images/pool16.jpg",
    alt: "Pool project by Aqua Aesthetics Pools serving Irving TX",
    intro:
      "From Las Colinas to established neighborhoods across Irving, we keep pools running with weekly service, fast repairs and remodels that make older pools feel new.",
    nearby: ["coppell", "dallas", "grapevine"],
  },
  {
    slug: "richardson",
    city: "Richardson",
    county: "Dallas and Collin Counties",
    image: "/images/remodel6.jpg",
    alt: "Pool project by Aqua Aesthetics Pools serving Richardson TX",
    intro:
      "Richardson's mature neighborhoods are full of pools that deserve a second life. We specialize in remodels, equipment upgrades and leak repair — and we build new, too.",
    nearby: ["plano", "garland", "dallas"],
  },
  {
    slug: "garland",
    city: "Garland",
    county: "Dallas County",
    image: "/images/pool10.jpg",
    alt: "Pool project by Aqua Aesthetics Pools serving Garland TX",
    intro:
      "Garland homeowners count on us for dependable weekly maintenance, pump and heater repair, and remodels that update the look and efficiency of an older pool.",
    nearby: ["richardson", "rockwall", "wylie"],
  },
  {
    slug: "wylie",
    city: "Wylie",
    county: "Collin County",
    image: "/images/pool8.jpg",
    alt: "Pool project by Aqua Aesthetics Pools serving Wylie TX",
    intro:
      "Just down the road from our McKinney base, Wylie families get custom pool construction and service from a team that knows Collin County's soil and permitting.",
    nearby: ["mckinney", "lucas", "rockwall"],
  },
  {
    slug: "lucas",
    city: "Lucas",
    county: "Collin County",
    image: "/images/pool17.jpg",
    alt: "Pool project by Aqua Aesthetics Pools serving Lucas TX",
    intro:
      "Lucas acreage leaves room for the full backyard vision — freeform pools, spas, outdoor living and landscaping, planned together and built by one team.",
    nearby: ["fairview", "allen", "wylie"],
  },
  {
    slug: "fairview",
    city: "Fairview",
    county: "Collin County",
    image: "/images/outdoor9.jpg",
    alt: "Pool project by Aqua Aesthetics Pools serving Fairview TX",
    intro:
      "Minutes from our McKinney base, Fairview homeowners get custom pools, remodels and outdoor living spaces with the owner involved from the first sketch.",
    nearby: ["lucas", "allen", "mckinney"],
  },
  {
    slug: "rockwall",
    city: "Rockwall",
    county: "Rockwall County",
    image: "/images/pool19.jpg",
    alt: "Pool project by Aqua Aesthetics Pools serving Rockwall TX",
    intro:
      "Rockwall homeowners near Lake Ray Hubbard want backyards built for long summers. We design and build custom pools, spas and outdoor living spaces to match.",
    nearby: ["wylie", "garland"],
  },
  {
    slug: "grapevine",
    city: "Grapevine",
    county: "Tarrant County",
    image: "/images/outdoor6.jpg",
    alt: "Pool project by Aqua Aesthetics Pools serving Grapevine TX",
    intro:
      "Grapevine homeowners come to us for pools that pair with covered patios, fire features and outdoor kitchens — designed together and built in-house.",
    nearby: ["southlake", "colleyville", "coppell"],
  },
  {
    slug: "keller",
    city: "Keller",
    county: "Tarrant County",
    image: "/images/pool9.jpg",
    alt: "Pool project by Aqua Aesthetics Pools serving Keller TX",
    intro:
      "Keller's larger lots are perfect for resort-style pools. We handle the design, permits and construction, then keep your water clear with weekly service.",
    nearby: ["southlake", "colleyville", "fort-worth"],
  },
  {
    slug: "hurst",
    city: "Hurst",
    county: "Tarrant County",
    image: "/images/remodel2.jpg",
    alt: "Pool project by Aqua Aesthetics Pools serving Hurst TX",
    intro:
      "Hurst homeowners rely on us for pool remodels, equipment upgrades and fast repairs, with a clear estimate before any work begins.",
    nearby: ["euless", "bedford", "colleyville"],
  },
  {
    slug: "euless",
    city: "Euless",
    county: "Tarrant County",
    image: "/images/pool7.jpg",
    alt: "Pool project by Aqua Aesthetics Pools serving Euless TX",
    intro:
      "In Euless we build new pools, remodel established ones and keep equipment running — one team and one point of contact for everything your pool needs.",
    nearby: ["hurst", "bedford", "grapevine"],
  },
  {
    slug: "bedford",
    city: "Bedford",
    county: "Tarrant County",
    image: "/images/pool12.jpg",
    alt: "Pool project by Aqua Aesthetics Pools serving Bedford TX",
    intro:
      "Bedford homeowners get dependable weekly maintenance, leak detection and equipment repair, plus remodels that bring older pools up to date.",
    nearby: ["hurst", "euless", "colleyville"],
  },
  {
    slug: "arlington",
    city: "Arlington",
    county: "Tarrant County",
    image: "/images/pool5.jpg",
    alt: "Pool project by Aqua Aesthetics Pools serving Arlington TX",
    intro:
      "Arlington families call us for custom pool construction, full remodels and repairs across the city, with permitting and inspections handled for you.",
    nearby: ["fort-worth", "grapevine", "dallas"],
  },
]

export const areaBySlug = (slug: string) => AREAS.find((a) => a.slug === slug)
