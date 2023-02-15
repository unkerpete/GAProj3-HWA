import React from "react";
import spinner from "./loadingspinner.svg";

const Loading = () => {
  return (
    <div className="flex flex-col ">
      <div>
        <h1>We are processing your payment</h1>
      </div>
      <div className="mx-auto">
        <img src={spinner} width="200" />
      </div>
    </div>
  );
};

export default Loading;
