import React from "react";
import tw from "twin.macro";

const Styles = tw.p`font-wild text-xl text-center`;

const Copyright = ({ text }) => {
  return (
    <Styles>
      &copy; {new Date().getFullYear()} {text}
    </Styles>
  );
};

export default Copyright;
