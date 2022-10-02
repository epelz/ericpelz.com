import React from "react";
import { Link, graphql } from "gatsby";

import Bio from "../components/bio";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { rhythm } from "../utils/typography";
import { renderDateAndReadingTime } from "../utils/render";
import { FaGithubAlt, FaLinkedin, FaTwitter } from "react-icons/fa";
import "./index.scss";

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const posts = data.allMarkdownRemark.edges;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          keywords={[
            `blog`,
            `javascript`,
            `typescript`,
            `react`,
            `simplicity`,
            `engineering`,
            `coding`,
            `product`,
          ]}
        />
        <Bio />
        <h1
          className="BlogIndex-iconRow"
          style={{
            marginBottom: `0`,
            marginTop: rhythm(1 / 2),
          }}
        >
          {this._renderIcon(<FaGithubAlt />, "https://www.github.com/epelz/")}
          {this._renderIcon(
            <FaLinkedin />,
            "https://www.linkedin.com/in/epelz/"
          )}
          {this._renderIcon(<FaTwitter />, "https://twitter.com/PelzEric")}
        </h1>
        <h2>Engineering blog</h2>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug;
          return (
            <div key={node.fields.slug}>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <small>{renderDateAndReadingTime(node)}</small>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </div>
          );
        })}
	<p>See more <Link to={`/categories/engineering`}>posts</Link></p>
	<h1 style={{ marginTop: 0 }}></h1>
	<p>
	  ... I also like to cook, and sometimes <Link to={`/categories/food`}>post recipes</Link>.
	</p>
      </Layout>
    );
  }

  _renderIcon(icon, url) {
    return (
      <a
        className="BlogIndex-socialIcon"
        style={{ paddingRight: rhythm(1 / 4) }}
        href={url}
      >
        {icon}
      </a>
    );
  }
}

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 3
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { categories: { in: "engineering" } } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
            readingTime {
              text
            }
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`;
