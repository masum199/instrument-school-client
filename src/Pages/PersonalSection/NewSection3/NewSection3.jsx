import React from 'react';
import './NewSection3.css'

const NewSection3 = () => {
    return (
        <div className='third-section py-20'>
            <div className='text-center'>
                <h1 className='title text-3xl font-semibold'>Music Groups</h1>
                <p className='title'>for</p>
            </div>

            <div className='group-container '>
                <div>
                <img src="https://melody.ancorathemes.com/wp-content/uploads/2016/05/services-3.jpg" alt="" />
                <h1 className='title'>Kids</h1>
                <p className='title'>Our school is a solution for families who would like to expose their children to the world of music.</p>
            </div>


            <div>
                <img src="https://melody.ancorathemes.com/wp-content/uploads/2016/05/services-2.jpg" alt="" />
                <h1 className='title'>Teens</h1>
                <p className='title'>Our classes help to develop the skills necessary for music learning and a lifelong enjoyment of music.</p>
            </div>

            <div>
                <img src="https://melody.ancorathemes.com/wp-content/uploads/2016/05/services-1.jpg" alt="" />
                <h1 className='title'>Adults</h1>
                <p className='title'>We have programs for everyone. In addition to teaching music to children, we instruct adults and seniors.</p>
            </div>
            <div>
                <img className='' src="https://melody.ancorathemes.com/wp-content/uploads/2016/05/image-7.jpg" alt="" />
                <h1 className='title mt-8'>Private lessons</h1>
                <p className='title'>Private music lessons provide one-on-one attention, so teachers can focus on an individual student’s needs.</p>
            </div>
            </div>
        </div>
    );
};

export default NewSection3;