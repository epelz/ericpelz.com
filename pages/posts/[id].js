import Layout from '../../components/layout';
import Head from 'next/head';

import Date from '../../components/date';
import { getAllPostIds, getPostData } from '../../lib/posts';

import utilStyles from '../../styles/utils.module.css';

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData }) {
    return (
      <Layout bioOnFooter title={postData.title || "Eric Pelz"} otherAuthors>
        <article>
          <h1 className={utilStyles.headingXl}>{postData.title}</h1>
          <div className={utilStyles.lightText}>
            { /* If this was co-authored, add the full set of authors to the top. */ }
            {((postData.otherAuthors || []).length > 0) ? (["Eric Pelz", ...postData.otherAuthors].join(", ") + " - ") : ("")}
            <Date dateString={postData.date} />
          </div>
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>
      </Layout>
    );
  }