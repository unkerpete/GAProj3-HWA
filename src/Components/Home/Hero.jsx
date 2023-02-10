import React from "react";
import Button from "../Button";

const Hero = () => {
  return (
    <div className="grid grid-cols-2  bg-peach">
      <div className="p-20 grid grid-rows-1">
        <div className="grid content-center">
          <div className=" h-fit">
            <h1 className="text-primary-800">
              Empowering and Enabling People with Disabilities since 1969
            </h1>
            <p className="font-DM text-xl font-normal mt-5 -primary-800">
              Welcome to Handicaps Welfare Association
            </p>
          </div>
        </div>
        <div className="h-fit content-end">
          <Button text={"Read about Us"} link={`/About-Us`} />
        </div>
      </div>
      <div>
        <img
          src="src/Assets/shujun/homepage/hero/hero_image.jpg"
          alt="Man in wheelchair with family members"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default Hero;
