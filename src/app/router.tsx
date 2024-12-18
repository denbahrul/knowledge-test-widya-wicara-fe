import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthLayout from "../components/layout/auth-layout";
import LoginPage from "./routes/auth/login";
import Register from "./routes/auth/register";
import HomePage from "./routes/home";

export default function RouterApp() {
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
      path: "/",
      element: <HomePage />,
    },
  ]);

  return <RouterProvider router={router} />;
}
