import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Course from "./pages/Course";
import Navbar from "./components/Navbar";
import Kodex from "./pages/Kodex";
import Kodr from "./pages/Kodr";
import Footer from "./components/footer";
import BackButton from "./components/BackButton";

const App = () => {
  return (
    <div>
      <BackButton />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/course" element={<Course />}>
          <Route path="kodex" element={<Kodex />} />
          <Route path="kodr" element={<Kodr />} />
        </Route>
        <Route path="/course/kodex" element={<Kodex />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
