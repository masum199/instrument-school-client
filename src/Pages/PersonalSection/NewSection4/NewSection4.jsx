import React from 'react';
import './NewSection4.css'
import { FaGuitar } from 'react-icons/fa';
import { GiBanjo, GiDrumKit, GiPianist, GiSaxophone, GiTrombone, GiTuba, GiViolin } from 'react-icons/gi';


const NewSection4 = () => {
    return (
        <div className='fourth-section py-20'>
        <div className='text-center'>
            <h1 className='title my-3 text-4xl font-bold'>LET’S START</h1>
            <p className='title'>Choose your class</p>
        </div>

        <div className='group-container-4'>
            <div>
            <FaGuitar className='imgg text-8xl text-black'/>
            <h1 className='title'>Guitar</h1>
        </div>

        <div>
            <GiPianist className='text-8xl imgg text-black'/>
            <h1 className='title'>Piano</h1>
        </div>

        <div>
        <GiDrumKit className='imgg text-8xl text-black'/>
            <h1 className='title'>Percussion</h1>
        </div>
        <div>
        <GiViolin className='imgg text-8xl text-black'/>
            <h1 className='title mt-8'>Violin</h1>
        </div>
        <div>
        <GiSaxophone className='imgg text-8xl text-black'/>
            <h1 className='title mt-8'>Saxophone</h1>
        </div>
        <div>
        <GiBanjo className='imgg text-8xl text-black'/>
            <h1 className='title mt-8'>Banjo</h1>
        </div>
        <div>
        <GiTrombone className='imgg text-8xl text-black'/>
            <h1 className='title mt-8'>Trombone</h1>
        </div>
        <div>
        <GiTuba className='imgg text-8xl text-black'/>
            <h1 className='title mt-8'>Tuba</h1>
        </div>
        </div>
    </div>
    );
};

export default NewSection4;