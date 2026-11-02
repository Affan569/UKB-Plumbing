"use client"
import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnnouncementBar from '@/components/AnnouncementBar';
import { Phone, Clock, Check, Home } from "lucide-react";
import Link from "next/link";
import FilloutScript from '@/components/FilloutScript';

const PortfolioContent = () => {
    // Update document title
    useEffect(() => {
        document.title = "Our Projects Portfolio - UKB Plumbing";
    }, []);

    // State for managing displayed projects
    const [visibleProjects, setVisibleProjects] = useState(9);

    // Sample project data with real descriptions
    const projects = [
        {
            id: 1,
            image: "/lovable-uploads/portfolio1.jpg",
            title: "Worcester Bosch Combi Installation - Southampton",
            description: "Complete system conversion from traditional cylinder to modern combi boiler with magnetic filter protection.",
            location: "Shirley, Southampton"
        },
        {
            id: 2,
            image: "/lovable-uploads/portfolio2.jpg",
            title: "Emergency Leak Repair - Bitterne",
            description: "Rapid response to burst pipe under kitchen floor with non-invasive detection and minimal disruption.",
            location: "Bitterne, Southampton"
        },
        {
            id: 3,
            image: "/lovable-uploads/portfolio3.jpg",
            title: "Full System Powerflush - Bassett",
            description: "Comprehensive heating system cleaning and sludge removal for improved efficiency and warmth.",
            location: "Bassett, Southampton"
        },
        {
            id: 4,
            image: "/lovable-uploads/portfolio4.jpg",
            title: "Boiler Breakdown Repair - Weston",
            description: "Fault diagnosis and replacement of failed heat exchanger in aging Vaillant boiler system.",
            location: "Weston, Southampton"
        },
        {
            id: 5,
            image: "/lovable-uploads/portfolio5.jpg",
            title: "CP12 Landlord Safety Certificate - Millbrook",
            description: "Gas safety inspection and certification for rental property compliance with digital reporting.",
            location: "Millbrook, Southampton"
        },
        {
            id: 6,
            image: "/lovable-uploads/portfolio6.jpg",
            title: "Blocked Drain Clearance - Portswood",
            description: "High-pressure water jetting to remove stubborn fatberg from main drainage line.",
            location: "Portswood, Southampton"
        },
        {
            id: 7,
            image: "/lovable-uploads/portfolio7.jpg",
            title: "Radiator System Upgrade - Freemantle",
            description: "Installation of new thermostatic radiator valves and balancing for improved heating control.",
            location: "Freemantle, Southampton"
        },
        {
            id: 8,
            image: "/lovable-uploads/portfolio8.jpg",
            title: "Water Softener Installation - Highfield",
            description: "Whole-house water softener system to protect appliances from hard water scale buildup.",
            location: "Highfield, Southampton"
        },
        {
            id: 9,
            image: "/lovable-uploads/portfolio9.jpg",
            title: "Gas Safe Inspection - Sway",
            description: "Comprehensive gas safety check and tightness testing for new property purchase.",
            location: "Sway, New Forest"
        },
        {
            id: 10,
            image: "/lovable-uploads/portfolio10.jpg",
            title: "Emergency Plumbing Response - Christchurch",
            description: "Same-day resolution of major leak in commercial premises with minimal business interruption.",
            location: "Christchurch, Bournemouth"
        }
    ];

    // Load more projects handler
    const handleLoadMore = () => {
        setVisibleProjects(prev => Math.min(prev + 3, projects.length));
    };

    // Show less projects handler
    const handleShowLess = () => {
        setVisibleProjects(9);
    };

    return (
        <div className="min-h-screen bg-white">
            <AnnouncementBar/>
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
                    <picture>
                        <source
                            srcSet="/lovable-uploads/hero.jpg"
                            type="image/webp"
                        />
                        <img
                            src="/lovable-uploads/hero.jpg"
                            alt="UKB Plumbing emergency services"
                            className="hidden"
                            loading="eager"
                            fetchPriority="high"
                            decoding="async"
                        />
                    </picture>
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
                                <span className="text-white break-words">Portfolio</span>
                            </div>
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
                                Our Projects Portfolio
                            </h1>

                            {/* Description */}
                            <p className="text-base md:text-lg mb-5 text-white/90 leading-relaxed">
                                View our completed plumbing and heating projects across Southampton. From boiler installations to emergency repairs, see our quality workmanship and expertise in action.
                            </p>

                            {/* Checkmarks Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                                <div className="flex items-start gap-3">
                                    <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-yellow-400/20 flex items-center justify-center">
                                        <Check className="w-3.5 h-3.5 text-yellow-400" strokeWidth={3} />
                                    </div>
                                    <span className="text-white/90">
                                        Residential and commercial projects
                                    </span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-yellow-400/20 flex items-center justify-center">
                                        <Check className="w-3.5 h-3.5 text-yellow-400" strokeWidth={3} />
                                    </div>
                                    <span className="text-white/90">
                                        Gas Safe registered engineers
                                    </span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-yellow-400/20 flex items-center justify-center">
                                        <Check className="w-3.5 h-3.5 text-yellow-400" strokeWidth={3} />
                                    </div>
                                    <span className="text-white/90">
                                        Quality workmanship guaranteed
                                    </span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-yellow-400/20 flex items-center justify-center">
                                        <Check className="w-3.5 h-3.5 text-yellow-400" strokeWidth={3} />
                                    </div>
                                    <span className="text-white/90">
                                        15+ years of experience
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

            {/* Projects Showcase Section */}
            <div className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <p className="text-ukb-blue font-medium mb-2">Our Completed Work</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-ukb-darkblue mb-4">
                            Check Our Showcase of<br />
                            Completed Projects
                        </h2>
                    </div>

                    {/* Project Gallery Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                        {projects.slice(0, visibleProjects).map((project) => (
                            <div
                                key={project.id}
                                className="group relative overflow-hidden rounded-lg shadow-subtle hover:shadow-elevated transition-all duration-300"
                            >
                                <div className="aspect-square overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-ukb-blue/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <div className="text-center text-white p-4">
                                            <div className="flex justify-center gap-1">
                                                {[...Array(5)].map((_, i) => (
                                                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                    </svg>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4 bg-white">
                                    <h3 className="font-bold text-ukb-darkblue text-sm mb-1">{project.title}</h3>
                                    <p className="text-xs text-ukb-darkgray mb-2 line-clamp-2">{project.description}</p>
                                    <p className="text-xs text-ukb-blue font-semibold">{project.location}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Load More/Show Less Buttons */}
                    <div className="text-center flex justify-center gap-4">
                        {visibleProjects < projects.length && (
                            <button
                                onClick={handleLoadMore}
                                className="bg-ukb-blue hover:bg-ukb-darkblue text-white px-8 py-3 rounded-md font-medium transition-colors"
                            >
                                Load More
                            </button>
                        )}
                        {visibleProjects > 9 && (
                            <button
                                onClick={handleShowLess}
                                className="bg-ukb-blue hover:bg-ukb-darkblue text-white px-8 py-3 rounded-md font-medium transition-colors"
                            >
                                Show Less
                            </button>
                        )}
                    </div>
                </div>
            </div>

            {/* Bottom Call to Action */}
            <div className="py-16 bg-[#f7f4ef]">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center">
                        <div className="lg:w-1/3 mb-8 lg:mb-0">
                            <img
                                src="/lovable-uploads/portfolioFooterHero.jpg"
                                alt="Professional plumber"
                                className="w-full max-w-sm mx-auto lg:mx-0"
                                loading="lazy"
                                decoding="async"
                            />
                        </div>

                        <div className="lg:w-2/3 lg:pl-12">
                            <p className="text-ukb-blue font-medium mb-2">We Ready 24 Hours!</p>
                            <h2 className="text-3xl md:text-4xl font-bold text-ukb-darkblue mb-6">
                                Your Best Choice for<br />
                                Plumbing & Heating<br />
                                Solutions!
                            </h2>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link prefetch={false}
                                    href="/inquiry-form"
                                    className="bg-ukb-blue hover:bg-ukb-darkblue text-white px-6 py-3 rounded-md text-center font-semibold"
                                >
                                    Get a Quote
                                </Link>
                                <div className="flex items-center gap-2">
                                    <div className="bg-ukb-blue text-white p-2 rounded-full">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-sm text-ukb-darkgray">Emergency Call</p>
                                        <a href="tel:07359605766" className="font-bold text-ukb-blue">07359605766</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default PortfolioContent;