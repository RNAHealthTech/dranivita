import React from "react";
import { siteMetadata } from "@/data/siteMetaData.mjs";
import { NextSeo } from "next-seo";
import Link from "next/link";
import { blogPosts } from "@/data/blogPosts";



const Blog: React.FC = () => {
  return (
    <>
      <NextSeo
        title="Blogs by Dr. Anivita Aggarwal"
        description=""
        canonical={`${siteMetadata.siteUrl}/blog`}
        openGraph={{
          url: `${siteMetadata.siteUrl}/blog`,
          title: "Dr. Anivita Aggarwal - Best Infectiologist in Delhi",
          description:
            "Read blogs written by Dr. Anivita Aggarwal. Dr. Aggarwal is a expert at treating Infectious diseases"
        }}
        twitter={{
          cardType: "summary_large_image"
        }}
        additionalMetaTags={[
          {
            property: "keywords",
            content: "Contact,blog,Dr. Setu Gupta, Endocrinologist, Delhi, Adult Endocrine, Pediatric Endocrine, Diabetes Specialist, Metabolism Specialist, Sir Ganga Ram Hospital, Karuna Hospital, Dilshad Garden"
          }
        ]}
      />
      <main className="container mx-auto px-4 py-8">
      
        <h1 className="text-4xl font-bold mb-4 text-accent text-center">Personal Blog</h1>
        <p className="text-muted-foreground mb-8">Latest Research and Perspectives by Dr. Anivita Aggarwal</p>

        <div className="space-y-8">
          {blogPosts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.slug}>
              <div className="bg-muted p-6 mt-6 rounded-lg hover:shadow-md transition-shadow">
                <h2 className="text-2xl font-semibold mb-2 text-accent">{post.title}</h2>
                <div className="text-sm text-muted-foreground mb-2">
                  {post.date}
                  <span className="mx-2">•</span>
                  <time dateTime={post.date}></time>
                </div>
                <p className="text-foreground">{post.excerpt}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {post.tags.slice(0, 3).map((tag, index) => (
                    <span key={index} className="bg-coffee text-black text-xs px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}

                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </>

  )
}

export default Blog;