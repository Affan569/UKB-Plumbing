import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  MapPin,
  Phone,
  ShieldCheck,
  Star,
  UserCheck,
  Zap,
} from "lucide-react";
import type { AreaWeCover } from "@/data/areaTypes";
import { getCityHref, cityAreasMap } from "@/data/cityAreasRegistry";
import { getAllAreaSlugs, getAreaBySlug, getAreasByCity, allAreas, slugify } from "@/data/allAreasData";
import AreasHeroSection from "@/components/AreasHeroSection";

const CONTACT_NUMBER = "07359605766";
const GET_QUOTE_URL = "https://ukbplumbing.fillout.com/t/s5uwzWcheNus";

export async function generateStaticParams() {
  return getAllAreaSlugs();
}

type PageProps = {
  params: Promise<{ area: string }>;
};

function GetQuoteButton({ label }: { label: string }) {
  return (
    <a
      href={GET_QUOTE_URL}
      className="inline-flex items-center justify-center gap-2 rounded-lg bg-ukb-darkblue text-white px-1.5 py-2 text-xs sm:px-5 sm:py-3 sm:text-sm sm:rounded-xl hover:bg-ukb-darkblue/90 transition-colors w-auto text-center"
    >
      <span className="font-semibold">{label}</span>
      <ArrowRight size={14} className="sm:w-[16px] sm:h-[16px]" />
    </a>
  );
}

type AreaDetailPageProps = {
  area: AreaWeCover;
  city?: {
    slug: string;
    name: string;
  };
};

