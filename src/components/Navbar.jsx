import React, { useState } from 'react';
import { assets } from '../assets/assets';
import { Link,NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Dropdown টগল করার ফাংশন
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className='flex item-center justify-between py-4 font-medium bg-slate-500 w-full'>
      <img src={assets.logo} className='w-46 h-10' alt="logo" />
      <ul className='hidden sm:flex gap-5 text-sm text-white'>
        <NavLink to='/home' className='flex flex-col items-center gap-1'>
          <p>Home</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-white hidden' />
        </NavLink>
        <NavLink to='/collection' className='flex flex-col items-center gap-1'>
          <p>COLLECTION</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-white hidden' />
        </NavLink>
        <NavLink to='/about' className='flex flex-col items-center gap-1'>
          <p>ABOUT</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-white hidden' />
        </NavLink>
        <NavLink to='/contact' className='flex flex-col items-center gap-1'>
          <p>CONTACT</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-white hidden' />
        </NavLink>
      </ul>
      <div className='flex items-center gap-6'>
        <img src={assets.search_icon} className='w-5 cursor-pointer' alt="" />

        <div className='group relative'>
          <img
            className='w-5 cursor-pointer'
            src={assets.profile_icon}
            alt=""
            onClick={toggleDropdown}  // ক্লিক ইভেন্ট হ্যান্ডলার
          />
          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className='absolute right-0 pt-4 z-10'>
              <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded shadow-lg'>
                <p className='cursor-pointer hover:text-black'>My Profile</p>
                <p className='cursor-pointer hover:text-black'>Orders</p>
                <p className='cursor-pointer hover:text-black'>Logout</p>
              </div>
            </div>
          )}
        </div>
        <Link to='/cart' className='relative'>
          <img src={assets.cart_icon} className='w-5 min-w-5 pt-4' alt="" />
          <p className='absoiute right-[-5px] bottom-[-5px] w-4 text-center leading-2 bg-red-600 text-white aspect-squre rounded-full text-[8px] '>10</p>
        </Link>
        
      </div>
    </div>
  );
}

export default Navbar;
