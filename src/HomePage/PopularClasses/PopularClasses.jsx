
import useClasses from '../../Hooks/useClasses';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";


const PopularClasses = () => {
    const [classes] = useClasses()
    console.log(classes)
    return (
        <div className='my-10 lg:ml-14'>
           <Swiper
      slidesPerView={3}
      spaceBetween={30}
      modules={[Pagination]}
      pagination={{ clickable: true }}
      className="mySwiper"
    >
      <div className="swiper-wrapper">
        {classes.map((card) => (
          <SwiperSlide key={card._id}>
            <div className='my-10'>
            <img className='w-96 h-96' src={card.classImage} alt="" />
            <h2>{card.name}</h2>
            </div>
          </SwiperSlide>
        ))}
      </div>
    </Swiper>
            
        </div>
    );
};

export default PopularClasses;