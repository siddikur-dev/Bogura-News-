import React from "react";
import { NavLink } from "react-router";
import ThemeToggle from "../Ui/ThemeToggle/ThemeToggle";
const Navbar = () => {
  return (
    <div className="flex items-center justify-between mx-auto ">
      <div></div>
      <div className="text-gray-500 flex gap-4">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About </NavLink>
        <NavLink to="/profile">Profile</NavLink>
      </div>
      <div className="flex items-center gap-3">
        <ThemeToggle></ThemeToggle>
        <NavLink to="/auth/login" className="btn btn-secondary">
          Login
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
