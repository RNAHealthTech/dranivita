import { NextSeo } from "next-seo";
import dynamic from 'next/dynamic';

import LandingHero from "@/components/landing-hero";
import CursorTrailCanvas from "@/components/cursor-trail-canvas";
import { siteMetadata } from "@/data/siteMetaData.mjs";
import BookAppointment from "@/components/bookappointment";
import HomeServices from "@/components/homeservice";
import HomeAbout from "@/components/home-about";

const HomeBlog = dynamic(() => import('@/components/homeblog'), { ssr: false });

export default function Home() {
  return (
    <>
      <NextSeo
        title="Dr. Anivita Aggarwal | Expert Infectious Diseases Specialist in Delhi"
        description="Dr. Anivita Aggarwal is a highly experienced Infectious Diseases specialist with 8 years of expertise, specializing in managing difficult-to-treat infections, HIV, Tuberculosis, fungal infections, and adult vaccination. Currently practicing at Sir Ganga Ram Hospital and Karuna Hospital in Delhi."
        canonical={siteMetadata.siteUrl}
        openGraph={{
          url: siteMetadata.siteUrl,
          title: "Dr. Anivita Aggarwal - Leading Infectious Diseases Specialist in Delhi",
          description:
            "Explore the extensive expertise of Dr. Anivita Aggarwal, a renowned Infectious Diseases consultant with 8 years of experience. Specializing in fever of unknown origin, HIV, Tuberculosis, fungal infections, transplant infections, and sepsis. Dr. Aggarwal provides expert care at Sir Ganga Ram Hospital and Karuna Hospital in Delhi.",
          images: [
            {
              url: `${siteMetadata.siteUrl}${siteMetadata.twitterImage}`,
              alt: "Dr. Anivita Aggarwal - Professional Portrait",
            },
          ],
          siteName: siteMetadata.siteName,
          type: "website",
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            property: "keywords",
            content:
              "Infectious Diseases, Dr. Anivita Aggarwal, Delhi, Fever of Unknown Origin, HIV, Tuberculosis, Fungal Infections, Adult Vaccination, Sepsis, Transplant Infections, Karuna Hospital, Sir Ganga Ram Hospital",
          },
        ]}
      />

      <CursorTrailCanvas className="pointer-events-none fixed inset-0 -z-10 h-full w-full" />
      <main>
        <LandingHero />
        <HomeAbout />
        <HomeServices />
        <HomeBlog />
        <BookAppointment />
      </main>
    </>
  );
}