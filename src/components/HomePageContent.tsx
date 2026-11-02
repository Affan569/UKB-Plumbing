"use client"
import dynamic from 'next/dynamic'
import { LocalBusinessSchema } from "@/components/LocalBusinessSchema"

// Critical components - load immediately
import HeroSection from "@/components/HeroSection"

// Lazy load non-critical components with better loading states
const ServicesSection = dynamic(() => import('@/components/ServicesSection'), {
  loading: () => <div className="w-full h-[400px] bg-gray-100 animate-pulse rounded-lg" aria-hidden="true" />,
  ssr: false
})

const BrandCarousel = dynamic(() => import('@/components/BrandCarousel'), {
  loading: () => <div className="w-full h-[200px] bg-gray-100 animate-pulse rounded-lg" aria-hidden="true" />,
  ssr: false
})

const AreasWeCover = dynamic(() => import('@/components/areas-we-cover'), {
  loading: () => <div className="w-full h-[300px] bg-gray-100 animate-pulse rounded-lg" aria-hidden="true" />,
  ssr: false
})

const WhyChooseUs = dynamic(() => import('@/components/WhyChooseUs'), {
  loading: () => <div className="w-full h-[400px] bg-gray-100 animate-pulse rounded-lg" aria-hidden="true" />,
  ssr: false
})

const AboutUs = dynamic(() => import('@/components/AboutUs'), {
  loading: () => <div className="w-full h-[400px] bg-gray-100 animate-pulse rounded-lg" aria-hidden="true" />,
  ssr: false
})

const Testimonials = dynamic(() => import('@/components/Testimonials'), {
  loading: () => <div className="w-full h-[400px] bg-gray-100 animate-pulse rounded-lg" aria-hidden="true" />,
  ssr: false
})

const CallToAction = dynamic(() => import('@/components/CallToAction'), {
  loading: () => <div className="w-full h-[200px] bg-gray-100 animate-pulse rounded-lg" aria-hidden="true" />,
  ssr: false
})

const ContactSection = dynamic(() => import('@/components/ContactSection'), {
  loading: () => <div className="w-full h-[500px] bg-gray-100 animate-pulse rounded-lg" aria-hidden="true" />,
  ssr: false
})

const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <div className="w-full h-[400px] bg-gray-100 animate-pulse rounded-lg" aria-hidden="true" />,
  ssr: false
})

export default function HomePageContent() {
  return (
    <div className="min-h-screen bg-white w-full overflow-x-hidden">
      <LocalBusinessSchema />
      <HeroSection />

      <ServicesSection />
      <BrandCarousel />
      <AreasWeCover />
      <WhyChooseUs />
      <AboutUs />
      <Testimonials />
      <CallToAction />
      <ContactSection />
      <Footer />
    </div>
  )
}