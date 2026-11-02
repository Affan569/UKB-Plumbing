import React from "react";
import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";
import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesHeroSection from "@/components/ServicesHeroSection";
import { Phone, CheckCircle2, ShieldCheck, Award, MapPin } from "lucide-react";

interface FAQ {
  question?: string;
  q?: string;
  answer?: string;
  a?: string;
}

export const metadata: Metadata = {
  title: "Boiler Repair & Breakdown | UKB Plumbing",
  description: "Guaranteed 24/7 Boiler Repair & Breakdown with zero call-out fees and rapid local response.",
  alternates: {
    canonical: "https://ukbplumbing.co.uk/boiler-repair",
  },
};

const defaultBoilerFaqs: FAQ[] = [
  {
    question: "How fast can an emergency engineer arrive for boiler repair & breakdown?",
    answer:
      "UKB Plumbing guarantees a 30 to 60-minute local arrival time across all local postcodes, 24 hours a day, 7 days a week.",
  },
  {
    question: "Is there a call-out fee for boiler repair & breakdown?",
    answer:
      "No, we have a strict £0.00 zero call-out fee policy. You only pay for fixed-rate labor and approved replacement parts.",
  },
  {
    question: "Are your engineers Gas Safe registered?",
    answer:
      "Yes, all our boiler and gas engineers are official Gas Safe Registered (#549210) with full digital ID verification.",
  },
  {
    question: "What guarantee comes with boiler repair & breakdown?",
    answer:
      "All completed boiler repairs, replacement valves, components, and labor come with our full 12-Month Workmanship Guarantee.",
  },
  {
    question: "Do you cover hard water scale issues in boilers?",
    answer:
      "Yes, we specialize in hard water scale management, magnetic filter fitting, and rapid combi boiler descaling.",
  },
];

