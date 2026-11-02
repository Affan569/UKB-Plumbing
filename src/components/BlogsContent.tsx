"use client";

import { useEffect } from "react";
import { Phone, Clock, Check, Home } from "lucide-react";
import Link from "next/link";
import Script from "next/script";
import FilloutScript from '@/components/FilloutScript';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnnouncementBar from "@/components/AnnouncementBar";

export default function BlogsContent() {
  useEffect(() => {
    document.title = "Blogs - UKB Plumbing";
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar */}
      <AnnouncementBar />

      {/* Header */}
      <Header />

      {/* Hero Section with main page design */}
      <FilloutScript />
      <section className="relative min-h-[740px] flex items-center overflow-hidden bg-[#0a3b7c] hero-section-main md:pt-[100px]">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(8, 34, 82, 0.92) 0%, rgba(13, 55, 120, 0.88) 0%, rgba(10, 59, 124, 0.92) 50%), url('/lovable-uploads/hero.jpg')`,
          }}
        >
          <img
            src="/lovable-uploads/hero.jpg"
            alt="UKB Plumbing emergency services"
            className="hidden"
            loading="eager"
            fetchPriority="high"
          />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-2.5 pb-16 lg:pb-20">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12">
            <div className="w-full lg:max-w-2xl text-white">
              {/* Breadcrumb */}
              <div className="text-xs text-white/80 flex items-center gap-2 flex-wrap mb-6">
                <Link prefetch={false}
                  href="/"
                  className="inline-flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Home size={14} />
                </Link>
                <span className="opacity-50">›</span>
                <span className="text-white break-words">Blogs</span>
              </div>

              {/* Google Rating */}
                <div className="relative inline-flex items-center gap-4 bg-white/15 backdrop-blur-sm border border-white/20 rounded-2xl px-5 py-3 pr-16 mb-8">
                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold text-white">4.9</span>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 fill-current"
                        viewBox="0 0 20 20"
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
    />
  </Link>
</div>
              </div>

              {/* Main Heading */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6 break-words">
                Our Blogs
              </h1>

              {/* Description */}
              <p className="text-base md:text-lg mb-5 text-white/90 leading-relaxed">
                Stay updated with the latest plumbing, heating, boiler installation,
                maintenance tips and industry news from UKB Plumbing experts.
              </p>

              {/* Checkmarks Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-yellow-400/20 flex items-center justify-center">
                    <Check className="w-3.5 h-3.5 text-yellow-400" strokeWidth={3} />
                  </div>
                  <span className="text-white/90">
                    Expert plumbing tips and advice
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-yellow-400/20 flex items-center justify-center">
                    <Check className="w-3.5 h-3.5 text-yellow-400" strokeWidth={3} />
                  </div>
                  <span className="text-white/90">
                    Latest industry news and updates
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-yellow-400/20 flex items-center justify-center">
                    <Check className="w-3.5 h-3.5 text-yellow-400" strokeWidth={3} />
                  </div>
                  <span className="text-white/90">
                    Maintenance guides and tutorials
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-yellow-400/20 flex items-center justify-center">
                    <Check className="w-3.5 h-3.5 text-yellow-400" strokeWidth={3} />
                  </div>
                  <span className="text-white/90">
                    Free advice, no obligation
                  </span>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="tel:+447359605766"
                  className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-yellow-500 transition font-semibold text-center"
                >
                  <Phone size={20} />
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
            <div className="w-full lg:w-auto flex flex-col items-start lg:items-center">
              <div className="hero-form-wrapper w-full max-w-md lg:max-w-none">
                <div className="hero-form-card">
                  {/* Form Heading */}
                  <h2 className="hero-form-title">
                    Send Us a Message
                  </h2>

                  <div
                    className="hero-fillout-embed w-full overflow-hidden"
                    data-fillout-id="s5uwzWcheNus"
                    data-fillout-embed-type="standard"
                    data-fillout-inherit-parameters
                    data-fillout-dynamic-resize
                  />
                </div>
              </div>

              {/* Response Time Badge */}
              <div className="mt-6 inline-flex items-center gap-3 border-2 border-yellow-400/60 rounded-full px-6 py-3 bg-[#0a3b7c]/40 backdrop-blur-sm max-w-full text-center">
                <Clock className="w-5 h-5 text-yellow-400 flex-shrink-0" strokeWidth={2.5} />
                <span className="text-xs sm:text-sm font-bold text-yellow-400 tracking-wide uppercase">
                  30 to 60 minute emergency response
                </span>
              </div>
            </div>
          </div>
        </div>

        
      </section>

      {/* Blog Section */}
     <section className="py-8 md:py-16 bg-[#f7f4ef]">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-ukb-darkblue">
        Latest Plumbing Articles
      </h2>
      <p className="mt-2 text-ukb-darkgray">
        Expert tips, maintenance guides, and industry insights
      </p>
    </div>

    {/* Featured Articles Section */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-bold text-ukb-darkblue mb-2">Hard Water Solutions for Hampshire Homes</h3>
        <p className="text-sm text-ukb-darkgray mb-4">Learn how to protect your boiler and heating system from limescale buildup with magnetic filters and water softeners.</p>
        <a href="/services" className="text-ukb-blue font-semibold text-sm hover:underline">Read More →</a>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-bold text-ukb-darkblue mb-2">Emergency Boiler Breakdown Guide</h3>
        <p className="text-sm text-ukb-darkgray mb-4">Step-by-step troubleshooting for common boiler issues and when to call a professional Gas Safe engineer.</p>
        <a href="/services" className="text-ukb-blue font-semibold text-sm hover:underline">Read More →</a>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-bold text-ukb-darkblue mb-2">Preventing Blocked Drains in Autumn</h3>
        <p className="text-sm text-ukb-darkgray mb-4">Seasonal maintenance tips to keep your drainage system flowing freely during fall leaf drop and increased rainfall.</p>
        <a href="/services" className="text-ukb-blue font-semibold text-sm hover:underline">Read More →</a>
      </div>
    </div>

    {/* Soro Blog Container */}
    <div
      id="soro-blog"
      className="w-full overflow-x-auto"
    ></div>

  </div>
</section>

      {/* Load Soro Blog */}
      <Script
        src="https://app.trysoro.com/api/embed/c1707fe2-cbab-4f8a-8ba8-0a8c235d04a6"
        strategy="afterInteractive"
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}