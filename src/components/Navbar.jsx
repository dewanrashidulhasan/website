import React from 'react'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className=' flex item-center justify-between py-4 font-medium bg-slate-500 w-full' >
    
    <img src={assets.logo} className='w-46 h-10' alt="logo" />
      <ul className='hidden sm:flex gap-5 text-sm text-white '>
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
            <hr className='w-2/4 border-none h-[1.5px] bg-white hidden'  hidden/>
        </NavLink>
        <NavLink to='/contact' className='flex flex-col items-center gap-1'>
            <p>CONTACT</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-white hidden' />
        </NavLink>

      </ul>
      <div className='flex items-center gap-6'>
        <img src={assets.search_icon} className='w-5 cursor-pointer' alt="" />
        <dev className='group relative'>
<img className='w-5 coursor-pointer' src={assets.profile_icon} alt="" />
       <dev className='group-hover:block hidden absolate dropdown-menu right-0 pt-4'>
        <dev className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
            <p className='cursor-pointer hover:text-black'>My Profile</p>
            <p className='cursor-pointer hover:text-black'>Orders</p>
            <p className='cursor-pointer hover:text-black'>Logout</p> 

        </dev>
            
        </dev>
        </dev>
        
      </div>
    </div>
  )
}

export default Navbar
