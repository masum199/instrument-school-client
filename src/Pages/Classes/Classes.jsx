import React from 'react';
import useClasses from '../../Hooks/useClasses';
import useAdmin from '../../Hooks/useAdmin';
import useInstructor from '../../Hooks/useInstructor';
import { useContext } from 'react';
import { AuthContext } from '../../Components/AuthProvider/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2';
import useBookings from '../../Hooks/useBookings';
import { useNavigate } from 'react-router-dom';


const Classes = () => {
    const {user} = useContext(AuthContext)
    const [isAdmin] = useAdmin()
    const [isInstructor] = useInstructor()
    const [classes, , refetch] = useClasses()
    const [bookings] = useBookings()
    const navigate = useNavigate()
    const approve = classes.filter(classe => classe.status === 'approved')

    const handleBookings = async (card, user) => {
        if (!user) {
            Swal.fire({
              icon: 'info',
              title: 'Please log in',
              text: 'You need to log in to select a course.',
            });
            return navigate('/login')
          }
          const response = await axios.put('https://school-server-side.vercel.app/bookings', {
            id:card._id,
            classImage: card.classImage,
            instructorEmail:card.instructorEmail,
            instructorName:card.instructorName,
            name:card.name,
            price:card.price,
            user:user.email
          });
          if(response.data.insertedId){
            refetch()
            console.log(response.data)
            Swal.fire({  
                position: 'top',
                icon: 'success',
                title: 'class successfully uploaded',
                showConfirmButton: false,
                timer: 1500
              })
        }
      };

    return (
        <div className='grid grid-cols gap-y-10 gap-x-10 lg:grid-cols-4 lg:mx-12'>
        {approve.map((card) => (
            <div key={card._id} className={card.availableSeats === 0 ? "bg-red-700 rounded-lg overflow-hidden shadow-lg" : "rounded-lg overflow-hidden shadow-lg bg-gradient-to-r from-indigo-500 to-blue-500 dark:bg-gray-800"}>
                <div className="relative mb-4 text-center">
                    <a href="#" className="relative block">
                        <img alt="" src={card.classImage} className="mx-auto object-cover h-48 w-48 rounded-full border-4 border-white" />
                    </a>
                </div>
                <div className="text-center">
                    <p className="text-2xl text-white font-bold">{card.name}</p>
                    <p className="text-lg font-light text-gray-300 dark:text-gray-200">{card.instructorName}</p>
                    <div className='flex justify-center gap-10 mt-6'>
                        <div className="flex flex-col items-center">
                            <p className="text-lg text-gray-300 dark:text-gray-200">Available Seats</p>
                            <p className="text-2xl text-white font-bold">{card.availableSeats}</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <p className="text-lg text-gray-300 dark:text-gray-200">Price</p>
                            <p className="text-2xl text-white font-bold">${card.price}</p>
                        </div>
                    </div>
                    <button onClick={()=>handleBookings(card,user)} disabled={isAdmin || isInstructor || card.availableSeats === 0 || bookings.some(booking => booking.user === user.email && booking.id === card._id)}  className="btn btn-active btn-accent mt-8 mb-4 px-6 py-2 rounded-full text-lg font-bold">Select Course</button>
                </div>
            </div>
        ))}
    </div>
    );
};

export default Classes;