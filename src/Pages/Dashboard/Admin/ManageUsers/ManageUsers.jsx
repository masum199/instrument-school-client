import React, { useState } from 'react';
import getUser from '../../../../Hooks/getUser';
import axios from 'axios';
import Swal from 'sweetalert2';
import { FaChalkboardTeacher } from 'react-icons/fa';
import { AiOutlineCrown } from 'react-icons/ai';
import { GiGraduateCap } from 'react-icons/gi';

const ManageUsers = () => {
  const [users, , refetch] = getUser();
  const [promotedUsers, setPromotedUsers] = useState([]);

  const makeAdmin = (user) => {
    axios.patch(`http://localhost:5000/users/admin/${user._id}`).then((response) => {
      console.log(response.data);
      if (response.data.modifiedCount) {
        refetch();
        setPromotedUsers([...promotedUsers, user._id]);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: `${user.name} is admin now!!!`,
          showConfirmButton: false,
          timer: 1500
        });
      }
    });
  };

  const makeInstructor = (user) => {
    axios.patch(`http://localhost:5000/users/instructor/${user._id}`).then((response) => {
      console.log(response.data);
      if (response.data.modifiedCount) {
        refetch();
        setPromotedUsers([...promotedUsers, user._id]);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: `${user.name} is Instructor Now!!!`,
          showConfirmButton: false,
          timer: 1500
        });
      }
    });
  };

  const makeStudent = (user) => {
    axios.patch(`http://localhost:5000/users/student/${user._id}`).then((response) => {
      console.log(response.data);
      if (response.data.modifiedCount) {
        refetch();
        setPromotedUsers([...promotedUsers, user._id]);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: `${user.name} is Student Now!!!`,
          showConfirmButton: false,
          timer: 1500
        });
      }
    });
  };

  const getRoleIcon = (role) => {
    switch (role) {
      case 'Admin':
        return <AiOutlineCrown />;
      case 'Instructor':
        return <FaChalkboardTeacher />;
      case 'Student':
        return <GiGraduateCap />;
      default:
        return null;
    }
  };

  const isPromoted = (userId) => {
    return promotedUsers.includes(userId);
  };

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
              <img src={user.photo} alt={user.name} className="h-8 w-8 rounded-full" />
            </td>
            <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
            <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
            <td className={user.role == "Admin" && "px-9 whitespace-nowrap btn btn-success mt-4" || user.role == "Instructor" && "mt-4 whitespace-nowrap btn btn-warning" || "px-7 whitespace-nowrap btn btn-error mt-4"}>{user.role}</td>
            <td className="px-6 py-4 whitespace-nowrap">
              {!isPromoted(user._id) ? (
                <div className="dropdown dropdown-left">
                  <label tabIndex={0} className="btn m-1">
                    Promote To
                  </label>
                  <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li className="btn btn-sm" onClick={() => makeAdmin(user)}>
                      {getRoleIcon('Admin')} Admin
                    </li>
                    <li className="btn btn-sm" onClick={() => makeInstructor(user)}>
                      {getRoleIcon('Instructor')} Instructor
                    </li>
                    <li className="btn btn-sm" onClick={() => makeStudent(user)}>
                      {getRoleIcon('Student')} Student
                    </li>
                  </ul>
                </div>
              ) : (
                <span className="text-gray-500">
                  {user.role === 'Admin' && <AiOutlineCrown className='text-5xl lg:ml-6'/>}
                  {user.role === 'Instructor' && <FaChalkboardTeacher className='text-5xl lg:ml-6'/>}
                  {user.role === 'Student' && <GiGraduateCap className='text-5xl lg:ml-6'/>}
                </span>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ManageUsers;