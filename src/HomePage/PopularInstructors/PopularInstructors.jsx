import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';

import { FaBookmark, FaTags, FaUser } from 'react-icons/fa';
import useDescending from '../../Hooks/useDescending';

const borderColors = ['#808080', '#5F9EA0', '#8FBC8F', '#B8860B', '#CD5C5C', '#696969'];

const PopularInstructors = () => {
  const [descending] = useDescending();
  console.log(descending)
  return (
    <section className="my-20 flex justify-center w-full">
      <div>
      <div className='my-4 text-center flex flex-col items-center justify-center'>
          <img className='w-96 h-52 rounded-full' src="https://i.ibb.co/cvNzt3T/2.png" alt="" />
          <p className='title text-5xl font-bold'>Popular Instructors</p>
          <p className='title my-4'>Explore a wide range of popular music classes designed to enhance your musical skills and creativity</p>
         
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 justify-center items-center ml-6 lg:ml-0">
          {descending.map((classes, index) => (
            <div style={{ color: borderColors[index] }} key={classes._id}  className="cards font-extrabold w-80">
              <div className="relative">
                <img
                  className="w-full h-72 main-image"
                  src={classes.image}
                  alt=""
                  style={{ borderBottomColor: borderColors[index] }}
                />
                <p className="absolute top-4 right-4 ">${classes.price}</p>
                <img
                  className="w-12 h-12 relative bottom-4 left-4 rounded-image"
                  src={classes.classImage}
                  alt=""
                />
              </div>
              <div className='ml-5'>
                <div className='flex items-center justify-between mr-6'>
                <h3  className='text-2xl'>{classes.instructorName}</h3>
                <p className='text-2xl main-imagee'><FaBookmark/></p>
                </div>
                <p className='my-4'>{classes.instructorEmail}</p>
                <div className="flex items-center justify-between mr-6">
                  <p className="flex items-center gap-x-2">
                    <FaUser className="" /> {classes.enrolled}
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

export default PopularInstructors;