import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthLayout from "../components/layout/auth-layout";
import LoginPage from "./routes/auth/login";
import Register from "./routes/auth/register";
import HomePage from "./routes/home";
import { useAppDispatch } from "../hooks/use-store";
import { useEffect } from "react";
import { getUserLogged } from "../stores/auth/async";
import MainLayout from "../components/layout/main-layout";
import ProfilePage from "./routes/profile";
import UpdateProduct from "./routes/update-product";
import AddProductPage from "./routes/add-product";

export default function RouterApp() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getUserLogged());
  }, []);
  const router = createBrowserRouter([
    {
      element: <AuthLayout />,
      children: [
        {
          path: "/login",
          element: <LoginPage />,
        },
        {
          path: "/register",
          element: <Register />,
        },
      ],
    },
    {
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/profile",
          element: <ProfilePage />,
        },
        {
          path: "/add-product",
          element: <AddProductPage />,
        },
        {
          path: "/update-product/:id",
          element: <UpdateProduct />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
