import React, { useState, useContext } from "react";
import tabContext from "../../context/tabContext";

const Tabs = () => {
  // const [activeTab, setActiveTab] = useState("tab1");
  const tabCtx = useContext(tabContext);

  return (
    <>
      <div className="grid grid-cols-4 text-center bg-secondary-200 t">
        <button
          className={`p-4 text-primary-800 ${
            tabCtx.ourServiceActiveTab === "tab1"
              ? "font-DM text-xl font-bold border-b-4 border-primary-800"
              : "font-DM text-xl font-normal"
          }`}
          onClick={() => tabCtx.setOurServiceActiveTab("tab1")}
        >
          Transport
        </button>

        <button
          className={`p-4 text-primary-800 ${
            tabCtx.ourServiceActiveTab === "tab2"
              ? "font-DM text-xl font-bold border-b-4 border-primary-800"
              : "font-DM text-xl font-normal"
          }`}
          onClick={() => tabCtx.setOurServiceActiveTab("tab2")}
        >
          Rehabilitation
        </button>

        <button
          className={`p-4 text-primary-800 ${
            tabCtx.ourServiceActiveTab === "tab3"
              ? "font-DM text-xl font-bold border-b-4 border-primary-800"
              : "font-DM text-xl font-normal"
          }`}
          onClick={() => tabCtx.setOurServiceActiveTab("tab3")}
        >
          Home Care
        </button>

        <button
          className={`p-4 text-primary-800 ${
            tabCtx.ourServiceActiveTab === "tab4"
              ? "font-DM text-xl font-bold border-b-4 border-primary-800"
              : "font-DM text-xl font-normal"
          }`}
          onClick={() => tabCtx.setOurServiceActiveTab("tab4")}
        >
          Social Service
        </button>
      </div>
    </>
  );
};

export default Tabs;
