import React from 'react';

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import useClasses from '../../Hooks/useClasses';
const PopularInstructors = () => {
const [classes] = useClasses()
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
       <SwiperSlide key={card._id}
       >
         <div className='my-10'>
         <img className='w-96 h-96' src={card.image} alt="" />
         <div className=''>
         <h2>{card.instructorName}</h2>
         </div>
         </div>
       </SwiperSlide>
     ))}
   </div>
 </Swiper>
         
     </div>
    );
};

export default PopularInstructors;