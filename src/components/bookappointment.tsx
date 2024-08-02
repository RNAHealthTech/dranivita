import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { AnimatePresence, motion } from 'framer-motion';
import FadeUp from "@/animation/fade-up";
import { FaUserMd, FaCalendarAlt, FaClinicMedical } from 'react-icons/fa';

const BookAppointment = () => {
  const [state, handleSubmit] = useForm("xblrdjdp");

  return (
    <section className="py-16 my-8 relative overflow-hidden">
      <div  className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-orange-100 opacity-20"></div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute bottom-0">
          <path fill="#FFF" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,133.3C672,139,768,181,864,197.3C960,213,1056,203,1152,181.3C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
        
      </div>
      <div className="container mx-auto px-4 relative z-8">
        <h2 className="text-3xl font-bold mb-8 text-accent text-center">Book An Appointment</h2>
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <p className="text-xl text-accent mb-8">
              Schedule a consultation with Dr. Anivita Aggarwal today.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 text-gray-500">
              <FeatureCard
                icon={<FaUserMd className="text-zinc-500" />}
                title="Expert Care"
                description="Consult with a leading endocrinologist"
              />
              <FeatureCard
                icon={<FaCalendarAlt className="text-zinc-500" />}
                title="Flexible Scheduling"
                description="Choose a time that suits you best"
              />
              <FeatureCard
                icon={<FaClinicMedical className="text-zinc-500" />}
                title="State-of-the-art Facility"
                description="Visit our modern clinic at Sir Ganga Ram Hospital"
              />
            </div>
          </div>
          <div className="w-full md:w-2/3">
            {state.succeeded ? (
              <motion.p
                className="text-green-600 text-lg mb-4 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                Thank you for your booking. We will contact you soon to confirm your appointment.
              </motion.p>
            ) : (
              <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
                <AnimatePresence>
                  <FadeUp key="name" duration={0.6}>
                    <div className="mb-4">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent focus:border-accent"
                      />
                    </div>
                  </FadeUp>
                  <FadeUp key="email" duration={0.6}>
                    <div className="mb-4">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent focus:border-accent"
                      />
                      <ValidationError prefix="Email" field="email" errors={state.errors} />
                    </div>
                  </FadeUp>
                  <FadeUp key="phone" duration={0.6}>
                    <div className="mb-4">
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent focus:border-accent"
                      />
                    </div>
                  </FadeUp>
                  <FadeUp key="date" duration={0.6}>
                    <div className="mb-4">
                      <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        required
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent focus:border-accent"
                      />
                    </div>
                  </FadeUp>
                  <FadeUp key="message" duration={0.6}>
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message (Optional)
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent focus:border-accent"
                      ></textarea>
                    </div>
                  </FadeUp>
                  <FadeUp key="contact" duration={0.6}>
                    <div className="text-center">
                      <motion.button
                        type="submit"
                        className="inline-flex items-center justify-center px-6 py-4 border border-transparent text-md font-medium rounded-md text-white bg-gray-950 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 transition duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Book Appointment
                      </motion.button>
                    </div>
                  </FadeUp>
                </AnimatePresence>
              </form>
            )}
          </div>
        </div>
      </div>
     
    </section>
  );
};


interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div className="flex items-center space-x-4">
    <div className="text-4xl">{icon}</div>
    <div>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="text-zinc-400">{description}</p>
    </div>
  </div>
);


export default BookAppointment;