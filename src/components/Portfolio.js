import React, { useState } from "react";
import tw, { styled, css } from "twin.macro";
import FlipBox from "./FlipBox";
import Content from "./Content";
import ShadowButton from "./ShadowButton";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Section = tw.div`bg-black text-white flex-wrap overflow-hidden flex items-end py-24`;

/* @ts-ignore */
const Cell = styled.div(({ current }) => [
  tw`relative z-10 w-1/3`,
  css`
    height: 30vw;
  `,
  current === true && tw`z-20`,
]);

const ContentCell = styled(Cell)`
  ${tw`flex flex-col items-end justify-center px-8 py-32`}
  height: max-content;
`;

const Description = styled(Content)`
  ${tw`flex flex-col items-center justify-center w-full h-full bg-primary`}
`;

const ShadowButtonWithMargin = styled(ShadowButton)`
  ${tw`mt-24 mr-24`}
`;

const ContentWithMaxWidth = styled(Content)`
  ${tw`flex flex-col items-center justify-center w-full`}

  h2:first-child {
    ${tw`mb-12`}
  }
  * {
    ${tw`w-full`}
    max-width: 380px;
  }
`;

const Portfolio = ({ content, button, cards, horizontal }) => {
  // Need to save the most recently hovered Cell to elevate its
  // z-index to prevent weird animation clipping.
  const [current, setCurrent] = useState(0);
  return (
    <Section>
      {cards &&
        cards.map(({ thumbnail, description }, i) => (
          <>
            <Cell
              key={i * 2}
              onMouseEnter={() => {
                setCurrent(i);
              }}
              /* @ts-ignore */
              current={current === i}
            >
              <FlipBox
                front={
                  <GatsbyImage
                    tw="w-full h-full object-cover"
                    image={getImage(thumbnail)}
                    altText="thumbnail"
                  />
                }
                back={<Description markdown={description} />}
                horizontal={horizontal}
              />
            </Cell>
            {/* After inserting the 2nd cell, insert the special content cell. */}
            {/* //! BUG: Will fail to render content cell if there are less than 2 works. */}
            {i === 1 && (
              <ContentCell key={i * 2 - 1}>
                <ContentWithMaxWidth markdown={content} />
                {/* @ts-ignore */}
                <ShadowButtonWithMargin {...button} />
              </ContentCell>
            )}
          </>
        ))}
    </Section>
  );
};

export default Portfolio;
