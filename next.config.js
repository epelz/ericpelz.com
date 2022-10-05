module.exports = {
  async redirects() {
    // For each blog post as of 10/2022, redirect from the
    // old blog URL to the new one.
    const oldBlogRedirects = [
      "apple-dutch-baby-pancake",
      "cheesy-bread",
      "circumventing-engineering-complexity",
      "designing-simpler-react-components",
      "how-best-product-engineering-teams-max-value",
      "propel-new-engineers-code-review",
      "static-type-checking-js",
    ].map((slug) => {
      return {
        source: `/${slug}`,
        destination: `/posts/${slug}`,
        permanent: true,
      };
    });

    return [...oldBlogRedirects];
  },
};
