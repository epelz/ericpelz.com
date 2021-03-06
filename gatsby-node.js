const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const postTemplate = path.resolve(`./src/templates/blog-post.js`)
  const categoryTemplate = path.resolve(`./src/templates/category.js`)
  return graphql(
    `
      {
	postsGroup: allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
	categoriesGroup: allMarkdownRemark (limit: 1000) {
	  group(field: frontmatter___categories) {
	    fieldValue
	  }
	}
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog posts pages.
    const posts = result.data.postsGroup.edges
    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node
      const next = index === 0 ? null : posts[index - 1].node

      createPage({
        path: post.node.fields.slug,
        component: postTemplate,
        context: {
          slug: post.node.fields.slug,
          previous,
          next,
        },
      })
    })

    // Create category pages
    const categories = result.data.categoriesGroup.group
    categories.forEach(category => {
      createPage({
        path: `/categories/${category.fieldValue}`,
        component: categoryTemplate,
        context: {
          category: category.fieldValue
        },
      })
    });

    return null
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
