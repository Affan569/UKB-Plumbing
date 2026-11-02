"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { BadgeCheck, ThumbsUp, Star } from 'lucide-react';
import { servicesList } from '@/data/servicesData';

const clientWorkImages = [
  {
    id: 1,
    before: "/lovable-uploads/a36a03bb-9fb3-44ab-aa46-8ad8ae329ca9.png",
    after: "/lovable-uploads/56b91e36-9f39-469f-8161-41b0663a3502.png",
    title: "Kitchen Sink Plumbing",
    description: "Replaced damaged pipes and installed new drainage system"
  },
  {
    id: 2,
    before: "/lovable-uploads/e504c29f-444d-4378-91f6-e6c25dcc50c1.png",
    after: "/lovable-uploads/59483be5-cae8-4a38-9480-3c06eac1ca64.png",
    title: "Under-Sink Renovation",
    description: "Fixed leaking pipes and installed modern connections"
  }
];

const ServicesSection = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'before' | 'after'>('after');

  return (
    <section id="services" className="section-padding bg-white overflow-hidden py-16">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 bg-ukb-lightblue text-ukb-blue text-sm font-medium rounded-full mb-4">
            Our Expertise
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-ukb-darkblue">
            Comprehensive Plumbing Services
          </h2>
          <p className="text-lg text-ukb-darkgray">
            From emergency repairs to planned installations, our skilled plumbers deliver prompt, reliable solutions for all your plumbing needs.
          </p>
        </div>

        {/* 1. Services Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {servicesList.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Link prefetch={false} 
                href={`/services/${service.slug}`}
                key={service.id || index}
                className="group bg-white rounded-lg overflow-hidden shadow-subtle card-hover border border-gray-100 flex flex-col justify-between"
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div>
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-ukb-blue/40 group-hover:bg-ukb-blue/30 transition-colors duration-300"></div>
                    <div className="absolute top-4 left-4 bg-white/90 rounded-full p-2 backdrop-blur-sm">
                      <IconComponent className="w-8 h-8 text-ukb-blue" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-ukb-darkblue group-hover:text-ukb-blue transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-ukb-darkgray text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* View All Services Button */}
        <div className="mt-8 mb-20 text-center">
          <Link prefetch={false} 
            href="/servicesList" 
            className="inline-flex items-center justify-center bg-ukb-blue text-white py-3 px-8 rounded-md font-medium hover:bg-ukb-darkblue transition-colors duration-300 shadow-md"
          >
            View All Services
          </Link>
        </div>

        {/* 2. Before & After Showcase */}
        <div className="max-w-5xl mx-auto mb-20 overflow-hidden animate-fade-in">
          <div className="text-center mb-10">
            <span className="inline-block px-3 py-1 bg-ukb-lightblue text-ukb-blue text-sm font-medium rounded-full mb-4">
              Our Work
            </span>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-ukb-darkblue">
              See The Difference We Make
            </h3>
            <p className="text-lg text-ukb-darkgray max-w-3xl mx-auto">
              Our expert plumbers transform problematic plumbing situations into clean, functional systems. Check out our recent before and after work.
            </p>
          </div>
          
          <div className="rounded-xl overflow-hidden shadow-elevated border border-gray-100 hover:shadow-lg transition-all duration-300">
            <img
              src="/lovable-uploads/23149db3-347d-471b-8c6e-d1c1e97df011.png"
              alt="Before and after plumbing work"
              className="w-full h-auto"
              loading="lazy"
              decoding="async"
            />
            <div className="bg-white p-5 flex justify-between items-center">
              <div>
                <h4 className="text-xl font-semibold text-ukb-darkblue">Kitchen Sink Renovation</h4>
                <p className="text-ukb-darkgray">Complete overhaul of damaged plumbing system</p>
              </div>
              <div className="flex items-center text-ukb-blue gap-1">
                <BadgeCheck className="w-5 h-5" />
                <span className="font-medium">Professional Quality</span>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block px-3 py-1 bg-ukb-lightblue text-ukb-blue text-sm font-medium rounded-full mb-4">
              Client Projects
            </span>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-ukb-darkblue">
              Real Client Transformations
            </h3>
            <p className="text-lg text-ukb-darkgray max-w-3xl mx-auto">
              See the quality of our work through these before and after images from actual client projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {clientWorkImages.map((project) => (
              <div key={project.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg border border-gray-100">
                <div className="relative">
                  <div className="absolute top-3 left-3 z-10 flex gap-1 rounded-md overflow-hidden shadow-md">
                    <button
                      onClick={() => setActiveTab('before')}
                      className={`px-4 py-2 text-sm font-medium transition-colors ${activeTab === 'before' ? 'bg-red-500 text-white' : 'bg-white/90 text-gray-700 hover:bg-white'}`}
                    >
                      Before
                    </button>
                    <button
                      onClick={() => setActiveTab('after')}
                      className={`px-4 py-2 text-sm font-medium transition-colors ${activeTab === 'after' ? 'bg-green-500 text-white' : 'bg-white/90 text-gray-700 hover:bg-white'}`}
                    >
                      After
                    </button>
                  </div>
                  <div className="relative h-[300px] overflow-hidden">
                    <img
                      src={project.before}
                      alt={`Before: ${project.title}`}
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${activeTab === 'before' ? 'opacity-100' : 'opacity-0'}`}
                      loading="lazy"
                      decoding="async"
                    />
                    <img
                      src={project.after}
                      alt={`After: ${project.title}`}
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${activeTab === 'after' ? 'opacity-100' : 'opacity-0'}`}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-xl font-semibold text-ukb-darkblue">{project.title}</h4>
                      <p className="text-ukb-darkgray">{project.description}</p>
                    </div>
                    <div className="flex flex-col items-end">
                      <div className="flex text-amber-400 mb-1">
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                      </div>
                      <div className="flex items-center text-green-600 text-sm font-medium">
                        <ThumbsUp className="w-4 h-4 mr-1" />
                        <span>Client Approved</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;