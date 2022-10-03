import Head from 'next/head';
import Layout, { siteTitle } from '../../components/layout';
import { getSortedPostsData, getAllCategoryIds } from '../../lib/posts';
import Link from 'next/link';
import Bio from '../../components/bio';
import PostSection from '../../components/post_section';

export async function getStaticProps({ params }) {
  // Only show the most recent 3 highlighted posts
  const postsData = getSortedPostsData({ category: params.category });
  return {
    props: {
      sectionTitle: params.category === "highlight" ? "Top blog posts" : `Posts about ${params.category}`,
      postsData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllCategoryIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Category({ sectionTitle, postsData }) {
  // TODO: Link to all engineering posts and food posts.
  // i.e.: https://github.com/epelz/ericpelz.com/blob/develop/src/pages/index.js#L70
  // TODO: Style code blocks with css
  // TODO: Switch to TS: https://nextjs.org/docs/basic-features/typescript
  // TODO: Consider where to deploy:
  //   GH pages https://lukaszwozniak.dev/blog/deploy-nextjs-app-to-github-pages-using-github-actions
  //   Or Vercel directly
  // TODO: Add redirects for old URL formats: https://nextjs.org/docs/api-reference/next.config.js/redirects
  // TODO: Check other things https://nextjs.org/docs/migrating/from-gatsby
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Bio />

      <PostSection sectionTitle={sectionTitle} postsData={postsData} />
    </Layout>
  );
}
