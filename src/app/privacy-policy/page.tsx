import React from "react";
import type { Metadata } from "next";
import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Privacy Policy | UKB Plumbing",
  description: "Read the privacy policy of UKB Plumbing to learn how we collect, use, and protect your personal data when using our emergency plumbing services.",
  alternates: { canonical: 'https://ukbplumbing.co.uk/privacy-policy' },
  openGraph: {
    title: "Privacy Policy | UKB Plumbing",
    description: "Read the privacy policy of UKB Plumbing to learn how we collect, use, and protect your personal data when using our emergency plumbing services.",
    url: 'https://ukbplumbing.co.uk/privacy-policy',
    siteName: 'UKB Plumbing',
    type: 'website',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <AnnouncementBar />
      <Header />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[
          { label: 'Home', href: '/' },
          { label: 'Privacy Policy' },
        ]} />
      </div>

      <main className="min-h-screen bg-white pt-10 sm:pt-16 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-black text-sm sm:text-base leading-relaxed">
          
          <div>
            <h1 className="text-4xl sm:text-5xl font-black mb-3" style={{ color: '#003B7D' }}>
              Privacy Policy
            </h1>
            <p className="text-sm sm:text-base text-slate-600 font-medium">
              Last Updated: April 9, 2025
            </p>
          </div>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold" style={{ color: '#003B7D' }}>
              1. Introduction
            </h2>
            <p>
              At UKB Plumbing ("we," "our," or "us"), we understand the importance of your personal information and are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services for emergency plumbing repairs, or contact us for same-day plumbing services.
            </p>
            <p>
              Please read this Privacy Policy carefully. By accessing or using our services for urgent plumbing repair or other plumbing emergencies, you acknowledge that you have read, understood, and agree to be bound by all the terms of this Privacy Policy. If you do not agree, please discontinue use of our services.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold" style={{ color: '#003B7D' }}>
              2. Information We Collect
            </h2>
            <p>
              We may collect several types of information from and about users of our website and services, including:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Personal Identifiable Information:</strong> This includes your name, postal address, email address, telephone number, and any other identifier by which you may be contacted online or offline when you contact us about emergency plumbing services.</li>
              <li><strong>Service Information:</strong> Details about plumbing emergencies, service requests, and property information necessary to provide our services.</li>
              <li><strong>Payment Information:</strong> Details necessary to process payment for our affordable emergency plumber services.</li>
              <li><strong>Usage Data:</strong> Information about how you use our website, including your browsing actions and patterns.</li>
              <li><strong>Technical Data:</strong> Internet protocol (IP) address, browser type and version, time zone setting, location, browser plug-in types and versions, operating system and platform.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold" style={{ color: '#003B7D' }}>
              3. How We Collect Your Information
            </h2>
            <p>
              We collect information directly from you when you:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Contact us for 24/7 emergency plumbing services</li>
              <li>Fill in forms on our website</li>
              <li>Subscribe to our newsletter</li>
              <li>Request marketing material</li>
              <li>Provide feedback</li>
            </ul>
            <p className="pt-2">
              We also collect information automatically as you navigate through our site using cookies and similar technologies, such as:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Technical information about your equipment, browsing actions, and patterns</li>
              <li>Statistical data about visitors' browsing actions and patterns</li>
              <li>Information about your visit, including the pages you visit and resources you access</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold" style={{ color: '#003B7D' }}>
              4. How We Use Your Information
            </h2>
            <p>
              We use your information to:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Provide our emergency plumbing company services efficiently</li>
              <li>Process and fulfill service requests for leaking toilets, showers, taps, and other plumbing emergencies</li>
              <li>Manage our relationship with you</li>
              <li>Process payments</li>
              <li>Send service updates and notifications</li>
              <li>Improve our website and services</li>
              <li>Personalize your experience</li>
              <li>Communicate about our services, including promotional offers</li>
              <li>Respond to inquiries about our local emergency plumber services</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold" style={{ color: '#003B7D' }}>
              5. Cookie Policy
            </h2>
            <p>
              Our website uses cookies to distinguish you from other users of our website. This helps us to provide you with a good experience when you browse our website and also allows us to improve our site. Cookies are small text files that are placed on your computer when you visit certain websites.
            </p>
            <p>
              We use the following cookies:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Strictly necessary cookies:</strong> Required for the operation of our website.</li>
              <li><strong>Analytical/performance cookies:</strong> Allow us to recognize and count the number of visitors and see how visitors move around our website.</li>
              <li><strong>Functionality cookies:</strong> Used to recognize you when you return to our website.</li>
              <li><strong>Targeting cookies:</strong> Record your visit to our website, the pages you have visited, and the links you have followed.</li>
            </ul>
            <p className="pt-2">
              You can set your browser to refuse all or some browser cookies or to alert you when websites set or access cookies. If you disable or refuse cookies, please note that some parts of this website may become inaccessible or not function properly.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold" style={{ color: '#003B7D' }}>
              6. Data Sharing and Disclosure
            </h2>
            <p>
              We may share your personal information with:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Service providers who perform functions on our behalf</li>
              <li>Professional advisers including lawyers, bankers, auditors, and insurers</li>
              <li>Revenue & Customs, regulators, and other authorities</li>
              <li>Third parties to whom we may choose to sell, transfer, or merge parts of our business or our assets</li>
            </ul>
            <p className="pt-2">
              We require all third parties to respect the security of your personal data and to treat it in accordance with the law. We do not allow our third-party service providers to use your personal data for their own purposes.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold" style={{ color: '#003B7D' }}>
              7. Data Security
            </h2>
            <p>
              We have implemented appropriate security measures to prevent your personal information from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed. We limit access to your personal information to those employees, agents, contractors, and other third parties who have a business need to know.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold" style={{ color: '#003B7D' }}>
              8. Data Retention
            </h2>
            <p>
              We will only retain your personal information for as long as necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold" style={{ color: '#003B7D' }}>
              9. Your Rights Under GDPR
            </h2>
            <p>
              Under the General Data Protection Regulation (GDPR), you have various rights in relation to your personal data, including:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>The right to access your personal data</li>
              <li>The right to rectification of your personal data</li>
              <li>The right to erasure of your personal data</li>
              <li>The right to restrict processing of your personal data</li>
              <li>The right to data portability</li>
              <li>The right to object to processing of your personal data</li>
              <li>Rights in relation to automated decision making and profiling</li>
            </ul>
            <p className="pt-2">
              To exercise any of these rights, please contact us using the details provided below.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold" style={{ color: '#003B7D' }}>
              10. Changes to Our Privacy Policy
            </h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top of this policy.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold" style={{ color: '#003B7D' }}>
              11. Contact Information
            </h2>
            <p>
              If you have any questions about this Privacy Policy or our data practices, please contact us at:
            </p>
            <div className="space-y-1 pt-1">
              <p className="font-bold">UKB Plumbing - 24/7 Emergency Plumbing Services</p>
              <p>Email: <a href="mailto:info@ukbplumbing.co.uk" className="underline">info@ukbplumbing.co.uk</a></p>
              <p>Phone: <a href="tel:07359605766" className="underline">07359605766</a></p>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </>
  );
}