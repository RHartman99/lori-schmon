import React from "react";
import tw, { styled } from "twin.macro";
import Content from "./Content";
import ShadowButton from "./ShadowButton";
import ThematicBox from "./ThematicBox";

const Section = tw.section`relative py-32 bg-black overflow-hidden justify-center items-center flex text-white`;

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
          <ShadowButton
            {...button}
            tw="absolute top-12 right-12 lg:(mb-24 relative right-auto top-auto)"
          />
          <Content markdown={content} />
        </Right>
      </Container>
    </Section>
  );
};

export default Overview;
