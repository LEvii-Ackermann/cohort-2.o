import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div 
      className="relative h-screen"
      style={{
        backgroundImage: "url('https://i.pinimg.com/1200x/66/fb/3e/66fb3e75f4e01c6079c29e83c642d500.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div 
        className="flex flex-col items-center gap-3 absolute top-1/2 left-1/2 -translate-1/2"
      >
        <h1 className="text-3xl font-bold">Welcome to our Page</h1>
        <button 
          onClick={() => {
            navigate("/products");
          }}
          className="bg-emerald-600 text-white border-none rounded px-4 py-2 text-xs cursor-pointer"
        >
          Get Products
        </button>
      </div>
    </div>

  );
};

export default Home;
