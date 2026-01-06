import React from "react";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          navigate(-1);
        }}
        className="absolute top-0 right-0 text-xs p-2 cursor-pointer m-4 rounded-full bg-blue-700 text-white"
      >
        back
      </button>
    </div>
  );
};

export default BackButton;
