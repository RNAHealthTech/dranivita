import { GetStaticProps, GetStaticPaths } from 'next';
import BlogPostTemplate from '@/components/BlogPostTemplate';
import { blogPosts, BlogPost  } from '@/data/blogPosts';
import React from 'react';

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = blogPosts.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = blogPosts.find((p) => p.slug === params?.slug);

  if (!post) {
    return { notFound: true };
  }

  return { props: { post } };
};

const BlogPostPage: React.FC<{post: BlogPost}> = ({post}) => {
  return <BlogPostTemplate {...post} />;
};

export default BlogPostPage;

