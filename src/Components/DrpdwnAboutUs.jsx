import React from 'react';

const DrpdwnAboutUs = (props) => {
  return (
    <>
      <div
        className='bg-peach h-52 z-10 absolute w-full rounded-b-lg flex'
        onMouseEnter={() => {
          props.handleMouseOver(props.setHover);
        }}
        onMouseLeave={() => {
          props.handleMouseLeave(props.setHover);
        }}
      >
        <div className='w-1/3 '>
          <h3 className='text-center-4xl wrap w-80 relative top-10 left-28 text-green-600 '>
            Shaping an inclusive and enabling future.
          </h3>
        </div>
        <div className='flex w-2/3'>
          <div className='p-10'>
            <p className='mb-2 text-green-800 font-bold'>Who We Are</p>
            <p className='text-green-800 hover:text-green-600 hover:cursor-pointer'>
              Mission / Objectives
            </p>
          </div>
          <div className='p-10'>
            <p className='mb-2 text-green-800 font-bold'>Our People</p>
            <p className='text-green-800 hover:text-green-600 hover:cursor-pointer'>
              Board Members
            </p>
            <p className='text-green-800 hover:text-green-600 hover:cursor-pointer'>
              Management
            </p>
            <p className='text-green-800 hover:text-green-600 hover:cursor-pointer'>
              Organisational Structure
            </p>
          </div>
          <div className='p-10'>
            <p className='mb-2 text-green-800 font-bold'>
              Governance & Financials
            </p>
            <p className='text-green-800 hover:text-green-600 hover:cursor-pointer'>
              Corporate Governance
            </p>
            <p className='text-green-800 hover:text-green-600 hover:cursor-pointer'>
              Annual Report & Financial Statement
            </p>
            <p className='text-green-800 hover:text-green-600 hover:cursor-pointer'>
              Organisational Structure
            </p>
          </div>
        </div>
      </div>
      <div className='w-full absolute top-52 h-screen bg-black opacity-50'></div>
    </>
  );
};

export default DrpdwnAboutUs;
