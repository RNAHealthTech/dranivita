import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import FadeUp from "@/animation/fade-up";

export default function LandingHero() {
  const [scrollY, setScrollY] = useState(0);
  const [showVideo, setShowVideo] = useState(false);
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
      // animate={{
      //   transform: `translateY(${progress * 20}vh)`,
      // }}
      // transition={{ type: "spring", stiffness: 100 }}
      ref={ref}
      className="relative z-8 min-h-[calc(100vh-200px)] flex items-center px-4 sm:px-6 md:px-8 lg:px-12"
    >
      <div className="relative z-8 w-full max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-center">
          <div className="w-full lg:w-1/2 text-center lg:text-left mt-10 lg:mt-0 order-2 lg:order-1">
            <AnimatePresence>

              <FadeUp key="subtitle" duration={0.6} delay={0.2}>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-new font-semibold mb-4">
                  <span className="inline-block bg-coffee text-accent rounded-[90%] px-2 py-1">
                    Infectious
                  </span>{" "}
                  <span className="inline-block text-zinc-400 rounded-full px-2 py-1">
                    Disease Specialist
                  </span>
                </h1>
              </FadeUp>
              <FadeUp key="description" duration={0.6} delay={0.4}>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-foreground mb-8">
                  Expertise in difficult-to-treat infections. Passionate about managing complex infectious diseases and improving patient outcomes!
                </p>
              </FadeUp>
              <FadeUp key="cta" duration={0.6} delay={0.6}>
                <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6 items-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-2.5 lg:px-5 lg:py-2 xl:px-6 xl:py-2.5 border 
                    border-transparent text-base sm:text-lg md:text-xl font-medium rounded-md 
                    text-primary-foreground bg-gradient-to-r from-[#6e5e5d] to-[#3b2e2d] hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition duration-300 ease-in-out transform hover:scale-105"
                  >
                    📑 Book Appointment
                  </Link>

                  <button
                    onClick={() => setShowVideo(true)}
                    className="inline-flex items-center justify-center transform hover:scale-105"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16 animate-pulse" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </FadeUp>
            </AnimatePresence>
          </div>
          <div className="w-full lg:w-1/2 text-center order-1 lg:order-2 mb-8 lg:mb-0">
            <FadeUp key="title-main" duration={0.6}>
              <p className="bg-orange-100 text-center rounded-[40px] shadow-md text-sm lg:text-md py-2 lg:py-4 text-red-600 mb-4 inline-block px-4">
                Expert care for complex Infections
              </p>
            </FadeUp>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-4">
              <Image
                src="/images/srghlogo.png"
                alt="Sir Ganga Ram Hospital Logo"
                width={400}
                height={400}
                className="w-56 h-40 p-4 object-contain"
              />
              {/* <Image
                src="/images/karuna-logo.png"
                alt="Karuna Hospital Logo"
                width={400}
                height={400}
                className="w-56 h-40 p-4 object-contain"
              /> */}
            </div>
            <p className="text-sm md:text-base lg:text-lg font-medium text-zinc-700 dark:text-zinc-300">
              Consultant at Sir Ganga Ram Hospital 
            </p>
          </div>

        </div>

      </div>
      <Image
        src="/images/bg.png"
        alt="background image"
        className="right-hero"
        objectFit="cover"
        fill
      />
      {showVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative w-full max-w-4xl mx-4">
            <button
              onClick={() => setShowVideo(false)}
              className="absolute -top-10 right-0 text-white text-xl"
            >
              X
            </button>

            <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
              <iframe
                src="https://www.youtube.com/embed/D0nfPORtUXc?si=fYUJwt-SvHrxtzxE&amp;start=203"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </motion.section>
  );
}

// import { useEffect, useRef, useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import Link from "next/link";
// import Image from "next/image";
// import FadeUp from "@/animation/fade-up";

// export default function LandingHero() {
//   const [scrollY, setScrollY] = useState(0);
//   const [showVideo, setShowVideo] = useState(false);
//   const ref = useRef<HTMLDivElement>(null);

//   let progress = 0;
//   const { current: elContainer } = ref;

//   if (elContainer) {
//     progress = Math.min(1, scrollY / elContainer.clientHeight);
//   }

//   const handleScroll = () => {
//     setScrollY(window.scrollY);
//   };

//   useEffect(() => {
//     document.addEventListener("scroll", handleScroll);
//     return () => document.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <motion.section
//       // animate={{
//       //   transform: `translateY(${progress * 20}vh)`,
//       // }}
//       // transition={{ type: "spring", stiffness: 100 }}
//       ref={ref}
//       className="relative z-8 min-h-[calc(100vh-200px)] flex items-center px-4 sm:px-6 md:px-8 lg:px-12 bg-background"
//     >
//       <div className="relative z-8 w-full max-w-7xl mx-auto">
//         <div className="flex flex-col lg:flex-row items-center justify-center">
//           <div className="w-full lg:w-1/2 text-center lg:text-left mt-10 lg:mt-0 order-2 lg:order-1">
//             <AnimatePresence>

//               <FadeUp key="subtitle" duration={0.6} delay={0.2}>
//                 <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-new font-semibold mb-4">
//                   <span className="inline-block bg-coffee text-white rounded-[90%] px-2 py-1">
//                     Infectious
//                   </span>{" "}
//                   <span className="inline-block text-zinc-400 rounded-full px-2 py-1">
//                     Disease Specialist
//                   </span>
//                 </h1>
//               </FadeUp>
//               <FadeUp key="description" duration={0.6} delay={0.4}>
//                 <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/60 mb-8">
//                   Expertise in difficult-to-treat infections. Passionate about managing complex infectious diseases and improving patient outcomes!
//                 </p>
//               </FadeUp>
//               <FadeUp key="cta" duration={0.6} delay={0.6}>
//                 <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6 items-center">
//                   <Link
//                     href="/contact"
//                     className="inline-flex items-center justify-center px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-2.5 lg:px-5 lg:py-2 xl:px-6 xl:py-2.5 border 
//                     border-transparent text-base sm:text-lg md:text-xl font-medium rounded-md 
//                     text-primary-foreground bg-gradient-to-r from-[#6e5e5d] to-[#3b2e2d] hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition duration-300 ease-in-out transform hover:scale-105"
//                   >
//                     📑 Book Appointment
//                   </Link>

//                   <button
//                     onClick={() => setShowVideo(true)}
//                     className="inline-flex items-center justify-center transform hover:scale-105"
//                   >
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16 animate-pulse" viewBox="0 0 20 20" fill="#fff">
//                       <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
//                     </svg>
//                   </button>
//                 </div>
//               </FadeUp>
//             </AnimatePresence>
//           </div>
//           <div className="w-full lg:w-1/2 text-center order-1 lg:order-2 mb-8 lg:mb-0">
//             <FadeUp key="title-main" duration={0.6}>
//               <p className="bg-orange-100 text-center rounded-[40px] shadow-md text-sm lg:text-md py-2 lg:py-4 text-red-600 mb-4 inline-block px-4">
//                 Expert care for complex Infections
//               </p>
//             </FadeUp>
//             <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-4">
//               <Image
//                 src="/images/srghlogo.png"
//                 alt="Sir Ganga Ram Hospital Logo"
//                 width={400}
//                 height={400}
//                 className="w-56 h-40 p-4 object-contain"
//               />
//               <Image
//                 src="/images/karuna-logo.png"
//                 alt="Karuna Hospital Logo"
//                 width={400}
//                 height={400}
//                 className="w-56 h-40 p-4 object-contain"
//               />
//             </div>
//             <p className="text-sm md:text-base lg:text-lg font-medium text-gray-100 dark:text-zinc-300">
//               Consultant at Sir Ganga Ram Hospital & Karuna Hospital
//             </p>
//           </div>

//         </div>

//       </div>
//       <Image
//         src="/images/bg.png"
//         alt="background image"
//         className="right-hero"
//         objectFit="cover"
//         fill
//       />
//       {showVideo && (
//         <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
//           <div className="relative w-full max-w-4xl mx-4">
//             <button
//               onClick={() => setShowVideo(false)}
//               className="absolute -top-10 right-0 text-white text-xl"
//             >
//               X
//             </button>

//             <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
//               <iframe
//                 src="https://www.youtube.com/embed/D0nfPORtUXc?si=fYUJwt-SvHrxtzxE&amp;start=203"
//                 frameBorder="0"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//                 className="absolute top-0 left-0 w-full h-full"
//               ></iframe>
//             </div>
//           </div>
//         </div>
//       )}
//     </motion.section>
//   );
// }