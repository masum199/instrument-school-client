
import Slider from '../Slider/Slider';
import PopularClasses from '../PopularClasses/PopularClasses';
import InstrumentLife from '../../Pages/PersonalSection/InstrumentLife/InstrumentLife';
import PopularInstructors from '../PopularInstructors/PopularInstructors';
import React, { useState } from 'react';

const Home = () => {
  const [isBackgroundToggled, setBackgroundToggled] = useState(false);

  const toggleBackground = () => {
    setBackgroundToggled(!isBackgroundToggled);
  };


  return (
    <div>
      <div className='text-center'>
      <button className='btn btn-xs' onClick={toggleBackground}>{isBackgroundToggled && "LightS" || "Dark"}</button>
      </div>
      <div
        style={{
          backgroundColor: isBackgroundToggled ? 'black' : '#ffffff',
          minHeight: '200px',
          padding: '20px',
        }}
      >
        <Slider />
        <PopularClasses />
        <PopularInstructors />
        <InstrumentLife />
      </div>
    </div>
  );
};

export default Home;