import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from '../../assets/images/slider1.jpg';
import image2 from '../../assets/images/slider2.jpg';
import image3 from '../../assets/images/slider3.jpg';
import './Slider.css'
import { Fade } from 'react-awesome-reveal';
import CountUp from 'react-countup';

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
    <div className="w-full featured-item">
      <Slider {...settings}>
        <div className="relative h-full w-full">
          <img
            src={image1}
            alt="image 1"
            className="slide object-cover"
          />
          <div className="absolute inset-0 grid  h-full w-full place-items-center bg-black/75">
            <div className=" text-center  text-white">

              <Fade delay={1e1} cascade damping={1e-1} className='text-3xl md:text-5xl lg:text-5xl font-extrabold text-warning '>
                Unleash Your Music
              </Fade>
              <div className='flex flex-col gap-y-6 lg:flex-row lg:mt-32 lg:gap-64'>
              <div>
              <span className='text-2xl md:text-4xl lg:text-4xl font-bold'><CountUp 
              end={50}
              duration={3}
              redraw={3}
              />+</span><span className='text-2xl'>  Instructors</span>
              </div>
              <div>
              <span className='text-2xl md:text-4xl lg:text-4xl font-bold'><CountUp 
              end={1000}
              duration={3}
              />+</span><span className='text-2xl'>  Students</span>
              </div>
              <div>
              <span className='text-2xl md:text-4xl lg:text-4xl font-bold'><CountUp 
              end={30}
              duration={3}
              />+</span><span className='text-2xl'>  Classes</span>
              </div>
              </div>
              
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
            <div className=" text-center  text-white">

              <Fade delay={1e1} cascade damping={1e-1} className='text-3xl md:text-5xl lg:text-5xl font-extrabold text-warning '>
                Unleash Your Music
              </Fade>
              <div className='flex flex-col gap-y-6 lg:flex-row lg:mt-32 lg:gap-64'>
              <div>
              <span className='text-2xl md:text-4xl lg:text-4xl font-bold'><CountUp 
              end={50}
              duration={3}
              redraw={3}
              />+</span><span className='text-2xl'>  Instructors</span>
              </div>
              <div>
              <span className='text-2xl md:text-4xl lg:text-4xl font-bold'><CountUp 
              end={1000}
              duration={3}
              />+</span><span className='text-2xl'>  Students</span>
              </div>
              <div>
              <span className='text-2xl md:text-4xl lg:text-4xl font-bold'><CountUp 
              end={30}
              duration={3}
              />+</span><span className='text-2xl'>  Classes</span>
              </div>
              </div>
              
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
            <div className=" text-center  text-white">

              <Fade delay={1e1} cascade damping={1e-1} className='text-3xl md:text-5xl lg:text-5xl font-extrabold text-warning '>
                Unleash Your Music
              </Fade>
              <div className='flex flex-col gap-y-6 lg:flex-row lg:mt-32 lg:gap-64'>
              <div>
              <span className='text-2xl md:text-4xl lg:text-4xl font-bold'><CountUp 
              end={50}
              duration={3}
              redraw={3}
              />+</span><span className='text-2xl'>  Instructors</span>
              </div>
              <div>
              <span className='text-2xl md:text-4xl lg:text-4xl font-bold'><CountUp 
              end={1000}
              duration={3}
              />+</span><span className='text-2xl'>  Students</span>
              </div>
              <div>
              <span className='text-2xl md:text-4xl lg:text-4xl font-bold'><CountUp 
              end={30}
              duration={3}
              />+</span><span className='text-2xl'>  Classes</span>
              </div>
              </div>
              
            </div>
          </div>
        </div>
       
      </Slider>
    </div>
  );
};

export default Slide;