import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import tw, { styled } from "twin.macro";
import React from "react";
import HeroSlide from "./HeroSlide";
import Chevron from "./Chevron";
import CircleComponent from "./Circle";

const Circle = styled(CircleComponent)`
  ${tw`absolute transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2`}
`;

const Line = styled.div`
  ${tw`absolute top-0 z-50 hidden h-full bg-white right-24 opacity-20 sm:block`}
  width: 2px;
`;

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
    lazyLoad: true,
    autoplaySpeed: slideDuration * 1000,
    nextArrow: <Chevron flipped />,
    prevArrow: <Chevron />,
  };
  return (
    <Hero>
      {!!slides && (
        <Slider {...settings}>
          {slides.map(
            ({ video, title, url }, i) =>
              !!video &&
              !!title && (
                <HeroSlide title={title} video={video} url={url} key={i} />
              )
          )}
        </Slider>
      )}
      <Circle />
      <Line />
    </Hero>
  );
};

export default FrontHero;
