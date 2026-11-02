"use client"
import React, { useEffect, useState } from 'react';
import { Phone } from 'lucide-react';
import { cn } from '@/lib/utils';

const AnnouncementBar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLight, setIsLight] = useState(false);
  const [currentAnnouncement, setCurrentAnnouncement] = useState(0);
  
  const announcements = [
    <>
      <span className="font-large">Urgent boiler breakdown and boiler installation - Call Now on </span>
      <span className="font-bold">07359605766</span>
    </>,
    <>
      <span className="font-large">24/7 emergency plumbing services - Call Now on </span>
      <span className="font-bold">07359605766</span>
    </>,
    <>
      <span className="font-bold">Urgent plumbing repair for leaking toilets, showers & taps - Call Now on </span>
      <span className="font-bold">07359605766</span>
    </>,
    <>
      <span className="font-bold">Same-day plumbing services for plumbing emergencies - Call Now on </span>
      <span className="font-bold">07359605766</span>
    </>,
    <>
      <span className="font-bold">Gas leak repair & washing machine installation by our emergency plumbing company - Call Now on </span>
      <span className="font-bold">07359605766</span>
    </>,
    <>
      <span className="font-bold">Local emergency plumber for radiators not working & leaking radiator issues - Call Now on </span>
      <span className="font-bold">07359605766</span>
    </>,
    <>
      <span className="font-bold">Affordable emergency plumber - Call Now on </span>
      <span className="font-bold">07359605766</span>
    </>
  ];

  useEffect(() => {
    setIsVisible(true);
    
    const rotateInterval = setInterval(() => {
      setCurrentAnnouncement(prev => (prev + 1) % announcements.length);
    }, 6000);
    
    return () => clearInterval(rotateInterval);
  }, [announcements.length]);

  return (
    <div 
      className={cn(
        "py-2 fixed top-0 left-0 w-full z-[60] transition-transform duration-500 ease-out overflow-hidden", 
        isVisible ? "translate-x-0" : "-translate-x-full", 
        isLight ? "bg-white text-ukb-darkblue" : "bg-ukb-blue text-white"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center md:justify-between">
          <div className="flex-1 overflow-hidden">
            <div className="marquee-container">
              <div className="marquee-content flex items-center justify-center text-xl">
                <a 
                  href="tel:07359605766" 
                  className={cn("transition-colors", isLight ? "hover:text-ukb-blue" : "hover:text-ukb-lightblue")}
                >
                  {announcements[currentAnnouncement]}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Toggle button for light/dark mode */}
      <button 
        onClick={() => setIsLight(!isLight)} 
        className="absolute right-4 top-1/2 transform -translate-y-1/2 p-1 rounded-full" 
        aria-label="Toggle announcement bar theme"
      />
    </div>
  );
};

export default AnnouncementBar;