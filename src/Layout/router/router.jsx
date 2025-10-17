import React from "react";
import { createBrowserRouter } from "react-router";
import Home from "../../Page/Home/Home";
import ErrorPage from "../../Page/Error/ErrorPage";
import CategoryNews from "../../Components/CategoryNews";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "category/:id",
        Component: CategoryNews,
      },
    ],
  },
]);

export default router;
