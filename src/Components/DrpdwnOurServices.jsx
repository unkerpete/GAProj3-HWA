import React from 'react';
import transportLogo from '../assets/peter/header/Our_Services_Transport_icon.png';
import rehabLogo from '../assets/peter/header/Our_Services_Rehabilitation_icon.png';
import homecareLogo from '../assets/peter/header/Our_Services_Homecare_icon.png';
import socialserviceLogo from '../assets/peter/header/Our_Services_SocialService_icon.png';

const DrpdwnOurServices = (props) => {
  return (
    <>
      <div
        className='bg-secondary-200 h-52 z-20 absolute w-full rounded-b-lg flex'
        onMouseEnter={() => {
          props.handleMouseOver(props.setHover);
        }}
        onMouseLeave={() => {
          props.handleMouseLeave(props.setHover);
        }}
      >
        <div className='w-1/3 '>
          <h3 className='text-center-4xl wrap w-96 relative top-10 left-28 text-green-600 '>
            End-to-end services for the physically challenged.
          </h3>
        </div>
        <div className='w-2/3 p-10 left-20 h-min'>
          <div className='inline-block mx-20 text-center'>
            <img
              src={transportLogo}
              alt='transport-logo'
              className='w-20 mx-auto'
            />
            <h6 className='text-green-800 hover:text-green-600 hover:cursor-pointer'>
              Transport
            </h6>
          </div>
          <div className='inline-block mx-20'>
            <img src={rehabLogo} alt='rehab-logo' className='w-20 mx-auto' />
            <h6 className='text-green-800 hover:text-green-600 hover:cursor-pointer'>
              Rehabilitation
            </h6>
          </div>
          <div className='inline-block mx-20'>
            <img
              src={homecareLogo}
              alt='homecare-logo'
              className='w-20 mx-auto'
            />
            <h6 className='text-green-800 hover:text-green-600 hover:cursor-pointer'>
              Home Care
            </h6>
          </div>
          <div className='inline-block mx-20'>
            <img
              src={socialserviceLogo}
              alt='socialservices-logo'
              className='w-20 mx-auto'
            />
            <h6 className='text-green-800 hover:text-green-600 hover:cursor-pointer'>
              Social Services
            </h6>
          </div>
        </div>
      </div>
      <div className='w-full absolute top-52 h-screen bg-black opacity-50'></div>
    </>
  );
};

export default DrpdwnOurServices;
