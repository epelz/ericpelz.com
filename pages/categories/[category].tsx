import Head from "next/head";
import Layout, { siteTitle } from "../../components/layout";
import { Post, getSortedPostsData, getAllCategoryIds } from "../../lib/posts";
import { GetStaticProps, GetStaticPaths } from "next";
import { ParsedUrlQuery } from "querystring";
import Bio from "../../components/bio";
import PostSection from "../../components/post_section";

interface PageParams extends ParsedUrlQuery {
  category: string;
}

interface PageProps {
  sectionTitle: string;
  postsData: Post[];
}

export const getStaticProps: GetStaticProps<PageProps, PageParams> = async (
  context
) => {
  const { category } = context.params!;
  // Only show the most recent 3 highlighted posts
  const postsData = getSortedPostsData({ category });
  return {
    props: {
      sectionTitle:
        category === "highlight" ? "Top blog posts" : `Posts about ${category}`,
      postsData,
    },
  };
};

export const getStaticPaths: GetStaticPaths<PageParams> = async () => {
  const paths = getAllCategoryIds();
  return {
    paths,
    fallback: false,
  };
};

export default function Category({ sectionTitle, postsData }: PageProps) {
  return (
    <Layout title={siteTitle}>
      <Bio />

      <PostSection sectionTitle={sectionTitle} postsData={postsData} />
    </Layout>
  );
}
