import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import axios from "axios";

const img_hosting_token = import.meta.env.VITE_Image_Upload_token

const AddClass = () => {
    const { register, handleSubmit, reset} = useForm();
    const img_hosting_url= `https://api.imgbb.com/1/upload?key=${img_hosting_token}`

    const status = "pending";
    const enrolled = 0

    const onSubmit = data => {
        const formData = new FormData()
        formData.append('image', data.image[0])

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgResponse => {
           if(imgResponse.success){
            const imgURL = imgResponse.data.display_url
            const {name, instructorName, instructorEmail, availableSeats,price} = data
            const newItem = {name, price:parseFloat(price), instructorName, instructorEmail,availableSeats, image:imgURL,status,enrolled}
            console.log(newItem)
            axios.post('http://localhost:5000/classes', newItem)
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
        })
    }
    return (
<div className="w-full px-10">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text font-semibold">Class Name</span>
                    </label>
                    <input type="text" placeholder="Class Name"
                    {...register("name", {required: true, maxLength: 120})} 
                    className="input input-bordered w-full " />
                </div>
                <div className="flex gap-4 my-5">
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Instructor Name</span>
                    </label>
                    <input type="text"
                    {...register("instructorName", { required: true })} placeholder="Instructor Name" className="input input-bordered w-full " />
                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text font-semibold">Instructor Email</span>
                    </label>
                    <input type="email"
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
                        <span className="label-text">Class Image</span>
                    </label>
                    <input type="file" 
                    {...register("image", { required: true })} className="file-input file-input-bordered w-full " />
                </div>
                <input className="btn btn-sm mt-4" type="submit" value="Add Item" />
            </form >
        </div >
    );
};

export default AddClass;