import React from "react";
import tw, { styled, css } from "twin.macro";

const Box = styled.div(({ horizontal }) => [
  tw`w-full h-full bg-transparent`,
  css`
    perspective: 1000px;
    & > div {
      ${tw`z-10`}
    }
    &:hover > div {
      ${tw`z-20`}
      transform: ${!!horizontal ? "rotateY(180deg)" : "rotateX(180deg)"};
    }
  `,
]);

const Container = styled.div`
  ${tw`relative w-full h-full text-center transition-all duration-500 ease-in-out bg-red-400`}
  transform-style: preserve-3d;
`;

const Front = tw.div`bg-black text-white absolute w-full h-full`;

/* @ts-ignore */
const Back = styled(Front)(({ horizontal }) => [
  css`
    transform: ${!!horizontal ? "rotateY(180deg)" : "rotateX(180deg)"}; ;
  `,
]);

const FlipBox = ({ front, back, horizontal }) => {
  return (
    /* @ts-ignore */
    <Box horizontal={horizontal}>
      <Container>
        <Front>{front}</Front>
        {/* @ts-ignore */}
        <Back horizontal={horizontal}>{back}</Back>
      </Container>
    </Box>
  );
};

export default FlipBox;
