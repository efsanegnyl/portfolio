import React from "react";

function HomeCard({ image, text }) {
  return (
    <>
      <div className="flex items-center mb-2">
        <div className="bg-amber-300 w-16 p-5 rounded-full mr-5 ">
          <img className="w-16" src={image} alt="" />
        </div>
        <p className="text-xl font-semibold"> {text}</p>
      </div>
    </>
  );
}
export default HomeCard;
