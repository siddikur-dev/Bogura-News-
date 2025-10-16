import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link, Outlet } from "react-router";

const Home = () => {
  return (
    <section className="container mx-auto">
      <header>
        {/* Title */}
        <h2 className="header-font font-bold text-6xl text-center my-5">The Bogura News</h2>
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
