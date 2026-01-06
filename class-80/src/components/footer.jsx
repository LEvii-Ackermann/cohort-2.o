import React from "react";
import { useNavigate } from "react-router-dom";

const footer = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between absolute bottom-0 bg-pink-950 w-full px-6 py-4">
      <h2>Footer</h2>
      <button
        onClick={() => {
          navigate("/course");
        }}
        className="border-none px-2 py-1 rounded text-white bg-emerald-600 text-xs"
      >
        Courses
      </button>
    </div>
  );
};

export default footer;
