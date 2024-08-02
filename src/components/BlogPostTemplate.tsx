// components/BlogPostTemplate.tsx

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BlogPost, ContentItem } from '@/data/blogPosts';

const BlogPostTemplate: React.FC<BlogPost> = ({ title, date, content, tags }) => {
    const tableOfContents = content.filter((item): item is Extract<ContentItem, { type: 'heading' }> => item.type === 'heading');

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-8 relative overflow-hidden">
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-orange-100 opacity-20"></div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute bottom-0">
                    <path fill="#F3F4F6" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,133.3C672,139,768,181,864,197.3C960,213,1056,203,1152,181.3C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
            </div>
            <div className="lg:flex lg:justify-between relative z-8">
                <article className="lg:w-2/3">
                    <header className="mb-8">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">{title}</h1>
                        <div className="flex items-center text-gray-600">
                            <time dateTime={date}>
                                {new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                            </time>
                        </div>
                    </header>

                    <div className="prose prose-lg max-w-none">
                        {content.map((item, index) => {
                            switch (item.type) {
                                case 'paragraph':
                                    return <p key={index} className="mb-6 text-gray-800 leading-relaxed">{item.content}</p>;
                                case 'heading':
                                    return <h2 id={item.id} key={index} className="text-2xl font-bold text-gray-900 mt-8 mb-4">{item.content}</h2>;
                                case 'image':
                                    return (
                                        <figure key={index} className="my-8">
                                            <Image src={item.src} alt={item.alt || ''} width={800} height={600} className="w-full rounded-lg shadow-lg" />
                                            {item.alt && <figcaption className="mt-2 text-sm text-center text-gray-600">{item.alt}</figcaption>}
                                        </figure>
                                    );
                                case 'list':
                                    return (
                                        <ul key={index} className="list-disc pl-6 mb-6">
                                            {item.content.map((li, liIndex) => (
                                                <li key={liIndex} className="mb-2 text-gray-800">{li}</li>
                                            ))}
                                        </ul>
                                    );
                            }
                        })}
                    </div>

                    <footer className="mt-12 relative z-8">
                        <div className="flex flex-wrap gap-2">
                            {tags.map((tag, index) => (
                                <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </footer>
                </article>

                <aside className='lg:w-1/4 mt-8 lg:mt-0'>
                    <div className="sticky top-8">
                        <h3 className="text-lg font-semibold mb-4">Table of Contents</h3>
                        <nav>
                            <ul className="space-y-2">
                                {tableOfContents.map((heading, index) => (
                                    <li key={index}>
                                        <Link href={`#${heading.id}`} className="text-neutral-400 hover:text-orange-800">
                                            {heading.content}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default BlogPostTemplate;