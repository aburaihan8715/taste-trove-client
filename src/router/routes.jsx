// import { createBrowserRouter } from "react-router-dom";
// import MainLayout from "../layouts/MainLayout";
// import Home from "../pages/Home";
// import Login from "../pages/Login";
// import Register from "../pages/Register";
// import Blogs from "../pages/Blogs";
// import NotFound from "../pages/NotFound";
// import ForgetPassword from "../pages/ForgetPassword";
// import ChefRecipes from "../pages/ChefRecipes";
// import PrivateRoute from "./PrivateRoute";

import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Blogs from "../pages/Blogs";
import ForgetPassword from "../pages/ForgetPassword";
import PrivateRoute from "./PrivateRoute";
import ChefRecipes from "../pages/ChefRecipes";

const router = createBrowserRouter([
  {
    element: <MainLayout></MainLayout>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/forgetPassword",
        element: <ForgetPassword></ForgetPassword>,
      },
      {
        path: "/chefRecipes/:id",
        element: (
          <PrivateRoute>
            <ChefRecipes></ChefRecipes>
          </PrivateRoute>
        ),
        loader: () => fetch("https://taste-trove-server-aburaihan8715.vercel.app/chefs"),
        // https://taste-trove-server-aburaihan8715.vercel.app/chefs
        // https://taste-trove-server.vercel.app/chefs
      },
    ],
  },
]);

export default router;
