import * as React from "react";
import { graphql } from "gatsby";
import IndexTemplate from "../templates/IndexTemplate";

// markup
const IndexPage = ({ data }) => {
  // const { frontmatter } = data.markdownRemark;
  return <IndexTemplate />;
};

export const pageQuery = graphql`
  fragment GatsbyImage on File {
    childImageSharp {
      gatsbyImageData(placeholder: BLURRED, quality: 90)
    }
  }
`;

export default IndexPage;
