import React from "react";
import ReactMarkdown from "react-markdown";
import tw, { styled, css } from "twin.macro";

const styles = () => [
  css`
    ${tw`text-lg leading-loose`}

    h2,h1 {
      ${tw`text-5xl font-wild`}
    }

    *:not(:last-child) {
      ${tw`mb-4`}
    }
  `,
];

const Article = styled.article(styles);
const Div = styled.div(styles);

const Content = ({ markdown, article, children, ...rest }) => {
  const Component = !!article ? Article : Div;
  return (
    <Component {...rest}>
      {!!markdown ? <ReactMarkdown>{markdown}</ReactMarkdown> : children}
    </Component>
  );
};

export default Content;
