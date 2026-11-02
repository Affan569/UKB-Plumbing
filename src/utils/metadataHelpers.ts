import type { Metadata } from 'next';
import { getAreaBySlug } from '@/data/allAreasData';
import { getCityBySlug } from '@/data/citiesData';
import { servicesList } from '@/data/servicesData';
import { getAreaMetadata } from '@/data/areaMetadata';

const SITE_NAME = 'UKB Plumbing';
const BASE_URL = 'https://ukbplumbing.co.uk';

/** Prevents the root layout title template from duplicating the brand suffix. */
export function pageTitle(title: string): Metadata['title'] {
  return { absolute: title };
}

function formatPostcodes(postcodes?: string[]): string {
  if (!postcodes?.length) return '';
  return postcodes.join(', ');
}

export function getCityAreasMetadata(citySlug: string): Metadata {
  const city = getCityBySlug(citySlug);

  if (!city) {
    return {
      title: pageTitle(`${SITE_NAME} | Areas We Cover`),
      description: `Professional plumbing and heating services across Hampshire and Dorset by ${SITE_NAME}.`,
    };
  }

  const canonical =
    citySlug === 'southampton'
      ? `${BASE_URL}/areas-we-cover`
      : `${BASE_URL}/areas-we-cover/${citySlug}`;

  // Custom metadata for specific cities
  if (citySlug === 'new-forest') {
    const title = 'Plumbers in the New Forest | 24/7 Gas Safe | UKB Plumbing';
    const description = 'Plumber in New Forest? UKB Plumbing: 24/7 emergency call-outs, Gas Safe engineers, fixed prices agreed first. Rated 4.9★ on Google. Call now.';
    return {
      title: pageTitle(title),
      description,
      alternates: { canonical },
      openGraph: {
        title,
        description,
        url: canonical,
        type: 'website',
      },
    };
  }

  if (citySlug === 'winchester') {
    const title = 'Plumbers in Winchester | 24/7 Gas Safe | UKB Plumbing';
    const description = 'Plumber in Winchester? UKB Plumbing: 24/7 emergency call-outs, Gas Safe engineers, fixed prices agreed first. Rated 4.9★ on Google. Call now.';
    return {
      title: pageTitle(title),
      description,
      alternates: { canonical },
      openGraph: {
        title,
        description,
        url: canonical,
        type: 'website',
      },
    };
  }

  if (citySlug === 'salisbury') {
    const title = 'Plumbers in Salisbury | 24/7 Gas Safe | UKB Plumbing';
    const description = 'Plumber in Salisbury? UKB Plumbing: 24/7 emergency call-outs, Gas Safe engineers, fixed prices agreed first. Rated 4.9★ on Google. Call now.';
    return {
      title: pageTitle(title),
      description,
      alternates: { canonical },
      openGraph: {
        title,
        description,
        url: canonical,
        type: 'website',
      },
    };
  }

  if (citySlug === 'eastleigh') {
    const title = 'Plumbers in Eastleigh | 24/7 Gas Safe | UKB Plumbing';
    const description = 'Plumber in Eastleigh? UKB Plumbing: 24/7 emergency call-outs, Gas Safe engineers, fixed prices agreed first. Rated 4.9★ on Google. Call now.';
    return {
      title: pageTitle(title),
      description,
      alternates: { canonical },
      openGraph: {
        title,
        description,
        url: canonical,
        type: 'website',
      },
    };
  }

  return {
    title: pageTitle(
      `${SITE_NAME} | Plumbers & Heating Engineers in ${city.name}`
    ),
    description: `${city.heroDescription} Gas Safe registered engineers, 24/7 emergency call-outs, and transparent fixed pricing across ${city.name}.`,
    alternates: { canonical },
    openGraph: {
      title: `Plumbers in ${city.name} | ${SITE_NAME}`,
      description: city.heroDescription,
      url: canonical,
      type: 'website',
    },
  };
}

