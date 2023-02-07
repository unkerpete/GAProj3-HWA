import React from 'react';
import backTopLogo from '../assets/peter/footer/Footer_BackToTop.png';

const Footer = () => {
  return (
    <>
      <div className='bg-primary-200 mt-10'>
        <div className='h-10'>
          {/* <img
            src={backTopLogo}
            alt=''
            className='w-14 mx-auto relative -top-3 hover:cursor-pointer -z-10'
          /> */}
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
          <input
            type='text'
            className='h-10 w-1/4 mt-4 rounded-md'
            placeholder='Email'
          />
          <div className='h-8 w-8 rounded-full text-3xl leading-7 text-center inline-block relative right-10 top-1 bg-primary-400 hover:cursor-pointer'>
            ⇾
          </div>
        </div>
        <div className='pl-20 text-green-900'> info section </div>
        <div className='pl-20 text-green-900'>
          social media icons and copyright
        </div>
      </div>
    </>
  );
};

export default Footer;
