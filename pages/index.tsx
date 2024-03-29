import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import styles from "./index.module.css";
import { Post, getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import Bio from "../components/bio";
import PostSection from "../components/post_section";
import { FaGithubAlt, FaLinkedin, FaTwitter } from "react-icons/fa";

export async function getStaticProps(): Promise<{
  props: { postsData: Post[] };
}> {
  // Only show the most recent 3 highlighted posts
  const postsData = getSortedPostsData({ category: "highlight", limit: 3 });
  return {
    props: {
      postsData,
    },
  };
}

export default function Home({ postsData }: { postsData: Post[] }) {
  return (
    <Layout home title={siteTitle}>
      <Bio />
      <section>
        <h1 className={styles.iconRow}>
          <a className={styles.socialIcon} href="https://www.github.com/epelz/">
            <FaGithubAlt />
          </a>
          <a
            className={styles.socialIcon}
            href="https://www.linkedin.com/in/epelz/"
          >
            <FaLinkedin />
          </a>
        </h1>
      </section>

      <PostSection sectionTitle="Posts" postsData={postsData}>
        <small>
          See all <Link href="/categories/engineering">engineering posts</Link>.
          I also like to cook, and{" "}
          <Link href="/categories/food">occasionally</Link> post recipes.
        </small>
      </PostSection>
    </Layout>
  );
}
