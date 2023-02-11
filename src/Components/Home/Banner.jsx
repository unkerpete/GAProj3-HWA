import React from "react";

const Banner = () => {
  return (
    <div className="grid grid-cols-2  bg-peach">
      <div>
        <img
          src="src/Assets/shujun/homepage/banner/woman.png"
          alt="Woman in wheelchair having coffee"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="grid content-center">
        <h3 className="text-primary-800 text-center">
          "I feel like myself again"
        </h3>
      </div>
    </div>
  );
};

export default Banner;
