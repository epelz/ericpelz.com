import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkGfm from 'remark-gfm';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import rehypeHighlight from 'rehype-highlight';
import rehypeSlug from 'rehype-slug';

const postsDirectory = path.join(process.cwd(), 'posts');

function getFileNames() {
    // Get file names under /posts
    const fileNames = fs.readdirSync(postsDirectory);
    return fileNames.filter(fileName => fileName !== ".DS_Store");
}

export function getSortedPostsData({ category, limit } = { category: null, limit: undefined }) {
  const allPostsData = getFileNames().map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
    };
  });

  // If a category given, filter for it.
  const filteredPostsData = category === null
    ? allPostsData
    : allPostsData.filter(post => post.categories.includes(category));

  // Sort posts by date
  const sortedPostsData = filteredPostsData.sort(({ date: a }, { date: b }) => {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });

  // Return the limit, if given.
  return sortedPostsData.slice(0, limit);
}

export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeSlug)
    .use(rehypeHighlight)
    .use(rehypeStringify, { allowDangerousHtml: true })
    .process(matterResult.content);
  const contentHtml = processedContent.toString();
  // TODO: Rendering is broken for some of the posts.

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}

export function getAllPostIds() {
    // Returns an array that looks like this:
    // [
    //   {
    //     params: {
    //       id: 'ssg-ssr'
    //     }
    //   },
    //   {
    //     params: {
    //       id: 'pre-rendering'
    //     }
    //   }
    // ]
    return getFileNames().map((fileName) => {
      return {
        params: {
          id: fileName.replace(/\.md$/, ''),
        },
      };
    });
  }

  export function getAllCategoryIds() {
    // Returns an array that looks like this:
    // [
    //   {
    //     params: {
    //       id: 'ssg-ssr'
    //     }
    //   },
    //   {
    //     params: {
    //       id: 'pre-rendering'
    //     }
    //   }
    // ]
    // NB: Not the most efficient, since we're parsing all markdown here, but I don't post that often.
    return [...new Set(getSortedPostsData().flatMap(post => post.categories))].map(category => {
      return {
        params: {
          category
        },
      };
    });
  }