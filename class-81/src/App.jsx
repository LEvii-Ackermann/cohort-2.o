import React from "react";
import Navbar from "./components/Navbar";
import AllSections from "./components/AllSections";
import Footer from "./components/Footer";
import UserContext from "./context/UserContext";

const App = () => {
  const courseData = "Course 2 is Kodex and it is good";

  return (
    <UserContext.Provider value={courseData}>
      <div className="flex flex-col gap-8 m-4">
        <Navbar />
        <AllSections courseData={courseData} />
        <Footer />
      </div>
    </UserContext.Provider>
  );
};

export default App;
