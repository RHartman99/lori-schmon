import React from "react";
import tw, { styled, css } from "twin.macro";
import Content from "./Content";
import ShadowButton from "./ShadowButton";
import ThematicBox from "./ThematicBox";
import CircleComponent from "./Circle";

const Section = tw.section`relative py-16 lg:(py-48 pb-64) bg-gray overflow-hidden justify-center items-center flex text-white`;

const Container = styled.div`
  ${tw`flex flex-col items-end justify-center px-4 sm:px-8 lg:(flex-row -mx-12)`}
  max-width: 1200px;
`;

const Left = styled.div`
  ${tw`flex flex-col items-start justify-end w-full lg:(px-12 w-7/12)`}
`;

const Right = tw(Left)`
  w-full lg:(w-5/12 flex-col) flex flex-col-reverse
`;

const Title = styled.h2`
  ${tw`text-4xl font-wild`}
`;

const Circle = styled(CircleComponent)`
  ${tw`absolute bottom-0 z-50 hidden opacity-5 lg:block`}
  left: 10%;
  width: 700px;
  height: 700px;

  @media (max-width: 1280px) {
    left: 2.5%;
  }
`;

const Button = styled(ShadowButton)(() => [
  tw`relative top-auto right-auto mb-24`,
  css`
    @media (max-width: 1024px) {
      ${tw`mt-6`}
      transform: none;
      writing-mode: inherit;

      &:after,
      &:before {
        ${tw`left-0`}
      }

      &:after,
      &:before {
        ${tw`left-0`}
      }

      &:before {
        ${tw`top-full`}
      }

      &:after {
        top: 200%;
      }
    }
  `,
]);

const Overview = ({ title, button, content }) => {
  return (
    <Section>
      <Container>
        <Left>
          <ThematicBox tw="mb-12" />
          <Title>{title}</Title>
        </Left>
        <Right>
          {/* @ts-ignore */}
          <Button {...button} />
          <Content markdown={content} />
        </Right>
      </Container>
      <Circle />
    </Section>
  );
};

export default Overview;
