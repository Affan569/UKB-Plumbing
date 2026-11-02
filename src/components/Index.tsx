
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import ServiceBanner from '@/components/ServiceBanner';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import CallToAction from '@/components/CallToAction';
import AboutUs from '@/components/AboutUs';
import Blogs from '@/components/Blogs';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import BrandCarousel from '@/components/BrandCarousel';
import AnnouncementBar from '@/components/AnnouncementBar';

const Index = () => {

  useEffect(() => {

    document.title = "UKB Plumbing - 24/7 Emergency Plumbing Services";
    
    // Create or update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', "Professional 24/7 emergency plumbing services. Same-day plumbing services for urgent plumbing repairs including leaking toilets, leaking showers, leaking taps, gas leak repair, washing machine installation, radiators not working, and leaking radiator issues by your local emergency plumber. Our affordable emergency plumber team handles all plumbing emergencies quickly and efficiently.");
    
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', "24/7 emergency plumbing services, urgent plumbing repair, same-day plumbing services, emergency plumbing company, plumbing emergencies, local emergency plumber, affordable emergency plumber, emergency plumbing service, leaking toilet, leaking shower, leaking tap, gas leak repair, washing machine installation, radiators not working, leaking radiator");
  }, []);

  // Scroll animation handler
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const elements = document.querySelectorAll('.animate-fade-in');
  //     elements.forEach(element => {
  //       const elementPosition = element.getBoundingClientRect();
  //       const windowHeight = window.innerHeight;
        
  //       if (elementPosition.top < windowHeight * 0.9) {
  //         element.classList.add('opacity-100');
  //       }
  //     });
  //   };
    
  //   window.addEventListener('scroll', handleScroll);
  //   // Trigger on initial load
  //   handleScroll();
    
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);
  return (
    <div className="min-h-screen bg-white">
      <AnnouncementBar />
      <Header />
      <HeroSection />
      <ServiceBanner />
      <ServicesSection />
      <BrandCarousel />
      <WhyChooseUs />
      {/* <GoogleReviews /> */}
      <AboutUs /> 
      <Testimonials />
      <CallToAction />
      <ContactSection />
      <Footer />
      
      {/* Scroll to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 z-40 bg-ukb-blue text-white p-3 rounded-full shadow-button hover:bg-ukb-darkblue transition-colors duration-300"
        aria-label="Scroll to top"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </div>
  );
};

export default Index;
