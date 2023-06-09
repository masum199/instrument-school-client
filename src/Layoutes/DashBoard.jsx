import { NavLink, Outlet } from "react-router-dom";
import { AiOutlineFileAdd } from 'react-icons/ai';


const DashBoard = () => {
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
          <li className="lg:block">
            <NavLink to='/dashboard/addclass'><AiOutlineFileAdd/> Add Class</NavLink>
          </li>
          <div className="divider"></div>
          <li><NavLink to='/'>  Home</NavLink></li>
        </ul>
      </div>
    </div>
  );
};

export default DashBoard;