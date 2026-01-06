import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const App = () => {
  const [change, setChange] = useState(0);
  const [images, setImages] = useState("");

  const getData = async () => {
    const response = await axios.get("https://picsum.photos/v2/list");
    const imgurl = response.data.map((elem) => elem.download_url);

    const random = Math.floor(Math.random() * 30);

    setImages(imgurl[random]);
  };

  useEffect(
    function () {
      getData();
    },
    [change]
  );

  return (
    <div
      className="h-screen bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${images})`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
      <button
        className="z-10 px-4 py-2 absolute left-1/2 bottom-32 transform -translate-x-1/2 border-2 rounded-4xl border-white text-white font-semibold bg-emerald-600 cursor-pointer"
        onClick={() => {
          setChange((prev) => prev + 1);
        }}
      >
        click me
      </button>
    </div>
  );
};

export default App;