export default function AreaDetailPage({ area, city }: AreaDetailPageProps) {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    area.mapQuery
  )}&output=embed`;

  const localServices = area.ourServices || area.services || [];

  const areaSlug = (area as { slug?: string }).slug ?? slugify(area.name || '');

  const popularServiceNames = localServices
    .map((service) =>
      typeof service === "string" ? service : service.title
    )
    .filter(Boolean);

  return (
    <div className="min-h-screen bg-[#f7f4ef]">
      {/* New Hero Section */}
      <AreasHeroSection
        areaName={area.name}
        cityName={city?.name}
        heroTitle={area.heroTitle}
        inShort={area.inShort}
        response={area.response}
        water={area.water}
        postcodes={area.postcodes.map((postcode) => typeof postcode === "string" ? postcode : postcode.name)}
      />

      <main className="w-full flex justify-center">
        <div className="w-full max-w-[920px] pt-2.5 pb-20 px-4 sm:px-0">

          {/* What Plumbing Looks Like Section */}
          <div className="pt-2">
            <div className="pb-6 flex justify-center sm:justify-start">
              <GetQuoteButton label="Get quote" />
            </div>
            <h2 className="text-[28px] font-extrabold text-ukb-darkblue">
              {area.whatItLooksLikeTitle}
            </h2>

            <div className="pt-5 space-y-5 text-sm text-ukb-darkgray leading-relaxed">
              {area.whatItLooksLike.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          {localServices.length > 0 && (
            <div className="pt-14">
              <h3 className="text-[22px] font-extrabold text-ukb-darkblue">
                Our {area.name} plumbing services
              </h3>

              <ul className="pt-5 space-y-3">
                {localServices.map((service, index) => {
                  const content =
                    typeof service === "string"
                      ? service
                      : service.description || service.title;

                  return (
                    <li key={index} className="flex items-start gap-3 text-sm text-ukb-darkgray">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0A3266] mt-2 shrink-0" />
                      <span className="leading-relaxed">{content}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}

          <div className="pt-14">
            <h3 className="text-lg font-bold text-ukb-darkblue">
              Areas we cover around {area.name}
            </h3>

            <div className="pt-4 flex flex-wrap gap-2">
              {area.neighbourhoods.map((item, index) => {
                const itemName = typeof item === 'string' ? item : item.name;
                const itemHreflink = typeof item === 'object' ? item.hreflink : undefined;
                const neighbourhoodSlug = slugify(itemName);
                const neighbourhoodExists = getAreaBySlug(neighbourhoodSlug);
                
                if (neighbourhoodExists) {
                  // Find which city this neighbourhood belongs to
                  let foundCitySlug = city?.slug || 'southampton';
                  for (const [citySlug, areas] of Object.entries(cityAreasMap)) {
                    const areaInCity = areas.find(a => slugify(a.name) === neighbourhoodSlug);
                    if (areaInCity) {
                      foundCitySlug = citySlug;
                      break;
                    }
                  }

                  return (
                    <Link
                      key={index}
                      href={`/areas-we-cover/${foundCitySlug}/${neighbourhoodSlug}`}
                      className="rounded-full border border-black/10 bg-white/70 text-ukb-darkblue text-xs px-1.5 py-1.5 hover:bg-ukb-darkblue hover:text-white transition-colors"
                    >
                      {itemName}
                    </Link>
                  );
                }

                return (
                  <a
                    key={index}
                    href={itemHreflink || "https://share.google/5PaWiOAfhQtV45052"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-black/10 bg-white/70 text-ukb-darkblue text-xs px-1.5 py-1.5 hover:bg-ukb-darkblue hover:text-white transition-colors"
                  >
                    {itemName}
                  </a>
                );
              })}
            </div>
          </div>
          <p className="pt-3 text-xs text-ukb-darkgray">
            If you're just outside {area.name}, contact us with your postcode and we'll confirm whether we can help.
          </p>
          <div className="pt-14">
            <h3 className="text-[22px] font-extrabold text-ukb-darkblue">
              Common plumbing problems we see in {area.name}
            </h3>
            <p className="pt-1 text-xs text-ukb-darkgray">
              Frequent issues reported by residents across {area.name} and how we resolve them.
            </p>

            <div className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-ukb-darkgray">
              {area.typicalProblems.map((problem, index) => {
                const title = typeof problem === "object" ? problem.title : `Issue ${index + 1}`;
                const detail = typeof problem === "object" ? problem.detail || problem.description : problem;

                return (
                  <div
                    key={index}
                    className="rounded-xl border border-black/10 bg-white p-5 space-y-2"
                  >
                    <div className="font-bold text-sm text-ukb-darkblue flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-700 flex-shrink-0" />
                      {title}
                    </div>
                    <div className="text-xs text-ukb-darkgray leading-relaxed pl-4">
                      {detail}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Postcodes We Cover */}
          <div className="pt-14">
            <h3 className="text-lg font-bold text-ukb-darkblue">
              Postcodes we cover in {area.name}
            </h3>

            <div className="pt-4 flex flex-wrap gap-2">
              {area.postcodes.map((postcode, index) => {
                const postcodeName = typeof postcode === 'string' ? postcode : postcode.name;
                const postcodeHreflink = typeof postcode === 'object' ? postcode.hreflink : undefined;
                
                return (
                  <a
                    key={index}
                    href={postcodeHreflink || "https://share.google/5PaWiOAfhQtV45052"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-black/10 bg-white/70 text-ukb-darkblue text-xs px-1.5 py-1.5 hover:bg-ukb-darkblue hover:text-white transition-colors"
                  >
                    {postcodeName}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Centered Small Button Wrapper */}
          <div className="pt-10 flex justify-center sm:justify-start">
            <GetQuoteButton label="Get quote" />
          </div>

          {/* Coverage Map */}
          <div className="pt-14">
            <h3 className="text-lg font-bold text-ukb-darkblue">
              {area.name} coverage map
            </h3>

            <div className="pt-4">
              <div className="w-full rounded-2xl overflow-hidden border border-black/10 bg-white">
                <iframe
                  title={`${area.name} map`}
                  src={mapSrc}
                  className="w-full h-[320px]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

          {/* Recent Jobs */}
          <div className="pt-14">
            <h3 className="text-lg font-bold text-ukb-darkblue">
              Recent jobs in {area.name}
            </h3>

            <div className="pt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
              {area.recentJobs.map((job) => (
                <div
                  key={job.authorLine}
                  className="rounded-2xl border border-black/10 bg-white p-6 shadow-[0_1px_0_rgba(0,0,0,0.04)]"
                >
                  <div className="flex items-center gap-1 text-amber-500">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star
                        key={index}
                        size={14}
                        className="fill-amber-500"
                      />
                    ))}
                  </div>
                  <div className="pt-3 text-xs sm:text-sm text-ukb-darkblue leading-relaxed">
                    {job.quote}
                  </div>
                  <div className="pt-3 text-xs text-ukb-darkgray">
                    {job.authorLine}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-2 mt-10">
            <h2 className="text-[22px] font-bold text-ukb-darkblue">
              Need a plumber in {area.name}?
            </h2>
            <p className="text-sm text-gray-600">
              Tell us what's wrong and where you are. We'll help arrange the right plumbing support for your property.
            </p>
          </div>

          {/* FAQs */}
          <div className="pt-16">
            <h3 className="text-[22px] font-extrabold text-ukb-darkblue">
              {area.faqsTitle}
            </h3>
            <div className="pt-1 text-xs text-ukb-darkgray">Frequently asked questions</div>

            <div className="pt-5 space-y-3">
              {area.faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="rounded-xl border border-black/10 bg-white overflow-hidden"
                >
                  <summary className="list-none cursor-pointer px-5 py-4 flex items-center justify-between gap-4">
                    <span className="font-semibold text-sm text-ukb-darkblue">
                      {faq.question}
                    </span>
                    <span className="text-ukb-darkgray text-xs">⌄</span>
                  </summary>
                  <div className="px-5 pb-5 text-xs text-ukb-darkgray leading-relaxed">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>

          {/* Popular Services */}
     {popularServiceNames.length > 0 && (
  <div className="pt-16">
    <h2 className="text-[22px] font-extrabold text-ukb-darkblue">
      Popular services in {area.name}
    </h2>
    <div className="pt-1 text-xs text-ukb-darkgray">
      Jump straight to a service page for {area.name}
    </div>

    {/* Grid layout change kar diya hai */}
    <div className="pt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
      {popularServiceNames.map((serviceName, sIndex) => {
        const fullServiceTitle = `${serviceName} `;
        const serviceSlug = slugify(serviceName || '');
        const serviceUrl = `/services/${areaSlug}/${serviceSlug}`;

        return (
          <Link prefetch={false}
            key={sIndex}
            href={serviceUrl}
            className="group bg-white hover:bg-blue-50/60 border border-slate-200/80 hover:border-blue-300 rounded-xl px-3 py-2.5 flex items-center justify-between text-xs font-semibold text-slate-800 transition-all cursor-pointer shadow-2xs"
          >
            <div className="flex items-center gap-2 min-w-0 pr-2">
              <span className="w-2 h-2 rounded-full bg-amber-400 flex-shrink-0" />
              <span className="truncate text-slate-800 group-hover:text-blue-950 font-bold">
                {fullServiceTitle}
              </span>
            </div>

             <span className="text-[11px] font-bold text-blue-600 group-hover:translate-x-0.5 transition-transform flex items-center gap-0.5 whitespace-nowrap flex-shrink-0">
              View Page
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </Link>
        );
      })}
    </div>
  </div>
)}
{/* Nearest Towns */}
<div className="pt-16">
  <h3 className="text-[22px] font-extrabold text-ukb-darkblue">
    {area.nearestTownsTitle}
  </h3>

  <div className="pt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
    {area.nearestTowns.map((town) => (
      <a
        key={town.name}
        href={town.hreflink || "https://share.google/5PaWiOAfhQtV45052"}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white border border-slate-200/80 hover:border-blue-300 hover:bg-blue-50/60 rounded-xl px-3 py-2 flex items-center justify-between text-xs font-semibold text-slate-800 shadow-2xs transition-all cursor-pointer"
      >
        <div className="flex items-center gap-2 min-w-0 pr-2">
          <MapPin size={14} className="text-emerald-700 flex-shrink-0" />
          <span className="truncate text-slate-800 font-bold">
            {town.name}
          </span>
        </div>
        <div className="text-[11px] font-bold text-ukb-darkgray whitespace-nowrap flex-shrink-0">
          {town.distanceKm} km
        </div>
      </a>
    ))}
  </div>
</div>
          {/* Trust Badges */}
          <div className="pt-16"> 
            <div className="rounded-2xl border border-black/10 bg-white p-6">
              <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-4">
                <div className="flex gap-3">
                  <ShieldCheck size={18} className="text-emerald-700 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-xs sm:text-sm text-ukb-darkblue">
                      Fair fixed quote
                    </div>
                    <div className="text-xs text-ukb-darkgray">
                      diagnostic covers the home visit.
                    </div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <UserCheck size={18} className="text-emerald-700 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-xs sm:text-sm text-ukb-darkblue">
                      Vetted engineers
                    </div>
                    <div className="text-xs text-ukb-darkgray">
                      DBS-checked, insured, real reviews.
                    </div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Zap size={18} className="text-emerald-700 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-xs sm:text-sm text-ukb-darkblue">
                      Fast triage
                    </div>
                    <div className="text-xs text-ukb-darkgray">
                      Call first so the right engineer arrives.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Emergency Call Box */}
          <div className="pt-14">
            <div className="rounded-2xl border border-emerald-900/20 bg-emerald-50 p-7">
              <div className="font-semibold text-ukb-darkblue text-base sm:text-lg">
                Emergency in {area.name} right now?
              </div>
              <div className="pt-1 text-xs sm:text-sm text-ukb-darkgray">
                Call{" "}
                <a
                  href={`tel:${CONTACT_NUMBER}`}
                  className="font-semibold text-ukb-darkblue underline underline-offset-2"
                >
                  {CONTACT_NUMBER}
                </a>{" "}
                and we&apos;ll dispatch the nearest engineer.
              </div>

              <div className="pt-6 flex flex-col sm:flex-row items-center sm:justify-start gap-4">
                <a
                  href={`tel:${CONTACT_NUMBER}`}
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-ukb-darkblue text-white px-4 py-2.5 text-xs sm:px-5 sm:py-3 sm:text-sm sm:rounded-xl hover:bg-ukb-darkblue/90 transition-colors w-full sm:w-auto text-center"
                >
                  <Phone className="w-4 h-4" />
                  <span className="font-semibold">Call {CONTACT_NUMBER}</span>
                </a>

                <GetQuoteButton label="Get quote" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}