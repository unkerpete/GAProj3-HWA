import React from 'react';

const DrpdwnOurServices = (props) => {
  return (
    <>
      <div
        className='bg-secondary-200 h-52 z-10 absolute w-full rounded-b-lg'
        onMouseEnter={() => {
          props.handleMouseOver(props.setHover);
        }}
        onMouseLeave={() => {
          props.handleMouseLeave(props.setHover);
        }}
      >
        Our Services Dropdown Menu
      </div>
      <div className='w-full absolute top-52 h-screen bg-black opacity-50'></div>
    </>
  );
};

export default DrpdwnOurServices;
