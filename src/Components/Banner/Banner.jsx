import React from 'react';

const Banner = () => {
  return (
    <div className='container mx-auto text-center space-y-6 mt-6 mb-4'>
      <h1 className='text-6xl font-bold'>Friends to keep close in your life</h1>
      <p className='text-[#64748B]'>Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
relationships that matter most.</p>
  <button className='text-white  bg-[#244D3F] font-medium h-11 w-36 cursor-pointer'>+ Add a Friend</button>
      
    </div>
  );
};

export default Banner;