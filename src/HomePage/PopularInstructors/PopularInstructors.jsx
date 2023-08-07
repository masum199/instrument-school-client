import React from 'react';

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import useDescending from '../../Hooks/useDescending';
const PopularInstructors = () => {
  const [descending] = useDescending()
    return (
        <div className='my-10 lg:ml-14'>

        <div className="text-center">
          <p className=' font-bold inline-flex animate-background-shine bg-[linear-gradient(110deg,#939393,45%,#1e293b,55%,#939393)] bg-[length:250%_100%] bg-clip-text text-6xl text-transparent'>
            Popular Instructors
          </p>

        </div>


        <div className="text-center my-10">
          <p className=' inline-flex animate-background-shine bg-[linear-gradient(110deg,#939393,45%,#1e293b,55%,#939393)] bg-[length:250%_100%] bg-clip-text text-3xl text-transparent font-medium'>
            Explore a wide range of popular music classes designed to enhance your musical skills and creativity
          </p>
        </div>

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
         <img className='w-96 h-96' src={card.image} alt="" />
         <div className='text-center w-96'>
         <h2 className='text-center my-4 font-bold  animate-background-shine bg-[linear-gradient(110deg,#939393,45%,#1e293b,55%,#939393)] bg-[length:250%_100%] bg-clip-text text-3xl text-transparent'>{card.instructorName}</h2>
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