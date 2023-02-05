import React, { useState } from "react";

const Tabs = ({ setActiveTab, activeTab }) => {
  // const [activeTab, setActiveTab] = useState("tab1");

  return (
    <>
      <div className="grid grid-cols-2 text-center bg-primary-200 ">
        <button
          className={`p-4  ${
            activeTab === "tab1"
              ? "font-DM text-xl font-bold border-b-4 border-primary-800"
              : "font-DM text-xl font-normal"
          }`}
          onClick={() => setActiveTab("tab1")}
        >
          Make a Donation
        </button>

        <button
          className={`p-4 ${
            activeTab === "tab2"
              ? "font-DM text-xl font-bold border-b-4 border-primary-800"
              : "font-DM text-xl font-normal"
          }`}
          onClick={() => setActiveTab("tab2")}
        >
          Become a Volunteer
        </button>
      </div>
    </>
  );
};

export default Tabs;
