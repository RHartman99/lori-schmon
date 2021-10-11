import { Link } from "gatsby";
import React from "react";
import LoriLogo from "./logo.svg";
import tw, { styled } from "twin.macro";
import { keyframes } from "styled-components";

const drawIn = keyframes`
  from {
    stroke-dashoffset: 3578;
  }

  to {
    stroke-dashoffset: 0;
  }
`;

const LogoStyles = styled(LoriLogo)`
  height: 75px;
  overflow: visible;

  path {
    stroke-dasharray: 3578;
    stroke-dashoffset: 3578;
    animation: ${drawIn} 1.5s ease-in-out forwards;
  }

  path:nth-of-type(2) {
    animation-delay: 1.5s;
    animation-duration: 0.3s;
  }
`;

const HoverLogoStyles = styled(LogoStyles)`
  ${tw`absolute top-0`}

  path {
    stroke: #05c2c2;
    animation-name: none;
  }
`;

const Container = styled.div`
  ${tw`relative`}
  height: 75px;

  &:hover {
    #logo-hover {
      path {
        animation: ${drawIn} 0.5s ease-in-out forwards;
      }

      path:nth-of-type(2) {
        animation-delay: 0.5s;
        animation-duration: 0.3s;
      }
    }
  }
`;

const Logo = () => {
  return (
    <Link to="/">
      <Container>
        <LogoStyles id="logo" />
        <HoverLogoStyles id="logo-hover" />
      </Container>
    </Link>
  );
};

export default Logo;
