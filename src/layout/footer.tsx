import Link from 'next/link';
import { LinkedinIcon, XIcon, FacebookIcon } from "@/components/icons";
import { siteMetadata } from "@/data/siteMetaData.mjs";
import React from 'react';
import { PhoneCallIcon, MailIcon, MapPinned } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';
import FadeUp from '@/animation/fade-up';
import FadeRight from '@/animation/fade-right';
//import Image from 'next/image';

const FooterLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
  <Link href={href} className="hover:underline transition-all duration-300 text-white/80 hover:text-white">
    {children}
  </Link>
);

const SocialLink = ({ href, icon: Icon }: { href: string, icon: React.ElementType }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
    <Icon className="h-6 w-6" />
  </a>
);


export default function Footer() {
  return (
    <AnimatePresence>
      <footer className="w-full bg-gradient-to-r from-[#6e5e5d] to-[#3b2e2d] grid-pattern text-white rounded-t-[3rem] shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="flex flex-col md:flex-row justify-between">
            {/* Column 1: About */}

            {/* <div className="w-full md:w-1/3 mb-8 md:mb-0 flex flex-col items-start">  */}
            <div className="w-full md:w-1/3 mb-8 md:mb-0 flex flex-col items-start">
              <FadeUp key="footer-heading" whileInView duration={0.6}>
                <h3 className="text-3xl md:text-2xl lg:text-4xl font-semibold ml-2 mb-2">Dr. Anivita Aggarwal</h3>
                <p className="text-xs md:text-sm text-white/80 mt-4 mb-6 max-w-xs">
                  Infectious Diseases consultant with extensive experience in managing difficult to treat infections, including transplant-related infections, HIV, Tuberculosis, and COVID-19.
                </p>
              </FadeUp>
              <FadeRight key="footer-socials" duration={0.6}>
                <div className="flex space-x-4">
                  <SocialLink href={siteMetadata.linkedin} icon={LinkedinIcon} />
                  <SocialLink href={siteMetadata.facebook} icon={FacebookIcon} />
                  <SocialLink href={siteMetadata.twitter} icon={XIcon} />
                </div>
              </FadeRight>
            </div>

            {/* Wrapper for Quick Links, Office Hours, and Contact Us */}
            {/* <div className="w-full md:w-3/4 flex flex-col md:flex-row"> */}
            <div className="w-full md:w-2/3 flex flex-col md:flex-row">
            <div className="flex flex-row md:flex-nowrap mb-8 md:mb-0 md:ml-8">
                {/* Column 2: Quick Links */}
                <FadeUp key="footer-links" whileInView duration={0.6}>
                  <div className="w-1/2 md:w-1/3 pr-2">
                    <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-4">Quick Links</h3>
                    <ul className="space-y-1 md:space-y-2">
                      <li><FooterLink href="/">Home</FooterLink></li>
                      <li><FooterLink href="/services">Services</FooterLink></li>
                      <li><FooterLink href="/about">About</FooterLink></li>
                      <li><FooterLink href="/contact">Contact</FooterLink></li>
                    
                    </ul>
                  </div>
                </FadeUp>

                {/* Column 3: Office Hours */}
                <FadeUp key="footer-office" whileInView duration={0.6}>
                  <div className="w-1/2 md:w-1/3 pl-2 ">
                    <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-4">OPD Hours</h3>
                    <ul className="space-y-1 md:space-y-2 text-xs md:text-sm text-white/80">
                      <li>Mon, Wed, Fri: 06:00 PM - 08:00 PM (Room No. F-30)</li>
                      <li>Friday: 11:00 AM - 12:00 PM (Room No. G-1)</li>
                    </ul>
                  </div>
                </FadeUp>
              </div>

              {/* Column 4: Contact Information */}
              <div className="w-full md:w-1/3 mt-8 md:mt-0">
                <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-4">Contact</h3>
                <FadeRight key="footer-icons" whileInView duration={0.6}>
                  <div className="space-y-1 md:space-y-2">
                    {[
                      { icon: <PhoneCallIcon className="h-4 w-4 md:h-5 md:w-5" href="tel:+011-42254000" />, content: "+011-42254000" },
                      { icon: <MailIcon className="h-4 w-4 md:h-5 md:w-5" href="mailto:anivita.aggarwal@sgrh.com" />, content: "anivita.aggarwal@sgrh.com" },
                      { icon: <MapPinned className="h-4 w-4 md:h-5 md:w-5" />, content: "Sir Ganga Ram Hospital, New Delhi" },
                    ].map((item, index) => (
                      <p key={index} className="flex items-center space-x-2">
                        <span className="material-icons text-lg">{item.icon}</span>
                        <span className="text-xs md:text-sm text-white/80">{item.content}</span>
                      </p>
                    ))}
                  </div>
                </FadeRight>
              </div>
            </div>
          </div>
          <FadeUp key="footer-last" duration={0.6} >
            <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-white/20 flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-xs md:text-sm text-white/80">&copy; {new Date().getFullYear()} Dr. Anivita Aggarwal. All rights reserved.</p>

              <p className="text-xs md:text-sm text-white/80">
                Created by <a href="https://rnahealthtech.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors">RNA HealthTech</a>
              </p>
            </div>
          </FadeUp>
        </div>
      </footer>
    </AnimatePresence>
  );
}
