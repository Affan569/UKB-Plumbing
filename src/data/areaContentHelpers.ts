import {
  POPULAR_SERVICES,
  type AreaFaq,
  type AreaNearestTown,
  type AreaRecentJob,
  type AreaWeCover,
} from "./areaTypes";

export type CityAreaConfig = {
  slug: string;
  name: string;
  regionLabel: string;
  defaultPostcodes: string[];
  water: string;
  response: string;
};

export type CityAreaInput = {
  slug: string;
  name: string;
  inShort: string;
  postcodes?: string[];
  water?: string;
  response?: string;
  whatItLooksLike?: string[];
  neighbourhoods?: string[];
  typicalProblems?: string[];
  mapQuery?: string;
  recentJobs?: AreaRecentJob[];
  faqs?: AreaFaq[];
  nearestTowns?: AreaNearestTown[];
};

export function createCityArea(
  city: CityAreaConfig,
  input: CityAreaInput
): AreaWeCover {
  return {
    slug: input.slug,
    name: input.name,
    regionLabel: city.regionLabel,
    heroTitle: `Plumber in ${input.name} — Honest 24/7 Emergency & Repairs`,
    inShort: input.inShort,
    response: input.response ?? city.response,
    water: input.water ?? city.water,
    postcodes: input.postcodes ?? city.defaultPostcodes.slice(0, 3),
    diagnostic: "£50 — non-refundable, covers the home visit.",
    whatItLooksLikeTitle: `What plumbing in ${input.name} actually looks like`,
    whatItLooksLike: input.whatItLooksLike ?? [
      `${input.name} sits within the ${city.name} service area, combining established residential streets with newer developments. Property ages range from Victorian and Edwardian builds through to modern estates, each with distinct plumbing characteristics.`,
      `Common work in ${input.name} includes combi-boiler upgrades, limescale-related valve failures, radiator balancing on older gravity systems, and emergency leak repairs. We survey every job properly before giving a fixed quote so there are no surprises once work starts.`,
    ],
    neighbourhoods: input.neighbourhoods ?? [input.name],
    typicalProblems: input.typicalProblems ?? [
      `Limescale buildup in combi boiler heat exchangers across ${input.name}`,
      "Leaking or seized stopcocks in under-stair cupboards",
      "Low water pressure from legacy mains feeds or blocked strainers",
      "Cold spots in radiators on older gravity-fed heating systems",
      "Blocked external drains during heavy rainfall",
      "Faulty ball valves and overflowing WC cisterns",
    ],
    mapQuery: input.mapQuery ?? `${input.name}, ${city.name}, UK`,
    recentJobs: input.recentJobs ?? [
      {
        quote: `"Boiler repair in ${input.name} — diagnosed on arrival, part on the van, hot water back within an hour. Very tidy work."`,
        authorLine: `— Homeowner in ${input.name}, ${city.name}`,
      },
      {
        quote: `"Called with a drain blockage in the evening. Engineer arrived within 45 minutes and cleared everything the same night."`,
        authorLine: `— ${input.name} resident · Emergency drain clearance`,
      },
    ],
    faqsTitle: `FAQs — plumbing in ${input.name}`,
    faqs: input.faqs ?? [
      {
        question: `Is there hard water in ${input.name}?`,
        answer: `Yes — ${city.name} and surrounding areas typically have hard chalk aquifer water. Limescale inhibitors and magnetic filters help protect boilers and shower valves.`,
      },
      {
        question: `What is your ${input.name} emergency response time?`,
        answer: `For genuine emergencies we typically reach ${input.name} within 30–60 minutes depending on traffic and exact location.`,
      },
      {
        question: `Do you offer fixed quotes for jobs in ${input.name}?`,
        answer:
          "Yes — after our £50 diagnostic visit we provide a written fixed-price quote before any work starts.",
      },
    ],
    popularServices: [...POPULAR_SERVICES],
    nearestTownsTitle: `Nearest towns to ${input.name}`,
    nearestTowns: input.nearestTowns ?? [],
  };
}

export function buildNearestTownsFromNames(
  names: string[],
  startDistance = 1.5
): AreaNearestTown[] {
  return names.map((name, index) => ({
    name,
    distanceKm: +(startDistance + index * 1.8).toFixed(1),
  }));
}
