import { format } from "date-fns";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link, Outlet } from "react-router";

const Home = () => {
  return (
    <section className="container mx-auto">
      <header className="poppins text-center">
        {/* Title */}
        <h2 className="header-font font-bold text-6xl mt-3">The Bogura News</h2>
        <p className="text-gray-500 text-base font-bold py-3">
          Journalism Without Fear or Favour
        </p>
        <p>{format(new Date(), "EEEE, MMMM dd, yyyy")}</p>
      </header>
      <main>
        {/* Nav Left*/}
        <div className="nav-left"></div>
        <div className="main">
          <Outlet></Outlet>
        </div>
        <div className="nav-right"></div>
      </main>
    </section>
  );
};

export default Home;
