import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";

import { rhythm } from "../utils/typography";

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        return (
          <div
            style={{
              display: `flex`,
            }}
          >
            <Image
              fixed={data.avatar.childImageSharp.fixed}
              style={{
                marginRight: rhythm(1 / 2),
                marginBottom: 0,
                minWidth: 50,
                borderRadius: `100%`,
              }}
              imgStyle={{
                borderRadius: `50%`,
              }}
            />
            <p>
              I'm a software engineer at{" "}
              <a href="https://www.asana.com/">Asana</a>. I'm the tech lead of
              the Workflow Pillar, which has three main areas of focus: enabling
              Asana customers to orchestrate end-to-end workflows, connect & automate
              with their favorite tools, and expand Asana by building on top of the
              Asana developer platform. I used to be a people manager, and might manage again in
              the future. I spend a lot of time thinking about running effective
              teams, fostering growth, product+engineering collaboration, and
              engineering design patterns.
            </p>
          </div>
        );
      }}
    />
  );
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/ericpelz.jpg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

export default Bio;
