import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';
import Bio from '../components/bio';
import PostSection from '../components/post_section';

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
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Bio />

      <PostSection sectionTitle="Blog posts" postsData={postsData}>
        <small>
          See all <Link href="/categories/engineering">engineering posts</Link>.
          I also like to cook, and <Link href="/categories/food">occasionally</Link> post recipes.
        </small>
      </PostSection>
    </Layout>
  );
}
