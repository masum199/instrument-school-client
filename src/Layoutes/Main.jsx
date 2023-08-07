import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../Shared/NavBar/NavBar';
import Footer from '../Shared/Footer/Footer';
import { useState } from 'react';

const Main = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(prevMode => !prevMode);
    };
    return (
        <div className={darkMode ? 'dark' : 'light'}>
            <NavBar darkMode={darkMode} onToggleDarkMode={toggleDarkMode}></NavBar >
            <div className='pt-24 pb-20 '>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;