export function getAreaDetailMetadata(
  citySlug: string,
  areaSlug: string,
  areaName: string,
  areaDescription: string,
  postcodes?: string[]
): Metadata {
  // First check centralized metadata registry
  const customMetadata = getAreaMetadata(citySlug, areaSlug);

  if (customMetadata) {
    const city = getCityBySlug(citySlug);
    const canonical = `${BASE_URL}/areas-we-cover/${citySlug}/${areaSlug}`;

    return {
      title: pageTitle(customMetadata.metaTitle),
      description: customMetadata.metaDescription,
      alternates: { canonical },
      openGraph: {
        title: customMetadata.metaTitle,
        description: customMetadata.metaDescription,
        url: canonical,
        type: 'website',
      },
    };
  }

  // Fallback to default behavior if no custom metadata found
  const city = getCityBySlug(citySlug);
  const cityName = city?.name ?? citySlug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
  const postcodeDisplay = formatPostcodes(postcodes);
  const canonical = `${BASE_URL}/areas-we-cover/${citySlug}/${areaSlug}`;
  const locationLabel = postcodeDisplay
    ? `${areaName}, ${cityName} (${postcodeDisplay})`
    : `${areaName}, ${cityName}`;

  return {
    title: pageTitle(`Plumber in ${areaName}, ${cityName} | ${SITE_NAME}`),
    description: `${areaDescription} Local ${SITE_NAME} engineers cover ${locationLabel} with Gas Safe registered plumbing, heating, and 24/7 emergency call-outs.`,
    alternates: { canonical },
    openGraph: {
      title: `Plumber in ${areaName}, ${cityName} | ${SITE_NAME}`,
      description: `${areaDescription} Serving ${locationLabel}.`,
      url: canonical,
      type: 'website',
    },
  };
}

type AreaServiceMetaConfig = {
  slug: string;
  title: (areaName: string, postcodeDisplay: string) => string;
  description: (areaName: string, postcodeDisplay: string, cityName: string) => string;
  ogTitle?: (areaName: string) => string;
};

export const areaServiceMeta: Record<string, AreaServiceMetaConfig> = {
  '247-emergency-plumber': {
    slug: '247-emergency-plumber',
    title: (area, postcode) =>
      `24/7 Emergency Plumber in ${area} (${postcode}) | ${SITE_NAME}`,
    description: (area, postcode, city) =>
      `Need an urgent emergency plumber in ${area}, ${city} (${postcode})? ${SITE_NAME} offers 30–60 min arrival, £0 call-out fee, and Gas Safe registered engineers 24 hours a day.`,
    ogTitle: (area) => `24/7 Emergency Plumber in ${area} | ${SITE_NAME}`,
  },
  'water-leak-repairs-and-detection': {
    slug: 'water-leak-repairs-and-detection',
    title: (area, postcode) =>
      `Water Leak Repairs & Detection in ${area} (${postcode}) | ${SITE_NAME}`,
    description: (area, postcode, city) =>
      `Professional water leak detection and repairs in ${area}, ${city} (${postcode}). Thermal imaging, acoustic detection, and 30–60 min emergency response. Call 07359 605766.`,
    ogTitle: (area) => `Water Leak Repairs & Detection in ${area} | ${SITE_NAME}`,
  },
  'gas-safe-inspection-and-repairs': {
    slug: 'gas-safe-inspection-and-repairs',
    title: (area, postcode) =>
      `Gas Safe Inspection & Repairs in ${area} (${postcode}) | ${SITE_NAME}`,
    description: (area, postcode, city) =>
      `Certified Gas Safe inspections and emergency gas repairs in ${area}, ${city} (${postcode}). Registered engineers, tightness testing, appliance checks, and £0 call-out fee.`,
    ogTitle: (area) => `Gas Safe Inspection & Repairs in ${area} | ${SITE_NAME}`,
  },
  'cp12-landlord-safety-certificates': {
    slug: 'cp12-landlord-safety-certificates',
    title: (area, postcode) =>
      `CP12 Landlord Gas Safety Certificates in ${area} (${postcode}) | ${SITE_NAME}`,
    description: (area, postcode, city) =>
      `Official CP12 Landlord Gas Safety Certificates in ${area}, ${city} (${postcode}). Same-day digital certificates, Gas Safe registered engineers, and £0 call-out fee for landlords.`,
    ogTitle: (area) => `CP12 Landlord Gas Safety Certificates in ${area} | ${SITE_NAME}`,
  },
  'boiler-installation-and-upgrades': {
    slug: 'boiler-installation-and-upgrades',
    title: (area, postcode) =>
      `Boiler Installation & Upgrades in ${area} (${postcode}) | ${SITE_NAME}`,
    description: (area, postcode, city) =>
      `Expert boiler replacement and A-rated upgrades in ${area}, ${city} (${postcode}). Up to 12-year warranties, Gas Safe certified installers, and flexible finance options.`,
    ogTitle: (area) => `Boiler Installation & Upgrades in ${area} | ${SITE_NAME}`,
  },
  'boiler-repair-and-breakdown': {
    slug: 'boiler-repair-and-breakdown',
    title: (area, postcode) =>
      `Boiler Repair & Breakdown in ${area} (${postcode}) | ${SITE_NAME}`,
    description: (area, postcode, city) =>
      `Fast boiler repair and breakdown service in ${area}, ${city} (${postcode}). Gas Safe registered engineers, 30–60 min emergency response, £0 call-out fee, and 12-month workmanship guarantee.`,
    ogTitle: (area) => `Boiler Repair & Breakdown in ${area} | ${SITE_NAME}`,
  },
  'radiator-and-heating-repairs': {
    slug: 'radiator-and-heating-repairs',
    title: (area, postcode) =>
      `Radiator & Heating Repairs in ${area} (${postcode}) | ${SITE_NAME}`,
    description: (area, postcode, city) =>
      `Expert radiator and central heating repairs in ${area}, ${city} (${postcode}). TRV upgrades, power flushing, valve replacements, and 24/7 emergency heating engineers.`,
    ogTitle: (area) => `Radiator & Heating Repairs in ${area} | ${SITE_NAME}`,
  },
  'blocked-drains-and-jetting': {
    slug: 'blocked-drains-and-jetting',
    title: (area, postcode) =>
      `Blocked Drains & Jetting in ${area} (${postcode}) | ${SITE_NAME}`,
    description: (area, postcode, city) =>
      `Professional blocked drain clearing and high-pressure jetting in ${area}, ${city} (${postcode}). 30–60 min response, CCTV drain surveys, and £0 call-out fee.`,
    ogTitle: (area) => `Blocked Drains & Jetting in ${area} | ${SITE_NAME}`,
  },
};

