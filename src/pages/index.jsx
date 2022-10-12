import { useLocalStorage } from "react-use";

import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

import { Dashboard } from "./Dashboard";
import { Home } from "./Home";
import { Login } from "./Login";
import { SignUp } from "./SignUp";
import { Profile } from "./Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/:username",
    element: <Profile />,
  },
]);

export const Router = () => {
  return <RouterProvider router={router} />;
};
