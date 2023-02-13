import React, { useContext } from "react";
import makedonationLogo from "../assets/peter/header/Get_Involved_MakeADonation_icon.png";
import volunteerLogo from "../assets/peter/header/Get_Involved_BecomeAVolunteer_icon.png";
import { NavLink } from "react-router-dom";
import getInvolvedContext from "../context/tabContext";

const DrpdwnGetInvolved = (props) => {
  const getInvolvedTabContext = useContext(getInvolvedContext);
  return (
    <>
      <div
        className="bg-primary-200 h-52 z-20 absolute w-full rounded-b-lg flex"
        onMouseEnter={() => {
          props.handleMouseOver(props.setHover, props.navBarBgColor);
        }}
        onMouseLeave={() => {
          props.handleMouseLeave(props.setHover);
        }}
      >
        <div className="w-1/3 ">
          <h3 className="text-center-4xl wrap w-96 relative top-10 left-28 text-green-600 ">
            Join our community of supporters and advocates.
          </h3>
        </div>
        <div className="w-2/3 p-10 left-20 h-min">
          <div className="inline-block mx-20 text-center">
            <img
              src={makedonationLogo}
              alt="transport-logo"
              className="w-16 mx-auto"
            />
            <h6 className="text-green-800 hover:text-green-600 hover:cursor-pointer">
              <NavLink
                to="/get-involved/"
                onClick={() => {
                  getInvolvedTabContext.setGetInvolvedActiveTab("tab1");
                }}
              >
                Make a Donation
              </NavLink>
            </h6>
          </div>
          <div className="inline-block mx-20">
            <img
              src={volunteerLogo}
              alt="rehab-logo"
              className="w-16 mx-auto"
            />
            <h6 className="text-green-800 hover:text-green-600 hover:cursor-pointer">
              <NavLink
                to="/get-involved/"
                onClick={() => {
                  getInvolvedTabContext.setGetInvolvedActiveTab("tab2");
                }}
              >
                Become a Volunteer
              </NavLink>
            </h6>
          </div>
        </div>
      </div>
      <div className="w-full absolute top-52 h-screen bg-black opacity-50 z-10"></div>
    </>
  );
};

export default DrpdwnGetInvolved;
