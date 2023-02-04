import React from 'react';
import navBarItems from './navBarItems';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='bg-peach sticky top-0'>
      <div className='h-24 flex '>
        <div className='mr-80 pt-4 pl-20'>
          <img src='../assets/peter/header/HWA_logo.png ' alt='logo' />
        </div>
        <div className='absolute top-10 right-96 flex'>
          {navBarItems.map((item, index) => {
            return (
              <div className='font-DM text-lg font-normal mx-4' key={index}>
                <a href={item.url}>{item.itemName}</a>
              </div>
            );
          })}
          {/* <div className='font-DM text-lg font-normal mx-2'>About Us</div>
          <div className='font-DM text-lg font-normal mx-2'>Our Services</div>
          <div className='font-DM text-lg font-normal mx-2'>Get Involved</div>
          <div className='font-DM text-lg font-normal mx-2'>Current Events</div>
          <div className='font-DM text-lg font-normal mx-2'>Contact</div> */}
        </div>
        <div className='absolute right-5 top-10 flex'>
          <div className='font-DM text-lg font-normal mx-3'>Search Icon</div>
          <div className='font-DM text-lg font-normal mx-3'>Donate Button</div>
        </div>
      </div>
      <div>
        In this position, conditional rendering of a dropdown menu (3 different
        dropdown menu) when hovering on one of the navbar items. i.e. hover on
        About-Us will render AboutUs dropdown menu, hover on Our Services will
        render OurServices dropdown menu
      </div>
    </div>
  );
};

export default NavBar;
