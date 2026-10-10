import React from "react";
import SmoothScroll from "@/components/SmoothScroll";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CaseStudies from "@/components/CaseStudies";
import Playbook from "@/components/Playbook";
import Services from "@/components/Services";
import GrowthEstimator from "@/components/GrowthEstimator";
import AuditRequest from "@/components/AuditRequest";
import Footer from "@/components/Footer";

export default function Home() {
  // Rich Schema.org JSON-LD Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://ayanaklekar.com/#person",
        name: "Ayan Aklekar",
        jobTitle: "SEO & Social Media Growth Specialist",
        description:
          "SEO Specialist and Social Media Manager helping businesses rank on Google and manage high-engagement social media profiles.",
        url: "https://ayanaklekar.com",
        sameAs: [
          "https://linkedin.com/in/ayanaklekar",
          "https://x.com/ayanaklekar",
        ],
        knowsAbout: [
          "Search Engine Optimization (SEO)",
          "Technical SEO Auditing",
          "Social Media Management",
          "Content Strategy & Calendars",
          "Community Engagement",
          "On-Page SEO",
          "Google Search Console",
        ],
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://ayanaklekar.com/#service",
        name: "Ayan Aklekar SEO & Social Media Management",
        url: "https://ayanaklekar.com",
        founder: {
          "@id": "https://ayanaklekar.com/#person",
        },
        description:
          "Hands-on Google SEO optimization and full-service social media management for growing businesses.",
        serviceType: [
          "Technical SEO Audit",
          "Google Search Optimization",
          "Social Media Management",
          "Content Calendar Strategy",
        ],
        areaServed: "Global",
      },
    ],
  };

  return (
    <>
      {/* Search Engine Semantic Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <SmoothScroll>
        <div className="flex flex-col min-h-screen">
          <Header />

          <main className="flex-grow">
            <Hero />
            <CaseStudies />
            <Playbook />
            <Services />
            <GrowthEstimator />
            <AuditRequest />
          </main>

          <Footer />
        </div>
      </SmoothScroll>
    </>
  );
}
