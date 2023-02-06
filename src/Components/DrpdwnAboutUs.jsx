import React from 'react';

const DrpdwnAboutUs = (props) => {
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
      In this position, conditional rendering of a dropdown menu (3 different
      dropdown menu) when hovering on one of the navbar items. i.e. hover on
      About-Us will render AboutUs dropdown menu, hover on Our Services will
      render OurServices dropdown menu
    </div>
  );
};

export default DrpdwnAboutUs;
