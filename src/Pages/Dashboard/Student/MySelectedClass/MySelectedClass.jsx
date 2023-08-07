import React from 'react';
import useBookings from '../../../../Hooks/useBookings';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import Swal from 'sweetalert2';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../../Components/AuthProvider/AuthProvider';
const MySelectedClass = () => {
    const {user} = useContext(AuthContext)
    const [bookings] = useBookings()
    const filteredBookings = bookings.filter(booking => booking.user === user.email);

    const handleDelete = (_id) => {
        const proceed = window.confirm("Are you sure you want to delete");
        if (proceed) {
          axios.delete(`https://school-server-side.vercel.app/bookings/delete/${_id}`)
            .then(response =>  {
                console.log(response.data)
                if (response.data.deletedCount > 0) {
                    Swal.fire({
                      title: "Success",
                      text: "You have successfully deleted the Class!",
                      icon: "success",
                      toast: true,
                      position: "top",
                      showConfirmButton: false,
                      timer: 2000,
                      timerProgressBar: true,
                    });
                  }
        })
      };
    }


    return (
        <>
        <table className="min-w-full divide-y divide-gray-200 pr-6">
            <thead>
                <tr>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                     Delete
                    </th>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        class Image
                    </th>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        class Name
                    </th>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Instructor
                    </th>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Email
                    </th>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Price
                    </th>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                       Action
                    </th>
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
                {filteredBookings.map((cla) => (
                    <tr key={cla._id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <RiDeleteBin5Fill onClick={()=>handleDelete(cla._id)} className='text-4xl text-red-700  '/>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <img src={cla.classImage}  className="h-12 w-14 rounded-full" />
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">{cla.name}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{cla.instructorName}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{cla.instructorEmail}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{cla.price}</td>
                        <td>
                       
                      <Link to='/dashboard/payment'>
                      <button className='inline-flex h-12 animate-background-shine items-center justify-center rounded-md border border-slate-800 bg-gradient-to-r from-yellow-500 to-yellow-300 bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50'>
                        Pay
                      </button>
                      </Link>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </>
    );
};

export default MySelectedClass;