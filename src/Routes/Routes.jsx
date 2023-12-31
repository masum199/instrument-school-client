import {
    createBrowserRouter,
} from "react-router-dom";
import App from "../App";
import Main from "../Layoutes/Main";
// import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../HomePage/Home/Home";
import Login from "../Pages/Users/Login/Login";
import Register from "../Pages/Users/Register/Register";
import DashBoard from "../Layoutes/DashBoard";

import Instructors from "../Pages/Instructors/Instructors";
import PrivateRoutes from "./PrivateRoutes";
import AddClass from "../Pages/Dashboard/Instructors/AddClass/AddClass";
import MyClasses from "../Pages/Dashboard/Instructors/MyClasses/MyClasses";
import MySelectedClass from "../Pages/Dashboard/Student/MySelectedClass/MySelectedClass";
import MyEnrolledClass from "../Pages/Dashboard/Student/MyEnrolledClass/MyEnrolledClass";
import ManageClasses from "../Pages/Dashboard/Admin/ManageClasses/ManageClasses";
import ManageUsers from "../Pages/Dashboard/Admin/ManageUsers/ManageUsers";
import AdminHome from "../Pages/Dashboard/Admin/AdminHome/AdminHome";
import InstructorHome from "../Pages/Dashboard/Instructors/InstructorHome/InstructorHome";
import Classes from "../Pages/Classes/Classes";
import StudentHome from "../Pages/Dashboard/Student/StudentHome/StudentHome";
// import Payment from "../Pages/Dashboard/Student/Payment/Payment";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        // errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path:'login',
                element:<Login></Login>
            },
            {
                path:'register',
                element:<Register></Register>
            },
            {
                path: 'instructors',
                element:<Instructors></Instructors>
            },
            {
                path: 'classes',
                element:<Classes></Classes>
            },
        ]
    },
    {
        path: 'dashboard',
        element:<PrivateRoutes><DashBoard></DashBoard></PrivateRoutes>,
        children:[
            {
                path:'myselectedclass',
                element:<MySelectedClass></MySelectedClass>
            },
            {
                path:'myenrolledclass',
                element:<MyEnrolledClass></MyEnrolledClass>
            },
            {
                path:'studenthome',
                element:<StudentHome></StudentHome>
            },
            // {
            //     path: 'payment',
            //     element:<Payment></Payment>
            // },
            // instructor
            {
                path:'addclass',
                element:<AddClass></AddClass>
            },
            {
                path:'instructorclasses',
                element:<MyClasses></MyClasses>
            },
            {
                path:'instructorhome',
                element:<InstructorHome></InstructorHome>
            },
            // admin routes
            {
                path:'manageclass',
                element:<ManageClasses></ManageClasses>
            },
            {
                path:'manageusers',
                element:<ManageUsers></ManageUsers>
            },
            {
                path:'adminhome',
                element:<AdminHome></AdminHome>
            }
        ]
    }

]);

export default router