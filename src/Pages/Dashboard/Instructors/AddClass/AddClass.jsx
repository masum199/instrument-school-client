import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import axios from "axios";
import { AuthContext } from '../../../../Components/AuthProvider/AuthProvider';

const AddClass = () => {
    const{user} = useContext(AuthContext)
    const { register, handleSubmit, reset} = useForm();

    const status = "pending";
    const enrolled = 0
    const feedback = ''

    const onSubmit = data => {
            const {name,image,classImage, instructorName, instructorEmail, availableSeats,price} = data
            const newItem = {name,image, price:parseFloat(price), instructorName, instructorEmail,availableSeats:parseFloat(availableSeats), classImage,status,enrolled,feedback}
            console.log(newItem)
            axios.post('https://school-server-side.vercel.app/classes', newItem)
            .then(data => {
                console.log(data.data)
                if(data.data.insertedId){
                    reset()
                    Swal.fire({  
                        position: 'top',
                        icon: 'success',
                        title: 'class successfully uploaded',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
           }
   
    
    return (
<div className="w-full px-10">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='flex gap-4 my-4'>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text font-semibold">Class Name</span>
                    </label>
                    <input type="text" placeholder="Class Name"
                    {...register("name", {required: true, maxLength: 120})} 
                    className="input input-bordered w-full " />
                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text font-semibold">Photo URL</span>
                    </label>
                    <input type="text" placeholder="Instructor Image "
                    {...register("image", {required: true, maxLength: 120})} 
                    className="input input-bordered w-full " />
                </div>
                </div>
                <div className="flex gap-4 my-5">
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Instructor Name</span>
                    </label>
                    <input type="text"
                    value={user?.displayName}
                    {...register("instructorName", { required: true })} placeholder="Instructor Name" className="input input-bordered w-full " />
                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text font-semibold">Instructor Email</span>
                    </label>
                    <input type="email"
                    value={user?.email}
                    {...register("instructorEmail", { required: true })} placeholder="Instructor Email" className="input input-bordered w-full " />
                </div>
                </div>
                <div className="flex gap-4 my-5">
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Available Seats</span>
                    </label>
                    <input type="number"
                    {...register("availableSeats", { required: true })} placeholder="Available Seats" className="input input-bordered w-full " />
                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text font-semibold">Price*</span>
                    </label>
                    <input type="number"
                    {...register("price", { required: true })} placeholder="Price" className="input input-bordered w-full " />
                </div>
                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text font-semibold">Class Image</span>
                    </label>
                    <input type="text" placeholder="class Image"
                    {...register("classImage", {required: true, maxLength: 120})} 
                    className="input input-bordered w-full " />
                </div>
                <input className="btn btn-block mt-4" type="submit" value="Add class" />
            </form >
        </div >
    );
};

export default AddClass;