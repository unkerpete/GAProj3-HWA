import React from "react";
import Button from "../Button";

const Loaded = () => {
  return (
    <div className="flex flex-col text-primary-800 text-center mt-16 mb-96">
      <h1 className="">Thank you for your donation!</h1>
      <p className="m-5 font-DM text-xl font-normal">
        A confirmation has been sent to your email.
      </p>
      <img
        className="object-scale-down h-[445px]"
        src="src/Assets/izhar/GetInvolved/GetInvolved_image.png"
        alt=""
      />
      <p className="m-5 font-DM text-xl font-normal">
        In the meantime, you may find out how else you can support us.
      </p>
      <Button link="/home" text="Learn More" />
    </div>
  );
};

export default Loaded;
