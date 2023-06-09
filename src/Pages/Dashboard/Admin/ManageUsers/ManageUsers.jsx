import React from 'react';
import getUser from '../../../../Hooks/getUser';

import axios from 'axios';
// import useAdmin from '../../../../Hooks/useAdmin';
import Swal from 'sweetalert2';
import { useState } from 'react';

const ManageUsers = () => {
    const [users , , refetch] = getUser()


    const makeAdmin = (user) => {
        axios.patch(`http://localhost:5000/users/admin/${user._id}`)
        .then((response) => {
           console.log(response.data);
           if (response.data.modifiedCount) {
             refetch();
             Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: `${user.name} is admin now!!!`,
                showConfirmButton: false,
                timer: 1500
              })
           }
         })
    }


    const makeInstructor = (user) => {
     axios.patch(`http://localhost:5000/users/instructor/${user._id}`)
     .then((response) => {
        console.log(response.data);
        if (response.data.modifiedCount) {
          refetch();
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `${user.name} is Instructor Now!!!`,
            showConfirmButton: false,
            timer: 1500
          })
        }
      })
   
    }

    const makeStudent = (user) => {
     axios.patch(`http://localhost:5000/users/student/${user._id}`)
     .then((response) => {
        console.log(response.data);
        if (response.data.modifiedCount) {
          refetch();
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `${user.name} is Student Now!!!`,
            showConfirmButton: false,
            timer: 1500
          })
        }
      })
   
    }
 





    return (
        <table className="min-w-full divide-y divide-gray-200">
            <thead>
                <tr>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Image
                    </th>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Name
                    </th>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Email
                    </th>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Role
                    </th>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Action
                    </th>
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
                {users.map((user) => (
                    <tr key={user._id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <img
                                src={user.photo}
                                alt={user.name}
                                className="h-8 w-8 rounded-full"
                            />
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{user.role}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <>
                                <div className="dropdown dropdown-left">
                                    <label tabIndex={0} className="btn m-1">Promote To</label>
                                    <ul tabIndex={0} className="dropdown-content  menu p-2 shadow bg-base-100 rounded-box w-52">
                                        <li className='btn btn-sm' onClick={() => makeAdmin(user)}>Admin</li>
                                        <li className='btn btn-sm' onClick={() => makeInstructor(user)} >Instructor</li>
                                        <li className='btn btn-sm' onClick={() => makeStudent(user)} >Student</li>
                                    </ul>
                                </div>
                            </>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default ManageUsers;