import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from '../../assets/images/slider1.jpg';
import image2 from '../../assets/images/slider2.jpg';
import image3 from '../../assets/images/slider3.jpg';
import './Slider.css'
import { Typography } from "@material-tailwind/react";
import { Motion, spring } from 'react-motion';

const Slide = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="w-full px-8">
      <Slider {...settings}>
      <div className="relative h-full w-full">
        <img
          src={image1}
          alt="image 1"
          className="slide object-cover"
        />
        <div className="absolute inset-0 grid grid-cols-2 h-full w-full place-items-center bg-black/75">
      <div className="w-3/4 text-center md:w-2/4">
        <Motion
          defaultStyle={{ opacity: 0, fontSize: 20 }}
          style={{ opacity: spring(1), fontSize: spring(40) }}
        >
          {interpolatedStyle => (
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
              style={{
                opacity: interpolatedStyle.opacity,
                fontSize: interpolatedStyle.fontSize,
              }}
            >
              The Beauty of Nature
            </Typography>
          )}
        </Motion>
        <Motion
          defaultStyle={{ opacity: 0 }}
          style={{ opacity: spring(0.8) }}
        >
          {interpolatedStyle => (
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
              style={{ opacity: interpolatedStyle.opacity }}
            >
              It is not so much for its beauty that the forest makes a claim upon men&apos;s hearts, as for that subtle something, that quality of air that emanation from old trees, that so wonderfully changes and renews a weary spirit.
            </Typography>
          )}
        </Motion>
      </div>
      <div className="w-3/4 text-center md:w-2/4">
        <Motion
          defaultStyle={{ opacity: 0, fontSize: 20 }}
          style={{ opacity: spring(1), fontSize: spring(40) }}
        >
          {interpolatedStyle => (
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
              style={{
                opacity: interpolatedStyle.opacity,
                fontSize: interpolatedStyle.fontSize,
              }}
            >
              The Beauty of Nature
            </Typography>
          )}
        </Motion>
        <Motion
          defaultStyle={{ opacity: 0 }}
          style={{ opacity: spring(0.8) }}
        >
          {interpolatedStyle => (
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
              style={{ opacity: interpolatedStyle.opacity }}
            >
              It is not so much for its beauty that the forest makes a claim upon men&apos;s hearts, as for that subtle something, that quality of air that emanation from old trees, that so wonderfully changes and renews a weary spirit.
            </Typography>
          )}
        </Motion>
      </div>
    </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src={image2}
          alt="image 1"
          className="slide object-cover"
        />
        <div className="absolute inset-0 grid grid-cols-2 h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              The Beauty of Nature
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              It is not so much for its beauty that the forest makes a claim
              upon men&apos;s hearts, as for that subtle something, that
              quality of air that emanation from old trees, that so
              wonderfully changes and renews a weary spirit.
            </Typography>
          </div>
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              The Beauty of Nature
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              It is not so much for its beauty that the forest makes a claim
              upon men&apos;s hearts, as for that subtle something, that
              quality of air that emanation from old trees, that so
              wonderfully changes and renews a weary spirit.
            </Typography>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src={image3}
          alt="image 1"
          className="slide object-cover"
        />
        <div className="absolute inset-0 grid grid-cols-2 h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              The Beauty of Nature
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              It is not so much for its beauty that the forest makes a claim
              upon men&apos;s hearts, as for that subtle something, that
              quality of air that emanation from old trees, that so
              wonderfully changes and renews a weary spirit.
            </Typography>
          </div>
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              The Beauty of Nature
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              It is not so much for its beauty that the forest makes a claim
              upon men&apos;s hearts, as for that subtle something, that
              quality of air that emanation from old trees, that so
              wonderfully changes and renews a weary spirit.
            </Typography>
          </div>
        </div>
      </div>
      </Slider>
    </div>
  );
};

export default Slide;