import React from "react";
import { createBrowserRouter } from "react-router";
import Home from "../../Page/Home/Home";
import ErrorPage from "../../Page/Error/ErrorPage";
import CategoryNews from "../../Components/CategoryNews";
import Register from "../../Page/Auth/Register";
import Login from "../../Page/Auth/Login";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "category/:id",
        loader: () => fetch("/news.json"),
        Component: CategoryNews,
      },
    ],
  },
  {
    path: "/auth/login",
    Component: Login,
  },
  {
    path: "/auth/register",
    Component: Register,
  },
]);

export default router;
