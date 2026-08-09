import type { Child } from "hono/jsx";
import { siteTitle } from "./header";

// Replaces Next's Metadata API. Defaults match what app/layout.tsx exported;
// pages override `title` only.
export default function Document({
  title = siteTitle,
  children,
}: {
  title?: string;
  children?: Child;
}) {
  return (
    <html lang="en" className="font-sans">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{title}</title>
        <meta name="description" content="Eric Pelz is a software engineer" />
        <meta name="author" content="Eric Pelz" />
        <meta
          name="keywords"
          content="blog, javascript, typescript, react, simplicity, engineering, coding, product"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>
        <div className="max-w-2xl px-1 py-0 mx-auto mt-6 mb-12">{children}</div>
        {/* Was <Analytics /> from @vercel/analytics/react. */}
        <script defer src="/_vercel/insights/script.js"></script>
      </body>
    </html>
  );
}
