import React from 'react';
import fb from '../../assets/facebook.png'
import x from '../../assets/twitter.png'
import insta from '../../assets/instagram.png'
const Footer = () => {
  return (
    <div className='bg-[#244D3F] pt-6 pb-4'>
        <div className='text-center'>
      <div>
        <h1 className=' text-5xl text-white font-bold'>KeenKeeper</h1>
        <p className='text-white mt-2.5'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
      </div>

      <div className='mt-2'>
        <p className='text-white text-2xl font-bold'>Social Links</p>
        <div className='flex items-center justify-center gap-2.5 mt-2.5'>
         <img src={insta} alt="" />
         <img src={fb} alt="" />
         <img src={x } alt="" />
        </div>
      </div>
     
    
     
        </div>
          
        <div className='text-center md:flex justify-evenly text-white'>
           <p>© 2026 KeenKeeper. All rights reserved.</p>
           <div className='flex justify-center md:items-center gap-5 text-white'>
            <a href="">Privacy Policy</a>
           <a href="">Terms of Service</a>
           <a href=""> Cookies</a>
           </div>
        </div>
    </div>
   

   
  );
};

export default Footer;