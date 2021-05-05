import React from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import marked from 'marked';
import Head from 'next/head';
import Link from 'next/link';

const Post = ({ htmlString, data }) => (
  <>
    <Head>
      <title>{data.title}</title>
    </Head>
    <div
      style={{
        display: 'grid',
        placeItems: 'center',
        fontFamily: 'arial',
        background: '#f9f9f9',
        minHeight: '100vh',
      }}
    >
      <div
        style={{
          maxWidth: '50rem',
          borderRadius: '5px',
          boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
          padding: '2.5rem 5rem',
          background: 'white',
          margin: '2rem 0',
        }}
        dangerouslySetInnerHTML={{ __html: htmlString }}
      />

      <Link href="/">Go back home</Link>
    </div>
  </>
);

export const getStaticPaths = async () => {
  const files = fs.readdirSync('posts');
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const markdownWithMetadata = fs.readFileSync(
    path.join('posts', slug + '.md'),
    'utf-8'
  );

  const parsedMarkdown = matter(markdownWithMetadata);

  const htmlString = marked(parsedMarkdown.content);

  return {
    props: {
      htmlString,
      data: parsedMarkdown.data,
    },
  };
};

export default Post;