export function getAreaServiceMetadata(
  areaSlug: string,
  serviceSlug: string
): Metadata {
  const config = areaServiceMeta[serviceSlug];
  const { areaName, postcodeDisplay, cityName } = getAreaBySlug(areaSlug || 'shirley');

  if (!config) {
    return {
      title: pageTitle(`${SITE_NAME} | Plumbing Services in ${areaName}`),
      description: `Professional plumbing and heating services in ${areaName}, ${cityName} by ${SITE_NAME}.`,
    };
  }

  const canonical = `${BASE_URL}/services/${areaSlug}/${serviceSlug}`;
  const title = config.title(areaName, postcodeDisplay);
  const description = config.description(areaName, postcodeDisplay, cityName);
  const ogTitle = config.ogTitle?.(areaName) ?? title;

  return {
    title: pageTitle(title),
    description,
    alternates: { canonical },
    openGraph: {
      title: ogTitle,
      description,
      url: canonical,
      type: 'article',
    },
  };
}

const serviceMetaDescriptions: Record<string, string> = {
  'emergency-plumbing-repairs':
    'Fast emergency plumbing repairs across Southampton, Bournemouth, Portsmouth, Andover and the New Forest. Burst pipes, leaks and fixture failures fixed 24/7 by Gas Safe registered engineers.',
  'blocked-drain-cleaning':
    'Professional blocked drain cleaning in Southampton and Hampshire. Sinks, toilets, showers and main drains cleared fast with high-pressure jetting and CCTV surveys.',
  'water-leak-repairs':
    'Expert water leak detection and repair in Southampton and surrounding areas. Hidden and visible leaks located with thermal imaging and non-invasive acoustic equipment.',
  'radiator-repairs':
    'Radiator and central heating repairs across Southampton and Hampshire. TRV upgrades, power flushing, valve replacements and emergency heating engineer call-outs.',
  'boiler-installation-repair':
    'Professional boiler installation, repair and servicing in Southampton. Combi, system and conventional boilers fitted by Gas Safe registered engineers with up to 12-year warranties.',
  'pipe-repairs-replacement':
    'Expert pipe repair and replacement in Southampton and Hampshire. Burst, corroded and damaged pipework fixed with quality materials and a 12-month workmanship guarantee.',
  'bathroom-kitchen-plumbing':
    'Bathroom and kitchen plumbing installation and repairs in Southampton. Sinks, toilets, showers, appliances and pipework fitted by certified local plumbers.',
  'emergency-call-out':
    '24/7 emergency plumbing call-out across Southampton, Bournemouth, Portsmouth and Hampshire. 30–60 minute response, £0 call-out fee, and Gas Safe registered engineers day or night.',
};

export function getServiceMetadata(serviceName: string): Metadata {
  const service = servicesList.find((s) => s.slug === serviceName);

  if (!service) {
    return {
      title: pageTitle(`Service Not Found | ${SITE_NAME}`),
      description: `The requested plumbing service could not be found on ${SITE_NAME}. Browse our full range of plumbing and heating services across Hampshire.`,
    };
  }

  const canonical = `${BASE_URL}/${serviceName}`;
  const description =
    serviceMetaDescriptions[serviceName] ??
    `${service.description} Available across Southampton, Bournemouth, Portsmouth and Hampshire. Gas Safe registered engineers. Call 07359 605766.`;

  return {
    title: pageTitle(`${service.title} | ${SITE_NAME}`),
    description,
    alternates: { canonical },
    openGraph: {
      title: `${service.title} | ${SITE_NAME}`,
      description,
      url: canonical,
      type: 'website',
    },
  };
}

