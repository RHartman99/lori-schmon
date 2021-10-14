import React from "react";
import tw, { styled, css } from "twin.macro";

const Box = styled.div`
  ${tw`relative w-full h-full overflow-hidden`}

  &:hover {
    & > .content {
      ${tw`scale-105 blur-md`}
    }
  }
`;

const Content = styled(Box)`
  ${tw`z-10 transition-all duration-500 ease-in-out transform`}

  .gatsby-image-wrapper {
    ${tw`w-full h-full`}
  }
`;

const Hover = tw(
  Box
)`absolute top-0 left-0 z-20 transition-all duration-500 ease-in-out transform scale-125 opacity-0 hover:(opacity-100 scale-100)`;

const HoverBox = ({ content, hover, ...rest }) => {
  return (
    <Box {...rest}>
      <Content className="content">{content}</Content>
      <Hover>{hover}</Hover>
    </Box>
  );
};

export default HoverBox;
