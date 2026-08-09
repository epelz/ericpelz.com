import { Hono } from "hono";
import { ssgParams } from "hono/ssg";
import { html } from "hono/html";
import type { HtmlEscapedString } from "hono/utils/html";
import classNames from "classnames";

import Document from "../components/document";
import BlogLayout from "../components/blog_layout";
import Header from "../components/header";
import { SITE_AUTHOR } from "../lib/site";
import Bio from "../components/bio";
import DateWidget from "../components/date";
import PostSection from "../components/post_section";
import { GithubIcon, LinkedinIcon } from "../components/icons";
import {
  getAllCategoryIds,
  getAllPostIds,
  getPostData,
  getSortedPostsData,
} from "../lib/posts";

const app = new Hono();

// Hono renders <html> without a doctype; prepend it ourselves. The `html`
// helper resolves async components, so accept either form.
const page = (node: HtmlEscapedString | Promise<HtmlEscapedString>) =>
  html`<!DOCTYPE html>${node}`;

function SocialIconRow() {
  return (
    <section
      className={classNames(
        // Container
        "flex",
        "flex-row-reverse",
        "mt-3",
        "pb-2",
        // Bottom border
        "border-b-2",
        "border-b-gray-100",
        // Color for children icons
        "*:hover:text-blue-600",
        "*:text-gray-600",
        "*:pr-1",
        "*:drop-shadow-xs"
      )}
    >
      <a href="https://www.github.com/epelz/">
        <GithubIcon />
      </a>
      <a href="https://www.linkedin.com/in/epelz/">
        <LinkedinIcon />
      </a>
    </section>
  );
}

app.get("/", (c) => {
  const postsData = getSortedPostsData({ category: "highlight", limit: 3 });
  return c.html(
    page(
      <Document path="/">
        <Header home />
        <main>
          <Bio />
          <SocialIconRow />
          <PostSection sectionTitle="Posts" postsData={postsData}>
            <span>
              See all <a href="/categories/engineering">engineering posts</a>. I
              also like to cook, and{" "}
              <a href="/categories/food">occasionally</a> post recipes.
            </span>
          </PostSection>
        </main>
      </Document>
    )
  );
});

app.get(
  "/posts/:id",
  ssgParams(() => getAllPostIds().map((id) => ({ id }))),
  async (c) => {
    const postData = await getPostData(c.req.param("id"));
    return c.html(
      page(
        <Document
          title={postData.title}
          description={postData.description}
          path={`/posts/${postData.id}`}
          image={postData.image}
          type="article"
          publishedTime={postData.date}
        >
          <BlogLayout>
            <article
              className={classNames(
                "prose",
                "max-w-none",
                // Style headings
                "prose-headings:font-semibold",
                "prose-h1:border-b-2",
                "prose-h1:border-b-gray-100",
                // Override to make certain elements more compact
                "prose-headings:mt-2",
                "prose-headings:mb-3",
                "prose-p:my-3",
                "prose-hr:my-0",
                // Override links to match rest of site
                "prose-a:text-blue-800",
                "prose-a:no-underline",
                "prose-a:hover:underline"
              )}
            >
              <h1>{postData.title}</h1>
              <div>
                {/* If this was co-authored, add the full set of authors to the top. */}
                {(postData.otherAuthors || []).length > 0
                  ? ["Eric Pelz", ...postData.otherAuthors].join(", ") + " - "
                  : ""}
                <DateWidget dateString={postData.date} />
              </div>
              <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </article>
          </BlogLayout>
        </Document>
      )
    );
  }
);

app.get(
  "/categories/:category",
  ssgParams(() => getAllCategoryIds().map((category) => ({ category }))),
  (c) => {
    const category = c.req.param("category");
    const postsData = getSortedPostsData({ category });
    const sectionTitle =
      category === "highlight" ? "Top blog posts" : `Posts about ${category}`;

    return c.html(
      page(
        <Document
          title={sectionTitle}
          description={`${sectionTitle} by ${SITE_AUTHOR}.`}
          path={`/categories/${category}`}
        >
          <BlogLayout>
            <PostSection sectionTitle={sectionTitle} postsData={postsData} />
          </BlogLayout>
        </Document>
      )
    );
  }
);

app.get("/404", (c) =>
  c.html(
    page(
      <Document
        title="404"
        description="This page could not be found."
        path="/404"
      >
        <BlogLayout>
          <h2 className="text-2xl font-semibold my-4">
            404 – This page could not be found.
          </h2>
        </BlogLayout>
      </Document>
    )
  )
);

export default app;
