import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import FadeUp from "@/animation/fade-up";


export default function LandingHero() {
  const [scrollY, setScrollY] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  let progress = 0;
  const { current: elContainer } = ref;

  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight);
  }

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.section
      animate={{
        transform: `translateY(${progress * 20}vh)`,
      }}
      transition={{ type: "spring", stiffness: 100 }}
      ref={ref}
      className="relative min-h-[calc(100vh-200px)] flex items-center px-4 sm:px-6 md:px-8 lg:px-12"
    >
      <div className="absolute inset-0 bg-orange-200 opacity-20 z-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute bottom-0">
          <path fill="#F3F4F6" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,133.3C672,139,768,181,864,197.3C960,213,1056,203,1152,181.3C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        {/* Changed to flex-col to stack items vertically */}
        <div className="flex flex-col items-center justify-center">
          {/* Removed lg:w-1/2 and adjusted text alignment */}
          <div className="w-full text-center mt-10">
            <AnimatePresence>
              <FadeUp key="title-main" duration={0.6}>
                {/* Increased text size for better visibility */}
                {/* <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black dark:text-white mb-4"> */}
                <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">

                  Dr. Anivita Aggarwal
                </h1>
              </FadeUp>
              <FadeUp key="position" duration={0.6}>
                {/* Adjusted text size for better hierarchy 
                <h3 className="text-md md:text-3xl lg:text-2xl font-bold text-gray-400 mb-2">*/}
                <h3 className="text-md md:text-3xl lg:text-2xl font-bold text-muted-foreground mb-2">

                  M.B.B.S., D.M. (Infectious Diseases)
                </h3>
              </FadeUp>
              <FadeUp key="subtitle" duration={0.6} delay={0.2}>
                {/* Increased max-width for better readability on larger screens 
                <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-accent font-semibold mb-4 max-w-3xl mx-auto">*/}
                <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-accent font-semibold mb-4 max-w-3xl mx-auto">

                  Infectious Diseases Specialist with expertise in difficult-to-treat infections
                </p>
              </FadeUp>
              <FadeUp key="description" duration={0.6} delay={0.4}>
                {/* Increased text size and added max-width for better readability 
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-zinc-700 dark:text-zinc-300 mb-8 max-w-2xl mx-auto">*/}
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-foreground mb-8 max-w-2xl mx-auto">

                  Passionate about managing complex infectious diseases and improving patient outcomes!
                </p>
              </FadeUp>
              <FadeUp key="cta" duration={0.6} delay={0.6}>
                {/* Centered buttons and increased spacing */}
                <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                  {/* Increased button size for better visibility 
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-6 py-4 border border-transparent text-md font-medium rounded-md text-white bg-gray-950 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 transition duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
              */}
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-6 py-4 border border-transparent text-md font-medium rounded-md text-primary-foreground bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    Book Appointment
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                  {/* Matched button size and adjusted colors for consistency 
                  <Link
                    href="/about"
                    className="inline-flex items-center justify-center px-6 py-4 border border-gray-600 text-md font-medium rounded-md text-gray-900 bg-transparent hover:bg-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
            */}
                  <Link
                    href="/about"
                    className="inline-flex items-center justify-center px-6 py-4 border border-primary text-md font-medium rounded-md text-primary bg-transparent hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >

                    Learn More about Me
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </FadeUp>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.section>
  );
}