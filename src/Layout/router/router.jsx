import React from "react";
import { createBrowserRouter } from "react-router";
import Home from "../../Page/Home/Home";
import ErrorPage from "../../Page/Error/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
    errorElement: <ErrorPage></ErrorPage>,
  },
]);

export default router;
