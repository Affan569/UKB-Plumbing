import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, Check } from 'lucide-react';

interface CityLink {
  name: string;
  href: string;
  slug: string;
  status: string;
  highlighted?: boolean;
}

const cityLinks: CityLink[] = [
  { name: "Southampton", href: "/areas-we-cover", slug: "southampton", status: "LOCAL HQ", highlighted: true },
  { name: "Bournemouth", href: "/areas-we-cover/bournemouth", slug: "bournemouth", status: "READY TO DEPLOY", highlighted: false },
  { name: "Andover", href: "/areas-we-cover/andover", slug: "andover", status: "ACTIVE AREA", highlighted: false },
  { name: "New Forest", href: "/areas-we-cover/new-forest", slug: "new-forest", status: "READY TO DEPLOY", highlighted: false },
  { name: "Portsmouth", href: "/areas-we-cover/portsmouth", slug: "portsmouth", status: "FIXED RATE SERVICE", highlighted: false },
];

export default function AreasWeCover() {
  return (
    <section className="w-full bg-[#f8fafc] py-8 sm:py-12 px-3 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8">
        
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 sm:gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 bg-red-100/80 text-[#d32f2f] text-[10px] font-semibold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d32f2f] animate-pulse" />
              Rapid Response Available Now
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-[#0A2540] tracking-tight">
              Areas we cover
            </h2>

            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Our local engineers are stationed across Hampshire, ensuring a{' '}
              <strong className="text-[#0A2540] font-semibold">30 to 60 minute arrival time</strong> for plumbing emergencies.
            </p>
          </div>

          <a
            href="tel:07359605766"
            className="inline-flex items-center justify-center gap-2 bg-[#0A3266] hover:bg-[#07244a] text-white font-medium text-xs sm:text-sm px-5 py-2.5 rounded-md transition-colors duration-200 shadow-sm shrink-0 w-full sm:w-auto"
          >
            <Phone className="w-3.5 h-3.5 fill-current" />
            <span>Call 07359 605766</span>
          </a>
        </div>

        <hr className="border-slate-200" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {cityLinks.map((item) => (
            <Link prefetch={false}
              key={item.slug}
              href={item.href}
              className={`group flex items-center gap-3 p-3.5 rounded-xl border transition-all duration-200 min-w-0 ${
                item.highlighted
                  ? 'bg-[#0A3266] border-[#0A3266] text-white shadow-md hover:bg-[#07244a]'
                  : 'bg-white border-slate-200 text-slate-900 hover:border-slate-300 hover:shadow-md'
              }`}
            >
              <div
                className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                  item.highlighted
                    ? 'bg-white/10 text-amber-400'
                    : 'bg-slate-100 text-[#0A3266] group-hover:bg-slate-200'
                }`}
              >
                <MapPin className="w-4 h-4" />
              </div>

              <div className="flex flex-col min-w-0">
                <span className="font-bold text-xs sm:text-sm tracking-tight truncate">
                  {item.name}
                </span>
                <span
                  className={`text-[9px] font-bold tracking-wider uppercase truncate ${
                    item.highlighted ? 'text-slate-300' : 'text-slate-400'
                  }`}
                >
                  {item.status}
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="bg-[#e9eff6] rounded-xl p-3.5 sm:p-4 flex flex-col sm:flex-row items-start sm:items-center justify-around gap-3 sm:gap-4 text-xs font-semibold text-[#0A2540]">
          <div className="flex items-center gap-2">
            <Check className="w-3.5 h-3.5 text-amber-600 stroke-[3] shrink-0" />
            <span>Gas Safe registered engineers</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-3.5 h-3.5 text-amber-600 stroke-[3] shrink-0" />
            <span>Fully insured work</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-3.5 h-3.5 text-amber-600 stroke-[3] shrink-0" />
            <span>Fixed price before we start</span>
          </div>
        </div>

      </div>
    </section>
  );
}