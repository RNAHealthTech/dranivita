import { NextSeo } from "next-seo";

import AboutHero from "@/components/about-hero";
import ExperienceShowcaseList from "@/components/experience/experience-showcase-list";
import EducationShowcaseList from "@/components/education/education-showcase-list";
import ResearchPaperList from "@/components/research/research-paper-list";
import { RESEARCH_PAPER } from "@/data/research-paper";
import { EDUCATION } from "@/data/education";
import { EXPERIENCE } from "@/data/experience";
import { siteMetadata } from "@/data/siteMetaData.mjs";
import DropdownSection from "@/components/dropdownsection";

export default function About() {
  return (
    <>
      <NextSeo
        title="Dr. Setu Gupta | Best Endocrinologist in Delhi"
        description="Dr. Setu Gupta is a leading Adult & Pediatric Endocrine, Diabetes and Metabolism Specialist in Delhi. Senior consultant at Sir Ganga Ram Hospital and Karuna Hospital, Dilshad Garden."
        canonical={`${siteMetadata.siteUrl}/about`}
        openGraph={{
          url: `${siteMetadata.siteUrl}/about`,
          title: "Dr. Setu Gupta - Best Endocrinologist in Delhi",
          description:
            "Meet Dr. Setu Gupta, a renowned Endocrinologist specializing in Adult & Pediatric Endocrine, Diabetes, and Metabolism. Senior consultant at Sir Ganga Ram Hospital and Karuna Hospital, Delhi.",
          images: [
            {
              url: `${siteMetadata.siteUrl}${siteMetadata.twitterImage}`,
              alt: "Dr. Setu Gupta - Endocrinologist",
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
              "Dr. Setu Gupta, Endocrinologist, Delhi, Adult Endocrine, Pediatric Endocrine, Diabetes Specialist, Metabolism Specialist, Sir Ganga Ram Hospital, Karuna Hospital, Dilshad Garden",
          },
        ]}
      />
      <AboutHero />
      <div className="mx-auto my-40 max-w-7xl px-6 sm:px-14 md:my-60 md:px-20">
          <DropdownSection title="Experience">
          <ExperienceShowcaseList title="Experience" details={EXPERIENCE} />
          </DropdownSection>
          <DropdownSection title="Education">
          <EducationShowcaseList title="Education" details={EDUCATION} />
          </DropdownSection>
          <DropdownSection title="Research">
          <ResearchPaperList title="Research" details={RESEARCH_PAPER} />
          </DropdownSection>
      </div>
    
     
  
    </>
  );
}