import React from "react";
import tw, { styled } from "twin.macro";
import ArrowSVG from "./arrow.svg";

const Button = styled.button`
  ${tw`flex items-center justify-center px-4 transition-colors duration-500 ease-in-out rounded-full hover:bg-primary`}
  background-color: #077e82;
  width: 125px;
  height: 125px;
`;

const Arrow = styled(ArrowSVG)``;

const ArrowButton = ({ ...rest }) => {
  return (
    <Button {...rest}>
      <Arrow />
    </Button>
  );
};

export default ArrowButton;
