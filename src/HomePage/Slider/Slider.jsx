import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from '../../assets/images/slider1.jpg';
import image2 from '../../assets/images/slider2.jpg';
import image3 from '../../assets/images/slider3.jpg';
import './Slider.css'
import { Fade, Bounce } from 'react-awesome-reveal';

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
    <div className="w-full  px-14 featured-item">
      <Slider {...settings}>
        <div className="relative h-full w-full">
          <img
            src={image1}
            alt="image 1"
            className="slide object-cover"
          />
          <div className="absolute inset-0 grid  h-full w-full place-items-center bg-black/75">
            <div className="w-3/4 text-center md:w-2/4 text-white">

              <Fade delay={1e1} cascade damping={1e-1} className='text-5xl font-extrabold '>
                Unleash Your Musical Talent
              </Fade>
              <Bounce><p className="text-lg text-white">Discover a world of melody and rhythm</p></Bounce>
            </div>
          </div>
        </div>
        <div className="relative h-full w-full">
          <img
            src={image2}
            alt="image 1"
            className="slide object-cover"
          />
          <div className="absolute inset-0 grid  h-full w-full place-items-center bg-black/75">
            <div className="w-3/4 text-center md:w-2/4 text-white">

              <Fade delay={1e1} cascade damping={1e-1} className='text-5xl font-extrabold'>
                Create Captivating Harmonies
              </Fade>
              <Bounce><p className="text-lg">Compose and arrange your own masterpieces</p></Bounce>
            </div>
          </div>
        </div>
        <div className="relative h-full w-full">
          <img
            src={image3}
            alt="image 1"
            className="slide object-cover"
          />
          <div className="absolute inset-0 grid  h-full w-full place-items-center bg-black/75">
            <div className="w-3/4 text-center md:w-2/4 text-white">

              <Fade delay={1e1} cascade damping={1e-1} className='text-5xl font-extrabold'>
                Feel the Beat
              </Fade>
              <Bounce><p className="text-lg">Immerse yourself in the pulse of music</p></Bounce>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Slide;