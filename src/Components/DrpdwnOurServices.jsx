import React from 'react';

const DrpdwnOurServices = (props) => {
  return (
    <div
      className='bg-peach h-52 z-10 absolute w-full delay-200'
      onMouseEnter={() => {
        props.handleMouseOver(props.setHover);
      }}
      onMouseLeave={() => {
        props.handleMouseLeave(props.setHover);
      }}
    >
      Our Services Dropdown Menu
    </div>
  );
};

export default DrpdwnOurServices;
