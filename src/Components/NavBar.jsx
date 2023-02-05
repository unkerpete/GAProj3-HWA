import React from 'react';
import { useState } from 'react';
import logo from '../assets/peter/header/HWA_logo.png';
import navBarItems from './navBarItems';
import { Link } from 'react-router-dom';
import DrpdwnAboutUs from './DrpdwnAboutUs';
import DrpdwnOurServices from './DrpdwnOurServices';
import DrpdwnGetInvolved from './DrpdwnGetInvolved';

const NavBar = () => {
  const [hoverAboutUs, setHoverAboutUs] = useState(false);
  const [hoverOurServices, setHoverOurServices] = useState(false);
  const [hoverGetInvolved, setHoverGetInvolved] = useState(false);
  const handleMouseOver = (theState) => {
    theState(true);
  };
  const handleMouseLeave = (theState) => {
    theState(false);
  };

  return (
    <div className='bg-peach sticky top-0'>
      <div className='h-24 flex border-y-2 border'>
        <div className='mr-80 pt-4 pl-20'>
          <img src={logo} alt='logo' width={160} />
        </div>
        <div className='absolute top-10 right-96 flex'>
          {/* {navBarItems.map((item, index) => {
            return (
              <div className='font-DM text-lg font-normal mx-4' key={index}>
                <a href={item.url}>{item.itemName}</a>
              </div>
            );
          })} */}
          <div
            className='font-DM text-lg font-normal mx-2 h-16 '
            onMouseEnter={() => {
              handleMouseOver(setHoverAboutUs);
            }}
            onMouseLeave={() => {
              handleMouseLeave(setHoverAboutUs);
            }}
          >
            <a href='/about-us'>About Us</a>
          </div>
          <div
            className='font-DM text-lg font-normal mx-2'
            onMouseEnter={() => {
              handleMouseOver(setHoverOurServices);
            }}
            onMouseLeave={() => {
              handleMouseLeave(setHoverOurServices);
            }}
          >
            <a href='/our-services'>Our Services</a>
          </div>
          <div
            className='font-DM text-lg font-normal mx-2'
            onMouseEnter={() => {
              handleMouseOver(setHoverGetInvolved);
            }}
            onMouseLeave={() => {
              handleMouseLeave(setHoverGetInvolved);
            }}
          >
            <a href='/get-involved'>Get Involved</a>
          </div>
          <div className='font-DM text-lg font-normal mx-2'>
            <a href='/current-events'>Current Events</a>
          </div>
          <div className='font-DM text-lg font-normal mx-2'>
            <a href='/contact-us'>Contact</a>
          </div>
        </div>
        <div className='absolute right-5 top-10 flex'>
          <div className='font-DM text-lg font-normal mx-3'>Search Icon</div>
          <div className='font-DM text-lg font-normal mx-3'>Donate Button</div>
        </div>
      </div>
      {/* Conditional rendering for the dropdown menu */}
      {hoverAboutUs && (
        <DrpdwnAboutUs
          handleMouseOver={handleMouseOver}
          handleMouseLeave={handleMouseLeave}
          setHover={setHoverAboutUs}
        />
      )}
      {hoverOurServices && (
        <DrpdwnOurServices
          handleMouseOver={handleMouseOver}
          handleMouseLeave={handleMouseLeave}
          setHover={setHoverOurServices}
        />
      )}
      {hoverGetInvolved && (
        <DrpdwnGetInvolved
          handleMouseOver={handleMouseOver}
          handleMouseLeave={handleMouseLeave}
          setHover={setHoverGetInvolved}
        />
      )}
    </div>
  );
};

export default NavBar;
