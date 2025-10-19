import React from "react";
import { createBrowserRouter } from "react-router";
import Home from "../../Page/Home/Home";
import ErrorPage from "../../Page/Error/ErrorPage";
import CategoryNews from "../../Components/CategoryNews";
import Register from "../../Page/Auth/Register";
import Login from "../../Page/Auth/Login";
import Profile from "../../Page/Home/Profile";
import NewsDetails from "../../Page/NewsDetails/NewsDetails";
import PrivateRoutes from "../../Provider/PrivateRoutes";
import Loading from "../../Components/Loading";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "category/:id",
        hydrateFallbackElement: <Loading></Loading>,
        loader: () => fetch("/news.json"),
        Component: CategoryNews,
      },
      {
        path: "/profile",
        Component: Profile,
      },
    ],
  },
  {
    path: "newsDetails/:id",
    hydrateFallbackElement: <Loading></Loading>,
    loader: () => fetch("/news.json"),
    element: (
      <PrivateRoutes>
        <NewsDetails />
      </PrivateRoutes>
    ),
  },
  {
    path: "/auth/login",
    Component: Login,
  },
  {
    path: "/auth/register",
    Component: Register,
  },
  {
    path: "/*",
    element: <h2>Error -404</h2>,
  },
]);

export default router;
