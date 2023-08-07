
import Slider from '../Slider/Slider';
import PopularClasses from '../PopularClasses/PopularClasses';
import InstrumentLife from '../../Pages/PersonalSection/InstrumentLife/InstrumentLife';
import PopularInstructors from '../PopularInstructors/PopularInstructors';
import NewSection1 from '../../Pages/PersonalSection/NewSection1/NewSection1';
import NewSection2 from '../../Pages/PersonalSection/NewSection2/NewSection2';
import NewSection3 from '../../Pages/PersonalSection/NewSection3/NewSection3';
import NewSection4 from '../../Pages/PersonalSection/NewSection4/NewSection4';

const Home = () => {
  return (
    <div>
        <Slider />
        <PopularClasses />
        <PopularInstructors />
        <NewSection1/>
        <NewSection2/>
        <NewSection3/>
        <NewSection4/>
        <InstrumentLife />
       
    </div>
  );
};

export default Home;