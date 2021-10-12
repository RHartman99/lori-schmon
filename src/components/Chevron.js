import React from "react";
import ChevronSVG from "./chevron.svg";
import tw, { styled, css } from "twin.macro";

const Button = styled.button(({ flipped }) => [
  tw`absolute z-50 hidden transition-all duration-500 ease-in-out transform -translate-y-1/2 left-1 sm:left-8 top-1/2 hover:scale-110 md:block`,
  css`
    width: 50px;

    path {
      ${tw`transition-colors duration-500 ease-in-out`}
    }

    &:hover {
      path {
        fill: #05c2c2;
      }
    }
  `,
  flipped && tw`left-auto! transform rotate-180 right-1 sm:right-8`,
]);

const Chevron = (props) => {
  return (
    <Button {...props}>
      <ChevronSVG />
    </Button>
  );
};

export default Chevron;
