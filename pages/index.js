import Link from 'next/link';
import fs from 'fs';

const Home = ({ slugs }) => (
  <div style={{ display: 'grid', placeItems: 'center' }}>
    <h1>Check out my blogs!</h1>
    <ul>
      {slugs.map((slug) => (
        <li key={slug}>
          <Link href={'/blog/' + slug}>{'/blog/' + slug}</Link>
        </li>
      ))}
    </ul>
  </div>
);

export const getStaticProps = async () => {
  const files = fs.readdirSync('posts');
  return {
    props: {
      slugs: files.map((filename) => filename.replace('.md', '')),
    },
  };
};

export default Home;
