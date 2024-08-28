import { useEffect, useState, useRef, RefObject } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaVirus, FaSyringe, FaBone, FaBug, FaShieldVirus, FaPlane } from 'react-icons/fa';
import dynamic from 'next/dynamic'


interface Service {
    image: string,
    title: string,
    description: string,
    icon: React.ComponentType<{ className: string }>
}

const MotionDiv = dynamic(() => import('framer-motion').then((mod) => mod.motion.div), {
    ssr: false,
})

const services = [
    {
      icon: FaSyringe,
      title: 'Adult Vaccination',
      description: 'Tailored vaccination plans for adults to prevent infectious diseases.',
      image: '/images/vaccination.jpg'
    },
    {
      icon: FaBone,
      title: 'Bone & Joint Infections',
      description: 'Diagnosis and treatment of infections affecting bones and joints.',
      image: '/images/bone-joint.jpg'
    },
    {
      icon: FaBug,
      title: 'Parasitic Diseases',
      description: 'Management of infections caused by parasites, including diagnosis and treatment.',
      image: '/images/parasitic.jpg'
    },
    {
      icon: FaShieldVirus,
      title: 'Immunodeficiencies',
      description: 'Evaluation and treatment of disorders affecting the immune system.',
      image: '/images/immunodeficiency.jpg'
    },
    {
      icon: FaVirus,
      title: 'Viral Infections',
      description: 'Comprehensive care for various viral infections and their complications.',
      image: '/images/infection.jpg'
    },
    {
      icon: FaPlane,
      title: 'Travel Advice',
      description: 'Pre-travel consultations and vaccinations for international travelers.',
      image: '/images/travel.jpg'
    }
  ]

const HomeServices = () => {
    const [isClient, setIsClient] = useState(false);
    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const [showExploreButton, setShowExploreButton] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const sectionRef: RefObject<HTMLDivElement> = useRef(null);

    useEffect(() => {
        setIsClient(true);
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        if (!isMobile || !sectionRef.current) return;

        const handleScroll = () => {
            const sectionRect = sectionRef.current!.getBoundingClientRect();
            const sectionHeight = sectionRect.height;
            const sectionTop = sectionRect.top;
            const windowHeight = window.innerHeight;

            const scrollProgress = (windowHeight - sectionTop) / sectionHeight;
            const newIndex = Math.min(Math.floor(scrollProgress * services.length), services.length - 1);

            setCurrentCardIndex(newIndex);
            setShowExploreButton(scrollProgress >= 1);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isMobile]);

    if (!isClient) {
        return null;
    }

    const renderCard = (service: Service, index: number) => (
        <MotionDiv
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="relative h-48 w-full ring-1 ring-zinc-100/50 backdrop-blur-md">
                <Image
                    src={service?.image}
                    alt={service?.title}
                    layout="fill"
                    objectFit="cover"
                />

            </div>
            <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{service?.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{service?.description}</p>

            </div>
        </MotionDiv>
    );

    return (
        <section ref={sectionRef} className="py-16 bg-gray-50 rounded-3xl my-8 mt-8 relative">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold mb-6 text-gray-800 text-center">Our Specialized Services</h2>
                {isMobile ? (
                    <div style={{ height: `${services.length * 80}vh` }}>
                        <div className="sticky top-10 h-[calc(100vh-10rem)] flex items-center justify-center">
                            {renderCard(services[currentCardIndex], currentCardIndex)}
                        </div>
                    </div>
                ) : (
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((service, index) => renderCard(service, index))}
                    </div>
                )}
                <div className={`text-center mt-8 ${isMobile ? 'sticky bottom-4 z-10' : ''}`}>
                    <Link href="/services" className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-md 
                    text-white bg-gradient-to-r from-[#6e5e5d] to-[#3b2e2d] hover:from-[#5f4a49] hover:to-[#4b3e3d] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4f3a39] transition duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl">
                        Explore All Services
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default HomeServices;