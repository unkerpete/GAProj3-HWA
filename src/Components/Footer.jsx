import React, { useContext, useRef, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import fbLogo from "../assets/peter/footer/Footer_FB_icon.svg";
import instaLogo from "../assets/peter/footer/Footer_Instar_icon.svg";
import ytbeLogo from "../assets/peter/footer/Footer_YT_icon.svg";
import tabContext from "../context/tabContext";
// import useAxios from "../Hooks/useAxios";
import axios from "axios";

const Footer = () => {
  const tabCtx = useContext(tabContext);
  const [subEmail, setSubEmail] = useState("");

  const createSubscriber = async () => {
    try {
      const res = await axios.put("http://localhost:5001/subs/create", {
        email: subEmail,
      });
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  const handleInputSubmit = () => {
    createSubscriber();
    setSubEmail("Thank you for subscribing");
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDonateClick = () => {
    scrollToTop();
    tabCtx.setGetInvolvedActiveTab("tab1");
  };

  const handleVolunteerClick = () => {
    scrollToTop();
    tabCtx.setGetInvolvedActiveTab("tab2");
  };

  const handleTransportClick = () => {
    scrollToTop();
    tabCtx.setOurServiceActiveTab("tab1");
  };

  const handleRehabClick = () => {
    scrollToTop();
    tabCtx.setOurServiceActiveTab("tab2");
  };

  const handleHomeCareClick = () => {
    scrollToTop();
    tabCtx.setOurServiceActiveTab("tab3");
  };

  const handleSocialClick = () => {
    scrollToTop();
    tabCtx.setOurServiceActiveTab("tab4");
  };

  return (
    <>
      <div className="bg-primary-200 mt-10">
        <div className="h-10">
          <div className="h-24 w-24 rounded-full text-center mx-auto relative bottom-6 bg-primary-200 -mt-10 pt-2">
            ^
          </div>
          <div
            className="text-center mx-auto relative bottom-24 hover:cursor-pointer w-fit p-3 z-1"
            onClick={scrollToTop}
          >
            <p>Back to top</p>
          </div>
        </div>
        <div className="pl-20 text-green-900">
          <h3>Subscribe to Our Newsletter</h3>
          <p>For the latest news, events, and updates.</p>
          {/* backend - Add useref state for input, and click handler on the -> button. On click of the button, send useref state to backend. */}
          <input
            className="h-10 w-1/4 mt-4 rounded-md pl-2"
            placeholder="Email"
            // ref={subEmailRef}
            // value={subEmail && "Thank you for subscribing"}
            value={subEmail}
            onChange={(e) => setSubEmail(e.target.value)}
          />
          <div
            className="h-8 w-8 rounded-full text-3xl leading-7 text-center inline-block relative right-10 top-1 bg-primary-400 hover:cursor-pointer"
            onClick={handleInputSubmit}
          >
            ⇾
          </div>
        </div>
        <div className="pl-20 text-green-900 flex mt-14">
          <div className="w-2/5">
            <p className="font-DM text-lg font-bold">Head Office @ Whampoa</p>
            <p className="mt-5">16 Whampoa Drive, Singapore 327725</p>
            <p className="mt-5">+65 6253 3006</p>
            <p className="w-36 mt-5">Monday to Fridays 9:00 am to 6:00pm</p>
          </div>
          <div className="w-1/5">
            <p className="font-DM text-lg font-bold">About Us</p>
            <p className="mt-5 hover:cursor-pointer w-fit">
              <NavLink to="/about-us" onClick={scrollToTop}>
                Who We Are
              </NavLink>
            </p>
            <p className="mt-2 hover:cursor-pointer w-fit">
              <NavLink to="/about-us/our-people" onClick={scrollToTop}>
                Our People
              </NavLink>
            </p>
            <p className="mt-2 w-28 hover:cursor-pointer">
              <NavLink to="/about-us/governance" onClick={scrollToTop}>
                Governance & Financial
              </NavLink>
            </p>
          </div>
          <div className="w-1/5">
            <p className="font-DM text-lg font-bold">Our Services</p>
            <p className="mt-5 hover:cursor-pointer w-fit">
              <NavLink to="/our-services" onClick={handleTransportClick}>
                Transport
              </NavLink>
            </p>
            <p className="mt-2 hover:cursor-pointer w-fit">
              <NavLink to="/our-services" onClick={handleRehabClick}>
                Rehabilitation
              </NavLink>
            </p>
            <p className="mt-2 hover:cursor-pointer w-fit">
              <NavLink to="/our-services" onClick={handleHomeCareClick}>
                Home Care
              </NavLink>
            </p>
            <p className="mt-2 hover:cursor-pointer w-fit">
              <NavLink to="/our-services" onClick={handleSocialClick}>
                Social Services
              </NavLink>
            </p>
          </div>
          <div className="w-1/5">
            <p className="font-DM text-lg font-bold">Get Involved</p>
            <p className="mt-5 hover:cursor-pointer w-fit">
              <NavLink to="/get-involved/" onClick={handleDonateClick}>
                Donate
              </NavLink>
            </p>
            <p className="mt-2 hover:cursor-pointer w-fit">
              <NavLink to="/get-involved/" onClick={handleVolunteerClick}>
                Volunteer
              </NavLink>
            </p>
            <p className="mt-2 hover:cursor-pointer w-fit">
              <NavLink to="/current-events/" onClick={scrollToTop}>
                Upcoming Events
              </NavLink>
            </p>
            <p className="mt-2 hover:cursor-pointer w-fit">
              <NavLink to="/current-events/" onClick={scrollToTop}>
                Past Events
              </NavLink>
            </p>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div className="pl-20 text-green-800 text-center">
          <p className="">
            © Handicaps Welfare Association | All Rights Reserved
          </p>
        </div>
        <div className="flex pl-20 relative bottom-7">
          <a href="https://www.facebook.com/HWASingapore" target="_blank">
            <img
              src={fbLogo}
              width="20"
              height="20"
              className="m-2 hover:cursor-pointer"
            ></img>
          </a>
          <a href="https://www.instagram.com/hwa.sg/" target="_blank">
            <img
              src={instaLogo}
              width="20"
              height="20"
              className="m-2 hover:cursor-pointer"
            ></img>
          </a>

          <a href="https://www.youtube.com/@HWASingapore" target="_blank">
            <img
              src={ytbeLogo}
              width="20"
              height="20"
              className="m-2 hover:cursor-pointer"
            ></img>
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
