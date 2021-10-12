import React from "react";
import tw, { styled } from "twin.macro";

const Element = styled.div`
  ${tw`relative z-50 border-2 border-white rounded-full pointer-events-none opacity-20`}

  width: 800px;
  height: 800px;

  @media (max-width: 1024px) {
    width: 400px;
    height: 400px;
  }
`;

const Circle = (props) => {
  return <Element {...props} />;
};

export default Circle;
