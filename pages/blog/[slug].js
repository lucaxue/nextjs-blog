import React from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import marked from 'marked';
import Head from 'next/head';
import Link from 'next/link';

const Post = ({ htmlString, data }) => {
  return (
    <>
      <Head>
        <title>{data.title}</title>
      </Head>
      <div
        style={{ display: 'grid', placeItems: 'center', fontFamily: 'arial' }}
      >
        <div style={{ maxWidth: '50rem' }}>
          <div dangerouslySetInnerHTML={{ __html: htmlString }} />
        </div>
        <Link href="/">Go back home</Link>
      </div>
    </>
  );
};

export const getStaticPaths = async () => {
  const files = fs.readdirSync('posts');
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }));

  console.log('files: ', files);
  console.log('paths: ', paths);

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
