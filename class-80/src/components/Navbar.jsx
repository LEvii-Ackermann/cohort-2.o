import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex gap-4 py-4 px-8 text-sm">
      <NavLink
        to="/"
        end
        className={({ isActive }) => {
          return isActive ? "text-red-600" : "text-white";
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({isActive}) => 
          `text-3xl ${isActive ? "text-red-600" : "text-white"}`
        }
      >
        About
      </NavLink>
      <NavLink
        to="/course"
        className={({ isActive }) => {
          return isActive ? "text-red-600" : "text-white";
        }}
      >
        Course
      </NavLink>
    </div>
  );
};

export default Navbar;
