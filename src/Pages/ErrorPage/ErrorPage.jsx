import React, { useDebugValue } from 'react';
import Lottie from 'react-lottie';
import animationData from '../../../public/Error.json';
import { Link } from 'react-router-dom';
import './Error.css'

const ErrorPage = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (

    <div className='boody'>
        <h2 className='text-white text-5xl text-center pt-10'>Oops! This Page is Having Technical Difficulties</h2>
     <div className='pt-10'>
     <Lottie
        options={defaultOptions}
        height={500}
        width={500}
      />
     </div>
      <div className='flex justify-center my-10'>
      <Link to="/"><button className="mb-10 btn btn-wide btn-accent">Go To Home</button></Link>
      </div>
    </div>
  );
};

export default ErrorPage;