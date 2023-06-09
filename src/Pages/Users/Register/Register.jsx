import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../Components/AuthProvider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Register.css'
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import canvaImage from '../../../assets/images/cool-background.png'
import { BsGoogle } from 'react-icons/Bs';
import { TbFidgetSpinner } from 'react-icons/tb'
import { saveUser } from '../../../Hooks/saveUser';
import Swal from 'sweetalert2';




const Register = () => {
    const { register, reset, handleSubmit, formState: { errors }, watch } = useForm();
    const { CreateUser, updateUserprofile, googleSignIn, loading, setLoading } = useContext(AuthContext)
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const password = watch('password', '')
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'



    const onRegister = data => {
        CreateUser(data.email, data.password)
            .then(result => {

                const loggedUser = result.user
                console.log(loggedUser)
                updateUserprofile(data.name, data.photoURL)
                    .then(() => {
                        Swal.fire({  
                            position: 'top',
                            icon: 'success',
                            title: ' successfully Registered',
                            showConfirmButton: false,
                            timer: 1500
                          })
                        saveUser(result.user)
                        navigate('/login')
                    })
            })
            .catch(err => {
                Swal.fire({  
                    position: 'top',
                    icon: 'Error',
                    title: 'Please Fill Form Correctly',
                    showConfirmButton: false,
                    timer: 1500
                  })
                console.log(err);
                setLoading(false)
            })

    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                Swal.fire({  
                    position: 'top',
                    icon: 'success',
                    title: 'successfully Registered',
                    showConfirmButton: false,
                    timer: 1500
                  })
                saveUser(result.user)
                const loggedUser = result.user
                console.log(loggedUser)
                navigate(from)
            })
            .catch(err => {
                Swal.fire({  
                    position: 'top',
                    icon: 'success',
                    title: 'sry cant log in',
                    showConfirmButton: false,
                    timer: 1500
                  })
                console.log(err.message)
                setLoading(false)
            })

    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const ToggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    return (

        <div className="hero lol min-h-screen bg-base-200">

            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                    <div className="card-body cool">
                        <form onSubmit={handleSubmit(onRegister)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} placeholder="Name" className="input input-bordered" />
                                {errors.name && <span className="text-amber-400">Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} placeholder="Email" className="input input-bordered" />
                                {errors.email && <span className="text-amber-400">Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">PhotoURL</span>
                                </label>
                                <input type="text" {...register("photoURL", { required: true })} placeholder="PhotoURL" className="input input-bordered" />
                                {errors.photoURL && <span className="text-amber-400">Photo URL is required</span>}
                            </div>
                            <div className="">
                                <label className="label">
                                    <span className="label-text text-white">Password</span>
                                </label>
                                <div className='form-control relative'>
                                    <input type={showPassword ? 'text' : 'password'} {...register("password", {
                                        required: true, minLength: 6,
                                        pattern: /^(?=.*[A-Z])(?=.*[!@#$%^&*])/,
                                    })} placeholder="password" className="input input-bordered" />
                                    <div className="absolute inset-y-0 text-2xl mb-1 right-3 flex items-center">
                                        {showPassword ? (
                                            <FaEyeSlash
                                                className="text-gray-500 cursor-pointer"
                                                onClick={togglePasswordVisibility}
                                            />
                                        ) : (
                                            <FaEye
                                                className="text-gray-500 cursor-pointer"
                                                onClick={togglePasswordVisibility}
                                            />
                                        )}
                                    </div>
                                </div>
                                {errors.password?.type === 'required' && <span className="text-amber-400">password is required</span>}
                                {errors.password?.type === 'minLength' && <span className="text-amber-400">password 6 number required</span>}
                                {errors.password?.type === 'pattern' && <span className="text-amber-400"> Password must have a capital letter and a special character</span>}
                            </div>
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text text-white">Confirm Password</span>
                                </label>
                                <div className='relative form-control'>
                                    <input
                                        type={showConfirmPassword ? 'text' : 'password'}
                                        {...register('confirmPassword', {
                                            required: true,
                                            validate: value => value === password
                                        })}
                                        placeholder="Confirm Password"
                                        className="input input-bordered relative"
                                    />
                                    <div className="absolute inset-y-0  text-2xl mb-1 right-3 flex items-center">
                                        {showConfirmPassword ? (
                                            <FaEyeSlash
                                                className="text-gray-500 cursor-pointer"
                                                onClick={ToggleConfirmPasswordVisibility}
                                            />
                                        ) : (
                                            <FaEye
                                                className="text-gray-500 cursor-pointer"
                                                onClick={ToggleConfirmPasswordVisibility}
                                            />
                                        )}
                                    </div>
                                </div>
                                {errors.confirmPassword?.type === 'required' && <span className="text-amber-400">password is required</span>}
                                {errors.confirmPassword?.type === 'validate' && (
                                    <span className="text-amber-400">Passwords do not match</span>
                                )}
                            </div>
                            <p className='text-white'>Already Registered? <Link to='/login'>Please LogIn</Link></p>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">{loading ? <TbFidgetSpinner size={24} className='animate-spin' /> : 'Register'}</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="text-center lg:text-left text-white">
                    <h1 className="text-5xl font-bold">Join our community!!</h1>
                    <p className="py-6">Register and unlock new possibilities </p>
                    <div className='text-center pt-10'>
                        <a onClick={handleGoogleSignIn} className="inline-flex overflow-hidden text-white bg-gray-900 rounded group">
                            <span className="px-3.5 py-2 text-white bg-[#dc3545;]  flex items-center justify-center">
                                <BsGoogle></BsGoogle>
                            </span>
                            <span className="pl-4 pr-5 py-2.5 bg-[#CC3333;]">Google +</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;