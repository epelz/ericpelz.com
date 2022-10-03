import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import styles from './index.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';
import Bio from '../components/bio';
import PostSection from '../components/post_section';
import { FaGithubAlt, FaLinkedin, FaTwitter } from "react-icons/fa";

export async function getStaticProps() {
  // Only show the most recent 3 highlighted posts
  const postsData = getSortedPostsData({ category: "highlight", limit: 3 });
  return {
    props: {
      postsData,
    },
  };
}

export default function Home({ postsData }) {
  // TODO: Style code blocks with css
  // TODO: Switch to TS: https://nextjs.org/docs/basic-features/typescript
  // TODO: Consider where to deploy:
  //   GH pages https://lukaszwozniak.dev/blog/deploy-nextjs-app-to-github-pages-using-github-actions
  //   Or Vercel directly
  // TODO: Add redirects for old URL formats: https://nextjs.org/docs/api-reference/next.config.js/redirects
  // TODO: Check other things https://nextjs.org/docs/migrating/from-gatsby
//   <SEO
//   keywords={[
//     `blog`,
//     `javascript`,
//     `typescript`,
//     `react`,
//     `simplicity`,
//     `engineering`,
//     `coding`,
//     `product`,
//   ]}
// />
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Bio />
      <section>
        <h1 className={styles.iconRow}>
        <a className={styles.socialIcon} href="https://www.github.com/epelz/"><FaGithubAlt /></a>
        <a className={styles.socialIcon} href="https://www.linkedin.com/in/epelz/"><FaLinkedin /></a>
        <a className={styles.socialIcon} href="https://twitter.com/PelzEric"><FaTwitter /></a>
        </h1>
      </section>

      <PostSection sectionTitle="Blog posts" postsData={postsData}>
        <small>
          See all <Link href="/categories/engineering">engineering posts</Link>.
          I also like to cook, and <Link href="/categories/food">occasionally</Link> post recipes.
        </small>
      </PostSection>
    </Layout>
  );
}
