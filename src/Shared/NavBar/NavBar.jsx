import React, { useContext, useState } from 'react';
import logo from '../../assets/images/academy logo.jpg'
import { AuthContext } from '../../Components/AuthProvider/AuthProvider';
import { Link, NavLink } from 'react-router-dom';
import './NavBar.css'
import useStudent from '../../Hooks/useStudent';
import useAdmin from '../../Hooks/useAdmin';
import useInstructor from '../../Hooks/useInstructor';

const NavBar = () => {
  const {user,logOut} = useContext(AuthContext)
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isStudent] =  useStudent()
  const [isAdmin] =  useAdmin()
  const [isInstructor] = useInstructor()
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    logOut()
    .then(() => { })
    .then(err => {
      console.log(err);
    })
  }

  return (
    <nav className="fixed z-10 w-full bg-white  border-gray-200 dark:bg-gray-900">
      <div className="lg:mx-10 flex flex-wrap items-center justify-between mx-auto p-4">
        <a className="flex items-center">
          <img
            src={logo}
            className="h-14 rounded-3xl mr-3"
          />
          <span className="self-center text-3xl font-semibold whitespace-nowrap text-warning ">
          Summer Hub
          </span>
        </a>
        <div className="flex md:order-2">
          {user && <img className='w-8 rounded-3xl lg:mx-4' src={user?.photoURL} alt="" />}
          {
            user ? <>
            <button onClick={handleLogout} className="btn btn-warning">Logout</button> </> : <>
             <Link to="/login"><button className="btn btn-success">Login</button></Link>
            </>
          }
          <button
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded={isMenuOpen}
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between ${
            isMenuOpen ? 'flex' : 'hidden'
          } w-full md:flex md:w-auto md:order-1`}
          id="navbar-cta"
        >
          <ul className="flex text-black flex-col font-medium p-4 md:p-0 mt-4   md:flex-row md:space-x-8 md:mt-0 md:border-0">
            <NavLink to='/' activeClassName='active'>
            <li className=''>
                Home
            </li>
            </NavLink>
            <NavLink to='/instructors' activeClassName='active'> <li>Instructors </li></NavLink>
            <NavLink to='/classes' activeClassName='active'> <li>Classes </li></NavLink>
            {
              isAdmin && <NavLink to='/dashboard/adminhome' activeClassName='active'> <li>Dashboard </li></NavLink> || isInstructor && <NavLink to='/dashboard/instructorhome' activeClassName='active'> <li>Dashboard </li></NavLink>
               || isStudent && <NavLink to='/dashboard/studenthome' activeClassName='active'> <li>Dashboard </li></NavLink>
            }
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;