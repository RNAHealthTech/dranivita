import React, { useState, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { FaUserMd, FaCalendarAlt, FaClinicMedical } from 'react-icons/fa';
import dynamic from 'next/dynamic';

// Import FadeUp with proper SSR handling
const FadeUp = dynamic(() => import("@/animation/fade-up"), { 
  ssr: false,
  loading: () => <div style={{ opacity: 0 }}>Loading...</div>
});

interface FormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  message: string;
  [key:string]: string;
}

const BookAppointment = () => {
  const [state, submitToFormspree] = useForm("xqabqayb");

  const [mounted, setMounted] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    name: "", 
    email: "", 
    phone: "", 
    date: "", 
    message: ""
  });

  // Use mounted instead of isClient for better naming
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = e.target;
    setFormData((prev: FormData) => ({
      ...prev, 
      [name]: value, 
    }));
  };

  const sendWhatsAppMessage = () => {
    const message = `New Appointment Request : 
    Name: ${formData.name}, 
    Phone: ${formData.phone},
    Email: ${formData.email}, 
    Date: ${formData.date}, 
    Message: ${formData.message}`;

    const whatsappNumber = "918826766636";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  }

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

  // Simplified FormField component that doesn't cause hydration issues
  const FormField = ({ children, animationKey }: { children: React.ReactNode, animationKey: string }) => {
    // Only render with animation after component has mounted
    if (mounted) {
      return (
        <FadeUp key={animationKey} duration={0.6}>
          {children}
        </FadeUp>
      );
    }
    // Render without animation on server and initial client render
    return <div key={animationKey}>{children}</div>;
  };

  // Don't render anything until mounted to avoid hydration issues
  if (!mounted) {
    return (
      <section className="py-16 my-8 relative overflow-hidden">
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
                  description="Consult with an infectious disease expert from AIIMS"
                />
                <FeatureCard
                  icon={<FaCalendarAlt className="text-zinc-500" />}
                  title="Flexible Scheduling"
                  description="Choose a time that suits you best"
                />
                <FeatureCard
                  icon={<FaClinicMedical className="text-zinc-500" />}
                  title="State-of-the-art Facility"
                  description="OPD at Sir Ganga Ram Hospital"
                />
              </div>
            </div>
            <div className="w-full md:w-2/3">
              {/* Loading placeholder */}
              <div className="max-w-lg mx-auto opacity-50">
                <div className="space-y-4">
                  <div className="h-10 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-10 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-10 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-10 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-20 bg-gray-200 rounded animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 my-8 relative overflow-hidden">
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
                description="Consult with an infectious disease expert from AIIMS"
              />
              <FeatureCard
                icon={<FaCalendarAlt className="text-zinc-500" />}
                title="Flexible Scheduling"
                description="Choose a time that suits you best"
              />
              <FeatureCard
                icon={<FaClinicMedical className="text-zinc-500" />}
                title="State-of-the-art Facility"
                description="OPD at Sir Ganga Ram Hospital"
              />
            </div>
          </div>
          <div className="w-full md:w-2/3">
            {state.succeeded ? (
              <div className="text-green-600 text-lg mb-4 text-center">
                Thank you for your booking. We will contact you soon to confirm your appointment.
              </div>
            ) : (
              <form onSubmit={finalHandleSubmit} className="max-w-lg mx-auto">
                <FormField animationKey="name">
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent focus:border-accent"
                    />
                  </div>
                </FormField>
                
                <FormField animationKey="email">
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent focus:border-accent"
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                  </div>
                </FormField>
                
                <FormField animationKey="phone">
                  <div className="mb-4">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent focus:border-accent"
                    />
                  </div>
                </FormField>
                
                <FormField animationKey="date">
                  <div className="mb-4">
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent focus:border-accent"
                    />
                  </div>
                </FormField>
                
                <FormField animationKey="message">
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message (Optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent focus:border-accent"
                    ></textarea>
                  </div>
                </FormField>
                
                <FormField animationKey="contact">
                  <div className="text-center">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-md text-white bg-gradient-to-r from-[#6e5e5d] to-[#3b2e2d] hover:from-[#5f4a49] hover:to-[#4b3e3d] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4f3a39] transition duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                      Book Appointment
                    </button>
                  </div>
                </FormField>
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
      <h3 className="text-xl font-semibold text-zinc-600">{title}</h3>
      <p className="text-zinc-400">{description}</p>
    </div>
  </div>
);

export default BookAppointment;