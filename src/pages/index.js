import * as React from "react";
import { graphql } from "gatsby";
import IndexTemplate from "../templates/IndexTemplate";

// markup
const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  return <IndexTemplate fields={frontmatter} />;
};

export const pageQuery = graphql`
  query MyQuery {
    markdownRemark(frontmatter: { page: { eq: "home" } }) {
      frontmatter {
        frontHero {
          slideDuration
          slides {
            title
            video {
              publicURL
            }
          }
        }
        about {
          markdown
          image {
            ...GatsbyImage
          }
          overlay
        }
        overview {
          button {
            slug
            title
          }
          content
          title
        }
        portfolio {
          content
          horizontal
          works
          button {
            slug
            title
          }
          cards {
            description
            thumbnail {
              publicURL
            }
          }
        }
      }
    }
  }
  fragment GatsbyImage on File {
    childImageSharp {
      gatsbyImageData(placeholder: BLURRED, quality: 90)
    }
  }
`;

export default IndexPage;
