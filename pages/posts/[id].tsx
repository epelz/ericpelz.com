import Layout from "../../components/layout";
import { GetStaticProps, GetStaticPaths } from "next";
import { ParsedUrlQuery } from "querystring";
import Date from "../../components/date";
import { getAllPostIds, getPostData, DetailedPost } from "../../lib/posts";

import utilStyles from "../../styles/utils.module.css";

interface PageParams extends ParsedUrlQuery {
  id: string;
}

interface PageProps {
  postData: DetailedPost;
}

export const getStaticProps: GetStaticProps<PageProps, PageParams> = async (
  context
) => {
  const postData = await getPostData(context.params!.id);
  return {
    props: {
      postData,
    },
  };
};

export const getStaticPaths: GetStaticPaths<PageParams> = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export default function Post({ postData }: PageProps) {
  return (
    <Layout bioOnFooter title={postData.title || "Eric Pelz"}>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          {/* If this was co-authored, add the full set of authors to the top. */}
          {(postData.otherAuthors || []).length > 0
            ? ["Eric Pelz", ...postData.otherAuthors].join(", ") + " - "
            : ""}
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}
