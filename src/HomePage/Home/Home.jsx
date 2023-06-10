import React, { useContext } from 'react';
import Slider from '../Slider/Slider';
import PopularClasses from '../PopularClasses/PopularClasses';
import InstrumentLife from '../../Pages/PersonalSection/InstrumentLife/InstrumentLife';


const Home = () => {
   
    return (
        <div>
          <Slider></Slider>
          <PopularClasses></PopularClasses>
          <InstrumentLife></InstrumentLife>
        </div>
    );
};

export default Home;