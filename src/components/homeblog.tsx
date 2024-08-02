import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { blogPosts, ContentItem } from "@/data/blogPosts";
//import dynamic from 'next/dynamic';

// const MotionDiv = dynamic(() => import('framer-motion').then((mod) => mod.motion.div), {
//     ssr: false,
// })


const HomeBlog = () => {
    const [isClient, setIsClient] = useState(false);
    const featuredPost = blogPosts[0];
    const latestPost = blogPosts[1];

    const featuredHeadings = featuredPost.content
        .filter((item): item is ContentItem & { type: 'heading' } => item.type === 'heading')
        .slice(0, 3);


    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null;
    }

    return (
        <section className="py-16 my-8 relative overflow-hidden">
            {/* <div className="absolute inset-0 bg-orange-200 opacity-10 z-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute bottom-0">
                    <path fill="#F3F4F6" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,133.3C672,139,768,181,864,197.3C960,213,1056,203,1152,181.3C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
            </div> */}

            <div className="container mx-auto relative px-4">
                <div>
                    <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">Latest Insights</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Left side: Featured post headings */}
                    <motion.div className="space-y-4">
                        <h3 className="text-2xl font-semibold text-gray-800">{featuredPost.title}</h3>
                        <ul className="space-y-2 text-gray-700">
                            {featuredHeadings.map((heading, index) => (
                                <li key={index} className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span>{heading.content}</span>
                                </li>
                            ))}
                        </ul>

                        {/* <motion.div
                            className="inline-block text-gray-600 hover:text-gray-700 font-medium mt-4 cursor-pointer"
                            whileHover={{ scale: 1.05 }}>
                            <Link href={`/blog/${featuredPost.slug}`}>
                                Read More
                            </Link>
                        </motion.div> */}
                        <Link href={`/blog/${featuredPost.slug}`}>
                            <motion.div
                                className="inline-block text-gray-600 hover:text-gray-700 font-medium mt-4 cursor-pointer"
                                whileHover={{ scale: 1.05 }}
                            >
                                Read More
                            </motion.div>
                        </Link>
                    </motion.div>

                    {/* Right side: Blog card */}
                    <div className="relative m-4">  {/* Add this wrapper div */}
                        <div className="absolute top-0 left-0 bg-red-500 text-white px-2 py-1 rounded-tr-lg rounded-bl-lg text-sm font-semibold z-8">
                            Pinned Post
                        </div>
                        <motion.div
                            className="block cursor-pointer"
                            whileHover={{ scale: 1.03 }}
                            transition={{ duration: 0.2 }}
                        >
                            <Link href={`/blog/${latestPost.slug}`}>
                                <div className="bg-white p-6 rounded-lg shadow-md mt-2">
                                    <h3 className="text-2xl font-semibold mb-2 text-gray-800">{latestPost.title}</h3>
                                    <div className="text-sm text-gray-600 mb-2">
                                        {latestPost.date}
                                    </div>
                                    <p className="text-gray-700 mb-4">{latestPost.excerpt}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {latestPost.tags.slice(0, 3).map((tag, index) => (
                                            <span key={index} className="bg-coffee text-orange-800 text-xs px-2 py-1 rounded-full">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    </div>

                </div>
                <div className="text-center mt-8">
                    <Link href="/blog" className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-md font-medium rounded-md text-white bg-gray-950 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 transition duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl">
                        View All Blogs
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default HomeBlog;