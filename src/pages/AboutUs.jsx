import React from 'react';

const AboutUs = () => {
  return (
    <div>
      <h4 className='bg-peach'>Peach</h4>
      <h4 className='bg-primary-800'>Green 800</h4>
      <h4 className='bg-primary-600'>Green 600</h4>
      <h4 className='bg-primary-400'>Green 400</h4>
      <h4 className='bg-primary-200'>Green 200</h4>
      <h4 className='bg-white'>White</h4>
      <h4 className='bg-secondary-600'>Cool Grey 600</h4>
      <h4 className='bg-secondary-400'>Cool Grey 400</h4>
      <h4 className='bg-secondary-200'>Cool Grey 200</h4>
      <h4 className=' text-primary-800 border-primary-800'>
        example : bg-primary-800 / text-primary-800 / border-primary-800
      </h4>
      <br></br>
      <h1>Heading One</h1>
      <span>^^^Dont need Style just use h1 tag</span>
      <p className='font-DM text-3xl font-medium'>Heading Two</p>
      <h3>Heading Three </h3>
      <span>^^^Dont need Style just use h3 tag</span>
      <p className='font-DM text-xl font-normal'>Body One</p>
      <p className='font-DM text-lg font-normal'>Body Two</p>
      <p className='font-DM text-xl font-bold'>Body One Bold</p>
      <p className='font-DM text-lg font-bold'>Body Two Bold</p>
      <p className='font-DM text-base font-normal'>Caption</p>
    </div>
  );
};

export default AboutUs;
