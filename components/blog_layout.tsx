import type { Child } from "hono/jsx";
import Bio from "./bio";
import Header from "./header";

export default function BlogLayout({ children }: { children?: Child }) {
  return (
    <>
      <Header home={false} />
      <main>{children}</main>
      <div className="pt-2 border-t-2 border-t-gray-100">
        <Bio />
        <div className="pt-2">
          <a href="/">← Back to home</a>
        </div>
      </div>
    </>
  );
}
