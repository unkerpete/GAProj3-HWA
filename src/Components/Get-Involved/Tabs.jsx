import React, { useState, useContext } from "react";
import tabContext from "../../context/tabContext";

const Tabs = () => {
  // const [activeTab, setActiveTab] = useState("tab1");
  const tabCtx = useContext(tabContext);

  return (
    <>
      <div className="grid grid-cols-2 text-center bg-primary-200 t">
        <button
          className={`p-4 text-primary-800 ${
            tabCtx.getInvolvedActiveTab === "tab1"
              ? "font-DM text-xl font-bold border-b-4 border-primary-800"
              : "font-DM text-xl font-normal"
          }`}
          onClick={() => tabCtx.setGetInvolvedActiveTab("tab1")}
        >
          Make a Donation
        </button>

        <button
          className={`p-4 text-primary-800 ${
            tabCtx.getInvolvedActiveTab === "tab2"
              ? "font-DM text-xl font-bold border-b-4 border-primary-800"
              : "font-DM text-xl font-normal"
          }`}
          onClick={() => tabCtx.setGetInvolvedActiveTab("tab2")}
        >
          Become a Volunteer
        </button>
      </div>
    </>
  );
};

export default Tabs;
