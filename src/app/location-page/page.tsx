import { Suspense } from "react";
import HeroSection from "@/components/HeroSection";
import ServicesHeroSection from "@/components/ServicesHeroSection";
import FormSkeleton from "@/components/FormSkeleton";

export default function LocationPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Book Plumbing Service</h1>

      {/* Suspense handles the loading state asynchronously */}
      <Suspense fallback={<FormSkeleton />}>
        <HeroSection />
        <ServicesHeroSection serviceName="Plumbing" areaName="Your Area" />
      </Suspense>
    </div>
  );
}