export function getNotFoundMetadata(): Metadata {
  return {
    title: pageTitle(`Page Not Found | ${SITE_NAME}`),
    description: `The page you requested could not be found. Visit ${SITE_NAME} for emergency plumbing, boiler repairs, and heating services across Southampton and Hampshire.`,
    robots: { index: false, follow: true },
  };
}

// Temporary noindex for fully affected towns - to be removed after Batch 1 pages are indexed
const FULLY_AFFECTED_TOWNS = [
  'alderbury', 'andover-down', 'bar-end', 'barton-on-sea', 'bassett', 'bishopdown',
  'bitterne', 'bognor-regis', 'brockenhurst', 'chandlers-ford', 'charlton', 'chichester',
  'christchurch', 'eastleigh', 'emsworth', 'fareham', 'fordingbridge', 'freemantle',
  'goodworth-clatford', 'hamble-le-rice', 'harestock', 'harnham', 'havant', 'hayling-island',
  'hedge-end', 'highcliffe', 'highfield', 'hythe', 'laverstock', 'lordshill',
  'lordswood', 'lymington', 'lyndhurst', 'milford-on-sea', 'millbrook', 'new-milton',
  'ocean-village', 'olivers-battery', 'picket-piece', 'poole', 'redbridge', 'romsey',
  'shirley', 'sholing', 'sleepers-hill', 'southampton-road', 'sparsholt', 'st-denys',
  'st-giles-hill', 'stanmore', 'stockbridge', 'stratford-sub-castle', 'teg-down',
  'totton', 'upper-clatford', 'west-end', 'weston', 'wherwell', 'wimborne',
  'winchester-city-centre'
];

export function shouldNoindexTown(areaSlug: string): boolean {
  return FULLY_AFFECTED_TOWNS.includes(areaSlug);
}

export function applyNoindexIfNecessary(metadata: Metadata, areaSlug: string): Metadata {
  if (shouldNoindexTown(areaSlug)) {
    return {
      ...metadata,
      robots: { index: false, follow: true },
    };
  }
  return metadata;
}

// Batch 1 towns - partially affected (priority for indexing)
const BATCH_1_TOWNS = [
  'abbots-barton', 'badger-farm', 'bemerton-heath', 'britford', 'castle-road',
  'churchfields', 'colden-common', 'east-harnham', 'ford', 'friary',
  'fulflood', 'hursley', 'hyde', 'kings-worthy', 'kingsgate', 'littleton',
  'milford', 'netherhampton', 'old-sarum', 'owslebury', 'portswood',
  'quidhampton', 'salisbury-city-centre', 'shawford', 'st-cross',
  'st-pauls', 'twyford', 'weeke', 'wilton', 'winnall'
];

export function isBatch1Town(areaSlug: string): boolean {
  return BATCH_1_TOWNS.includes(areaSlug);
}

// Unique content data for Batch 1 towns
export interface UniqueContent {
  landmark: string;
  landmarkDescription: string;
  testimonial: string;
  testimonialSource: string;
  responseTime: string;
  photoAlt: string;
}

