import React from "react";
import { NextSeo } from "next-seo";
import { siteMetadata } from "@/data/siteMetaData.mjs";
import { AnimatePresence } from "framer-motion";
import FadeUp from "@/animation/fade-up";

interface ServiceArea {
  name: string;
  icon: string;
  description: string;
  keywords: string[];
}

const serviceAreas: ServiceArea[] = [
  {
    name: "Fever of Unknown Origin",
    icon: "🌡️",
    description: "Expert diagnosis and management of complex fever cases with unknown causes.",
    keywords: ["Pyrexia", "Persistent Fever", "Diagnostic Challenges"]
  },
  {
    name: "HIV Management",
    icon: "🦠",
    description: "Comprehensive care and treatment for individuals living with HIV.",
    keywords: ["Antiretroviral Therapy", "Opportunistic Infections", "HIV Prevention"]
  },
  {
    name: "Tuberculosis (TB)",
    icon: "🫁",
    description: "Specialized treatment for difficult-to-treat TB cases, including drug-resistant strains.",
    keywords: ["Multi-Drug Resistant TB", "Extrapulmonary TB", "TB Treatment"]
  },
  {
    name: "Fungal Infections",
    icon: "🍄",
    description: "Advanced diagnosis and treatment of various fungal infections.",
    keywords: ["Invasive Fungal Infections", "Antifungal Therapy", "Candidiasis"]
  },
  {
    name: "Adult Vaccination",
    icon: "💉",
    description: "Tailored vaccination plans for adults to prevent infectious diseases.",
    keywords: ["Immunization", "Vaccine Schedules", "Preventive Care"]
  },
  {
    name: "Transplant Infections",
    icon: "🫀",
    description: "Management of infections in transplant (HSCT and SOT) patients.",
    keywords: ["Immunosuppression", "Opportunistic Infections", "Post-Transplant Care"]
  },
  {
    name: "Sepsis Management",
    icon: "🚨",
    description: "Rapid response and treatment for sepsis and septic shock.",
    keywords: ["Septic Shock", "Antimicrobial Therapy", "Critical Care"]
  },
  {
    name: "COVID-19 and Post-COVID Care",
    icon: "😷",
    description: "Treatment for active COVID-19 cases and management of post-COVID complications.",
    keywords: ["Long COVID", "COVID-19 Variants", "Respiratory Support"]
  },
  {
    name: "ICU Infections",
    icon: "🏥",
    description: "Specialized care for infections acquired in intensive care settings.",
    keywords: ["Hospital-Acquired Infections", "Ventilator-Associated Pneumonia", "Catheter-Related Infections"]
  },
  {
    name: "Brain Infections",
    icon: "🧠",
    description: "Diagnosis and treatment of various infections affecting the brain and nervous system.",
    keywords: ["Meningitis", "Encephalitis", "Brain Abscess"]
  }
];

export default function Services() {
  return (
    <>
      <NextSeo
        title="Dr. Anivita Aggarwal - Infectious Diseases Services"
        description="Explore the comprehensive infectious diseases services offered by Dr. Anivita Aggarwal, including HIV management, tuberculosis treatment, and more."
        canonical={`${siteMetadata.siteUrl}/services`}
        openGraph={{
          url: `${siteMetadata.siteUrl}/services`,
          title: "Dr. Anivita Aggarwal - Comprehensive Infectious Diseases Services",
          description: "Expert care in HIV, tuberculosis, fungal infections, and more. Dr. Anivita Aggarwal provides specialized infectious diseases services in Delhi.",
          images: [
            {
              url: `${siteMetadata.siteUrl}${siteMetadata.twitterImage}`,
              alt: "Dr Anivita Aggarwal - Infectious Diseases Specialist",
            },
          ],
          siteName: siteMetadata.siteName,
          type: "website",
        }}
        twitter={{
          cardType: "summary_large_image"
        }}
        additionalMetaTags={[
          {
            property: "keywords",
            content: "Infectious Diseases, HIV, Tuberculosis, Fungal Infections, Dr. Anivita Aggarwal, Delhi"
          }
        ]}
      />
      <section className="container mx-auto px-4 py-12 mt-2">
         

        <h1 className="text-5xl lg:text-5xl font-bold mb-6 text-center text-accent">Services</h1>

        <p className="text-center mb-8 text-lg font-bold text-accent">Offered by Dr. Anivita Aggarwal</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {serviceAreas.map((service) => (
              <FadeUp key={service.name} duration={0.6}>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="p-6">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                    <p className="text-gray-600">{service.description}</p>
                    <div className="mt-4">
                      {service.keywords.map((keyword, index) => (
                        <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </FadeUp>
            ))}
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}