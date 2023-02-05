import React from 'react';

const DrpdwnGetInvolved = (props) => {
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
      Get Involved Menu
    </div>
  );
};

export default DrpdwnGetInvolved;
