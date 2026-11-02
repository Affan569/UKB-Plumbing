"use client";

import React from "react";
import Script from "next/script";
import { Badge } from "./ui/badge";
import { ExternalLink } from "lucide-react";

const Testimonials = () => {
  return (
    <section className="section-padding bg-white overflow-hidden py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge variant="secondary" className="mb-4">
            Testimonials
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-ukb-darkblue">
            What Our Customers Say
          </h2>
          <p className="text-lg text-ukb-darkgray">
            Don't just take our word for it - hear from the people who have experienced our service firsthand.
          </p>
        </div>

        <div className="max-w-6xl mx-auto featurable-custom-wrapper mb-6">
          <div 
            id="featurable-ec9871d9-c7d9-475b-b10f-9b8f4c72df3e" 
            data-featurable-async 
          />
        </div>

        {/* WRITE A REVIEW BUTTON ALIGNED TO THE RIGHT */}
        <div className="max-w-6xl mx-auto flex justify-end ">
          <a
            href="https://g.page/r/CR8tEmhNfDHjEAI/review"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#1D3B8A] hover:bg-blue-900 text-white font-bold text-sm sm:text-base px-7 py-4 rounded-xl shadow-md transition flex items-center gap-2"
          >
            <span>Review Us</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      <style jsx global>{`
        .featurable-custom-wrapper div[class*="card"],
        .featurable-custom-wrapper iframe,
        .featurable-custom-wrapper > div > div > div {
          height: 280px !important;
          display: flex !important;
          flex-direction: column !important;
          justify-content: space-between !important;
          box-sizing: border-box !important;
        }

        .featurable-custom-wrapper p,
        .featurable-custom-wrapper [class*="text"] {
          display: -webkit-box !important;
          -webkit-line-clamp: 4 !important;
          -webkit-box-orient: vertical !important;
          overflow: hidden !important;
          text-overflow: ellipsis !important;
        }
      `}</style>

      {/* External Widget Script */}
      <Script 
        src="https://featurable.com/assets/bundle.js" 
        strategy="lazyOnload" 
        charSet="UTF-8"
      />
    </section>
  );
};

export default Testimonials;