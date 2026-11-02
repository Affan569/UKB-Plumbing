"use client";

import { Phone, Clock, Check } from "lucide-react";
import Link from "next/link";
import dynamic from 'next/dynamic';
import FilloutScript from '@/components/FilloutScript';

const FilloutEmbed = dynamic(() => import('@/components/FilloutEmbed'), {
  ssr: false,
  loading: () => <div className="hero-fillout-embed min-h-[200px]" />
});

const HeroSection = () => {
  return (
    <>
      <FilloutScript />
     <section className="relative min-h-[700px] flex items-center overflow-hidden bg-[#0a3b7c] hero-section-main md:pt-[100px]">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(8, 34, 82, 0.92) 0%, rgba(13, 55, 120, 0.88) 0%, rgba(10, 59, 124, 0.92) 50%), url('/lovable-uploads/hero.jpg')`,
          }}
          role="img"
          aria-label="UKB Plumbing emergency services background"
        />

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10 pt-2.5 pb-20">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12">
            <div className="max-w-2xl text-white">

              {/* Reviews Badge with Gas Safe Logo */}
              <div className="relative inline-flex items-center gap-4 bg-white/15 backdrop-blur-sm border border-white/20 rounded-2xl px-5 py-3 pr-16 mb-8">
                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold text-white">4.9</span>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 fill-current"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <div className="h-8 w-px bg-white/30" />
                <div>
                  <div className="text-sm font-semibold text-white">
                    122 Google reviews
                  </div>
                </div>

                {/* Gas Safe Badge (Positioned inside top-right) */}
               <div className="absolute right-3 top-1/2 -translate-y-1/2">
  <Link prefetch={false} href="https://www.gassaferegister.co.uk/businesscompetencies?ep=1xPOGK1AdTeDy4hfLti5P2suaiAfkgrUN0FAz91sbiuBv2%252fAVPRsfqLCaLBxH42HVXP6X2H0tU7wnaWL3fuUQwxGr9VjFTUyEYsIOpxxiIE%253d&backurl=%252ffindbusinessresults%253fep%253d1xPOGK1AdTeDy4hfLti5P2suaiAfkgrUN0FAz91sbis41eO4MxUIdHAaMgU2gRiE&searchurl=%252Ffindbusinessresults%253Fep%253D1xPOGK1AdTeDy4hfLti5P2suaiAfkgrUN0FAz91sbis41eO4MxUIdHAaMgU2gRiE" target="_blank" rel="noopener noreferrer">
    <img
      src="/lovable-uploads/gassafe.png"
      alt="Gas Safe Registered"
      className="h-8 md:h-10 w-auto object-contain cursor-pointer hover:opacity-90 transition-opacity"
      loading="lazy"
      decoding="async"
    />
  </Link>
</div>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Same Day Trusted local
                <br />
                Plumbing And Heating Engineers
              </h1>

              {/* Description */}
              <p className="text-lg md:text-xl mb-8 text-white/90 leading-relaxed">
                Leaks, boiler breakdowns, no heating or hot water, burst pipes.
                <br className="hidden md:block" />
                Gas Safe registered engineers based in Southampton since 2003 —
                <br className="hidden md:block" />
                ring us and a person answers, whatever the hour.
              </p>

              {/* Checkmarks Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-yellow-400/20 flex items-center justify-center">
                    <Check className="w-3.5 h-3.5 text-yellow-400" strokeWidth={3} aria-hidden="true" />
                  </div>
                  <span className="text-white/90">
                    Engineer on the phone in under 60 seconds
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-yellow-400/20 flex items-center justify-center">
                    <Check className="w-3.5 h-3.5 text-yellow-400" strokeWidth={3} aria-hidden="true" />
                  </div>
                  <span className="text-white/90">
                    Fixed price agreed before work starts
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-yellow-400/20 flex items-center justify-center">
                    <Check className="w-3.5 h-3.5 text-yellow-400" strokeWidth={3} aria-hidden="true" />
                  </div>
                  <span className="text-white/90">
                    Most emergencies fixed first visit
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-yellow-400/20 flex items-center justify-center">
                    <Check className="w-3.5 h-3.5 text-yellow-400" strokeWidth={3} aria-hidden="true" />
                  </div>
                  <span className="text-white/90">
                    Free advice, no obligation
                  </span>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+447359605766"
                  className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-yellow-500 transition font-semibold"
                >
                  <Phone size={20} aria-hidden="true" />
                  <span>Call Now: 07359605766</span>
                </a>
                <Link prefetch={false} href="/inquiry-form"
                 className="bg-white text-blue-600 px-6 py-3 rounded-lg flex items-center justify-center hover:bg-gray-100 transition font-semibold"
                >
  Enquiry Form
</Link>
              </div>
            </div>

            {/* Form Container Right Side */}
            <div className="w-full lg:w-auto flex flex-col items-start">
              <div className="hero-form-wrapper">
                <div className="hero-form-card">
                  {/* Form Heading */}
                  <h2 className="hero-form-title">
                    Send Us a Message
                  </h2>

                  <div
                    className="hero-fillout-embed"
                    data-fillout-id="s5uwzWcheNus"
                    data-fillout-embed-type="standard"
                    data-fillout-inherit-parameters
                    data-fillout-dynamic-resize
                  />
                </div>
              </div>

              {/* Response Time Badge */}
              <div className="mt-6 inline-flex items-center gap-3 border-2 border-yellow-400/60 rounded-full px-6 py-3 bg-[#0a3b7c]/40 backdrop-blur-sm">
                <Clock className="w-5 h-5 text-yellow-400" strokeWidth={2.5} aria-hidden="true" />
                <span className="text-sm font-bold text-yellow-400 tracking-wide uppercase">
                  30 to 60 minute emergency response
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;