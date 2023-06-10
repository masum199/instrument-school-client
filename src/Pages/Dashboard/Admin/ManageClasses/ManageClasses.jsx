import React from 'react';
import Swal from 'sweetalert2';
import { useState } from 'react';
import { FcApproval } from 'react-icons/fc';
import { MdDoNotDisturb } from 'react-icons/md';
import { BiMessageRoundedEdit } from 'react-icons/bi';

import axios from 'axios';
import useClasses from '../../../../Hooks/useClasses';

const ManageClasses = () => {
  const [permit, setPermit] = useState([]);
  const [classes, , refetch] = useClasses();

  const handleApprove = (cla) => {
    if (cla.status === 'approve') {
      return;
    }

    axios.patch(`http://localhost:5000/classes/approve/${cla._id}`).then((response) => {
      console.log(response.data);
      if (response.data.modifiedCount) {
        refetch();
        setPermit([...permit, cla._id]);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: `${cla.name} is approved now!!!`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  const handleDeny = (cla) => {
    if (cla.status === 'deny') {
      return;
    }

    axios.patch(`http://localhost:5000/classes/deny/${cla._id}`).then((response) => {
      console.log(response.data);
      if (response.data.modifiedCount) {
        refetch();
        setPermit([...permit, cla._id]);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: `${cla.name} is denied!!!`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  const getPermitIcon = (status) => {
    switch (status) {
      case 'approve':
        return <FcApproval />;
      case 'deny':
        return <MdDoNotDisturb />;
      default:
        return null;
    }
  };

  const isPermitted = (claId) => {
    return permit.includes(claId);
  };

  return (
    <table className="min-w-full divide-y divide-gray-200 pr-6">
      <thead>
        <tr>
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
            Seats Available
          </th>
          <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Price
          </th>
          <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Status
          </th>
          <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Permit
          </th>
          <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Feedback
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {classes.map((cla) => (
          <tr key={cla._id}>
            <td className="px-6 py-4 whitespace-nowrap">
              <img src={cla.image} alt={cla.name} className="h-8 w-8 rounded-full" />
            </td>
            <td className="px-6 py-4 whitespace-nowrap">{cla.name}</td>
            <td className="px-6 py-4 whitespace-nowrap">{cla.instructorName}</td>
            <td className="px-6 py-4 whitespace-nowrap">{cla.instructorEmail}</td>
            <td className="px-6 py-4 whitespace-nowrap">{cla.availableSeats}</td>
            <td className="px-6 py-4 whitespace-nowrap">{cla.price}</td>
            <td className="px-6 py-4 whitespace-nowrap">{cla.status}</td>
            <td className="px-6 py-4 whitespace-nowrap">
              {!isPermitted(cla._id) ? (
                <div className="dropdown dropdown-left">
                  <label tabIndex={0} className="btn m-1">
                    permission
                  </label>
                  <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li className="btn btn-sm" onClick={() => handleApprove(cla)}>
                      {getPermitIcon('approve')} approve
                    </li>
                    <li className="btn btn-sm" onClick={() => handleDeny(cla)}>
                      {getPermitIcon('deny')} deny
                    </li>
                  </ul>
                </div>
              ) : (
                <span className="text-gray-500">
                  <p className='flex justify-center'>
                  <p>
                  {cla.status === 'approved' && <FcApproval className="text-5xl" />}
                  </p>
                  </p>
                  <p className='flex justify-center'>
                    <p>
                    {cla.status === 'denied' && <MdDoNotDisturb className="text-5xl" />}
                    </p>
                  </p>
                </span>
              )}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-4xl"><BiMessageRoundedEdit/></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ManageClasses;