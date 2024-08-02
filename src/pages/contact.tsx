import React from "react";
import { siteMetadata } from "@/data/siteMetaData.mjs";
import { NextSeo } from "next-seo";
import { AnimatePresence, motion } from "framer-motion";
import FadeUp from "@/animation/fade-up";
import { FaTwitter, FaLinkedin, FaFacebook, FaMapMarkerAlt, FaEnvelope, FaPhone, FaClock } from 'react-icons/fa';
import { useForm, ValidationError } from "@formspree/react";
import Map from "@/components/map/index";


export default function Contact() {
  const [state, handleSubmit] = useForm('xblrdjdp');



  return (
    <>
        <NextSeo
        title="Book Your Appointment with Dr. Anivita Aggarwal"
        description="Book an appointment for consultation session with Dr. Anivita Aggarwal. Expert in Infectious Diseases, including HIV, TB, and COVID-19 management."
        canonical={`${siteMetadata.siteUrl}/contact`}
        openGraph={{
          url: `${siteMetadata.siteUrl}/contact`,
          title: "Dr. Anivita Aggarwal - Infectious Diseases Specialist in Delhi",
          description: "Book an appointment for consultation session with Dr. Anivita Aggarwal. Expert in managing difficult to treat infections, including HIV, TB, and COVID-19.",
          siteName: siteMetadata.siteName,
          type: "website",
        }}
        twitter={{
          cardType: "summary_large_image"
        }}
        additionalMetaTags={[
          {
            property: "keywords",
            content: "Contact, Dr. Anivita Aggarwal, Infectious Diseases, HIV, TB, COVID-19, Sir Ganga Ram Hospital, Delhi"
          }
        ]}
      />
      <section className="container mx-auto px-4 py-12 backdrop-blur-sm rounded-lg ">
      <div  className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-orange-100 opacity-20"></div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute bottom-0">
          <path fill="#FFF" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,133.3C672,139,768,181,864,197.3C960,213,1056,203,1152,181.3C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
        
      </div>
        <AnimatePresence>
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-12 text-accent text-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Contact Dr. Anivita Aggarwal
          </motion.h1>

          <div className="grid md:grid-cols-2 gap-12 relative z-8">
            <FadeUp key="contact" duration={0.6}>
              <div className="space-y-8 bg-muted p-8 rounded-lg shadow-inner">
                <div>
                  <FadeUp key="address" duration={0.6}>
                    <h2 className="text-xl md:text-2xl font-semibold mb-3 text-accent flex items-center">
                      <FaMapMarkerAlt className="mr-2" /> Clinic Address
                    </h2>
                    <p className="text-foreground">{siteMetadata.address}</p>
                  </FadeUp>
                </div>
                <div>
              <FadeUp key="hours" duration={0.6}>
                <h2 className="text-xl md:text-2xl font-semibold mb-3 text-accent flex items-center">
                  <FaClock className="mr-2" /> Consultation Hours
                </h2>
                <p className="text-foreground">Mon, Wed, Fri: 06:00 PM - 08:00 PM (Room No. F-30)</p>
                <p className="text-foreground">Friday: 11:00 AM - 12:00 PM (Room No. G-1)</p>
              </FadeUp>
            </div>
                <div>
              <FadeUp key="phoneandemail" duration={0.6}>
                <h2 className="text-xl md:text-2xl font-semibold mb-3 text-accent">Contact Information</h2>
                <p className="text-foreground flex items-center mb-2"><FaEnvelope className="mr-2 text-accent" /> anivita.aggarwal@sgrh.com</p>
                <p className="text-foreground flex items-center"><FaPhone className="mr-2 text-accent" /> +011-42254000</p>
              </FadeUp>
            </div>
                <div className="flex flex-row space-x-4 justify-start items-center mt-6">
                  <FadeUp key="icons" duration={0.6}>
                    <h2 className="text-xl md:text-2xl font-semibold mr-4 text-accent">Connect on Socials:</h2>
                    <div className="flex space-x-4 mt-4">
                      {[
                        { icon: FaTwitter, href: siteMetadata.twitter },
                        { icon: FaLinkedin, href: siteMetadata.linkedin },
                        { icon: FaFacebook, href: siteMetadata.facebook },
                      ].map((social, index) => (
                        <motion.a
                          key={index}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-accent hover:text-accent-foreground text-2xl"
                          whileHover={{ scale: 1.2 }}
                        >
                          <social.icon />
                        </motion.a>
                      ))}
                    </div>
                  </FadeUp>
                </div>
              </div>
            </FadeUp>
            <div className="bg-muted p-8 rounded-lg shadow-inner">
              <h2 className="text-2xl font-semibold mb-6 text-accent">Schedule Your Appointment</h2>
              {state.succeeded ? (
                <motion.p
                  className="text-accent text-lg mb-4 sm:mb-6 lg:mb-8 text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  Thank you for your submission. You will hear back soon.
                </motion.p>
              ) : (
                <FadeUp key="form" duration={0.6} >
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {[
                      { id: "name", type: "text", label: "Name", placeholder: "Your Name" },
                      { id: "email", type: "email", label: "Email", placeholder: "your.email@example.com" },
                      { id: "phone", type: "tel", label: "Phone Number", placeholder: "+91-XXXX-XXXX" },
                      { id: "date", type: "date", label: "Preferred Date", placeholder: "Select Date" },
                    ].map((field) => (
                      <div key={field.id} className="mb-4">
                        <label htmlFor={field.id} className="block text-sm font-medium text-muted-foreground mb-1">
                          {field.label}
                        </label>
                        <input
                          type={field.type}
                          id={field.id}
                          name={field.id}
                          required
                          placeholder={field.placeholder}
                          className="w-full p-3 border border-border rounded-md bg-background text-foreground focus:ring-2 focus:ring-accent transition"
                        />
                        <ValidationError prefix={field.label} field={field.id} errors={state.errors} />
                      </div>
                    ))}
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-1">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        required
                        placeholder="Your message here..."
                        className="w-full p-3 border border-border rounded-md bg-background text-foreground focus:ring-2 focus:ring-accent transition"
                      ></textarea>
                    </div>
                    <motion.button
                      type="submit"
                      className="w-full bg-accent text-white px-6 py-3 rounded-md hover:bg-accent/90 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Send Message
                    </motion.button>
                  </form>
                </FadeUp>
              )}
            </div>
          </div>
          <div className="mt-4 rounded-lg overflow-hidden">
            <Map />
            </div>
        </AnimatePresence>
      </section>
    </>
  )
}