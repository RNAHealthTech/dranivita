import Image from 'next/image'
import { FC, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion' // You'll need to install framer-motion
import Link from 'next/link'


const HomeAbout: FC = () => {
  const navigate = useRouter();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.querySelector('#home-about');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const handleAbout = () => {
    navigate.push("/about");
  }

  return (
    <section id="home-about" className='mt-8 relative overflow-hidden z-0'>
      <div className="absolute z-10 top-0 left-0 w-full h-full opacity-50"></div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className='mb-12 text-2xl md:text-4xl lg:text-5xl text-center font-semibold relative z-10'
      >
        Words from the Doc
      </motion.h2>
      <div className="container mx-auto px-6 py-8 md:py-16 relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:w-1/2 mb-8 mt-24 text-center items-center md:mb-0 md:pr-8"
          >
<h3 className="text-xl sm:text-2xl md:text-4xl font-semibold mb-4 text-foreground font-fraunces-slab">Pioneering Care in Infectious Diseases</h3>
                <h3 className="text-2xl sm:text-2xl md:text-5xl font-semibold mb-4 text-foreground font-fraunces-slab">Dr. Anivita Aggarwal</h3>
                <p className='text-sm md:text-xl mb-2 font-semibold text-new font-work-sans'>DM(Infectious Diseases), AIIMS, New Delhi</p>
            <blockquote className="border-l-4 border-brown-500 pl-4 italic text-gray-600 mb-4">
            "In an era where infectious diseases continue to challenge global health, remember: effective treatment goes beyond just prescribing medication. It's about understanding the complex interplay between pathogens, the human body, and our environment. Let's focus on comprehensive care that addresses not just the infection, but the whole patient." - Dr. Anivita Aggarwal
            </blockquote>
            <p className="hidden md:block text-lg text-gray-700 mb-12">
            With 8 years of experience and expertise in DM (Infectious Diseases) from AIIMS, New Delhi, I'm dedicated to providing expert, evidence-based care for a wide range of infectious diseases.
                        </p>
                        <p className='text-lg text-gray-700 mb-12'>
                        From my work at prestigious institutions like AIIMS and Sir Ganga Ram Hospital to my contributions during the COVID-19 pandemic, I've consistently strived to tackle complex infections and improve patient outcomes.
</p>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-center space-y-4 sm:space-y-0 sm:space-x-6">
             
               <Link href="/about" className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-md text-white 
               bg-gradient-to-r from-[#6e5e5d] to-[#3b2e2d]  hover:from-[#5f4a49] hover:to-[#4b3e3d] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4f3a39] transition duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl">
                        About Dr. Aggarwal 
                    </Link>
              <button
                className="bg-white text-gray-800 px-6 py-3 rounded-md border border-gray-300 transform transition duration-200 
                hover:bg-gray-50 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#4f3a39] focus:ring-opacity-50"
                aria-label="Book an appointment with Dr. Aggarwal"
              >
                Book Appointment
              </button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:w-1/2 relative md:mt-0"
          >
            {/* Image and overlay elements remain the same */}
            <div className="rounded-full shadow-md hover:shadow-lg overflow-hidden w-64 h-64 md:w-96 md:h-96 relative mx-auto md:ml-auto">
              <Image
                src="/images/heroProfile.jpg"
                alt="Dr. Anivita Aggarwal"
                layout="fill"
                objectFit="cover"

              />
            </div>
            <div className="absolute -top-12 -left-4 md:-top-8 md:left-48 lg:-top-8 lg:left-48 p-4 rounded-lg ring-1 ring-zinc-200 backdrop-blur-md shadow-md">
              <p className="font-bold">8+ Years</p>
              <p>of Experience</p>
            </div>
            <div className="hidden md:inline-block absolute bottom-26 md:right-4 md:-bottom-8 bg-gradient-to-r from-[#3b2e2d] to-[#6e5e5d] text-white p-4 rounded-lg shadow-md max-w-[250px]">
              <p className="font-bold text-sm">Specialized Care</p>
              <p className="text-xl font-bold">Infectious Diseases</p>
              <button className="bg-white text-zinc-900 px-4 py-2 rounded-md mt-2 text-sm w-full">
                Request an Appointment
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HomeAbout;