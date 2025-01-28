import React, { useState } from "react";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { IoCloseCircle } from "react-icons/io5";
import { MdArrowDropDown } from "react-icons/md";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropDown, setOpenDropDown] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleDropDown = (dropDown) => {
    setOpenDropDown(openDropDown === dropDown ? null : dropDown);
  };

  return (

<div className="">
<nav className="bg-white shadow-md flex items-center justify-between p-4 w-full ">
      {/* Overlay for mobile menu */}
      {isOpen && (
        <div
          className="absolute inset-0 bg-black opacity-50 z-40 lg:hidden"
          onClick={closeMenu}
        ></div>
      )}

      {/* Logo Section */}
      <div className="flex-shrink-0 lg:ml-[6%] space-x-2">
        <img src="" alt="Logo" className="h-14 lg:h-18" />
      </div>

      {/* Hamburger Menu and Navigation Links */}
        <div className="flex items-center ml-[50%] lg:ml-0 space-x-2 lg:space-x-0">
          {/* Hamburger Menu */}
          <button
            className="lg:hidden"
            onClick={toggleMenu}
            aria-expanded={isOpen}
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Navigation Links */}
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } fixed top-0 left-0 h-full bg-white w-3/4 z-50 transition-transform duration-300 lg:static lg:block lg:w-auto lg:bg-transparent`}
          >
            <ul className="flex flex-col space-y-4 p-4 lg:flex-row lg:space-y-0 lg:space-x-6 lg:p-0">
              {/* Close Button for Mobile */}
              <button
                className="self-end mb-4 hover:cursor-pointer lg:hidden"
                onClick={closeMenu}
              >
                <IoCloseCircle className="text-3xl text-red-500" />
              </button>
              <li>
                <a
                  href="#"
                  className="block px-2 py-2 text-black hover:text-red-500"
                >
                  Home
                </a>
              </li>
              <li className="relative">
                <button
                  className="flex items-center text-black hover:text-red-500"
                  onClick={() => handleDropDown("about")}
                >
                  <span className="block px-2 py-2">About Us</span>
                  <MdArrowDropDown className="text-xl" />
                </button>
                {openDropDown === "about" && (
                  <div className="absolute ml-28 lg:ml-0 bg-white shadow-lg lg:w-[30vh] border border-t-2 border-t-red-400 rounded-md mt-2 lg:mt-4">
                    <a
                      href="#"
                      className="block px-4 py-2 text-black hover:text-red-500"
                    >
                      About Company
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-black hover:text-red-500"
                    >
                      Employees
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-black hover:text-red-500"
                    >
                      History
                    </a>
                  </div>
                )}
              </li>
              <li>
                <a
                  href="#"
                  className="block px-2 py-2 text-black hover:text-red-500"
                >
                  Market
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-2 py-2 text-black hover:text-red-500"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Cart and User Section */}
        <div className="flex items-center space-x-4 lg:mr-10">
          <button>
            <FaShoppingCart className="text-xl text-red-500 hover:text-black" />
          </button>
          <button>
            <FaUser className="text-xl text-red-500 hover:text-black" />
          </button>
        </div>
    </nav>
    </div>
  );
};

export default Nav;
