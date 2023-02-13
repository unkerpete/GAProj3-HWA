import React from "react";
import { NavLink } from "react-router-dom";

const DrpdwnAboutUs = (props) => {
  return (
    <>
      <div
        className="bg-peach h-52 z-20 absolute w-full rounded-b-lg flex"
        onMouseEnter={() => {
          props.handleMouseOver(props.setHover, props.navBarBgColor);
        }}
        onMouseLeave={() => {
          props.handleMouseLeave(props.setHover);
        }}
      >
        <div className="w-1/3 ">
          <h3 className="text-center-4xl wrap w-80 relative top-10 left-28 text-green-600 ">
            Shaping an inclusive and enabling future.
          </h3>
        </div>
        <div className="flex w-2/3">
          <div className="p-10">
            <p className="mb-2 text-green-800 font-bold">Who We Are</p>
            <p className="text-green-800 hover:text-green-600 hover:cursor-pointer">
              <NavLink to="/about-us">Mission / Objectives</NavLink>
            </p>
          </div>
          <div className="p-10">
            <p className="mb-2 text-green-800 font-bold">Our People</p>
            <p className="text-green-800 hover:text-green-600 hover:cursor-pointer">
              <NavLink to="/about-us/our-people">Board Members</NavLink>
            </p>
            <p className="text-green-800 hover:text-green-600 hover:cursor-pointer">
              <a
                className="text-green-800 hover:text-green-600 hover:cursor-pointer"
                href="#management"
              >
                Management
              </a>
            </p>
            <p className="text-green-800 hover:text-green-600 hover:cursor-pointer">
              <a
                className="text-green-800 hover:text-green-600 hover:cursor-pointer"
                href="#org-structure"
              >
                Organisational Structure
              </a>
            </p>
          </div>
          <div className="p-10">
            <p className="mb-2 text-green-800 font-bold">
              Governance & Financials
            </p>
            <p className="text-green-800 hover:text-green-600 hover:cursor-pointer">
              <NavLink to="/about-us/governance">Corporate Governance</NavLink>
            </p>
            <p className="text-green-800 hover:text-green-600 hover:cursor-pointer">
              <NavLink to="/about-us/governance">
                Annual Report & Financial Statement
              </NavLink>
            </p>
            <p className="text-green-800 hover:text-green-600 hover:cursor-pointer">
              <a
                className="text-green-800 hover:text-green-600 hover:cursor-pointer"
                href="/about-us/governance#yearly-performance"
              >
                Yearly Performance Information
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="w-full absolute top-52 h-screen bg-black opacity-50 z-10"></div>
    </>
  );
};

export default DrpdwnAboutUs;
