import { getCityAreas } from "./cityAreasRegistry";

export type CityArea = {
  name: string;
  slug: string;
  inShort: string;
};

export type CityData = {
  slug: string;
  name: string;
  heroTitle: string;
  heroDescription: string;
  coverageLabel: string;
  areas: CityArea[];
};
const cityMeta: Omit<CityData, "areas">[] = [
  {
    slug: "southampton",
    name: "Southampton",
    coverageLabel: "Coverage",
    heroTitle: "Southampton Plumbing And Heating Experts",
    heroDescription:
      "Need a plumber in Southampton? We provide reliable plumbing support 24/7 across Southampton and the surrounding areas.",
  },
  {
    slug: "new-forest",
    name: "New Forest",
    coverageLabel: "Coverage",
    heroTitle: "New Forest plumbing coverage",
    heroDescription:
      "UKB Plumbing covers the New Forest around the clock, from Lyndhurst and Brockenhurst to Fordingbridge. Our Gas Safe engineers handle emergencies, boiler repairs, leaks and blocked drains, with a fixed price agreed before any work starts.",
  },
  {
    slug: "salisbury",
    name: "Salisbury",
    coverageLabel: "Coverage",
    heroTitle: "Salisbury plumbing coverage",
    heroDescription:
      "UKB Plumbing covers Salisbury and the nearby villages around the clock. Our Gas Safe engineers handle emergencies, boiler repairs, leaks and blocked drains, with a fixed price agreed before any work starts.",
  },
  {
    slug: "winchester",
    name: "Winchester",
    coverageLabel: "Coverage",
    heroTitle: "Winchester plumbing coverage",
    heroDescription:
      "UKB Plumbing covers Winchester and the nearby villages around the clock. Our Gas Safe engineers handle emergencies, boiler repairs, leaks and blocked drains, with a fixed price agreed before any work starts.",
  },
  {
    slug: "eastleigh",
    name: "Eastleigh",
    coverageLabel: "Coverage",
    heroTitle: "Eastleigh plumbing coverage",
    heroDescription:
      "UKB Plumbing covers Eastleigh and nearby areas around the clock, just a short drive from our Southampton base. Our Gas Safe engineers handle emergencies, boiler repairs, leaks and blocked drains, with a fixed price agreed before any work starts.",
  },
];

function areasFromRegistry(citySlug: string): CityArea[] {
  return getCityAreas(citySlug).map((area) => ({
    name: area.name,
    slug: area.slug,
    inShort: area.inShort,
  }));
}

export const citiesData: CityData[] = cityMeta.map((city) => ({
  ...city,
  areas: areasFromRegistry(city.slug),
}));

export const getCityBySlug = (slug: string) =>
  citiesData.find((city) => city.slug === slug);

export const getAllCitySlugs = () => citiesData.map((city) => city.slug);
