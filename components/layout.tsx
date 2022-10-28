import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Bio from "./bio";
import SEO from "./seo";
import React from "react";

const name = "Eric Pelz";
export const siteTitle = "Eric Pelz";

export default function Layout({
  children,
  home = false,
  bioOnFooter = false,
  title,
}: {
  children?: React.ReactNode;
  home?: boolean;
  bioOnFooter?: boolean;
  title: string;
}) {
  return (
    <div className={styles.container}>
      <SEO pageTitle={title} />
      <Head>
        <title>{title || siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <h1 className={utilStyles.heading2Xl}>{name}</h1>
        ) : (
          <h2 className={styles.titleNotHome}>
            <Link href="/" className={utilStyles.colorInherit}>
              {name}
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
        {!home && (
          <div className={styles.backToHome}>
            <Link href="/">
              ← Back to home
            </Link>
          </div>
        )}
      </>
    </div>
  );
}
