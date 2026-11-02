import type { AreaWeCover } from "./areaTypes";
import { newForestAreas } from "./newForestAreasData";
import { salisburyAreas } from "./salisburyAreasData";
import { southamptonAreas } from "./southamptonAreasData";
import { winchesterAreas } from "./winchesterAreasData";
import { eastleighAreas } from "./eastleighAreasData";

export const cityAreasMap: Record<string, AreaWeCover[]> = {
  southampton: southamptonAreas,
  "new-forest": newForestAreas,
  salisbury: salisburyAreas,
  winchester: winchesterAreas,
  eastleigh: eastleighAreas,
};

export const getCityAreas = (citySlug: string): AreaWeCover[] =>
  cityAreasMap[citySlug] ?? [];

export const getAreaByCityAndSlug = (
  citySlug: string,
  areaSlug: string
): AreaWeCover | undefined =>
  getCityAreas(citySlug).find((area) => area.slug === areaSlug);

export const getAllCityAreaParams = () => {
  const result: { citySlug: string; areaSlug: string }[] = [];
  for (const [citySlug, areas] of Object.entries(cityAreasMap)) {
    for (const area of areas) {
      result.push({ citySlug, areaSlug: area.slug });
    }
  }
  return result;
};

export const getCityHref = (citySlug: string) => {
  if (citySlug === "southampton") {
    return "/areas-we-cover";
  }
  return `/areas-we-cover/${citySlug}`;
};
