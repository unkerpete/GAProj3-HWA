import React from 'react';
import fbLogo from '../assets/peter/footer/Footer_FB_icon.svg';
import instaLogo from '../assets/peter/footer/Footer_Instar_icon.svg';
import ytbeLogo from '../assets/peter/footer/Footer_YT_icon.svg';

const Footer = () => {
  return (
    <>
      <div className='bg-primary-200 mt-10'>
        <div className='h-10'>
          <div className='h-24 w-24 rounded-full text-center mx-auto relative bottom-6 bg-primary-200 -z-10'>
            ^
          </div>
          <div className='text-center mx-auto relative bottom-24 hover:cursor-pointer'>
            Back to top
          </div>
        </div>
        <div className='pl-20 text-green-900'>
          <h3>Subscribe to Our Newsletter</h3>
          <p>For the latest news, events, and updates.</p>
          {/* backend - Add useref state for input, and click handler on the -> button. On click of the button, send useref state to backend. */}
          <input
            type='text'
            className='h-10 w-1/4 mt-4 rounded-md'
            placeholder='Email'
          />
          <div className='h-8 w-8 rounded-full text-3xl leading-7 text-center inline-block relative right-10 top-1 bg-primary-400 hover:cursor-pointer'>
            ⇾
          </div>
        </div>
        <div className='pl-20 text-green-900 flex mt-14'>
          <div className='w-2/5'>
            <p className='font-DM text-lg font-bold'>Head Office @ Whampoa</p>
            <p className='mt-5'>16 Whampoa Drive, Singapore 327725</p>
            <p className='mt-5'>+65 6253 3006</p>
            <p className='w-36 mt-5'>Monday to Fridays 9:00 am to 6:00pm</p>
          </div>
          <div className='w-1/5'>
            <p className='font-DM text-lg font-bold'>About Us</p>
            <p className='mt-5 hover:cursor-pointer w-fit'>Who We Are</p>
            <p className='mt-2 hover:cursor-pointer w-fit'>Our People</p>
            <p className='mt-2 w-28 hover:cursor-pointer'>
              Governance & Financial
            </p>
          </div>
          <div className='w-1/5'>
            <p className='font-DM text-lg font-bold'>Our Services</p>
            <p className='mt-5 hover:cursor-pointer w-fit'>Who We Are</p>
            <p className='mt-2 hover:cursor-pointer w-fit'>Transport</p>
            <p className='mt-2 hover:cursor-pointer w-fit'>Rehabilitation</p>
            <p className='mt-2 hover:cursor-pointer w-fit'>Home Care</p>
            <p className='mt-2 hover:cursor-pointer w-fit'>Social Services</p>
          </div>
          <div className='w-1/5'>
            <p className='font-DM text-lg font-bold'>Get Involved</p>
            <p className='mt-5 hover:cursor-pointer w-fit'>Donate</p>
            <p className='mt-2 hover:cursor-pointer w-fit'>Volunteer</p>
            <p className='mt-2 hover:cursor-pointer w-fit'>Upcoming Events</p>
            <p className='mt-2 hover:cursor-pointer w-fit'>Past Events</p>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div className='pl-20 text-green-800 text-center'>
          <p className=''>
            © Handicaps Welfare Association | All Rights Reserved
          </p>
        </div>
        <div className='flex pl-20 relative bottom-7'>
          <img
            src={fbLogo}
            width='20'
            height='20'
            className='m-2 hover:cursor-pointer'
          ></img>
          <img
            src={instaLogo}
            width='20'
            height='20'
            className='m-2 hover:cursor-pointer'
          ></img>
          <img
            src={ytbeLogo}
            width='20'
            height='20'
            className='m-2 hover:cursor-pointer'
          ></img>
        </div>
      </div>
    </>
  );
};

export default Footer;
