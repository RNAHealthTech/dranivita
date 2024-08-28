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
    name: "Bone & Joint Infections",
    icon: "🦴",
    description: "Diagnosis and treatment of infections affecting bones and joints.",
    keywords: ["Osteomyelitis", "Septic Arthritis", "Orthopedic Infections"]
  },
  {
    name: "Parasitic Diseases",
    icon: "🦠",
    description: "Management of infections caused by parasites, including diagnosis and treatment.",
    keywords: ["Malaria", "Helminth Infections", "Protozoal Diseases"]
  },
  {
    name: "Immunodeficiencies",
    icon: "🛡️",
    description: "Evaluation and treatment of disorders affecting the immune system.",
    keywords: ["Primary Immunodeficiency", "HIV/AIDS", "Immune System Disorders"]
  },
  {
    name: "Viral Infections",
    icon: "🦠",
    description: "Comprehensive care for various viral infections and their complications.",
    keywords: ["Hepatitis", "Influenza", "Herpes Viruses"]
  },
  {
    name: "Travel Advice",
    icon: "✈️",
    description: "Pre-travel consultations and vaccinations for international travelers.",
    keywords: ["Travel Vaccines", "Malaria Prophylaxis", "Health Precautions"]
  },

  {
    name: "Adult Vaccination",
    icon: "💉",
    description: "Tailored vaccination plans for adults to prevent infectious diseases.",
    keywords: ["Immunization", "Vaccine Schedules", "Preventive Care"]
  },


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