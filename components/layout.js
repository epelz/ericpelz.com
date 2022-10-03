import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Bio from './bio';

const name = 'Eric Pelz';
export const siteTitle = 'Eric Pelz';

export default function Layout({ children, home, bioOnFooter }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <h1 className={utilStyles.heading2Xl}>{name}</h1>
          ) : (
            <h2 className={styles.titleNotHome}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          )}
      </header>
      <main>{children}</main>
        <>
          {bioOnFooter && (
            <>
              <h1></h1>
              <Bio />
            </>
          )}
          {!home && (<div className={styles.backToHome}>
            <Link href="/">
              <a>← Back to home</a>
            </Link>
          </div>)}
        </>
    </div>
  );
}
