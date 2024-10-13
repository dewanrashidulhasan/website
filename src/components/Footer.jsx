import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-20 my-10 mt-40 text-sm bg-gray-800 pt-3 pb-3'>
        <div className='flex flex-col items-center'>
          <img className='mb-5 w-40' src={assets.logo} alt=""/>
          <p className='w-full md:w-2/3 text-white text-center'>
            Explore the finest collection of men's, women's, and kids' clothing. Fashion, quality, and affordability, all in one place  
          </p>
        </div>
        <div className='flex flex-col items-center'>
          <p className='text-xl font-medium text-white mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-1 text-white'>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className='flex flex-col items-center'>
          <p className='text-xl font-medium mb-5 text-white'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-1 text-white'>
            <li>+88014********</li>
            <li>contact@dewan.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr/>
        <p className='py-5 text-sm text-center'>© [2024] DEWAN - All rights reserved. All images, text, and designs used on this website are our property.
        </p>
      </div>
    </div>
  );
}

export default Footer;
