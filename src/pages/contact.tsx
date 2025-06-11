import React, {useState} from "react";
import { siteMetadata } from "@/data/siteMetaData.mjs";
import { NextSeo } from "next-seo";
import { AnimatePresence, motion } from "framer-motion";
import FadeUp from "@/animation/fade-up";
import { FaTwitter, FaLinkedin, FaFacebook, FaMapMarkerAlt, FaEnvelope, FaPhone, FaClock } from 'react-icons/fa';
import { useForm, ValidationError } from "@formspree/react";
import Map from "@/components/map/index";
import { Phone } from "lucide-react";

interface FormData {
   name: string;
   email: string;
   phone: string;
   date: string;
   message: string;
   [key:string]: string;  
}


export default function Contact() {
  const [state, submitToFormspree] = useForm('xqabqayb');


  const [formData, setFormData] = useState<FormData>({
    name: "", 
    email: "", 
    phone: "",  
    date: "", 
    message:""
  });

  const handleChange = (e : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,  

  ) => {
    const {name, value} = e.target;
    setFormData((prev: FormData) => ({
      ...prev, 
      [name] : value, 
    }));
  };



  const sendWhatsAppMessage = () => {
    const message = `New Appointment Request:
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Date: ${formData.date}
Message: ${formData.message}`;

    const whatsappNumber = "918287186636";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  const finalHandleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // Submit to Formspree using the form event directly
      await submitToFormspree(e);

      // Only send WhatsApp message if Formspree submission was successful
      if (!state.errors) {
        sendWhatsAppMessage();
      }

      // Clear form if everything is successful
      if (state.succeeded) {
        setFormData({
          name: "",
          email: "",
          phone: "",
          date: "",
          message: "",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };


  



  return (
    <>
        <NextSeo
        title="Book Your Appointment | Dr. Anivita Aggarwal"
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
                <p className="text-foreground"></p>
              </FadeUp>
            </div>
                <div>
              <FadeUp key="phoneandemail" duration={0.6}>
                <h2 className="text-xl md:text-2xl font-semibold mb-3 text-accent">Contact Information</h2>
                <p className="text-foreground flex items-center mb-2"><FaEnvelope className="mr-2 text-accent" /> anivita.aggarwal@sgrh.com</p>
                <p className="text-foreground flex items-center"><FaPhone className="mr-2 text-accent" />+91-8287186636</p>
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
                  <form onSubmit={finalHandleSubmit} className="space-y-6">
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
                          value={formData[field.id as keyof FormData]}
                          onChange={handleChange}
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
                        value={formData.message}
                        onChange={handleChange}
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