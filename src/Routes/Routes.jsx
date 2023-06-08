import {
    createBrowserRouter,
} from "react-router-dom";
import App from "../App";
import Main from "../Layoutes/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../HomePage/Home/Home";
import Login from "../Pages/Users/Login/Login";
import Register from "../Pages/Users/Register/Register";
import Instructors from "../Pages/Instructors/Instructors";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
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
            }
        ]
    },

]);

export default router