export default function BoilerRepairPage() {
  const serviceTitle = "Boiler Repair & Breakdown";

  return (
    <>
      <AnnouncementBar />
      <Header />

      {/* New Hero Section */}
      <ServicesHeroSection
        serviceName={serviceTitle}
        areaName="Southampton"
        cityName="Southampton"
        heroTitle="Guaranteed 24/7 Boiler Repair & Breakdown"
        description="Facing an urgent boiler repair & breakdown emergency? UKB Plumbing provides a guaranteed 30 to 60 minute local response with zero call-out fees. Our certified Gas Safe engineers are available 24 hours a day to isolate leaks and restore your home."
        response="30–50 minutes during working hours, subject to availability and traffic"
        water="Southampton is supplied largely from chalk aquifer sources, so hard-water scale can be an important consideration for plumbing and heating systems."
        postcodes={["SO14", "SO15", "SO16", "SO17", "SO18", "SO19"]}
      />

      <main className="min-h-screen bg-[#f8fafc] pt-2.5 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* MAIN CONTENT GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Content Column */}
            <div className="lg:col-span-8 space-y-10">
              {/* Expert Diagnostics Card */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm">
                <span className="bg-amber-100 text-amber-900 text-[9px] font-black px-2 py-0.5 rounded-md uppercase tracking-wider">
                  EXPERT DIAGNOSTICS
                </span>

                <h2 className="text-xl sm:text-2xl font-black text-[#0B1736] mt-3 mb-4">
                  Expert Boiler Repair & Breakdown Diagnostics
                </h2>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                  Uninspected boiler repair & breakdown issues require rapid technical
                  intervention before structural property damage occurs. UKB Plumbing engineers conduct
                  digital gas soundness testing, ultrasonic leak detection, and flue gas analysis to
                  diagnose system faults accurately on the first visit.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[10px] font-bold text-slate-800">
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 flex items-center gap-2">
                    <span className="text-emerald-500 font-extrabold text-xs">✓</span>
                    Electronic Flue Gas Analysis (Kane/Testo)
                  </div>
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 flex items-center gap-2">
                    <span className="text-emerald-500 font-extrabold text-xs">✓</span>
                    Digital Gas Tightness & Soundness Test
                  </div>
                </div>
              </div>

              {/* EMERGENCY CALLOUT BANNER */}
              <div className="bg-[#1C3B8B] rounded-2xl p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
                <div>
                  <span className="bg-amber-400 text-slate-950 text-[8px] font-black px-2 py-0.5 rounded-md uppercase tracking-wider">
                    URGENT DISPATCH
                  </span>
                  <h3 className="text-lg sm:text-xl font-black mt-2 mb-1">
                    Facing a sudden boiler repair & breakdown problem?
                  </h3>
                </div>

                <a
                  href="tel:07359605766"
                  className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-[10px] sm:text-xs px-5 py-3 rounded-xl transition whitespace-nowrap shadow-sm"
                >
                  Request Emergency Callout
                </a>
              </div>

              {/* LOCAL ADVANTAGE SECTION */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm">
                <div className="text-[9px] font-black uppercase tracking-wider text-[#1D3B8A] mb-2">
                  LOCAL HAMPSHIRE ADVANTAGE
                </div>

                <h2 className="text-xl sm:text-2xl font-black text-[#0B1736] mb-6 flex items-center gap-2">
                  <span className="text-[#FF9900] text-2xl leading-none">•</span>
                  <span>Why Residents Choose UKB Plumbing</span>
                </h2>

                <div className="space-y-3.5">
                  <div className="bg-[#F4F6FB] border border-slate-200/60 rounded-2xl p-4 sm:p-5 flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-[#1C3B8B] text-white font-extrabold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                      1
                    </div>
                    <p className="text-[10px] sm:text-xs text-slate-700 leading-relaxed font-normal">
                      <strong className="font-bold text-slate-900">
                        Local Coverage:
                      </strong>{" "}
                      Stationed locally for guaranteed 30-60 minute dispatch.
                    </p>
                  </div>

                  <div className="bg-[#F4F6FB] border border-slate-200/60 rounded-2xl p-4 sm:p-5 flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-[#1C3B8B] text-white font-extrabold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                      2
                    </div>
                    <p className="text-[10px] sm:text-xs text-slate-700 leading-relaxed font-normal">
                      <strong className="font-bold text-slate-900">
                        Zero Call-Out Fee:
                      </strong>{" "}
                      Transparent fixed pricing with no hidden mileage or late-night surcharges.
                    </p>
                  </div>

                  <div className="bg-[#F4F6FB] border border-slate-200/60 rounded-2xl p-4 sm:p-5 flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-[#1C3B8B] text-white font-extrabold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                      3
                    </div>
                    <p className="text-[10px] sm:text-xs text-slate-700 leading-relaxed font-normal">
                      <strong className="font-bold text-slate-900">
                        Gas Safe Registered
                      </strong>{" "}
                      Official photo ID identified on every call.
                    </p>
                  </div>

                  <div className="bg-[#F4F6FB] border border-slate-200/60 rounded-2xl p-4 sm:p-5 flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-[#1C3B8B] text-white font-extrabold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                      4
                    </div>
                    <p className="text-[10px] sm:text-xs text-slate-700 leading-relaxed font-normal">
                      <strong className="font-bold text-slate-900">
                        12-Month Guarantee:
                      </strong>{" "}
                      Full parts and labor warranty on all completed repairs.
                    </p>
                  </div>
                </div>
              </div>

              {/* COMPREHENSIVE SERVICES GRID */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm">
                <span className="bg-blue-100 text-blue-900 text-[9px] font-black px-2 py-0.5 rounded-md uppercase tracking-wider">
                  FULL SERVICE SCOPE
                </span>

                <h2 className="text-xl sm:text-2xl font-black text-[#0B1736] mt-3 mb-6">
                  Comprehensive Boiler Repair & Breakdown Services
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[10px] font-semibold text-slate-800">
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex items-start gap-2.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-900 block mb-0.5">
                        Emergency Pipe Isolation
                      </span>
                      Pressurised copper pipe repairs and leak containment.
                    </div>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex items-start gap-2.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-900 block mb-0.5">
                        Diverter Valve & PCB Repairs
                      </span>
                      Fault code diagnosis and electronic board fixes.
                    </div>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex items-start gap-2.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-900 block mb-0.5">
                        High-Pressure Water Jetting
                      </span>
                      HPWJ drain unblocking and descaling operations.
                    </div>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex items-start gap-2.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-900 block mb-0.5">
                        CP12 Gas Safety Certificates
                      </span>
                      Landlord safety checks and digital reporting.
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQS SECTION */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm">
                <h2 className="text-xl sm:text-2xl font-black text-[#0B1736] mb-6">
                  Frequently Asked Questions
                </h2>

                <div className="space-y-3">
                  {defaultBoilerFaqs.map((faq, idx) => (
                    <details
                      key={idx}
                      className="group border border-slate-200 rounded-xl overflow-hidden [&_summary::-webkit-details-marker]:hidden"
                      open={idx === 0}
                    >
                      <summary className="w-full text-left p-4 font-extrabold text-[10px] sm:text-xs text-slate-900 bg-slate-50 hover:bg-slate-100 flex items-center justify-between gap-3 cursor-pointer select-none">
                        <span>{faq.question || faq.q}</span>
                        <span className="text-blue-600 font-black text-sm group-open:rotate-45 transition-transform">
                          +
                        </span>
                      </summary>
                      <div className="p-4 bg-white text-[10px] text-slate-600 leading-relaxed font-normal border-t border-slate-100">
                        {faq.answer || faq.a}
                      </div>
                    </details>
                  ))}
                </div>
              </div>

              {/* FOOTER CALLOUT BANNER */}
              <div className="bg-[#1C3B8B] rounded-3xl p-8 sm:p-10 text-center shadow-lg border-b-4 border-amber-400">
                <div className="inline-block bg-[#FFC000] text-[#0B1736] font-black text-[10px] sm:text-xs px-3.5 py-1 rounded-full uppercase tracking-wider mb-5">
                  100% SATISFACTION GUARANTEED
                </div>

                <h2 className="text-xl sm:text-3xl font-black text-white tracking-tight leading-snug mb-3">
                  Get a free quote for 24/7 emergency plumber
                </h2>

                <p className="text-slate-200 text-[10px] sm:text-xs font-semibold mb-8">
                  100% guaranteed work by local Gas Safe engineers.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                  <a
                    href="tel:07359605766"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl bg-[#003B7A] hover:bg-[#002B5B] text-white px-5 py-3 text-xs sm:text-sm font-bold shadow-md transition-colors text-center"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call 07359605766</span>
                  </a>

                  <a
                    href="https://ukbplumbing.fillout.com/t/s5uwzWcheNus"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl bg-[#003B7A] hover:bg-[#002B5B] text-white px-5 py-3 text-xs sm:text-sm font-bold shadow-md transition-colors text-center"
                  >
                    <span>Get Free Quote</span>
                    <span className="text-sm font-bold">→</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              {/* LOCAL COVERAGE BOX */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm max-w-sm">
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center justify-center w-4 h-4 rounded-full border-2 border-amber-500 text-amber-500">
                    <MapPin className="w-2.5 h-2.5 fill-amber-500 stroke-white" />
                  </div>
                  <h3 className="text-[10px] font-black uppercase tracking-wider text-[#0B1736]">
                    LOCAL HAMPSHIRE COVERAGE
                  </h3>
                </div>

                <hr className="border-slate-100 mb-4" />

                <p className="text-[10px] text-slate-600 leading-relaxed font-medium mb-4">
                  Providing direct Hampshire local coverage across all regional districts:
                </p>

                <div className="flex flex-col sm:flex-row flex-wrap gap-2">
                  {["Southampton", "Bournemouth", "Portsmouth", "Winchester", "Eastleigh", "Fareham"].map((item, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1.5 bg-[#F3F6FA] hover:bg-slate-100 border border-slate-200/60 text-[#0B1736] font-extrabold text-[9px] px-2.5 py-1 rounded-xl transition cursor-default"
                    >
                      <span className="text-red-600 text-[10px] leading-none font-bold">📍</span>
                      <span>{item}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}