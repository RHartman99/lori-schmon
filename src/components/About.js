import React from "react";
import tw, { styled } from "twin.macro";
import ContentComponent from "./Content";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Section = tw.section`flex lg:flex-row flex-col`;
const Left = styled.div`
  ${tw`relative z-40 flex w-full overflow-hidden lg:w-1/4 xl:w-1/2 lg:-my-12`}

  .gatsby-image-wrapper {
    ${tw`w-full h-full`}
  }
`;
const Right = tw.div`flex flex-col items-center justify-center w-full lg:(w-3/4 py-48) xl:w-1/2 py-24 px-4 sm:px-12`;
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

  @media (max-width: 1024px) {
    font-size: 16vw;
    left: 0;
  }
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
