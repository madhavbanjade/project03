import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <div className="relative min-h-fit">
        <div className="absolute font-ribeye flex flex-col items-center  top-12 md:left-80 left-20 lg:left-[40%] text-white">
          <h1 className="text-3xl">Register</h1>
          <button className="mt-4 flex space-x-2">
            <Link to="/" className="mt-1">
              <IoHomeOutline className="text-xl" />
            </Link>
            <Link to="" className="mt-1">
              <MdKeyboardDoubleArrowRight className="text-xl" />
            </Link>
            <Link to="/" className="text-xl">
              Register
            </Link>
          </button>
        </div>
        <img
          src="/contact-bg.png"
          alt="market"
          className="object-cover h-60 w-full"
        />
      </div>

      <div className=" bg-slate-100 mt-2 shadow-2xl w-3/4 flex mx-auto p-8 h-auto flex-col mb-8 font-quicksand">
        <h1 className="text-3xl text-red-500 flex mx-auto font-semibold">
          Sign-Up
        </h1>
        <form action="" className="flex flex-col mx-auto space-y-4 mt-8 w-full">
          <label htmlFor="Email">Email:</label>
          <input
            type="email"
            placeholder="e-mail"
            className="p-4 rounded-lg border border-gray-400 "
          />
          <label htmlFor="Email">Password:</label>
          <input
            type="password"
            placeholder="password"
            className="p-4 rounded-lg border border-gray-400 "
          />
          <button className="absloute mt-2 bg-red-500 p-4 rounded-xl text-white text-xl font-semibold">
            Sign-Up
          </button>
        </form>
        <p className="mt-2">
          Already have an account ?{" "}
          <Link to="/login">
            <button className="text-blue-800 hover:underline font-bold">
              Sign-In
            </button>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
