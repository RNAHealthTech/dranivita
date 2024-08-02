import { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaVirus, FaVirusSlash, FaBacteria, FaHospitalUser } from 'react-icons/fa';
import dynamic from 'next/dynamic'

const MotionDiv = dynamic(() => import('framer-motion').then((mod) => mod.motion.div), {
    ssr: false,
})



const services = [
    {
        icon: FaVirus,
        title: 'Fever of Unknown Origin',
        description: 'Expert diagnosis and management of complex fever cases with unknown causes.'
    },
    {
        icon: FaVirusSlash,
        title: 'HIV and Tuberculosis',
        description: 'Comprehensive care and treatment for HIV and difficult-to-treat Tuberculosis cases.'
    },
    {
        icon: FaBacteria,
        title: 'Fungal Infections',
        description: 'Specialized treatment for various fungal infections, including invasive and resistant strains.'
    },
    {
        icon: FaHospitalUser,
        title: 'Transplant Infections',
        description: 'Dedicated care for managing infections in transplant (HSCT and SOT) patients.'
    }

];

const HomeServices = () => {

    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null;
    }

    return (
        <section className="py-16 bg-white rounded-3xl my-8  mt-16">
            <div className="container mx-auto px-4">
                <div>
                    <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">Our Services</h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <MotionDiv
                            key={index}
                            className="bg-coffee p-6 rounded-lg shadow-md text-center cursor-pointer"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                        >
                            <service.icon className="text-4xl text-slate-500 mb-4 mx-auto" />
                            <div>
                                <h3 className="text-xl font-semibold mb-2 text-gray-800">{service.title}</h3>
                                <p className="text-gray-600">{service.description}</p>
                            </div>
                        </MotionDiv>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <Link href="/services" className="inline-flex items-center justify-center px-6 py-4 border border-transparent text-md font-medium rounded-md text-white bg-gray-950 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 transition duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                        Explore All Services
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default HomeServices;