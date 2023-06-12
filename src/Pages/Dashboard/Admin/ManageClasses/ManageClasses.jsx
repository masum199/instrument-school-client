import React, { useState, useRef } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';
import {
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    FormControl,
    FormLabel,
} from '@chakra-ui/react';
import { FcApproval } from 'react-icons/fc';
import { MdDoNotDisturb } from 'react-icons/md';
import { BiMessageRoundedEdit } from 'react-icons/bi';
import useClasses from '../../../../Hooks/useClasses';

const ManageClasses = () => {
    const [permit, setPermit] = useState([]);
    const [classes, , refetch] = useClasses();
    const [isOpen, setIsOpen] = useState(false);
    const [editingClass, setEditingClass] = useState(null);
    const [feedbackClass, setFeedbackClass] = useState(null);
    const initialRef = useRef(null);
    const finalRef = useRef(null)

    const handleApprove = (cla) => {
        if (cla.status === 'approve') {
            return;
        }
        axios.patch(`https://school-server-side.vercel.app/classes/approve/${cla._id}`).then((response) => {
            console.log(response.data);
            if (response.data.modifiedCount) {
                refetch();
                setPermit([...permit, cla._id]);
                setEditingClass(cla);
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

        axios.patch(`https://school-server-side.vercel.app/classes/deny/${cla._id}`).then((response) => {
            console.log(response.data);
            if (response.data.modifiedCount) {
                refetch();
                setPermit([...permit, cla._id]);
                setEditingClass(cla);
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

    const handleOpenModal = (cla) => {
        setIsOpen(true);
        setEditingClass(cla);
    };

    const handleFeedback = (e) => {
        e.preventDefault();
        if (editingClass) {
            const id = editingClass._id;
            const form = e.target;
            const feedback = form.textarea.value;
            const newFeedback = { feedback };
            axios.put(`https://school-server-side.vercel.app/classes/feedback/${id}`, newFeedback)
                .then(data => {
                    console.log(data.data);
                    if (data.data.modifiedCount) {
                        Swal.fire({
                            position: 'top',
                            icon: 'success',
                            title: 'class successfully uploaded',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        handleCloseModal(true)
                    }

                })
                .catch(error => {
                    console.log(error);
                });
        }
    };


    const handleCloseModal = () => {
        setIsOpen(false);
        setEditingClass(null);
        setFeedbackClass(null);
    };

    return (
        <>
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
                                <img src={cla.classImage} alt={cla.name} className="h-12 w-14 rounded-full" />
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">{cla.name}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{cla.instructorName}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{cla.instructorEmail}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{cla.availableSeats}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{cla.price}</td>
                            <td className={cla.status == "approved" && " whitespace-nowrap btn btn-success mt-4" || cla.status == "pending" && "px-5 mt-4 whitespace-nowrap btn btn-warning" || "px-7 whitespace-nowrap btn btn-error mt-4"}>{cla.status}</td>
                            <td className="px-6 py-4 whitespace-nowrap">

                                {
                                    cla.status === 'approved' ? (
                                        <span className="text-gray-500">
                                            <div className='flex justify-center'>
                                                <div>
                                                    <FcApproval className="text-5xl" />
                                                </div>
                                            </div>
                                        </span>
                                    ) : (
                                        !isPermitted(cla._id) ? (
                                            <div className="dropdown dropdown-left">
                                                <label tabIndex={0} className="btn m-1 inline-flex h-12 animate-background-shine items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%]  px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
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
                                                <div className='flex justify-center'>
                                                    <div>
                                                        {cla.status === 'denied' && <MdDoNotDisturb className="text-5xl" />}
                                                    </div>
                                                </div>
                                            </span>
                                        )
                                    )
                                }
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-4xl">
                                <BiMessageRoundedEdit onClick={() => handleOpenModal(cla)} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <Modal isOpen={isOpen} onClose={handleCloseModal} initialFocusRef={initialRef} finalFocusRef={finalRef}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>send Your Feedback To Instructor</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <form onSubmit={handleFeedback}>
                            <FormControl mt={4}>
                                <FormLabel>Send Feedback</FormLabel>
                                <textarea name='textarea' className="textarea textarea-accent w-96 h-32" placeholder="Send Feedback"></textarea>
                                <ModalFooter>
                                    <input type="submit" className='btn btn-outline btn-success' value="Send" />
                                    <Button onClick={handleCloseModal} className='btn btn-outline btn-warning ml-10'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                    </Button>
                                </ModalFooter>
                            </FormControl>

                        </form>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
};

export default ManageClasses;