import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';

export async function getStaticProps() {
  const postsData = getSortedPostsData({ category: "engineering" });
  return {
    props: {
      postsData,
    },
  };
}

export default function Home({ postsData }) {
  // TODO: Limit num of posts, and link to all engineering posts and food posts.
  // i.e.: https://github.com/epelz/ericpelz.com/blob/develop/src/pages/index.js#L70
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
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {postsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
