import React, { useState } from "react";

const SideNav = () => {
  const [dropDownWho, setDropDownWho] = useState(false);
  const [dropDownOur, setDropDownOur] = useState(false);
  const [dropDownGov, setDropDownGov] = useState(false);

  const toggleDropDownWho = () => {
    setDropDownWho(!dropDownWho);
  };

  const toggleDropDownOur = () => {
    setDropDownOur(!dropDownOur);
  };

  const toggleDropDownGov = () => {
    setDropDownGov(!dropDownGov);
  };

  return (
    <aside className="bg-transparent  p-6">
      <nav className="">
        <h3
          className="text-lg font-medium mb-2 cursor-pointer"
          onClick={toggleDropDownWho}
        >
          Who We Are
          {dropDownWho ? (
            <span className="ml-2 text-xs text-gray-600">&#9650;</span>
          ) : (
            <span className="ml-2 text-xs text-gray-600">&#9660;</span>
          )}
        </h3>
        {dropDownWho && (
          <ul className="list-none ml-8">
            <li className="mb-2">
              <a className="text-gray-700 hover:text-gray-900" href="#">
                Mission & Objectives
              </a>
            </li>
          </ul>
        )}
        <h3
          className="text-lg font-medium mb-2 cursor-pointer"
          onClick={toggleDropDownOur}
        >
          Our People
          {dropDownOur ? (
            <span className="ml-2 text-xs text-gray-600">&#9650;</span>
          ) : (
            <span className="ml-2 text-xs text-gray-600">&#9660;</span>
          )}
        </h3>
        {dropDownOur && (
          <ul className="list-none ml-8">
            <li className="mb-2">
              <a className="text-gray-700 hover:text-gray-900" href="#">
                Board Members
              </a>
            </li>
            <li className="mb-2">
              <a className="text-gray-700 hover:text-gray-900" href="#">
                Management
              </a>
            </li>
            <li className="mb-2">
              <a className="text-gray-700 hover:text-gray-900" href="#">
                Organisational Structure
              </a>
            </li>
          </ul>
        )}
        <h3
          className="text-lg font-medium mb-2 cursor-pointer"
          onClick={toggleDropDownGov}
        >
          Governance & Financials
          {dropDownGov ? (
            <span className="ml-2 text-xs text-gray-600">&#9650;</span>
          ) : (
            <span className="ml-2 text-xs text-gray-600">&#9660;</span>
          )}
        </h3>
        {dropDownGov && (
          <ul className="list-none ml-8">
            <li className="mb-2">
              <a className="text-gray-700 hover:text-gray-900" href="#">
                Corporate Governance
              </a>
            </li>
            <li className="mb-2">
              <a className="text-gray-700 hover:text-gray-900" href="#">
                Annual Report & Financial Statement
              </a>
            </li>
            <li className="mb-2">
              <a className="text-gray-700 hover:text-gray-900" href="#">
                Yearly Performance Information
              </a>
            </li>
          </ul>
        )}
      </nav>
    </aside>
  );
};

export default SideNav;
