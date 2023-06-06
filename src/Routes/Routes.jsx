import {
    createBrowserRouter,
  } from "react-router-dom";
import App from "../App";
import Main from "../Layoutes/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>
    //   children:[{
    //     path:
    //   }]
    },

  ]);

  export default router