const BATCH_1_UNIQUE_CONTENT: Record<string, UniqueContent> = {
  'abbots-barton': {
    landmark: 'Abbots Barton Park and Winchester Cathedral',
    landmarkDescription: 'Abbots Barton is a quiet residential area just north of Winchester city centre, with easy access to historic landmarks like Winchester Cathedral and the River Itchen walking paths. Our local team knows the area well, from the charming St Cross Hospital to the nearby Winnall Moors nature reserve.',
    testimonial: '[PLACEHOLDER - NEEDS REAL TESTIMONIAL]',
    testimonialSource: '[PLACEHOLDER - NEEDS CUSTOMER NAME]',
    responseTime: '20-40 minute response time for Abbots Barton residents',
    photoAlt: '[PLACEHOLDER - NEEDS REAL PHOTO] Abbots Barton residential street showing typical Victorian and Edwardian housing with modern plumbing systems'
  },
  'badger-farm': {
    landmark: 'Badger Farm Community Centre and local green spaces',
    landmarkDescription: 'Badger Farm is a modern residential development in Winchester with excellent community facilities. Our engineers are familiar with the estate\'s plumbing infrastructure and provide rapid service across the SO21 postcode area.',
    testimonial: '[PLACEHOLDER - NEEDS REAL TESTIMONIAL]',
    testimonialSource: '[PLACEHOLDER - NEEDS CUSTOMER NAME]',
    responseTime: '25-45 minute response time for Badger Farm',
    photoAlt: '[PLACEHOLDER - NEEDS REAL PHOTO] Badger Farm community area with modern housing development'
  },
  'bemerton-heath': {
    landmark: 'Bemerton Heath Community Centre and local amenities',
    landmarkDescription: 'Bemerton Heath is a well-established residential area in Salisbury with strong community ties. Our local team serves this area regularly and understands the typical plumbing challenges faced by homes in the SP5 postcode.',
    testimonial: '[PLACEHOLDER - NEEDS REAL TESTIMONIAL]',
    testimonialSource: '[PLACEHOLDER - NEEDS CUSTOMER NAME]',
    responseTime: '25-45 minute response time for Bemerton Heath',
    photoAlt: '[PLACEHOLDER - NEEDS REAL PHOTO] Bemerton Heath residential area showing local community facilities'
  },
  'britford': {
    landmark: 'Britford Village and River Avon',
    landmarkDescription: 'Britford is a picturesque village near Salisbury, situated along the River Avon. The area features a mix of historic and modern properties, with many homes dating back to the 19th century requiring careful plumbing maintenance.',
    testimonial: '[PLACEHOLDER - NEEDS REAL TESTIMONIAL]',
    testimonialSource: '[PLACEHOLDER - NEEDS CUSTOMER NAME]',
    responseTime: '30-50 minute response time for Britford village',
    photoAlt: '[PLACEHOLDER - NEEDS REAL PHOTO] Britford village showing traditional Hampshire countryside and residential properties'
  },
  'castle-road': {
    landmark: 'Salisbury Castle grounds and medieval heritage',
    landmarkDescription: 'Castle Road in Salisbury is steeped in history, located near the site of the former Salisbury Castle. The area features a mix of period properties and modern homes, with plumbing systems that vary significantly by age.',
    testimonial: '[PLACEHOLDER - NEEDS REAL TESTIMONIAL]',
    testimonialSource: '[PLACEHOLDER - NEEDS CUSTOMER NAME]',
    responseTime: '20-40 minute response time for Castle Road area',
    photoAlt: '[PLACEHOLDER - NEEDS REAL PHOTO] Castle Road Salisbury showing historic streets and residential properties'
  },
  'churchfields': {
    landmark: 'Churchfields recreation ground and local churches',
    landmarkDescription: 'Churchfields is a residential area in Salisbury with strong community connections. The area features a mix of housing types, from modern developments to traditional family homes, each with unique plumbing requirements.',
    testimonial: '[PLACEHOLDER - NEEDS REAL TESTIMONIAL]',
    testimonialSource: '[PLACEHOLDER - NEEDS CUSTOMER NAME]',
    responseTime: '25-45 minute response time for Churchfields',
    photoAlt: '[PLACEHOLDER - NEEDS REAL PHOTO] Churchfields Salisbury showing residential streets and local amenities'
  },
  'colden-common': {
    landmark: 'Colden Common village and wildlife reserves',
    landmarkDescription: 'Colden Common is a village in Hampshire surrounded by beautiful countryside, including the nearby Itchen Valley country park. Our team provides regular service to rural properties in this SO21 postcode area.',
    testimonial: '[PLACEHOLDER - NEEDS REAL TESTIMONIAL]',
    testimonialSource: '[PLACEHOLDER - NEEDS CUSTOMER NAME]',
    responseTime: '30-50 minute response time for Colden Common',
    photoAlt: '[PLACEHOLDER - NEEDS REAL PHOTO] Colden Common village showing rural Hampshire countryside and residential properties'
  },
  'east-harnham': {
    landmark: 'Harnham Recreation Ground and River Avon access',
    landmarkDescription: 'East Harnham is a popular residential area in Salisbury, located near the River Avon with excellent walking paths. The area features a mix of Victorian and Edwardian homes, many of which require careful plumbing maintenance.',
    testimonial: '[PLACEHOLDER - NEEDS REAL TESTIMONIAL]',
    testimonialSource: '[PLACEHOLDER - NEEDS CUSTOMER NAME]',
    responseTime: '20-40 minute response time for East Harnham',
    photoAlt: '[PLACEHOLDER - NEEDS REAL PHOTO] East Harnham Salisbury showing residential streets near River Avon'
  },
  'ford': {
    landmark: 'Ford village and agricultural heritage',
    landmarkDescription: 'Ford is a small village near Salisbury with a strong agricultural heritage. The area features traditional farmhouses and rural properties, many with unique plumbing systems that require specialist knowledge.',
    testimonial: '[PLACEHOLDER - NEEDS REAL TESTIMONIAL]',
    testimonialSource: '[PLACEHOLDER - NEEDS CUSTOMER NAME]',
    responseTime: '30-50 minute response time for Ford village',
    photoAlt: '[PLACEHOLDER - NEEDS REAL PHOTO] Ford village showing rural Hampshire countryside and traditional farm buildings'
  },
  'friary': {
    landmark: 'The Friary and Salisbury Cathedral proximity',
    landmarkDescription: 'The Friary area in Salisbury is named after the medieval friary that once stood nearby. This historic location features period properties with complex plumbing systems that require careful maintenance.',
    testimonial: '[PLACEHOLDER - NEEDS REAL TESTIMONIAL]',
    testimonialSource: '[PLACEHOLDER - NEEDS CUSTOMER NAME]',
    responseTime: '20-40 minute response time for The Friary area',
    photoAlt: '[PLACEHOLDER - NEEDS REAL PHOTO] The Friary Salisbury showing historic streets and period properties'
  },
  'fulflood': {
    landmark: 'Fulflood area and Winchester city centre access',
    landmarkDescription: 'Fulflood is a residential area in Winchester with excellent access to the city centre. The area features a mix of housing types, from modern apartments to traditional family homes, each with specific plumbing needs.',
    testimonial: '[PLACEHOLDER - NEEDS REAL TESTIMONIAL]',
    testimonialSource: '[PLACEHOLDER - NEEDS CUSTOMER NAME]',
    responseTime: '20-40 minute response time for Fulflood',
    photoAlt: '[PLACEHOLDER - NEEDS REAL PHOTO] Fulflood Winchester showing residential streets and city views'
  },
  'hursley': {
    landmark: 'Hursley Park and IBM campus',
    landmarkDescription: 'Hursley is a village in Hampshire home to the historic Hursley Park and the IBM UK headquarters. The area features a mix of village properties and modern developments, with diverse plumbing requirements.',
    testimonial: '[PLACEHOLDER - NEEDS REAL TESTIMONIAL]',
    testimonialSource: '[PLACEHOLDER - NEEDS CUSTOMER NAME]',
    responseTime: '25-45 minute response time for Hursley',
    photoAlt: '[PLACEHOLDER - NEEDS REAL PHOTO] Hursley village showing rural Hampshire countryside and IBM campus proximity'
  },
  'hyde': {
    landmark: 'Hyde area and Winchester heritage sites',
    landmarkDescription: 'Hyde is a residential area in Winchester with close proximity to the city\'s historic sites. The area features traditional housing with older plumbing systems that require regular maintenance and occasional upgrades.',
    testimonial: '[PLACEHOLDER - NEEDS REAL TESTIMONIAL]',
    testimonialSource: '[PLACEHOLDER - NEEDS CUSTOMER NAME]',
    responseTime: '20-40 minute response time for Hyde',
    photoAlt: '[PLACEHOLDER - NEEDS REAL PHOTO] Hyde Winchester showing residential streets and historic architecture'
  },
  'kings-worthy': {
    landmark: 'Kings Worthy village and River Itchen',
    landmarkDescription: 'Kings Worthy is a village in Hampshire situated along the River Itchen. The area features a mix of village properties and modern housing, with many homes benefiting from scenic river views and traditional plumbing systems.',
    testimonial: '[PLACEHOLDER - NEEDS REAL TESTIMONIAL]',
    testimonialSource: '[PLACEHOLDER - NEEDS CUSTOMER NAME]',
    responseTime: '25-45 minute response time for Kings Worthy',
    photoAlt: '[PLACEHOLDER - NEEDS REAL PHOTO] Kings Worthy village showing River Itchen and residential properties'
  },
  'kingsgate': {
    landmark: 'Kingsgate area and Winchester city amenities',
    landmarkDescription: 'Kingsgate is a residential area in Winchester with excellent access to city amenities. The area features modern housing developments with contemporary plumbing systems that require regular maintenance.',
    testimonial: '[PLACEHOLDER - NEEDS REAL TESTIMONIAL]',
    testimonialSource: '[PLACEHOLDER - NEEDS CUSTOMER NAME]',
    responseTime: '20-40 minute response time for Kingsgate',
    photoAlt: '[PLACEHOLDER - NEEDS REAL PHOTO] Kingsgate Winchester showing modern residential development'
  },
  'littleton': {
    landmark: 'Littleton village and countryside',
    landmarkDescription: 'Littleton is a village in Hampshire surrounded by beautiful countryside. The area features traditional village properties and rural homes, many with unique plumbing requirements that our local team understands well.',
    testimonial: '[PLACEHOLDER - NEEDS REAL TESTIMONIAL]',
    testimonialSource: '[PLACEHOLDER - NEEDS CUSTOMER NAME]',
    responseTime: '30-50 minute response time for Littleton',
    photoAlt: '[PLACEHOLDER - NEEDS REAL PHOTO] Littleton village showing rural Hampshire countryside and traditional properties'
  },
  'milford': {
    landmark: 'Milford-on-Sea and Hampshire coast',
    landmarkDescription: 'Milford is located near the Hampshire coast, with easy access to Milford-on-Sea. The area features coastal properties that require specific plumbing considerations due to the maritime environment.',
    testimonial: '[PLACEHOLDER - NEEDS REAL TESTIMONIAL]',
    testimonialSource: '[PLACEHOLDER - NEEDS CUSTOMER NAME]',
    responseTime: '25-45 minute response time for Milford',
    photoAlt: '[PLACEHOLDER - NEEDS REAL PHOTO] Milford area showing Hampshire countryside and coastal proximity'
  },
  'netherhampton': {
    landmark: 'Netherhampton village and River Avon',
    landmarkDescription: 'Netherhampton is a picturesque village near Salisbury, situated along the River Avon. The area features traditional village properties with older plumbing systems that require careful maintenance.',
    testimonial: '[PLACEHOLDER - NEEDS REAL TESTIMONIAL]',
    testimonialSource: '[PLACEHOLDER - NEEDS CUSTOMER NAME]',
    responseTime: '30-50 minute response time for Netherhampton',
    photoAlt: '[PLACEHOLDER - NEEDS REAL PHOTO] Netherhampton village showing River Avon and traditional village properties'
  },
  'old-sarum': {
    landmark: 'Old Sarum hillfort and historic site',
    landmarkDescription: 'Old Sarum is an ancient hillfort and historic site near Salisbury. The area features properties with views of this significant archaeological site, with many homes having unique plumbing requirements due to the location.',
    testimonial: '[PLACEHOLDER - NEEDS REAL TESTIMONIAL]',
    testimonialSource: '[PLACEHOLDER - NEEDS CUSTOMER NAME]',
    responseTime: '25-45 minute response time for Old Sarum',
    photoAlt: '[PLACEHOLDER - NEEDS REAL PHOTO] Old Sarum showing historic hillfort and surrounding residential properties'
  },
  'owslebury': {
    landmark: 'Owslebury village and countryside',
    landmarkDescription: 'Owslebury is a village in Hampshire surrounded by beautiful countryside. The area features traditional village properties and rural homes, with plumbing systems that reflect the area\'s agricultural heritage.',
    testimonial: '[PLACEHOLDER - NEEDS REAL TESTIMONIAL]',
    testimonialSource: '[PLACEHOLDER - NEEDS CUSTOMER NAME]',
    responseTime: '30-50 minute response time for Owslebury',
    photoAlt: '[PLACEHOLDER - NEEDS REAL PHOTO] Owslebury village showing rural Hampshire countryside and traditional properties'
  },
  'portswood': {
    landmark: 'Portswood Road and Southampton amenities',
    landmarkDescription: 'Portswood is a residential area in Southampton with excellent access to the city centre and major roads. The area features a mix of Victorian terraces and modern housing, with diverse plumbing requirements.',
    testimonial: '[PLACEHOLDER - NEEDS REAL TESTIMONIAL]',
    testimonialSource: '[PLACEHOLDER - NEEDS CUSTOMER NAME]',
    responseTime: '20-40 minute response time for Portswood',
    photoAlt: '[PLACEHOLDER - NEEDS REAL PHOTO] Portswood Southampton showing residential streets and local amenities'
  },
  'quidhampton': {
    landmark: 'Quidhampton village and River Avon',
    landmarkDescription: 'Quidhampton is a village near Salisbury, situated along the River Avon. The area features traditional village properties with characterful homes that require careful plumbing maintenance.',
    testimonial: '[PLACEHOLDER - NEEDS REAL TESTIMONIAL]',
    testimonialSource: '[PLACEHOLDER - NEEDS CUSTOMER NAME]',
    responseTime: '30-50 minute response time for Quidhampton',
    photoAlt: '[PLACEHOLDER - NEEDS REAL PHOTO] Quidhampton village showing River Avon and traditional village properties'
  },
  'salisbury-city-centre': {
    landmark: 'Salisbury Cathedral and Market Square',
    landmarkDescription: 'Salisbury city centre is home to the magnificent Salisbury Cathedral and historic Market Square. The area features a mix of period properties and commercial buildings, with complex plumbing systems that require specialist knowledge.',
    testimonial: '[PLACEHOLDER - NEEDS REAL TESTIMONIAL]',
    testimonialSource: '[PLACEHOLDER - NEEDS CUSTOMER NAME]',
    responseTime: '15-30 minute response time for Salisbury city centre',
    photoAlt: '[PLACEHOLDER - NEEDS REAL PHOTO] Salisbury city centre showing Cathedral and historic streets'
  },
  'shawford': {
    landmark: 'Shawford village and River Itchen',
    landmarkDescription: 'Shawford is a village in Hampshire situated along the River Itchen. The area features riverside properties with scenic views, many of which have unique plumbing requirements due to their riverside location.',
    testimonial: '[PLACEHOLDER - NEEDS REAL TESTIMONIAL]',
    testimonialSource: '[PLACEHOLDER - NEEDS CUSTOMER NAME]',
    responseTime: '25-45 minute response time for Shawford',
    photoAlt: '[PLACEHOLDER - NEEDS REAL PHOTO] Shawford village showing River Itchen and riverside properties'
  },
  'st-cross': {
    landmark: 'St Cross Hospital and Winchester heritage',
    landmarkDescription: 'St Cross is a historic area in Winchester, home to the famous St Cross Hospital. The area features period properties with historic significance, requiring careful plumbing maintenance to preserve their character.',
    testimonial: '[PLACEHOLDER - NEEDS REAL TESTIMONIAL]',
    testimonialSource: '[PLACEHOLDER - NEEDS CUSTOMER NAME]',
    responseTime: '20-40 minute response time for St Cross',
    photoAlt: '[PLACEHOLDER - NEEDS REAL PHOTO] St Cross Winchester showing historic hospital and period properties'
  },
  'st-pauls': {
    landmark: 'St Pauls area and Salisbury city centre',
    landmarkDescription: 'St Pauls is a residential area in Salisbury with close proximity to the city centre. The area features a mix of housing types, from Victorian terraces to modern apartments, each with specific plumbing needs.',
    testimonial: '[PLACEHOLDER - NEEDS REAL TESTIMONIAL]',
    testimonialSource: '[PLACEHOLDER - NEEDS CUSTOMER NAME]',
    responseTime: '20-40 minute response time for St Pauls',
    photoAlt: '[PLACEHOLDER - NEEDS REAL PHOTO] St Pauls Salisbury showing residential streets and city proximity'
  },
  'twyford': {
    landmark: 'Twyford village and River Itchen',
    landmarkDescription: 'Twyford is a village in Hampshire situated along the River Itchen. The area features traditional village properties with characterful homes, many of which have older plumbing systems requiring careful maintenance.',
    testimonial: '[PLACEHOLDER - NEEDS REAL TESTIMONIAL]',
    testimonialSource: '[PLACEHOLDER - NEEDS CUSTOMER NAME]',
    responseTime: '25-45 minute response time for Twyford',
    photoAlt: '[PLACEHOLDER - NEEDS REAL PHOTO] Twyford village showing River Itchen and traditional village properties'
  },
  'weeke': {
    landmark: 'Weeke area and Winchester city access',
    landmarkDescription: 'Weeke is a residential area in Winchester with excellent access to the city centre. The area features a mix of housing types, from 1930s semis to modern developments, each with specific plumbing requirements.',
    testimonial: '[PLACEHOLDER - NEEDS REAL TESTIMONIAL]',
    testimonialSource: '[PLACEHOLDER - NEEDS CUSTOMER NAME]',
    responseTime: '20-40 minute response time for Weeke',
    photoAlt: '[PLACEHOLDER - NEEDS REAL PHOTO] Weeke Winchester showing residential streets and housing diversity'
  },
  'wilton': {
    landmark: 'Wilton House and historic market town',
    landmarkDescription: 'Wilton is a historic market town near Salisbury, home to the magnificent Wilton House. The area features a mix of period properties and modern homes, with plumbing systems that reflect the town\'s rich history.',
    testimonial: '[PLACEHOLDER - NEEDS REAL TESTIMONIAL]',
    testimonialSource: '[PLACEHOLDER - NEEDS CUSTOMER NAME]',
    responseTime: '25-45 minute response time for Wilton',
    photoAlt: '[PLACEHOLDER - NEEDS REAL PHOTO] Wilton town showing historic market square and Wilton House proximity'
  },
  'winnall': {
    landmark: 'Winnall industrial area and residential zones',
    landmarkDescription: 'Winnall is an area in Winchester featuring both industrial and residential zones. The area has diverse plumbing requirements, from commercial properties to family homes, all of which our local team is experienced in servicing.',
    testimonial: '[PLACEHOLDER - NEEDS REAL TESTIMONIAL]',
    testimonialSource: '[PLACEHOLDER - NEEDS CUSTOMER NAME]',
    responseTime: '20-40 minute response time for Winnall',
    photoAlt: '[PLACEHOLDER - NEEDS REAL PHOTO] Winnall Winchester showing industrial and residential mix'
  }
};

export function getUniqueContentForTown(areaSlug: string): UniqueContent | null {
  return BATCH_1_UNIQUE_CONTENT[areaSlug] || null;
}
