import React from "react";
import tw, { css, styled } from "twin.macro";
import { Link } from "gatsby";
import { useInView } from "react-intersection-observer";

// @ts-ignore
const Styles = styled.div(({ title, inView }) => [
  tw`relative -ml-1 font-bold tracking-widest transition-all duration-500 ease-in-out`,
  css`
    writing-mode: vertical-lr;
    text-orientation: mixed;
    transform: rotate(180deg);

    &:after,
    &:before {
      ${tw`absolute top-0 left-0 w-full transition-all duration-500 ease-in-out pointer-events-none opacity-30`}
      content: "${title}";
    }

    &:after {
      ${tw`opacity-10`}
    }

    &:hover {
      text-shadow: 0px 0px 40px #fff;
      &:after,
      &:before {
        left: 0 !important;
      }
    }
  `,
  inView === true &&
    css`
      &:before {
        left: -100%;
      }
      &:after {
        left: -200%;
      }
    `,
]);

// TODO: Add onClick support for non-links.
const ShadowButton = ({ title, slug, onClick, ...rest }) => {
  const { ref, inView } = useInView({ triggerOnce: true });
  return (
    // @ts-ignore
    <Styles title={title} ref={ref} inView={inView} {...rest}>
      <Link to={slug}>{title}</Link>
    </Styles>
  );
};

export default ShadowButton;
