import { visit } from "unist-util-visit";
import { Transformer } from "unified";
import { Node } from "unist";

interface IYoutubeEmbedOptions {
  width?: string;
  height?: string;
}

export const youtubeEmbed = (
  options: IYoutubeEmbedOptions = {}
): Transformer => {
  const { width = "560", height = "315" } = options;

  return (tree: Node) => {
    visit(tree, "image", (node: any) => {
      // Skip non-absolute URLs
      if (!node.url.startsWith("http://") && !node.url.startsWith("https://")) {
        return;
      }

      try {
        const url = new URL(node.url);
        if (url.hostname === "www.youtube.com") {
          const videoId = url.searchParams.get("v");
          if (videoId) {
            node.type = "html";
            node.value = `<iframe width="${width}" height="${height}" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>`;
          }
        }
      } catch (error) {
        console.error("Invalid URL:", node.url);
        return;
      }
    });
  };
};
