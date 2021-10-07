import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import tw, { styled } from "twin.macro";
import React from "react";
import HeroSlide from "./HeroSlide";
import Chevron from "./Chevron";

const Hero = styled.section`
  ${tw`relative w-full h-screen overflow-hidden bg-black`}
  min-height: 400px;
`;

const FrontHero = ({ slides, slideDuration }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: slideDuration * 1000,
    nextArrow: <Chevron flipped />,
    prevArrow: <Chevron />,
  };
  return (
    <Hero>
      {!!slides && (
        <Slider {...settings}>
          {slides.map(
            ({ video, title }, i) =>
              !!video &&
              !!title && <HeroSlide title={title} video={video} key={i} />
          )}
        </Slider>
      )}
    </Hero>
  );
};

export default FrontHero;
