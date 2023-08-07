import React, { useState, useRef, useEffect } from 'react';
import {  BsFillPlayFill, BsFillPauseFill  } from 'react-icons/bs';
import audio1 from '../../../assets/audio/adio2.mp3';
import audio2 from '../../../assets/audio/good-night-160166.mp3';
import image from '../../../assets/images/img.jpg'
import './NewSection1.css'
import { FaBackward, FaForward } from 'react-icons/fa';

const NewSection1 = () => {
  const audios = [
    {
      "title": "Falling in",
      "url": audio1,
      "date": "2018"
    },
    {
      "title": "Break into",
      "url": audio2,
      "date": "2020"
    }
  ];

  const [songs, setSongs] = useState(audios);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current.src = songs[currentSongIndex].url;
    if (isPlaying) {
      audioRef.current.play();
    }
  }, [currentSongIndex, isPlaying]);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handlePrevSong = () => {
    const prevIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    setCurrentSongIndex(prevIndex);
    setIsPlaying(true);
  };

  const handleNextSong = () => {
    const nextIndex = (currentSongIndex + 1) % songs.length;
    setCurrentSongIndex(nextIndex);
    setIsPlaying(true);
  };

  return (
 <div className='my-28'>
    <div className='text-center my-20'>
        <h1 className='text-4xl font-semibold my-4'>Quick & Easy MUSIC Player</h1>
        <p className='text-2xl'>Uploading your music and playlist and let your fans</p>
        <p className='text-2xl'>enjoy listening to them is very easy using our elegant music player</p>
    </div>
    <div className='audio-system background-imagee flex justify-center items-center bg-red-200'>
     <div className='audio-container p-10 bg-red-500 bg-style-infoo'>
     <div className=''>
     <div className='flex justify-center'>
       <div>
       <img src={image} alt="" />
       </div>
      </div>
      <div className='text-center'>
      <p className='text-white font-bold text-2xl my-5'>{songs[currentSongIndex].title}</p>
      <p className='text-white font-bold text-2xl my-3'>{songs[currentSongIndex].date}</p>
      <audio ref={audioRef} ></audio>
      <div className='text-4xl text-white mt-24'>
        <button className='' onClick={handlePrevSong}><FaBackward /></button>
        <button className='mx-6 lg:mx-20' onClick={handlePlayPause}>
          {isPlaying ? <BsFillPauseFill /> : <BsFillPlayFill />}
        </button>
        <button onClick={handleNextSong}><FaForward /></button>
      </div>
      </div>
     </div>
    </div>
   </div>
 </div>
  );
};

export default NewSection1;