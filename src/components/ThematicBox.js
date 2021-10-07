import React from "react";
import tw, { styled, css } from "twin.macro";
import { useInView } from "react-intersection-observer";

// @ts-ignore
const Color = styled.div(({ inView }) => [
  tw`transition-all ease-in-out bg-white`,
  css`
    transition-duration: 1.5s;
    width: 0;
    height: 31px;
  `,
  inView === true &&
    css`
      ${tw`bg-primary`}
      width: 242px;
    `,
]);

const ThematicBox = (props) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  // @ts-ignore
  return <Color ref={ref} inView={inView} {...props} />;
};

export default ThematicBox;
