import React, { useState, useContext } from "react";
import { Link, NavLink } from "react-router";
import ThemeToggle from "../Ui/ThemeToggle/ThemeToggle";
import { AuthContext } from "../Provider/AuthContext";

const AuthNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useContext(AuthContext);

  const activeClass = "text-secondary bg-primary";
  const normalClass = "text-secondary/80 hover:text-secondary";

  return (
    <nav className="bg-base-100 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="w-1/3"></div>

          {/* Center Navigation */}
          <div className="hidden md:flex md:items-center md:justify-center md:space-x-8 w-1/3">
            <NavLink
              to="/"
               className={({ isActive }) =>
                isActive ? activeClass : normalClass
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/auth/register"
              className={({ isActive }) =>
                isActive ? activeClass : normalClass
              }
            >
              Register
            </NavLink>
            {user ? (
              <NavLink
                to="/profile"
                 className={({ isActive }) =>
                isActive ? activeClass : normalClass
              }
              >
                Profile
              </NavLink>
            ) : (
              <Link
                to="/auth/login"
                 className={({ isActive }) =>
                isActive ? activeClass : normalClass
              }
              >
                Login
              </Link>
            )}
          </div>

          {/* Right side */}
          <div className="hidden md:flex md:items-center md:justify-end w-1/3">
            <Link
              to="/auth/register"
              className="px-4 py-2 rounded-md text-sm font-medium text-bg-base-100 bg-secondary/50 transition duration-150 ease-in-out"
            >
              Register
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-secondary hover:text-secondary/90 hover:bg-bg-base-200 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-bg-base-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? activeClass : normalClass
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? activeClass : normalClass
              }
            >
              About
            </NavLink>
            <NavLink
              to="/career"
              className={({ isActive }) =>
                isActive ? activeClass : normalClass
              }
            >
              Career
            </NavLink>
            <ThemeToggle />
            <Link
              to="/auth/register"
              className="block px-3 py-2 rounded-md text-base font-medium text-bg-base-100 bg-secondary hover:bg-secondary/80"
            >
              Register
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default AuthNavbar;
