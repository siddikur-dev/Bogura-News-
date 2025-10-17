import React from "react";
import { NavLink } from "react-router";
import user from '../../src/assets/user.png'
const Navbar = () => {
  return (
    <div className="flex items-center justify-between mx-auto ">
      <div className="text-gray-500 flex gap-4">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About </NavLink>
        <NavLink to="career">Career</NavLink>
      </div>
      <div className="flex items-center gap-3">
        <img src={user} alt="" />
        <button className="btn btn-secondary">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
