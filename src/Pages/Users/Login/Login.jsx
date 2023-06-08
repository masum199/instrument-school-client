
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import './Login.css'
import { AuthContext } from '../../../Components/AuthProvider/AuthProvider';
import { BsGoogle } from 'react-icons/Bs';
import { Link, useNavigate } from 'react-router-dom';
import { TbFidgetSpinner } from 'react-icons/tb'

const Login = () => {
  const { LogIn, googleSignIn, loading, setLoading } = useContext(AuthContext)
  const [errorMessage, setErrorMessage] = useState('')
  const { register, reset, handleSubmit, formState: { errors }, watch } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate()

  const onLogin = data => {
    LogIn(data.email, data.password)
      .then(result => {
        setErrorMessage('')
      navigate('/')
        const loggedUser = result.user
        console.log(loggedUser)
      })
      .catch(err => {
        console.error(err.message)
        setErrorMessage('Wrong User Or Password')
      })

  }

  const handleGoogleSignIn = data =>{
    googleSignIn()
    .then(result => {
      navigate('/')
      const loggedUser = result.user
      console.log(loggedUser)

    })
    .catch(err => {
      setLoading(false)
      console.log(err.message)
    })
    
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
                <div className=" my-10">
                  <div className='relative form-control'>
                    <input type={showPassword ? 'text' : 'password'} {...register("password", { required: true })} placeholder="password" className="py-6 pl-3 infut" />
                    <div className="absolute inset-y-0 text-2xl right-3 flex items-center">
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
                  {errors.password?.type === 'required' && <span className="text-amber-400">password is required</span>}
                  <span className="text-amber-400">{errorMessage}</span>
                </div>
                <p className='text-white'>Don't Have an Account? <Link to='/register'>Register Now!!!</Link></p>
                <div className="form-control mt-6">
                  <button className="btn btn-success text-white">{ loading ? <TbFidgetSpinner size={24} className='animate-spin' /> : 'Login'}  </button>
                </div>
              </form>
              <div className='mt-10 text-center text-2xl'>
                <p> ------ Or Login With ------ </p>
              </div>
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
      </div>
    </div>
  );
};


export default Login;