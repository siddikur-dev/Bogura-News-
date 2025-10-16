import { format } from "date-fns";
import React from "react";
import Marquee from "react-fast-marquee";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link, Outlet } from "react-router";
import Navbar from "../../Components/Navbar";

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
        {/* Latest Section */}
        <div className="w-11/12 mx-auto my-5 flex items-center gap-4 bg-base-300 p-3">
          <p className="text-bold bg-primary px-3 py-2 font-bold text-white ">
            Latest
          </p>
          <Marquee speed={20}>
            <p className="text-bold text-gray-500 font-bold ">
              Stay updated with the latest news, events, and stories from
              Bogura. Your trusted source politics, sports, and community
              updates.
            </p>
          </Marquee>
        </div>
        {/* Navbar */}
        <nav className="w-11/12 mx-auto my-5">
          <Navbar></Navbar>
        </nav>
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
