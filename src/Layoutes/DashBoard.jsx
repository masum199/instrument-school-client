import { NavLink, Outlet } from "react-router-dom";
import { AiOutlineFileAdd } from 'react-icons/ai';
import { FaHome } from "react-icons/fa";
import useAdmin from "../Hooks/useAdmin";
import useInstructor from "../Hooks/useInstructor";
import useStudent from "../Hooks/useStudent";
import { useContext } from "react";
import { AuthContext } from "../Components/AuthProvider/AuthProvider";


const DashBoard = () => {
  const {logOut} = useContext(AuthContext)
  const [isAdmin] = useAdmin()
  const [isInstructor] = useInstructor()
  const [isStudent] = useStudent()


  const handleLogout = () => {
    logOut()
    .then(() => { })
    .then(err => {
      console.log(err);
    })
  }

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox"className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center ">
        <Outlet></Outlet>
        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
      </div>
      <div className="drawer-side bg-[#D1A054]">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4">
          {/* student route */}
         {
          isStudent && <>
           <li className="lg:block">
            <NavLink to='/dashboard/myselectedclass'><AiOutlineFileAdd/> My Selected Classes</NavLink>
          </li>
          <li className="lg:block">
            <NavLink to='/dashboard/myenrolledclass'><AiOutlineFileAdd/> My Enrolled Classes</NavLink>
          </li>
          </>
         }
          {/* instructor route */}
          {
            isInstructor && <>
            <li className="lg:block">
            <NavLink to='/dashboard/addclass'><AiOutlineFileAdd/> Add Class</NavLink>
          </li>
          <li className="lg:block">
            <NavLink to='/dashboard/instructorclasses'><AiOutlineFileAdd/>My Classes</NavLink>
          </li>
            </>
          }
          {/* admin route */}
          {
            isAdmin && <>
            <li className="lg:block">
            <NavLink to='/dashboard/manageclass'><AiOutlineFileAdd/>Manage Classes</NavLink>
          </li>
          <li className="lg:block">
            <NavLink to='/dashboard/manageusers'><AiOutlineFileAdd/>Manage Users</NavLink>
          </li>
            </>
          }


          <div className="divider"></div>
          <li><NavLink to='/'><FaHome/>  Home</NavLink></li>
          <li onClick={handleLogout}><NavLink to='/login'><FaHome/>  LogOut</NavLink></li>
        </ul>
      </div>
    </div>
  );
};

export default DashBoard;