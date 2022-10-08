import Head from "next/head";

export default function SEO({ pageTitle }: { pageTitle: string }) {
  const title = pageTitle || "Eric Pelz";
  const description = "Eric Pelz is a software engineer";
  const author = "Eric Pelz";
  const siteUrl = "https://www.ericpelz.com/";

  return (
    <Head>
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content="blog, javascript, typescript, react, simplicity, engineering, coding, product"
      />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={author} />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:creator" content={author} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
    </Head>
  );
}
