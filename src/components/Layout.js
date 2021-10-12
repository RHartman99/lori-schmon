import React from "react";
import { GlobalStyles } from "twin.macro";
import { createGlobalStyle } from "styled-components";
// import Footer from "./Footer";
import StayWildWoff2 from "../fonts/stay-wild.woff2";
import StayWildOTF from "../fonts/stay-wild.otf";
import { useStaticQuery, graphql } from "gatsby";
import Footer from "./Footer";
import Header from "./Header";
import { ModalProvider } from "./ModalContext";
import Modal from "./Modal";
import SEO from "./SEO";

const CustomStyles = createGlobalStyle`
  body {
    font-family: "Montserrat", "sans-serif";
  }
  
  @font-face {
    font-family: 'Stay Wild';
    src:  url(${StayWildWoff2}) format('woff2'),
          url(${StayWildOTF}) format('opentype');
    font-style: normal;
    font-weight: normal;
    font-display: swap;
    text-rendering: optimizeLegibility;
  }
`;

const Layout = ({
  children,
  footerPadding,
  blackMenu,
  offblack,
  meta,
  ...rest
}) => {
  const { markdownRemark } = useStaticQuery(graphql`
    query FooterQuery {
      markdownRemark(frontmatter: { setting: { eq: "footer" } }) {
        frontmatter {
          formId
          formTitle
          copyright
          successMsg
          formFields {
            label
            required
            type
          }
        }
      }
    }
  `);
  return (
    <ModalProvider>
      <Header dark={!!blackMenu} />
      <Modal />
      <SEO meta={meta} />
      <main {...rest} tw="w-full">
        <GlobalStyles />
        <CustomStyles />
        {children}
      </main>
      <Footer
        fields={markdownRemark.frontmatter}
        padding={Number.isInteger(footerPadding) ? footerPadding : 0}
        offblack={offblack}
      />
    </ModalProvider>
  );
};

export default Layout;
