import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Particles from 'react-particles-js';

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
    <div className="hero min-h-screen bg-base-200">
       <Particles
        params={{
          particles: {
            number: {
              value: 50,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            shape: {
              type: 'circle',
              stroke: {
                width: 0,
                color: '#000000',
              },
            },
            size: {
              value: 3,
              random: true,
              anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false,
              },
            },
            opacity: {
              value: 0.5,
              random: false,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
              },
            },
            move: {
              enable: true,
              speed: 6,
              direction: 'none',
              random: false,
              straight: false,
              out_mode: 'out',
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            detect_on: 'canvas',
            events: {
              onhover: {
                enable: true,
                mode: 'repulse',
              },
              onclick: {
                enable: true,
                mode: 'push',
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
              push: {
                particles_nb: 4,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
          retina_detect: true,
        }}
        className="particles-bg"
      />

      <div className="hero-content flex-col lg:flex-row-reverse">

        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <form onSubmit={handleSubmit(onLogin)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                {errors.email && <span className="text-amber-400">Email is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
               <div className='relative form-control'>
               <input type={showPassword ? 'text' : 'password'} {...register("password", { required: true })} placeholder="password" className="input input-bordered" />
                {errors.password?.type === 'required' && <span className="text-amber-400">password is required</span>}
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
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">Provident cupiditate voluptatem </p>
        </div>
      </div>
    </div>
  );
};

export default Login;