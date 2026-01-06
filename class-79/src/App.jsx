import React from "react";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Men from "./pages/Men";
import Product from "./pages/Product";
import Header from "./components/Header";
import AllAbout from "./pages/AllAbout";
import Women from "./pages/Women";
import NoPage from "./pages/NoPage";
import AnyCourse from "./pages/AnyCourse";
import Course from "./pages/Course";

const App = () => {
  return (
    <div className="bg-black h-screen">
      <Header /> 
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>       
        <Route path="/product" element={<Product />}/>       
        <Route path="/product/men" element={<Men />}/>
        <Route path="/product/women" element={<Women />}/>
        <Route path="/about/:id" element={<AllAbout />} />
        <Route path="/course" element={<Course />} />
        <Route path="/course/:id" element={<AnyCourse />} />

        <Route path="*" element={<NoPage />} />       
      </Routes>
    </div>
  );
};

export default App;
