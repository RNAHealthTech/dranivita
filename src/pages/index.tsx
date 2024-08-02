import { NextSeo } from "next-seo";
import dynamic from 'next/dynamic';

import LandingHero from "@/components/landing-hero";
// import CursorTrailCanvas from "@/components/cursor-trail-canvas";
import { siteMetadata } from "@/data/siteMetaData.mjs";
import BookAppointment from "@/components/bookappointment";
import HomeServices from "@/components/homeservice";

const HomeBlog = dynamic(() => import('@/components/homeblog'), { ssr: false });

export default function Home() {
  return (
    <>
      <NextSeo
        title="Dr. Setu Gupta | Expert Endocrinologist in Delhi"
        description="Dr. Setu Gupta is a highly experienced Endocrinologist with 9 years of expertise, specializing in Diabetes, Thyroid Disorders, and Growth-related issues. Currently practicing at Sir Ganga Ram Hospital and Karuna Hospital in Delhi."
        canonical={siteMetadata.siteUrl}
        openGraph={{
          url: siteMetadata.siteUrl,
          title: "Dr. Setu Gupta - Leading Endocrinologist in Delhi",
          description:
            "Discover the expertise of Dr. Setu Gupta, a renowned Endocrinologist with 9 years of experience. Specializing in Diabetes, Thyroid Disorders, and Growth issues, Dr. Gupta provides expert care at Sir Ganga Ram Hospital and Karuna Hospital in Delhi.",
          images: [
            {
              url: `${siteMetadata.siteUrl}${siteMetadata.twitterImage}`,
              alt: "Dr. Setu Gupta - Professional Portrait",
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
              "Endocrinologist, Dr. Setu Gupta, Delhi, Diabetes, Thyroid Disorders, Growth Disorders, Hypertension, Osteoporosis, Pubertal Disorders, Sir Ganga Ram Hospital, Karuna Hospital",
          },
        ]}
      />
      {/*<CursorTrailCanvas className="pointer-events-none fixed inset-0 -z-10 h-full w-full" />*/}
      <main>
        <LandingHero />
        <HomeServices />
        <HomeBlog />
        <BookAppointment />
      </main>
    </>
  );
}