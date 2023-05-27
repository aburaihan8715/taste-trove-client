import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Blogs from "../components/Blogs/Blogs";
import NotFound from "../components/NotFound/NotFound";
import ForgetPassword from "../components/ForgetPassword/ForgetPassword";
import ChefRecipes from "../components/ChefRecipes/ChefRecipes";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
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
      },
    ],
  },
]);

export default router;
