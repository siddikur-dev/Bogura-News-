import { format } from "date-fns";
import React from "react";
import Marquee from "react-fast-marquee";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link, Outlet } from "react-router";
import Navbar from "../../Components/Navbar";
import AllCategories from "../../Components/AllCategories";
import RightAside from "../../Components/RightAside";

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
      <main className="w-11/12 grid grid-cols-12 mx-auto my-4 gap-5  ">
        {/* Nav Left*/}
        <aside className="col-span-3">
          <AllCategories></AllCategories>
        </aside>
        <div className="col-span-6">
          <h2 className="text-lg font-bold">Dragon News Home</h2>
          <Outlet></Outlet>
        </div>
        <aside className="col-span-3">
          <RightAside></RightAside>
        </aside>
      </main>
    </section>
  );
};

export default Home;
