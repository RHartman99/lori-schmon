import React from "react";
import tw, { styled } from "twin.macro";
import ContentComponent from "./Content";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Section = tw.section`flex lg:flex-row flex-col`;
const Left = tw.div`flex w-full lg:w-1/4 xl:w-1/2 relative z-10 lg:-my-12 overflow-hidden`;
const Right = tw.div`flex flex-col items-center justify-center w-full lg:w-3/4 xl:w-1/2 py-16 sm:py-48 px-4 sm:px-12`;
const Content = styled(ContentComponent)`
  max-width: 600px;

  h2 {
    ${tw`mb-12`}
  }
`;

const Overlay = styled.p`
  ${tw`absolute text-6xl opacity-50 left-6 font-wild text-primary`}
  word-spacing: 100vw;
  top: 70%;
  transform: translateY(-50%);
  font-size: 8vw;
`;

const About = ({ markdown, image, overlay }) => {
  return (
    <Section>
      <Left>
        {!!image && (
          <GatsbyImage image={getImage(image)} altText="Lori Portrait" />
        )}
        {!!overlay && <Overlay>{overlay}</Overlay>}
      </Left>
      <Right>
        <Content markdown={markdown} />
      </Right>
    </Section>
  );
};

export default About;
