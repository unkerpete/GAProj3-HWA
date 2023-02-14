import React, { useState, useEffect } from "react";
import logo from "../assets/peter/header/HWA_logo.png";
import searchIcon from "../assets/peter/header/search-icon.png";
import { NavLink, useLocation } from "react-router-dom";
import DrpdwnAboutUs from "./DrpdwnAboutUs";
import DrpdwnOurServices from "./DrpdwnOurServices";
import DrpdwnGetInvolved from "./DrpdwnGetInvolved";
import Button from "./Button";

const NavBar = () => {
  const [hoverAboutUs, setHoverAboutUs] = useState(false);
  const [hoverOurServices, setHoverOurServices] = useState(false);
  const [hoverGetInvolved, setHoverGetInvolved] = useState(false);
  const [navBarBackgroundColorByPage, setnavBarBackgroundColorByPage] =
    useState();
  const [navBarBackgroundColorByHover, setnavBarBackgroundColorByHover] =
    useState();
  const [currentPage, setCurrentPage] = useState("Home");
  const location = useLocation(); // returns an object with location info

  useEffect(() => {
    setCurrentPage(location.pathname.substring(1)), [location];
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getNavBarColor = (currentPage) => {
    switch (currentPage) {
      case "Home":
        return "bg-peach";
      case "about-us":
        return "bg-peach";
      case "our-services":
        return "bg-secondary-200";
      case "get-involved/":
        return "bg-primary-200";
      default:
        return "bg-peach";
    }
  };

  useEffect(() => {
    setnavBarBackgroundColorByPage(getNavBarColor(currentPage)), [];
  });

  const handleMouseOver = (navBarElementHover, navBarBgColor) => {
    navBarElementHover(true);
    setnavBarBackgroundColorByHover(navBarBgColor);
  };
  const handleMouseLeave = (navBarElementHover) => {
    navBarElementHover(false);
    setnavBarBackgroundColorByHover(false);
  };

  const navBarItems = [
    {
      itemName: "About Us",
      url: "/about-us",
      bgColor: "bg-peach",
      setHover: setHoverAboutUs,
    },
    {
      itemName: "Our Services",
      url: "/our-services",
      bgColor: "bg-secondary-200",
      setHover: setHoverOurServices,
    },
    {
      itemName: "Get Involved",
      url: "/get-involved/",
      bgColor: "bg-primary-200",
      setHover: setHoverGetInvolved,
    },
  ];

  return (
    <div
      className={`${
        navBarBackgroundColorByHover
          ? navBarBackgroundColorByHover
          : navBarBackgroundColorByPage
      } sticky top-0 z-20`}
    >
      <div className="h-24 flex border-y-2 border">
        <div className="mr-80 pt-4 pl-20">
          <NavLink to="/home" onClick={scrollToTop}>
            <img src={logo} alt="logo" width={160} />
          </NavLink>
        </div>
        <div className="absolute top-10 right-96 flex flex-wrap">
          {navBarItems.map((item, index) => {
            return (
              <div
                className="font-DM text-lg font-normal px-4 h-14 w-26"
                key={index}
                onMouseEnter={() => {
                  handleMouseOver(item.setHover);
                  setnavBarBackgroundColorByHover(item.bgColor);
                }}
                onMouseLeave={() => {
                  handleMouseLeave(item.setHover);
                  setnavBarBackgroundColorByPage(() => {
                    getNavBarColor(currentPage);
                  });
                  setnavBarBackgroundColorByHover(null);
                }}
              >
                <NavLink to={item.url} onClick={scrollToTop}>
                  {item.itemName}
                </NavLink>
              </div>
            );
          })}
          <div className="font-DM text-lg font-normal mx-4">
            <a href="/current-events/">Current Events</a>
          </div>
          <div className="font-DM text-lg font-normal mx-4">
            <a href="/contact-us/">Contact</a>
          </div>
        </div>
        <div className="absolute right-5 top-10 flex">
          <div className="mx-3 w-16 relative bottom-4 right-20">
            <img src={searchIcon} alt="search-icon" />
          </div>
          <div className="relative bottom-3 right-10">
            <Button text="Donate" link="/get-involved/" />
          </div>
        </div>
      </div>
      {/* Conditional rendering for the dropdown menu */}
      {hoverAboutUs && (
        <DrpdwnAboutUs
          handleMouseOver={handleMouseOver} //
          handleMouseLeave={handleMouseLeave} // closes modal
          setHover={setHoverAboutUs}
          navBarBgColor="bg-peach"
        />
      )}
      {hoverOurServices && (
        <DrpdwnOurServices
          handleMouseOver={handleMouseOver}
          handleMouseLeave={handleMouseLeave}
          setHover={setHoverOurServices}
          navBarBgColor="bg-secondary-200"
          scrollToTop={scrollToTop}
        />
      )}
      {hoverGetInvolved && (
        <DrpdwnGetInvolved
          handleMouseOver={handleMouseOver}
          handleMouseLeave={handleMouseLeave}
          setHover={setHoverGetInvolved}
          navBarBgColor="bg-primary-200"
          scrollToTop={scrollToTop}
        />
      )}
    </div>
  );
};

export default NavBar;
