import React, { useState, useEffect } from "react"; // Added useEffect here
import { Link } from "react-scroll";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
 
    const [navOpen, setNavOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
  
    const toggleNav = () => {
      setNavOpen(!navOpen);
    };
  
    // Close the menu when scrolling
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 0) {
          setNavOpen(false); // Close the menu on scroll
        }
        setIsScrolled(window.scrollY > 100); // Change navbar style after 100px scroll
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

  return (
    <div className={`h-[7vw] z-50  relative navbarmin w-full border-b-2 border-zinc-800 flex p-4 items-center justify-between  ${isScrolled ? "bg-zinc-800" : ""}`}>
      <div className="left h-full w-56 font-medium font-serif text-2xl p-4">
        DARSHANPATIL
      </div>

      {/* Desktop Links */}
      <div className="center hidden md:flex">
        <div className="links w-[100%] text-[16px] cursor-pointer gap-7 text flex items-center justify-around">
          <Link to="home" smooth={true} className="text2 font-[500]">
            Home
          </Link>
          <Link to="programs" smooth={true} className="text2 font-[500]">
            Programs
          </Link>
          <Link to="Project" smooth={true} className="text2 font-[500]">
            Project
          </Link>
          <Link to="whyus" smooth={true} className="text2 font-[500]">
            Why us
          </Link>
          <Link to="plan" smooth={true} className="text2 font-[500]">
            Plans
          </Link>
          <Link to="why" smooth={true} className="text2 font-[500]">
          Reviews
          </Link>
        </div>
      </div>

      {/* Hamburger Icon */}
      <i className="md:hidden z-20 text-3xl cursor-pointer" onClick={toggleNav}>
        {navOpen ? <IoMdClose /> : <CiMenuFries />}
      </i>

      {/* Mobile Links */}
      <div
        className={`fixed top-0 right-0 h-full w-[70%] bg-zinc-800 text-white p-10 transition-transform transform ${
          navOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden z-10`}
      >
        <div className="flex flex-col gap-6">
          <Link to="home" smooth={true} className="text2 font-[500]" onClick={toggleNav}>
            Home
          </Link>
          <Link to="progems" smooth={true} className="text2 font-[500]" onClick={toggleNav}>
            Programs
          </Link>
          <Link to="Project" smooth={true} className="text2 font-[500]" onClick={toggleNav}>
            Project
          </Link>
          <Link to="whyus" smooth={true} className="text2 font-[500]" onClick={toggleNav}>
            Why us
          </Link>
          <Link to="plan" smooth={true} className="text2 font-[500]" onClick={toggleNav}>
            Plans
          </Link>
          <Link to="why" smooth={true} className="text2 font-[500]" onClick={toggleNav}>
          Reviews
          </Link>
        </div>
      </div>

      {/* Right Button */}
      <div className="rightbtn hidden md:block mr-12 px-5 py-2 rounded-md bg-white text-black">
        <Link to="Email" smooth={true} className="font-semibold cursor-pointer">
          Join Now
        </Link>
      </div>

      {/* Mobile-specific styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          .rightbtn {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default Navbar;
