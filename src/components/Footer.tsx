"use client";

import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';
import Link from 'next/link';
import { cityAreasMap } from '@/data/cityAreasRegistry';
import { useState, useEffect, useRef, memo } from 'react';

const Footer = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isInView, setIsInView] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            if (observerRef.current) {
              observerRef.current.disconnect();
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (videoRef.current) {
      observerRef.current.observe(videoRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    if (isInView && videoRef.current && !isVideoLoaded) {
      videoRef.current.load();
      setIsVideoLoaded(true);
    }
  }, [isInView, isVideoLoaded]);

  useEffect(() => {
    if (isVideoLoaded && videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log('Video autoplay was prevented:', error);
        // Video will still be visible, just not playing automatically
      });
    }
  }, [isVideoLoaded]);

  // Attempt to play when video comes back into view
  useEffect(() => {
    if (isInView && videoRef.current && isVideoLoaded) {
      videoRef.current.play().catch((error) => {
        console.log('Video play on view entry was prevented:', error);
      });
    }
  }, [isInView, isVideoLoaded]);
  const currentYear = new Date().getFullYear();

  const allCities = [
    { name: "Southampton", slug: "southampton" },
    { name: "Salisbury", slug: "salisbury" },
    { name: "Winchester", slug: "winchester" },
    { name: "New Forest", slug: "new-forest" },
  ];
  
  return (
    <footer className="bg-ukb-darkblue text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        {/* Top section with columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Column 1 - About */}
          <div>
            <div className="mb-4">
              <picture>
                <source
                  srcSet="/lovable-uploads/footerlogo.png"
                  type="image/webp"
                />
                <img
                  src="/lovable-uploads/footerlogo.png"
                  alt="ukb plumbing | Qualified Local Plumbers Near You"
                  className="h-14 mb-3"
                  loading="lazy"
                  decoding="async"
                />
              </picture>
            </div>
            <p className="mb-4 text-white/80 text-sm leading-snug">
              Professional plumbing services in surrounding areas. Available 24/7 for all your plumbing needs.
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              {/* Facebook */}
              <a href="https://www.facebook.com/ukbplumbing" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              {/* TikTok */}
              <a href="https://www.tiktok.com/@ukb.plumbing.ltd" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors" aria-label="TikTok">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="w-[18px] h-[18px] fill-current"
                >
                  <path d="M448,209.9c-41.9,0-80.5-13.9-111.4-37.3v132.7c0,87.1-70.6,157.7-157.7,157.7S21.1,392.4,21.1,305.3s70.6-157.7,157.7-157.7c8.3,0,16.4,.6,24.3,1.9v92.4c-7.9-2.2-16.3-3.4-24.9-3.4-45.3,0-82,36.7-82,82s36.7,82,82,82,82-36.7,82-82V0h93.8c0,57.6,46.7,104.3,104.3,104.3v105.6Z" />
                </svg>
              </a>
              {/* Instagram */}
              <a href="https://www.instagram.com/ukb_plumbing/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              {/* Google */}
              <a href="https://share.google/AxYHVoXlWDlionhUp" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors" aria-label="Google">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-[18px] h-[18px]"
                  aria-hidden="true"
                >
                  <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/>
                  <circle cx="12" cy="10" r="2.5"/>
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/ukb-plumbing-71224a360" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors" aria-label="LinkedIn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-[18px] h-[18px] fill-current"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2 - Services */}
          <div>
            <h3 className="text-lg font-bold mb-4 leading-tight">Our Services</h3>
            <ul className="space-y-1.5 text-sm leading-snug">
              <li>
                <Link prefetch={false} href="/services/emergency-plumber" className="text-white/80 hover:text-white transition-colors">
                  Emergency Plumbing
                </Link>
              </li>
              <li>
                <Link prefetch={false} href="/services/blocked-drains" className="text-white/80 hover:text-white transition-colors">
                  Blocked Drains
                </Link>
              </li>
              <li>
                <Link prefetch={false} href="/services/water-leakage-and-repair" className="text-white/80 hover:text-white transition-colors">
                  Water Leak Repairs
                </Link>
              </li>
              <li>
                <Link prefetch={false} href="/services/boiler-installation" className="text-white/80 hover:text-white transition-colors">
                  Boiler Installation
                </Link>
              </li>
              <li>
                <Link prefetch={false} href="/services/boiler-installation" className="text-white/80 hover:text-white transition-colors">
                  Boiler Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 leading-tight">Quick Links</h3>
            <ul className="space-y-1.5 text-sm leading-snug">
              <li>
                <Link prefetch={false} href="/" className="text-white/80 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link prefetch={false} href="/#about" className="text-white/80 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link prefetch={false} href="/portfolio" className="text-white/80 hover:text-white transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link prefetch={false} href="/blogs" className="text-white/80 hover:text-white transition-colors">
                  Blogs
                </Link>
              </li>
              <li>
                <Link prefetch={false} href="/services" className="text-white/80 hover:text-white transition-colors">
                  Services
                </Link>
              </li> 
              
              <li>
                <Link prefetch={false} href="/#contact" className="text-white/80 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link prefetch={false} href="/testimonials" className="text-white/80 hover:text-white transition-colors">
                  Our Reviews
                </Link>
              </li>
              <li>
                <Link prefetch={false} href="/privacy-policy" className="text-white/80 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4 leading-tight">Contact Us</h3>
            <ul className="space-y-3 text-sm leading-snug">
              <li className="flex items-start">
                <Phone className="w-4 h-4 mr-2.5 mt-0.5 text-ukb-white shrink-0" />
                <div>
                  <p className="font-medium leading-tight">Phone</p>
                  <a href="tel:+447359605766" className="text-white/80 hover:text-white transition-colors leading-tight">
                    07359 605766
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <Mail className="w-4 h-4 mr-2.5 mt-0.5 text-ukb-white shrink-0" />
                <div>
                  <p className="font-medium leading-tight">Email</p>
                  <a href="mailto:info@ukbplumbing.co.uk" className="text-white/80 hover:text-white transition-colors leading-tight">
                    info@ukbplumbing.co.uk
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <MapPin className="w-4 h-4 mr-2.5 mt-0.5 text-ukb-white shrink-0" />
                <div>
                  <p className="font-medium leading-tight">Head Office</p>
                  <address className="text-white/80 not-italic leading-snug">
                    UKB Plumbing Ltd<br />
                    11 Fuchsia Gardens, Southampton,<br />
                    Hampshire, SO16 6TY<br />
                    Company Reg: 16028683<br />
                    VAT: 519845848
                  </address>
                </div>
              </li>
            </ul>
          </div>
        </div>
          <div className="mb-8 border-t border-white/10 pt-6">
          <h3 className="text-lg font-bold mb-4 leading-tight">Areas We Cover</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {allCities.map((city) => {
              const areas = cityAreasMap[city.slug] || [];

              return (
                <div key={city.slug} className="space-y-2">
                  <Link
                    prefetch={false}
                    href={city.slug === 'southampton' ? '/areas-we-cover' : city.slug === 'eastleigh' ? '/areas-we-cover/southampton/eastleigh' : `/areas-we-cover/${city.slug}`}
                    className="font-bold text-white text-sm border-b border-white/20 pb-1 leading-tight hover:text-white/80 transition-colors block"
                  >
                    {city.name}
                  </Link>
                  <ul className="space-y-1 pr-1">
                    {areas.length > 0 ? (
                      areas.map((area) => (
                        <li key={area.slug}>
                          <Link prefetch={false}
                            href={`/areas-we-cover/${city.slug}/${area.slug}`}
                            className="text-white/70 hover:text-white text-xs transition-colors block leading-tight"
                          >
                            {area.name}
                          </Link>
                        </li>
                      ))
                    ) : (
                      <li className="text-white/40 text-xs italic">No areas found</li>
                    )}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm leading-tight">
          <p className="text-white/70 text-center md:text-left">
  © {currentYear} UKB Plumbing. Crafted By{" "}
  <Link
    prefetch={false}
    href="https://tacreatives.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-white transition-colors underline underline-offset-4"
  >
    TA Creative
  </Link>
</p>
          <div className="mt-3 md:mt-0">
            <ul className="flex flex-wrap justify-center space-x-6">
              <li>
                <Link prefetch={false} href="/terms-and-conditions" className="text-white/70 hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link prefetch={false} href="/privacy-policy" className="text-white/70 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link prefetch={false} href="/privacy-policy" className="text-white/70 hover:text-white transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);