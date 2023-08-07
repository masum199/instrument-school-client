import React from 'react';
import './NewSection2.css'
import { FaFacebook, FaGooglePlay, FaInstagram, FaSoundcloud, FaSpotify, FaTwitter, FaYoutube } from 'react-icons/fa';
import {SiMyspace } from 'react-icons/si';

const NewSection2 = () => {
    return (
        <div className=''>
            <h1 className='text-center my-6 font-bold animate-background-shine bg-[linear-gradient(110deg,#939393,45%,#1e293b,55%,#939393)] bg-[length:250%_100%] bg-clip-text text-6xl text-transparent'>Connect with Us on Social Media</h1>
            <div className='logo-container'>
               <div className="logo-compo cyn">
                <div className='icons flex justify-center items-center'>
                <FaTwitter className='text-5xl' style={{ color: "#55acee" }}/>
                </div>
                <div className='text'>
                <p className='font-bold animate-background-shine bg-[linear-gradient(110deg,#55acee,45%,#1e293b,55%,#939393)] bg-[length:250%_100%] bg-clip-text text-2xl text-transparent'>Twitter</p>
                </div>
               </div>
               <div className="logo-compo black">
                <div className='icons flex justify-center items-center'>
                <FaInstagram className='text-5xl' style={{ color: "#ab2eba" }}/>
                </div>
                <div className='text'>
                <p className='font-bold animate-background-shine bg-[linear-gradient(110deg,#ab2eba,45%,#1e293b,55%,#939393)] bg-[length:250%_100%] bg-clip-text text-2xl text-transparent'>Instagram</p>
                </div>
               </div>
               <div className="logo-compo cyn">
                <div className='icons flex justify-center items-center'>
                <FaSpotify className='text-5xl' style={{ color: "#7ddc0d" }}/>
                </div>
                <div className='text'>
                <p className='font-bold animate-background-shine bg-[linear-gradient(110deg,#7ddc0d,45%,#1e293b,55%,#939393)] bg-[length:250%_100%] bg-clip-text text-2xl text-transparent'>Spotify</p>
                </div>
               </div>
               <div className="logo-compo black">
                <div className='icons flex justify-center items-center'>
                <FaSoundcloud className='text-5xl' style={{ color: "#ff6000" }}/>
                </div>
                <div className='text'>
                <p className='font-bold animate-background-shine bg-[linear-gradient(110deg,#ff6000,45%,#1e293b,55%,#939393)] bg-[length:250%_100%] bg-clip-text text-2xl text-transparent'>SoundCloud</p>
                </div>
               </div>
               <div className="logo-compo cyn">
                <div className='icons flex justify-center items-center'>
                <FaYoutube className='text-4xl' style={{ color: "#ce2828" }}/>
                </div>
                <div className='text'>
                <p className='font-bold animate-background-shine bg-[linear-gradient(110deg,#ce2828,45%,#1e293b,55%,#939393)] bg-[length:250%_100%] bg-clip-text text-2xl text-transparent'>YouTube</p>
                </div>
               </div>
               <div className="logo-compo black">
                <div className='icons flex justify-center items-center'>
                <FaFacebook className='text-5xl' style={{ color: "#3b5998" }}/>
                </div>
                <div className='text'>
                <p className='font-bold animate-background-shine bg-[linear-gradient(110deg,#3b5998,45%,#1e293b,55%,#939393)] bg-[length:250%_100%] bg-clip-text text-2xl text-transparent'>FaceBook</p>
                </div>

               </div>
               <div className="logo-compo cyn">
                <div className='icons flex justify-center items-center'>
                <SiMyspace className='text-5xl' style={{ color: "#0450da" }}/>
                </div>
                <div className='text'>
                <p className='font-bold animate-background-shine bg-[linear-gradient(110deg,#0450da,45%,#1e293b,55%,#939393)] bg-[length:250%_100%] bg-clip-text text-2xl text-transparent'>MySpace</p>
                </div>
               </div>
               <div className="logo-compo black">
                <div className='icons flex justify-center items-center'>
                <FaGooglePlay className='text-5xl' style={{ color: " #0F9D58" }}/>
                </div>
                <div className='text'>
                <p className='font-bold animate-background-shine bg-[linear-gradient(110deg,#0F9D58,45%,#1e293b,55%,#939393)] bg-[length:250%_100%] bg-clip-text text-2xl text-transparent'>Google Play</p>
                </div>
               </div>
            </div>
        </div>
    );
};

export default NewSection2;