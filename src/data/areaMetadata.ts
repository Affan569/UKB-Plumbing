/**
 * CENTRALIZED META TITLE AND DESCRIPTION FILE FOR ALL AREAS WE COVER PAGES
 * 
 * This file contains all meta titles and descriptions for every area page.
 * Only areas that actually exist in the data files are included below.
 * 
 * To update meta tags for any area, simply edit the corresponding entry below.
 * 
 * Structure:
 * - citySlug: The city slug (e.g., 'southampton', 'newforest')
 * - areaSlug: The area slug (e.g., 'shirley', 'bassett')
 * - metaTitle: The SEO title for the page
 * - metaDescription: The SEO description for the page
 * 
 * Instructions:
 * 1. Find the area you want to update using the citySlug and areaSlug
 * 2. Edit the metaTitle and metaDescription fields
 * 3. Save the file - changes will be reflected immediately
 */

export interface AreaMetadata {
  citySlug: string;
  areaSlug: string;
  metaTitle: string;
  metaDescription: string;
}

export const areaMetadataRegistry: Record<string, AreaMetadata> = {
  // SOUTHAMPTON AREAS (22 areas)
  'southampton-shirley': {
    citySlug: 'southampton',
    areaSlug: 'shirley',
    metaTitle: 'Plumber in Shirley | 24/7 Gas Safe Engineers | UKB Plumbing',
    metaDescription: 'Plumber in Shirley? UKB Plumbing: 24/7 emergency call-outs, Gas Safe engineers, fixed prices agreed first. Rated 4.9★ on Google. Call now.',
  },
  'southampton-bitterne': {
    citySlug: 'southampton',
    areaSlug: 'bitterne',
    metaTitle: 'Plumber in Bitterne | 24/7 Gas Safe Engineers | UKB Plumbing',
    metaDescription: 'Leak, burst pipe or boiler breakdown in Bitterne? Gas Safe engineers on call 24/7, fixed prices upfront. 4.9★ on Google. Call UKB Plumbing.',
  },
  'southampton-bassett': {
    citySlug: 'southampton',
    areaSlug: 'bassett',
    metaTitle: 'Plumber in Bassett | 24/7 Gas Safe Engineers | UKB Plumbing',
    metaDescription: 'Reliable plumbers in Bassett, Southampton. 24/7 emergency repairs, boiler work and drains. Gas Safe, fixed pricing. Call UKB Plumbing today.',
  },
  'southampton-weston': {
    citySlug: 'southampton',
    areaSlug: 'weston',
    metaTitle: 'Plumber in Weston | 24/7 Gas Safe Engineers | UKB Plumbing',
    metaDescription: 'Plumber in Weston? UKB Plumbing: 24/7 emergency call-outs, Gas Safe engineers, fixed prices agreed first. Rated 4.9★ on Google. Call now.',
  },
  'southampton-millbrook': {
    citySlug: 'southampton',
    areaSlug: 'millbrook',
    metaTitle: 'Plumber in Millbrook | 24/7 Gas Safe Engineers | UKB Plumbing',
    metaDescription: 'Leak, burst pipe or boiler breakdown in Millbrook? Gas Safe engineers on call 24/7, fixed prices upfront. 4.9★ on Google. Call UKB Plumbing.',
  },
  'southampton-redbridge': {
    citySlug: 'southampton',
    areaSlug: 'redbridge',
    metaTitle: 'Plumber in Redbridge | 24/7 Gas Safe Engineers | UKB Plumbing',
    metaDescription: 'Reliable plumbers in Redbridge, Southampton. 24/7 emergency repairs, boiler work and drains. Gas Safe, fixed pricing. Call UKB Plumbing today.',
  },
  'southampton-lordshill': {
    citySlug: 'southampton',
    areaSlug: 'lordshill',
    metaTitle: 'Plumber in Lordshill | 24/7 Gas Safe Engineers | UKB Plumbing',
    metaDescription: 'Plumber in Lordshill? UKB Plumbing: 24/7 emergency call-outs, Gas Safe engineers, fixed prices agreed first. Rated 4.9★ on Google. Call now.',
  },
  'southampton-lordswood': {
    citySlug: 'southampton',
    areaSlug: 'lordswood',
    metaTitle: 'Plumber in Lordswood | 24/7 Gas Safe Engineers | UKB Plumbing',
    metaDescription: 'Leak, burst pipe or boiler breakdown in Lordswood? Gas Safe engineers on call 24/7, fixed prices upfront. 4.9★ on Google. Call UKB Plumbing.',
  },
  'southampton-highfield': {
    citySlug: 'southampton',
    areaSlug: 'highfield',
    metaTitle: 'Plumber in Highfield | 24/7 Gas Safe Engineers | UKB Plumbing',
    metaDescription: 'Reliable plumbers in Highfield, Southampton. 24/7 emergency repairs, boiler work and drains. Gas Safe, fixed pricing. Call UKB Plumbing today.',
  },
  'southampton-freemantle': {
    citySlug: 'southampton',
    areaSlug: 'freemantle',
    metaTitle: 'Plumber in Freemantle | 24/7 Gas Safe Engineers | UKB Plumbing',
    metaDescription: 'Plumber in Freemantle? UKB Plumbing: 24/7 emergency call-outs, Gas Safe engineers, fixed prices agreed first. Rated 4.9★ on Google. Call now.',
  },
  'southampton-st-denys': {
    citySlug: 'southampton',
    areaSlug: 'st-denys',
    metaTitle: 'Plumber in St Denys | 24/7 Gas Safe Engineers | UKB Plumbing',
    metaDescription: 'Leak, burst pipe or boiler breakdown in St Denys? Gas Safe engineers on call 24/7, fixed prices upfront. 4.9★ on Google. Call UKB Plumbing.',
  },
  'southampton-ocean-village': {
    citySlug: 'southampton',
    areaSlug: 'ocean-village',
    metaTitle: 'Plumber in Ocean Village | 24/7 Emergency | UKB Plumbing',
    metaDescription: 'Reliable plumbers in Ocean Village, Southampton. 24/7 emergency repairs, boiler work and drains. Gas Safe, fixed pricing. Call UKB Plumbing today.',
  },
  'southampton-hedge-end': {
    citySlug: 'southampton',
    areaSlug: 'hedge-end',
    metaTitle: 'Plumber in Hedge End | 24/7 Gas Safe Engineers | UKB Plumbing',
    metaDescription: 'Plumber in Hedge End? UKB Plumbing: 24/7 emergency call-outs, Gas Safe engineers, fixed prices agreed first. Rated 4.9★ on Google. Call now.',
  },
  'southampton-west-end': {
    citySlug: 'southampton',
    areaSlug: 'west-end',
    metaTitle: 'Plumber in West End | 24/7 Gas Safe Engineers | UKB Plumbing',
    metaDescription: 'Leak, burst pipe or boiler breakdown in West End? Gas Safe engineers on call 24/7, fixed prices upfront. 4.9★ on Google. Call UKB Plumbing.',
  },
  'southampton-hythe': {
    citySlug: 'southampton',
    areaSlug: 'hythe',
    metaTitle: 'Plumber in Hythe | 24/7 Gas Safe Engineers | UKB Plumbing',
    metaDescription: 'Reliable plumbers in Hythe, Southampton. 24/7 emergency repairs, boiler work and drains. Gas Safe, fixed pricing. Call UKB Plumbing today.',
  },
  'southampton-hamble-le-rice': {
    citySlug: 'southampton',
    areaSlug: 'hamble-le-rice',
    metaTitle: 'Plumber in Hamble-le-Rice | 24/7 Emergency | UKB Plumbing',
    metaDescription: 'Plumber in Hamble-le-Rice? UKB Plumbing: 24/7 emergency call-outs, Gas Safe engineers, fixed prices agreed first. Rated 4.9★ on Google. Call now.',
  },
  'southampton-chandlers-ford': {
    citySlug: 'southampton',
    areaSlug: 'chandlers-ford',
    metaTitle: "Plumber in Chandler's Ford | 24/7 Emergency | UKB Plumbing",
    metaDescription: "Reliable plumbers in Chandler's Ford, Southampton. 24/7 emergency repairs, boiler work and drains. Gas Safe, fixed pricing. Call UKB Plumbing today.",
  },
  'southampton-romsey': {
    citySlug: 'southampton',
    areaSlug: 'romsey',
    metaTitle: 'Plumber in Romsey | 24/7 Gas Safe Engineers | UKB Plumbing',
    metaDescription: 'Plumber in Romsey? UKB Plumbing: 24/7 emergency call-outs, Gas Safe engineers, fixed prices agreed first. Rated 4.9★ on Google. Call now.',
  },
  'southampton-sholing': {
    citySlug: 'southampton',
    areaSlug: 'sholing',
    metaTitle: 'Plumber in Sholing | 24/7 Gas Safe Engineers | UKB Plumbing',
    metaDescription: 'Leak, burst pipe or boiler breakdown in Sholing? Gas Safe engineers on call 24/7, fixed prices upfront. 4.9★ on Google. Call UKB Plumbing.',
  },
  'southampton-totton': {
    citySlug: 'southampton',
    areaSlug: 'totton',
    metaTitle: 'Plumber in Totton | 24/7 Gas Safe Engineers | UKB Plumbing',
    metaDescription: 'Reliable plumbers in Totton, Southampton. 24/7 emergency repairs, boiler work and drains. Gas Safe, fixed pricing. Call UKB Plumbing today.',
  },
  'southampton-portswood': {
    citySlug: 'southampton',
    areaSlug: 'portswood',
    metaTitle: 'Plumber in Portswood | 24/7 Gas Safe Engineers | UKB Plumbing',
    metaDescription: 'Plumber in Portswood? UKB Plumbing: 24/7 emergency call-outs, Gas Safe engineers, fixed prices agreed first. Rated 4.9★ on Google. Call now.',
  },

  // EASTLEIGH AREAS (3 areas)
  'eastleigh-eastleigh-central': {
    citySlug: 'eastleigh',
    areaSlug: 'eastleigh-central',
    metaTitle: 'Plumber in Eastleigh Central | 24/7 Gas Safe Engineers | UKB Plumbing',
    metaDescription: 'Plumber in Eastleigh Central? UKB Plumbing: 24/7 emergency call-outs, Gas Safe engineers, fixed prices agreed first. Rated 4.9★ on Google. Call now.',
  },
  'eastleigh-bishopstoke': {
    citySlug: 'eastleigh',
    areaSlug: 'bishopstoke',
    metaTitle: 'Plumber in Bishopstoke | 24/7 Gas Safe Engineers | UKB Plumbing',
    metaDescription: 'Leak, burst pipe or boiler breakdown in Bishopstoke? Gas Safe engineers on call 24/7, fixed prices upfront. 4.9★ on Google. Call UKB Plumbing.',
  },
  'eastleigh-chandlers-ford': {
    citySlug: 'eastleigh',
    areaSlug: 'chandlers-ford',
    metaTitle: "Plumber in Chandler's Ford | 24/7 Gas Safe Engineers | UKB Plumbing",
    metaDescription: "Reliable plumbers in Chandler's Ford, Eastleigh. 24/7 emergency repairs, boiler work and drains. Gas Safe, fixed pricing. Call UKB Plumbing today.",
  },

  'newforest-fordingbridge': {
    citySlug: 'newforest',
    areaSlug: 'fordingbridge',
    metaTitle: 'Plumber in Fordingbridge | 24/7 Emergency | UKB Plumbing',
    metaDescription: 'Leak, burst pipe or boiler breakdown in Fordingbridge? Gas Safe engineers on call 24/7, fixed prices upfront. 4.9★ on Google. Call UKB Plumbing.',
  },
  'newforest-lyndhurst': {
    citySlug: 'newforest',
    areaSlug: 'lyndhurst',
    metaTitle: 'Plumber in Lyndhurst | 24/7 Gas Safe Engineers | UKB Plumbing',
    metaDescription: 'Reliable plumbers in Lyndhurst, New Forest. 24/7 emergency repairs, boiler work and drains. Gas Safe, fixed pricing. Call UKB Plumbing today.',
  },
  'newforest-brockenhurst': {
    citySlug: 'newforest',
    areaSlug: 'brockenhurst',
    metaTitle: 'Plumber in Brockenhurst | 24/7 Emergency | UKB Plumbing',
    metaDescription: 'Plumber in Brockenhurst? UKB Plumbing: 24/7 emergency call-outs, Gas Safe engineers, fixed prices agreed first. Rated 4.9★ on Google. Call now.',
  },

  // SALISBURY AREAS (20 areas)
  'salisbury-salisbury-city-centre': {
    citySlug: 'salisbury',
    areaSlug: 'salisbury-city-centre',
    metaTitle: 'Plumber in Salisbury | 24/7 Gas Safe Engineers | UKB Plumbing',
    metaDescription: 'Leak, burst pipe or boiler breakdown in Salisbury? Gas Safe engineers on call 24/7, fixed prices upfront. 4.9★ on Google. Call UKB Plumbing.',
  },
  'salisbury-harnham': {
    citySlug: 'salisbury',
    areaSlug: 'harnham',
    metaTitle: 'Plumber in Harnham | 24/7 Gas Safe Engineers | UKB Plumbing',
    metaDescription: 'Reliable plumbers in Harnham, Salisbury. 24/7 emergency repairs, boiler work and drains. Gas Safe, fixed pricing. Call UKB Plumbing today.',
  },
  'salisbury-bemerton-heath': {
    citySlug: 'salisbury',
    areaSlug: 'bemerton-heath',
    metaTitle: 'Plumber in Bemerton Heath | 24/7 Emergency | UKB Plumbing',
    metaDescription: 'Plumber in Bemerton Heath? UKB Plumbing: 24/7 emergency call-outs, Gas Safe engineers, fixed prices agreed first. Rated 4.9★ on Google. Call now.',
  },
  'salisbury-bishopdown': {
    citySlug: 'salisbury',
    areaSlug: 'bishopdown',
    metaTitle: 'Plumber in Bishopdown | 24/7 Gas Safe Engineers | UKB Plumbing',
    metaDescription: 'Leak, burst pipe or boiler breakdown in Bishopdown? Gas Safe engineers on call 24/7, fixed prices upfront. 4.9★ on Google. Call UKB Plumbing.',
  },
  'salisbury-old-sarum': {
    citySlug: 'salisbury',
    areaSlug: 'old-sarum',
    metaTitle: 'Plumber in Old Sarum | 24/7 Gas Safe Engineers | UKB Plumbing',
    metaDescription: 'Reliable plumbers in Old Sarum, Salisbury. 24/7 emergency repairs, boiler work and drains. Gas Safe, fixed pricing. Call UKB Plumbing today.',
  },
  'salisbury-milford': {
    citySlug: 'salisbury',
    areaSlug: 'milford',
    metaTitle: 'Plumber in Milford | 24/7 Gas Safe Engineers | UKB Plumbing',
    metaDescription: 'Plumber in Milford? UKB Plumbing: 24/7 emergency call-outs, Gas Safe engineers, fixed prices agreed first. Rated 4.9★ on Google. Call now.',
  },
  'salisbury-laverstock': {
    citySlug: 'salisbury',
    areaSlug: 'laverstock',
    metaTitle: 'Plumber in Laverstock | 24/7 Gas Safe Engineers | UKB Plumbing',
    metaDescription: 'Leak, burst pipe or boiler breakdown in Laverstock? Gas Safe engineers on call 24/7, fixed prices upfront. 4.9★ on Google. Call UKB Plumbing.',
  },
  'salisbury-britford': {
    citySlug: 'salisbury',
    areaSlug: 'britford',
    metaTitle: 'Plumber in Britford | 24/7 Gas Safe Engineers | UKB Plumbing',
    metaDescription: 'Reliable plumbers in Britford, Salisbury. 24/7 emergency repairs, boiler work and drains. Gas Safe, fixed pricing. Call UKB Plumbing today.',
  },
  'salisbury-churchfields': {
    citySlug: 'salisbury',
    areaSlug: 'churchfields',
    metaTitle: 'Plumber in Churchfields | 24/7 Emergency | UKB Plumbing',
    metaDescription: 'Plumber in Churchfields? UKB Plumbing: 24/7 emergency call-outs, Gas Safe engineers, fixed prices agreed first. Rated 4.9★ on Google. Call now.',
  },
  'salisbury-st-pauls': {
    citySlug: 'salisbury',
    areaSlug: 'st-pauls',
    metaTitle: 'Plumber in St Pauls | 24/7 Gas Safe Engineers | UKB Plumbing',
    metaDescription: 'Leak, burst pipe or boiler breakdown in St Pauls? Gas Safe engineers on call 24/7, fixed prices upfront. 4.9★ on Google. Call UKB Plumbing.',
  },
  'salisbury-friary': {
    citySlug: 'salisbury',
    areaSlug: 'friary',
    metaTitle: 'Plumber in Friary | 24/7 Gas Safe Engineers | UKB Plumbing',
    metaDescription: 'Reliable plumbers in Friary, Salisbury. 24/7 emergency repairs, boiler work and drains. Gas Safe, fixed pricing. Call UKB Plumbing today.',
  },
  'salisbury-southampton-road': {
    citySlug: 'salisbury',
    areaSlug: 'southampton-road',
    metaTitle: 'Plumber in Southampton Road | 24/7 Emergency | UKB Plumbing',
    metaDescription: 'Plumber in Southampton Road? UKB Plumbing: 24/7 emergency call-outs, Gas Safe engineers, fixed prices agreed first. Rated 4.9★ on Google. Call now.',
  },
  'salisbury-castle-road': {
    citySlug: 'salisbury',
    areaSlug: 'castle-road',
    metaTitle: 'Plumber in Castle Road | 24/7 Emergency | UKB Plumbing',
    metaDescription: 'Leak, burst pipe or boiler breakdown in Castle Road? Gas Safe engineers on call 24/7, fixed prices upfront. 4.9★ on Google. Call UKB Plumbing.',
  },
  'salisbury-alderbury': {
    citySlug: 'salisbury',
    areaSlug: 'alderbury',
    metaTitle: 'Plumber in Alderbury | 24/7 Gas Safe Engineers | UKB Plumbing',
    metaDescription: 'Reliable plumbers in Alderbury, Salisbury. 24/7 emergency repairs, boiler work and drains. Gas Safe, fixed pricing. Call UKB Plumbing today.',
  },
  'salisbury-wilton': {
    citySlug: 'salisbury',
    areaSlug: 'wilton',
    metaTitle: 'Plumber in Wilton | 24/7 Gas Safe Engineers | UKB Plumbing',
    metaDescription: 'Plumber in Wilton? UKB Plumbing: 24/7 emergency call-outs, Gas Safe engineers, fixed prices agreed first. Rated 4.9★ on Google. Call now.',
  },
  'salisbury-netherhampton': {
    citySlug: 'salisbury',
    areaSlug: 'netherhampton',
    metaTitle: 'Plumber in Netherhampton | 24/7 Emergency | UKB Plumbing',
    metaDescription: 'Leak, burst pipe or boiler breakdown in Netherhampton? Gas Safe engineers on call 24/7, fixed prices upfront. 4.9★ on Google. Call UKB Plumbing.',
  },
  'salisbury-stratford-sub-castle': {
    citySlug: 'salisbury',
    areaSlug: 'stratford-sub-castle',
    metaTitle: 'Stratford-sub-Castle Plumber | 24/7 Emergency | UKB Plumbing',
    metaDescription: 'Reliable plumbers in Stratford-sub-Castle, Salisbury. 24/7 emergency repairs, boiler work and drains. Gas Safe, fixed pricing. Call UKB Plumbing today.',
  },
  'salisbury-ford': {
    citySlug: 'salisbury',
    areaSlug: 'ford',
    metaTitle: 'Plumber in Ford | 24/7 Gas Safe Engineers | UKB Plumbing',
    metaDescription: 'Plumber in Ford? UKB Plumbing: 24/7 emergency call-outs, Gas Safe engineers, fixed prices agreed first. Rated 4.9★ on Google. Call now.',
  },
  'salisbury-quidhampton': {
    citySlug: 'salisbury',
    areaSlug: 'quidhampton',
    metaTitle: 'Plumber in Quidhampton | 24/7 Emergency | UKB Plumbing',
    metaDescription: 'Leak, burst pipe or boiler breakdown in Quidhampton? Gas Safe engineers on call 24/7, fixed prices upfront. 4.9★ on Google. Call UKB Plumbing.',
  },
  'salisbury-east-harnham': {
    citySlug: 'salisbury',
    areaSlug: 'east-harnham',
    metaTitle: 'Plumber in East Harnham | 24/7 Emergency | UKB Plumbing',
    metaDescription: 'Reliable plumbers in East Harnham, Salisbury. 24/7 emergency repairs, boiler work and drains. Gas Safe, fixed pricing. Call UKB Plumbing today.',
  },

  'winchester-winchester-city-centre': {
    citySlug: 'winchester',
    areaSlug: 'winchester-city-centre',
    metaTitle: 'Plumber in Winchester | 24/7 Gas Safe Engineers | UKB Plumbing',
    metaDescription: 'Plumber in Winchester? UKB Plumbing: 24/7 emergency call-outs, Gas Safe engineers, fixed prices agreed first. Rated 4.9★ on Google. Call now.',
  },
  'winchester-fulflood': {
    citySlug: 'winchester',
    areaSlug: 'fulflood',
    metaTitle: 'Plumber in Fulflood | 24/7 Gas Safe Engineers | UKB Plumbing',
    metaDescription: 'Leak, burst pipe or boiler breakdown in Fulflood? Gas Safe engineers on call 24/7, fixed prices upfront. 4.9★ on Google. Call UKB Plumbing.',
  },
  'winchester-weeke': {
    citySlug: 'winchester',
    areaSlug: 'weeke',
    metaTitle: 'Plumber in Weeke | 24/7 Gas Safe Engineers | UKB Plumbing',
    metaDescription: 'Reliable plumbers in Weeke, Winchester. 24/7 emergency repairs, boiler work and drains. Gas Safe, fixed pricing. Call UKB Plumbing today.',
  },
  'winchester-harestock': {
    citySlug: 'winchester',
    areaSlug: 'harestock',
    metaTitle: 'Plumber in Harestock | 24/7 Gas Safe Engineers | UKB Plumbing',
    metaDescription: 'Plumber in Harestock? UKB Plumbing: 24/7 emergency call-outs, Gas Safe engineers, fixed prices agreed first. Rated 4.9★ on Google. Call now.',
  },
  'winchester-teg-down': {
    citySlug: 'winchester',
    areaSlug: 'teg-down',
    metaTitle: 'Plumber in Teg Down | 24/7 Gas Safe Engineers | UKB Plumbing',
    metaDescription: 'Leak, burst pipe or boiler breakdown in Teg Down? Gas Safe engineers on call 24/7, fixed prices upfront. 4.9★ on Google. Call UKB Plumbing.',
  },
  'winchester-hyde': {
    citySlug: 'winchester',
    areaSlug: 'hyde',
    metaTitle: 'Plumber in Hyde | 24/7 Gas Safe Engineers | UKB Plumbing',
    metaDescription: 'Reliable plumbers in Hyde, Winchester. 24/7 emergency repairs, boiler work and drains. Gas Safe, fixed pricing. Call UKB Plumbing today.',
  },
  'winchester-winnall': {
    citySlug: 'winchester',
    areaSlug: 'winnall',
    metaTitle: 'Plumber in Winnall | 24/7 Gas Safe Engineers | UKB Plumbing',
    metaDescription: 'Plumber in Winnall? UKB Plumbing: 24/7 emergency call-outs, Gas Safe engineers, fixed prices agreed first. Rated 4.9★ on Google. Call now.',
  },
  'winchester-abbots-barton': {
    citySlug: 'winchester',
    areaSlug: 'abbots-barton',
    metaTitle: 'Plumber in Abbots Barton | 24/7 Emergency | UKB Plumbing',
    metaDescription: 'Leak, burst pipe or boiler breakdown in Abbots Barton? Gas Safe engineers on call 24/7, fixed prices upfront. 4.9★ on Google. Call UKB Plumbing.',
  },
  'winchester-stanmore': {
    citySlug: 'winchester',
    areaSlug: 'stanmore',
    metaTitle: 'Plumber in Stanmore | 24/7 Gas Safe Engineers | UKB Plumbing',
    metaDescription: 'Reliable plumbers in Stanmore, Winchester. 24/7 emergency repairs, boiler work and drains. Gas Safe, fixed pricing. Call UKB Plumbing today.',
  },
  'winchester-badger-farm': {
    citySlug: 'winchester',
    areaSlug: 'badger-farm',
    metaTitle: 'Plumber in Badger Farm | 24/7 Emergency | UKB Plumbing',
    metaDescription: 'Plumber in Badger Farm? UKB Plumbing: 24/7 emergency call-outs, Gas Safe engineers, fixed prices agreed first. Rated 4.9★ on Google. Call now.',
  },
  'winchester-olivers-battery': {
    citySlug: 'winchester',
    areaSlug: 'olivers-battery',
    metaTitle: "Plumber in Oliver's Battery | 24/7 Emergency | UKB Plumbing",
    metaDescription: "Leak, burst pipe or boiler breakdown in Oliver's Battery? Gas Safe engineers on call 24/7, fixed prices upfront. 4.9★ on Google. Call UKB Plumbing.",
  },
  'winchester-st-cross': {
    citySlug: 'winchester',
    areaSlug: 'st-cross',
    metaTitle: 'Plumber in St Cross | 24/7 Gas Safe Engineers | UKB Plumbing',
    metaDescription: 'Reliable plumbers in St Cross, Winchester. 24/7 emergency repairs, boiler work and drains. Gas Safe, fixed pricing. Call UKB Plumbing today.',
  },
  'winchester-st-giles-hill': {
    citySlug: 'winchester',
    areaSlug: 'st-giles-hill',
    metaTitle: 'Plumber in St Giles Hill | 24/7 Emergency | UKB Plumbing',
    metaDescription: 'Plumber in St Giles Hill? UKB Plumbing: 24/7 emergency call-outs, Gas Safe engineers, fixed prices agreed first. Rated 4.9★ on Google. Call now.',
  },
  'winchester-highcliffe': {
    citySlug: 'winchester',
    areaSlug: 'highcliffe',
    metaTitle: 'Plumber in Highcliffe | 24/7 Gas Safe Engineers | UKB Plumbing',
    metaDescription: 'Leak, burst pipe or boiler breakdown in Highcliffe? Gas Safe engineers on call 24/7, fixed prices upfront. 4.9★ on Google. Call UKB Plumbing.',
  },
  'winchester-bar-end': {
    citySlug: 'winchester',
    areaSlug: 'bar-end',
    metaTitle: 'Plumber in Bar End | 24/7 Gas Safe Engineers | UKB Plumbing',
    metaDescription: 'Reliable plumbers in Bar End, Winchester. 24/7 emergency repairs, boiler work and drains. Gas Safe, fixed pricing. Call UKB Plumbing today.',
  },
  'winchester-sleepers-hill': {
    citySlug: 'winchester',
    areaSlug: 'sleepers-hill',
    metaTitle: 'Plumber in Sleepers Hill | 24/7 Emergency | UKB Plumbing',
    metaDescription: 'Plumber in Sleepers Hill? UKB Plumbing: 24/7 emergency call-outs, Gas Safe engineers, fixed prices agreed first. Rated 4.9★ on Google. Call now.',
  },
  'winchester-kingsgate': {
    citySlug: 'winchester',
    areaSlug: 'kingsgate',
    metaTitle: 'Plumber in Kingsgate | 24/7 Gas Safe Engineers | UKB Plumbing',
    metaDescription: 'Leak, burst pipe or boiler breakdown in Kingsgate? Gas Safe engineers on call 24/7, fixed prices upfront. 4.9★ on Google. Call UKB Plumbing.',
  },
  'winchester-littleton': {
    citySlug: 'winchester',
    areaSlug: 'littleton',
    metaTitle: 'Plumber in Littleton | 24/7 Gas Safe Engineers | UKB Plumbing',
    metaDescription: 'Reliable plumbers in Littleton, Winchester. 24/7 emergency repairs, boiler work and drains. Gas Safe, fixed pricing. Call UKB Plumbing today.',
  },
  'winchester-kings-worthy': {
    citySlug: 'winchester',
    areaSlug: 'kings-worthy',
    metaTitle: 'Plumber in Kings Worthy | 24/7 Emergency | UKB Plumbing',
    metaDescription: 'Plumber in Kings Worthy? UKB Plumbing: 24/7 emergency call-outs, Gas Safe engineers, fixed prices agreed first. Rated 4.9★ on Google. Call now.',
  },
  'winchester-shawford': {
    citySlug: 'winchester',
    areaSlug: 'shawford',
    metaTitle: 'Plumber in Shawford | 24/7 Gas Safe Engineers | UKB Plumbing',
    metaDescription: 'Leak, burst pipe or boiler breakdown in Shawford? Gas Safe engineers on call 24/7, fixed prices upfront. 4.9★ on Google. Call UKB Plumbing.',
  },
  'winchester-twyford': {
    citySlug: 'winchester',
    areaSlug: 'twyford',
    metaTitle: 'Plumber in Twyford | 24/7 Gas Safe Engineers | UKB Plumbing',
    metaDescription: 'Reliable plumbers in Twyford, Winchester. 24/7 emergency repairs, boiler work and drains. Gas Safe, fixed pricing. Call UKB Plumbing today.',
  },
  'winchester-colden-common': {
    citySlug: 'winchester',
    areaSlug: 'colden-common',
    metaTitle: 'Plumber in Colden Common | 24/7 Emergency | UKB Plumbing',
    metaDescription: 'Plumber in Colden Common? UKB Plumbing: 24/7 emergency call-outs, Gas Safe engineers, fixed prices agreed first. Rated 4.9★ on Google. Call now.',
  },
  'winchester-owslebury': {
    citySlug: 'winchester',
    areaSlug: 'owslebury',
    metaTitle: 'Plumber in Owslebury | 24/7 Gas Safe Engineers | UKB Plumbing',
    metaDescription: 'Leak, burst pipe or boiler breakdown in Owslebury? Gas Safe engineers on call 24/7, fixed prices upfront. 4.9★ on Google. Call UKB Plumbing.',
  },
  'winchester-hursley': {
    citySlug: 'winchester',
    areaSlug: 'hursley',
    metaTitle: 'Plumber in Hursley | 24/7 Gas Safe Engineers | UKB Plumbing',
    metaDescription: 'Reliable plumbers in Hursley, Winchester. 24/7 emergency repairs, boiler work and drains. Gas Safe, fixed pricing. Call UKB Plumbing today.',
  },
  'winchester-sparsholt': {
    citySlug: 'winchester',
    areaSlug: 'sparsholt',
    metaTitle: 'Plumber in Sparsholt | 24/7 Gas Safe Engineers | UKB Plumbing',
    metaDescription: 'Plumber in Sparsholt? UKB Plumbing: 24/7 emergency call-outs, Gas Safe engineers, fixed prices agreed first. Rated 4.9★ on Google. Call now.',
  },

  // EASTLEIGH AREAS (1 area)
  'eastleigh-eastleigh': {
    citySlug: 'eastleigh',
    areaSlug: 'eastleigh',
    metaTitle: 'Plumber in Eastleigh | 24/7 Gas Safe Engineers | UKB Plumbing',
    metaDescription: 'Eastleigh offers tightly gridded Victorian streets with railway heritage, sprawling 1930s suburbs and busy commercial centres across SO50. 30–50 minutes across SO50 in working hours. Hard water from regional chalk aquifer supply.',
  },
};

/**
 * Helper function to get metadata for a specific area
 * @param citySlug - The city slug (e.g., 'southampton')
 * @param areaSlug - The area slug (e.g., 'shirley')
 * @returns The metadata object or undefined if not found
 */
export function getAreaMetadata(citySlug: string, areaSlug: string): AreaMetadata | undefined {
  const key = `${citySlug}-${areaSlug}`;
  return areaMetadataRegistry[key];
}

/**
 * Helper function to get all metadata entries
 * @returns Array of all area metadata
 */
export function getAllAreaMetadata(): AreaMetadata[] {
  return Object.values(areaMetadataRegistry);
}