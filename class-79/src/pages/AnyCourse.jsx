import React from "react";
import { useParams } from "react-router-dom";

const AnyCourse = () => {
  const params = useParams();
  console.log(params.id)
  
  return (
    <div className="text-3xl underline absolute text-white  top-1/2 left-1/2 -translate-1/2">
      {params.id} Course Page
    </div>
  );
};

export default AnyCourse;
