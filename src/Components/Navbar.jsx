import React, { use } from "react";
import { Link, NavLink } from "react-router";
import ThemeToggle from "../Ui/ThemeToggle/ThemeToggle";
import { AuthContext } from "../Provider/AuthContext";
const Navbar = () => {
  const { user, logOut } = use(AuthContext);

  // logOut Function
  const handleLogOut = () => {
    logOut()
      .then(() => {
        alert("sign out successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="flex items-center justify-between mx-auto ">
      <div></div>
      <div className="text-gray-500 flex gap-4">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About </NavLink>
        {user ? <NavLink to="/profile">Profile</NavLink> : ""}
      </div>
      <div className="flex items-center gap-3">
        <ThemeToggle></ThemeToggle>
        {user ? (
          <Link onClick={handleLogOut} className="btn btn-secondary">
            LogOut
          </Link>
        ) : (
          <NavLink to="/auth/register" className="btn btn-secondary">
            Register
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;
