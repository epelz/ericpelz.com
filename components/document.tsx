import type { Child } from "hono/jsx";
import {
  DEFAULT_IMAGE,
  DEFAULT_IMAGE_HEIGHT,
  DEFAULT_IMAGE_WIDTH,
  SITE_AUTHOR,
  SITE_DESCRIPTION,
  SITE_KEYWORDS,
  SITE_TITLE,
  absoluteUrl,
} from "../lib/site";

export type PageMeta = {
  /** Page-specific title. The site name is appended; omit it on the home page. */
  title?: string;
  description?: string;
  /** Site-relative path, used for the canonical and og:url. */
  path: string;
  /** Site-relative image path. Falls back to the site default. */
  image?: string;
  type?: "website" | "article";
  /** YYYY-MM-DD, articles only. */
  publishedTime?: string;
};

export default function Document({
  title,
  description = SITE_DESCRIPTION,
  path,
  image = DEFAULT_IMAGE,
  type = "website",
  publishedTime,
  children,
}: PageMeta & { children?: Child }) {
  const documentTitle = title ? `${title} - ${SITE_TITLE}` : SITE_TITLE;
  // og:title is the page's own name; og:site_name carries the site.
  const socialTitle = title ?? SITE_TITLE;
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);
  const isDefaultImage = image === DEFAULT_IMAGE;

  return (
    <html lang="en" className="font-sans">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{documentTitle}</title>
        <meta name="description" content={description} />
        <meta name="author" content={SITE_AUTHOR} />
        <meta name="keywords" content={SITE_KEYWORDS} />
        <link rel="canonical" href={url} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/styles.css" />

        <meta property="og:site_name" content={SITE_TITLE} />
        <meta property="og:type" content={type} />
        <meta property="og:title" content={socialTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:image:alt" content={SITE_AUTHOR} />
        {isDefaultImage ? (
          <>
            <meta property="og:image:width" content={String(DEFAULT_IMAGE_WIDTH)} />
            <meta property="og:image:height" content={String(DEFAULT_IMAGE_HEIGHT)} />
          </>
        ) : null}
        {type === "article" && publishedTime ? (
          <>
            <meta property="article:published_time" content={publishedTime} />
            <meta property="article:author" content={SITE_AUTHOR} />
          </>
        ) : null}

        {/* summary, not summary_large_image: the only site image is square. */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={socialTitle} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={imageUrl} />
      </head>
      <body>
        <div className="max-w-2xl px-1 py-0 mx-auto mt-6 mb-12">{children}</div>
        <script defer src="/_vercel/insights/script.js"></script>
      </body>
    </html>
  );
}
