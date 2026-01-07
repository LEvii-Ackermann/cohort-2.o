import React from "react";

const Navbar = (props) => {
  console.log(props.children);

  return <div className="bg-pink-800 w-full p-3">
    Navbar
    <h1>{props.children}</h1>
    </div>;
};

export default Navbar;
