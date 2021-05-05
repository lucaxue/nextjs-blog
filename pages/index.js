import Link from 'next/link';
import fs from 'fs';

const Home = ({ slugs }) => (
  <div
    style={{
      display: 'grid',
      placeItems: 'center',
      background: '#f9f9f9',
      minHeight: '100vh',
    }}
  >
    <div
      style={{
        display: 'grid',
        placeItems: 'center',
        fontFamily: 'arial',
        borderRadius: '5px',
        boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
        padding: '2.5rem 5rem',
        background: 'white',
        maxWidth: 'max-content',
      }}
    >
      <h1>Check out my blogs!</h1>
      <ul>
        {slugs.map((slug) => (
          <li key={slug}>
            <Link href={'/blog/' + slug}>{'/blog/' + slug}</Link>
          </li>
        ))}
      </ul>
    </div>
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
