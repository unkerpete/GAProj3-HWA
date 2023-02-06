import React from 'react';

const DrpdwnGetInvolved = (props) => {
  return (
    <>
      <div
        className='bg-primary-200 h-52 z-10 absolute w-full rounded-b-lg'
        onMouseEnter={() => {
          props.handleMouseOver(props.setHover);
        }}
        onMouseLeave={() => {
          props.handleMouseLeave(props.setHover);
        }}
      >
        Get Involved Menu
      </div>
      <div className='w-full absolute top-52 h-screen bg-black opacity-50'></div>
    </>
  );
};

export default DrpdwnGetInvolved;
