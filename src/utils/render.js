import React from "react";

export function renderDateAndReadingTime(post) {
  return (
    <React.Fragment>
      {post.frontmatter.date}
      &nbsp;▪&nbsp;
      {post.fields.readingTime.text}
    </React.Fragment>
  );
}
