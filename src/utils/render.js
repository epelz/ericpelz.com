import React from "react";

export function renderDateAndReadingTime(post) {
  return <fragment>
    {post.frontmatter.date}
    &nbsp;&#9679;&nbsp;
    {post.fields.readingTime.text}
  </fragment>;
}
