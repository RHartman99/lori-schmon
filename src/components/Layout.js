import React from "react";
import { GlobalStyles } from "twin.macro";
import { createGlobalStyle } from "styled-components";
import { Helmet } from "react-helmet";
// import Footer from "./Footer";
import StayWildWoff2 from "../fonts/stay-wild.woff2";
import StayWildOTF from "../fonts/stay-wild.otf";

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

const Layout = ({ children, ...rest }) => {
  return (
    <>
      <main {...rest} tw="w-full overflow-hidden">
        <Helmet>
          <meta name="robots" content="noindex, nofollow" />
        </Helmet>
        <GlobalStyles />
        <CustomStyles />
        {children}
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
