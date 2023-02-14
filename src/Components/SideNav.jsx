import React, { useState, useEffect } from "react";

const SideNav = () => {
  const [dropDownWho, setDropDownWho] = useState(false);
  const [dropDownOur, setDropDownOur] = useState(false);
  const [dropDownGov, setDropDownGov] = useState(false);

  useEffect(() => {
    const path = window.location.pathname;
    if (path === "/about-us") {
      setDropDownWho(true);
    }
    if (path === "/about-us/our-people") {
      setDropDownOur(true);
    }
    if (path === "/about-us/our-people#management") {
      setDropDownOur(true);
    }
    if (path === "/about-us/our-people#org-structure") {
      setDropDownOur(true);
    }
    if (path === "/about-us/governance") {
      setDropDownGov(true);
    }
    if (path === "/about-us/governance#yearly-performance") {
      setDropDownGov(true);
    }
  }, []);

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
    <aside className="bg-transparent sticky top-20 p-6">
      <nav className="">
        <h3
          className="text-lg font-medium mb-2 cursor-pointer"
          onClick={toggleDropDownWho}
        >
          Who We Are
          {dropDownWho ? (
            <span className="ml-2 text-xs text-primary-800">&#9650;</span>
          ) : (
            <span className="ml-2 text-xs text-primary-800">&#9660;</span>
          )}
        </h3>
        {dropDownWho && (
          <ul className="list-none ml-8">
            <li className="mb-2">
              <a
                className="text-primary-800 hover:text-primary-600"
                href="/about-us"
              >
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
            <span className="ml-2 text-xs text-primary-800">&#9650;</span>
          ) : (
            <span className="ml-2 text-xs text-primary-800">&#9660;</span>
          )}
        </h3>
        {dropDownOur && (
          <ul className="list-none ml-8">
            <li className="mb-2">
              <a
                className="text-primary-800 hover:text-primary-600"
                href="/about-us/our-people"
              >
                Board Members
              </a>
            </li>
            <li className="mb-2">
              <a
                className="text-primary-800 hover:text-primary-600"
                href="#management"
              >
                Management
              </a>
            </li>
            <li className="mb-2">
              <a
                className="text-primary-800 hover:text-primary-600"
                href="#org-structure"
              >
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
            <span className="ml-2 text-xs text-primary-800">&#9650;</span>
          ) : (
            <span className="ml-2 text-xs text-primary-800">&#9660;</span>
          )}
        </h3>
        {dropDownGov && (
          <ul className="list-none ml-8">
            <li className="mb-2">
              <a
                className="text-primary-800 hover:text-primary-600"
                href="/about-us/governance"
              >
                Corporate Governance
              </a>
            </li>
            <li className="mb-2">
              <a
                className="text-primary-800 hover:text-primary-600"
                href="/about-us/governance"
              >
                Annual Report & Financial Statement
              </a>
            </li>
            <li className="mb-2">
              <a
                className="text-primary-800 hover:text-primary-600"
                href="/about-us/governance#yearly-performance"
              >
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
