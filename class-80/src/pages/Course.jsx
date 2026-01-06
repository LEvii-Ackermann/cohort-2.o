import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Course = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex  items-center text-5xl justify-center ">
        Course Page
      </div>
      <div className=" flex flex-row gap-6">
        <NavLink to="kodex">kodex</NavLink>
        <NavLink to="kodr">kodr</NavLink>
      </div>

      <Outlet />
    </div>
  );
};

export default Course;
