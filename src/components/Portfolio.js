import React, { useEffect, useState } from "react";
import tw, { styled, css } from "twin.macro";
import FlipBox from "./FlipBox";
import Content from "./Content";
import ShadowButton from "./ShadowButton";
import ModalContext from "./ModalContext";
import HoverBox from "./HoverBox";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Section = styled.div(({ inner }) => [
  tw`flex flex-wrap items-end pt-0 pb-12 overflow-hidden text-white bg-gray md:py-24`,
  inner && tw`pt-48!`,
]);

/* @ts-ignore */
const Cell = styled.div(({ current }) => [
  tw`relative z-10 w-full cursor-pointer md:w-1/2 xl:w-1/3`,
  css`
    height: 30vw;

    @media (max-width: 1280px) {
      height: 40vw;
    }

    @media (max-width: 750px) {
      height: 90vw;
    }
  `,
  current === true && tw`z-20`,
]);

const ContentCell = styled(Cell)`
  ${tw`flex flex-col items-end justify-center px-4 py-12 bg-black cursor-auto sm:px-8 sm:py-32`}
  height: max-content;
`;

const Description = styled(Content)`
  ${tw`flex flex-col items-center justify-center w-full h-full bg-primary bg-opacity-70!`}
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

const Portfolio = ({ content, button, cards, horizontal, ...rest }) => {
  // Need to save the most recently hovered Cell to elevate its
  // z-index to prevent weird animation clipping.
  const [current, setCurrent] = useState(0);
  const [width, setWidth] = useState(1024);
  const getWidth = () => {
    return (
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth
    );
  };
  useEffect(() => {
    setWidth(getWidth());
    // timeoutId for debounce mechanism
    let timeoutId = null;
    const resizeListener = () => {
      // prevent execution of previous setTimeout
      clearTimeout(timeoutId);
      // change width from the state object after 150 milliseconds
      timeoutId = setTimeout(() => setWidth(getWidth()), 150);
    };
    // set resize listener
    window.addEventListener("resize", resizeListener);

    // clean up function
    return () => {
      // remove resize listener
      window.removeEventListener("resize", resizeListener);
    };
  }, []);
  return (
    <ModalContext.Consumer>
      {(modal) => (
        <Section {...rest}>
          {cards &&
            cards.map(({ thumbnail, description, url }, i) => (
              <>
                {/* After inserting the 2nd cell, insert the special content cell. */}
                {/* //! BUG: Will fail to render content cell if there are less than 2 works. */}
                {((i === 2 && width >= 1280) || (i === 0 && width < 1280)) && (
                  <ContentCell key={i * 2 - 1}>
                    <ContentWithMaxWidth markdown={content} />
                    {/* @ts-ignore */}
                    <ShadowButtonWithMargin {...button} />
                  </ContentCell>
                )}
                <Cell
                  key={i * 2}
                  onMouseEnter={() => {
                    setCurrent(i);
                  }}
                  onClick={() => {
                    !!url && modal.openModal(url);
                  }}
                  /* @ts-ignore */
                  current={current === i}
                >
                  {/* <FlipBox
                    front={
                      <img
                        tw="w-full h-full object-cover"
                        src={thumbnail.publicURL}
                        alt="thumbnail"
                      />
                    }
                    back={<Description markdown={description} />}
                    horizontal={horizontal}
                  /> */}
                  <HoverBox
                    content={
                      <GatsbyImage
                        image={getImage(thumbnail)}
                        alt="Thumbnail"
                      />
                    }
                    hover={<Description markdown={description} />}
                  />
                </Cell>
              </>
            ))}
        </Section>
      )}
    </ModalContext.Consumer>
  );
};

export default Portfolio;
