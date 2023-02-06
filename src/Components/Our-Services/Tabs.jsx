import React, { useState } from "react";

const Tabs = ({ setActiveTab, activeTab }) => {
  // const [activeTab, setActiveTab] = useState("tab1");

  return (
    <>
      <div className="grid grid-cols-4 text-center bg-primary-200 t">
        <button
          className={`p-4 text-primary-800 ${
            activeTab === "tab1"
              ? "font-DM text-xl font-bold border-b-4 border-primary-800"
              : "font-DM text-xl font-normal"
          }`}
          onClick={() => setActiveTab("tab1")}
        >
          Transport
        </button>

        <button
          className={`p-4 text-primary-800 ${
            activeTab === "tab2"
              ? "font-DM text-xl font-bold border-b-4 border-primary-800"
              : "font-DM text-xl font-normal"
          }`}
          onClick={() => setActiveTab("tab2")}
        >
          Rehabilitation
        </button>

        <button
          className={`p-4 text-primary-800 ${
            activeTab === "tab3"
              ? "font-DM text-xl font-bold border-b-4 border-primary-800"
              : "font-DM text-xl font-normal"
          }`}
          onClick={() => setActiveTab("tab3")}
        >
          Home Care
        </button>

        <button
          className={`p-4 text-primary-800 ${
            activeTab === "tab4"
              ? "font-DM text-xl font-bold border-b-4 border-primary-800"
              : "font-DM text-xl font-normal"
          }`}
          onClick={() => setActiveTab("tab4")}
        >
          Social Service
        </button>
      </div>
    </>
  );
};

export default Tabs;
