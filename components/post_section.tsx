import type { Child } from "hono/jsx";
import DateWidget from "./date";
import type { Post } from "../lib/posts";

export default function PostSection({
  sectionTitle,
  postsData,
  children,
}: {
  sectionTitle: string;
  postsData: Post[];
  children?: Child;
}) {
  return (
    <section>
      <h2 className="text-2xl font-semibold my-4">{sectionTitle}</h2>
      <ul className="text-lg">
        {postsData.map(({ id, date, title }) => (
          <li className="mb-5" key={id}>
            <a href={`/posts/${id}`}>{title}</a>
            <br />
            <small className="text-gray-700">
              <DateWidget dateString={date} />
            </small>
          </li>
        ))}
      </ul>
      {children}
    </section>
  );
}
