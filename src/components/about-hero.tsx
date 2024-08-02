import Image from "next/image";

import { AnimatePresence } from "framer-motion";

import FadeUp from "@/animation/fade-up";
import FadeRight from "@/animation/fade-right";
import heroProfileImg from "@/public/images/heroProfile.jpg";
import InImg from "@/public/images/in.png";

export default function AboutHero() {
  return (
    <div className="relative overflow-hidden mx-auto mt-0 flex max-w-7xl flex-col items-center gap-6 px-6 pt-20 text-center sm:px-14 md:mt-20 md:px-20 lg:mt-0 lg:flex-row lg:text-left">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-orange-100 opacity-20"></div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute bottom-0">
          <path fill="#FFF" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,133.3C672,139,768,181,864,197.3C960,213,1056,203,1152,181.3C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>

      </div>
      <div className="w-full sm:w-1/2 md:w-2/3 lg:inline-block lg:h-full lg:w-1/2 relative z-8">
        <AnimatePresence>
          <FadeUp key="hero-image" duration={0.6}>
            <Image
              src={heroProfileImg}
              width={100}
              height={100}
              className="h-auto w-full px-0 xl:px-16"
              alt="hero image"
              unoptimized
            />
          </FadeUp>
        </AnimatePresence>
      </div>
      <div className="sm:1/2 mt-10 w-full lg:w-1/2 relative z-8">
        <AnimatePresence>
          <FadeUp key="title-greeting" duration={0.6}>
            <h1 className="text-4xl font-bold text-accent sm:text-5xl md:text-4xl lg:text-4xl xl:text-7xl">
              Dr. Anivita Aggarwal
            </h1>
          </FadeUp>
          <FadeUp key="subtitle-greeting" duration={0.6}>
            <FadeUp key="description-3" duration={0.6} delay={0.6}>
              <h2 className="mt-8 text-sm font-semibold text-muted-foreground sm:text-xl md:text-xl">Associate Consultant in Endocrinology & Metabolism at Sir Ganga Ram Hospital, Delhi.</h2>
            </FadeUp>
          </FadeUp>
          {/* <FadeUp key="description-1" duration={0.6} delay={0.2}>
            <p className="mt-8 text-base font-medium text-zinc-900 dark:text-zinc-300 sm:text-lg md:text-lg">
              A young, astute, and passionate Infectious Diseases consultant with extensive experience in managing difficult to treat infections.
            </p>
          </FadeUp> */}
          <FadeUp key="description-2" duration={0.6} delay={0.4}>

            <p className="mt-8 text-base font-medium text-zinc-900 dark:text-zinc-300 sm:text-lg md:text-lg">
              As an Associate Consultant in Infectious Diseases at Sir Ganga Ram Hospital, I specialize in managing complex infections such as transplant-related infections, fever of unknown origin, HIV, Tuberculosis, and COVID-19. With a keen interest in research and academia, I provide exceptional healthcare with a focus on difficult-to-treat infections, ensuring advanced treatments and prioritizing patient well-being in areas including ICU infections, brain infections, sepsis, and rare infectious diseases.
            </p>

          </FadeUp>
          <FadeRight
            key="hero-location"
            duration={0.6}
            delay={0.8}
            className="mr-0 mt-8 flex items-center justify-center gap-4 lg:mr-8 lg:justify-end"
          >
            <div className="relative flex w-12 gap-4 overflow-hidden rounded-md">
              <Image
                className="-z-10 h-full w-full bg-cover bg-no-repeat"
                alt="Indian flag"
                src={InImg}
              />

            </div>
            <span className="text-lg font-medium text-foreground">
               Delhi, India
            </span>
          </FadeRight>
        </AnimatePresence>
      </div>
    </div>
  );
}