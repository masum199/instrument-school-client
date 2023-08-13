import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';
import useDescending from '../../Hooks/useDescending';
import './PopularClasses.css';
import { FaBookmark, FaTag, FaTags, FaUser } from 'react-icons/fa';

const borderColors = ['#808080', '#5F9EA0', '#8FBC8F', '#B8860B', '#CD5C5C', '#696969'];

const PopularClasses = () => {
  const [descending] = useDescending();
  console.log(descending)
  return (
    <section className="my-20 flex justify-center">
      <div>
        <div className='my-4 text-center flex flex-col items-center justify-center'>
          <img className='w-60 h-52 rounded-full' src="https://i.ibb.co/7yBBntv/Black-Simple-Music-Studio-Logo.png" alt="" />
          <p className='title text-5xl font-bold'>Popular Classes</p>
          <p className='title my-4'>Explore a wide range of popular music classes to enhance your musical skills and creativity</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-20 ml-6 lg:ml-0">
          {descending.map((classes, index) => (
            <div style={{ color: borderColors[index] }} key={classes._id}  className="cards font-extrabold w-80">
              <div className="relative">
                <img
                  className="w-full h-72 main-image"
                  src={classes.classImage}
                  alt=""
                  style={{ borderBottomColor: borderColors[index] }}
                />
                <p className="absolute top-4 right-4 ">${classes.price}</p>
                <img
                  className="w-12 h-12 relative bottom-4 left-4 rounded-image"
                  src={classes.image}
                  alt=""
                />
              </div>
              <div className='ml-5'>
               <div className='flex justify-between items-center mr-6'>
               <h3  className='text-2xl'>{classes.name}</h3>
                <p className='text-2xl main-imagee'><FaBookmark/></p>
               </div>
                <p className='my-4'>{classes.details}</p>
                <div className="flex items-center justify-between mr-6">
                  <p className="flex items-center gap-x-2">
                  SeatAvailable  <FaUser className="" /> {classes.availableSeats}
                  </p>
                  <p className='flex items-center'><FaTags/> Education</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularClasses;