

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";
import useDescending from "../../Hooks/useDescending";
import { Slide } from "react-awesome-reveal";




const PopularClasses = () => {
   const [descending] = useDescending()
   console.log(descending);
    return (
        <div className='my-28 lg:ml-14'>
          <Slide direction="right">
          <div className="text-center">
          <p className=' font-bold inline-flex animate-background-shine bg-[linear-gradient(110deg,#939393,45%,#1e293b,55%,#939393)] bg-[length:250%_100%] bg-clip-text text-6xl text-transparent'>
      Popular Classes
    </p>
          
          </div>
          </Slide>
          <Slide>
          <div className="text-center my-10">
          <p className=' inline-flex animate-background-shine bg-[linear-gradient(110deg,#939393,45%,#1e293b,55%,#939393)] bg-[length:250%_100%] bg-clip-text text-3xl text-transparent font-medium'>
          Explore a wide range of popular music classes designed to enhance your musical skills and creativity
    </p>
          </div>
          </Slide>
           <Swiper
      slidesPerView={3}
      spaceBetween={30}
      modules={[Pagination]}
      pagination={{ clickable: true }}
      className="mySwiper"
    >
      <div className="swiper-wrapper">
        {descending.map((card) => (
          <SwiperSlide key={card._id}
          >
            <div className='my-10'>
            <img className='w-96 h-96' src={card.classImage} alt="" />
            <div className=''>
            <h2>{card.name}</h2>
            </div>
            </div>
          </SwiperSlide>
        ))}
      </div>
    </Swiper>
            
        </div>
    );
};

export default PopularClasses;