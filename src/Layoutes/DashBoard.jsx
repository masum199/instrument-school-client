import { NavLink, Outlet } from "react-router-dom";


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
            <NavLink to='/dashboard/addclass'> Admin Home</NavLink>
          </li>
          <li className="lg:block">
            <NavLink to='/dashboard/addItem'>Add an Item</NavLink>
          </li>
          <li className="lg:block">
            <NavLink to='/dashboard/manageitems'> Manage Items</NavLink>
          </li>
          <li className="lg:block">
            <NavLink to='/dashboard/payment'> Manage Bookings</NavLink>
          </li>
          <li className="lg:block">
            <NavLink to='/dashboard/allusers'> All Users</NavLink>
          </li>
          <li className="lg:hidden">
            <NavLink to='/dashboard/userhome'> User Home</NavLink>
          </li>
          <li className="lg:hidden">
            <NavLink to='/dashboard/reservation'> Reservation</NavLink>
          </li>
          <li className="lg:hidden">
            <NavLink to='/dashboard/payment'> Payment History</NavLink>
          </li>
          <li className="lg:hidden">
            <NavLink to='/dashboard/mycart'> My Cart</NavLink>
          </li>
          <div className="divider"></div>
          <li><NavLink to='/'> Home</NavLink></li>
          <li><NavLink to='/menu'>Our Menu</NavLink></li>
          <li><NavLink to='/order/salad'>Order Food</NavLink></li>
        </ul>
      </div>
    </div>
  );
};

export default DashBoard;