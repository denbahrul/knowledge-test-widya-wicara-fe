import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./routes/home";
import Login from "./routes/auth/login";
import Register from "./routes/auth/register";

export default function RouterApp() {
  const router = createBrowserRouter([
    {
      children: [
        {
          path: "/login",
          element: <Login />,
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
