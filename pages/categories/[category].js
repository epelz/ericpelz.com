import Head from "next/head";
import Layout, { siteTitle } from "../../components/layout";
import { getSortedPostsData, getAllCategoryIds } from "../../lib/posts";
import Link from "next/link";
import Bio from "../../components/bio";
import PostSection from "../../components/post_section";

export async function getStaticProps({ params }) {
  // Only show the most recent 3 highlighted posts
  const postsData = getSortedPostsData({ category: params.category });
  return {
    props: {
      sectionTitle:
        params.category === "highlight"
          ? "Top blog posts"
          : `Posts about ${params.category}`,
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
  return (
    <Layout title={siteTitle}>
      <Bio />

      <PostSection sectionTitle={sectionTitle} postsData={postsData} />
    </Layout>
  );
}
