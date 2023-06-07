
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import './Login.css'

const Login = () => {
  const { register, reset, handleSubmit, formState: { errors }, watch } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  const onLogin = data => {
    console.log(data)

  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="pt-10 min-h-screen background-image">
      
      <div className="hero-content ">

        <div className=" flex-shrink-0 w-full max-w-sm shadow-2xl">
        
          <div className=" boom text-white bg-style-info">
          <h2 className='my-10 text-center text-5xl'>Login into account</h2>
           <div className=''>
           <form onSubmit={handleSubmit(onLogin)}>
              <div className="form-control">
                <div className='form-control'>
                <input type="email" name='email' {...register("email", { required: true })} placeholder="email" className="py-6 pl-3 infut" />
                </div>
                {errors.email && <span className="text-amber-400">Email is required</span>}
              </div>
              <div className="form-control my-10">
               <div className='relative form-control'>
               <input type={showPassword ? 'text' : 'password'} {...register("password", { required: true })} placeholder="password" className="py-6 pl-3 infut" />
                {errors.password?.type === 'required' && <span className="text-amber-400">password is required</span>}
                <div className="absolute inset-y-0 text-2xl mb-1 right-3 flex items-center">
                  {showPassword ? (
                    <FaEyeSlash
                      className="text-gray-300 cursor-pointer"
                      onClick={togglePasswordVisibility}
                    />
                  ) : (
                    <FaEye
                      className="text-gray-300 cursor-pointer"
                      onClick={togglePasswordVisibility}
                    />
                  )}
                </div>
               </div>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-success text-white">Login</button>
              </div>
            </form>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;