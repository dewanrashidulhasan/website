import React from 'react'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className=' flex item-center justify-between py-4 font-medium bg-slate-500 w-full' >
    
    <img src={assets.logo} className='w-46 h-10' alt="logo" />
      <ul className='hidden sm:flex gap-5 text-sm text-white px-4'>
        <NavLink to='/home' className='flex flex-col items-center gap-1'>
            <p>Home</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-white' />
        </NavLink>
        <NavLink to='/collection' className='flex flex-col items-center gap-1'>
            <p>COLLECTION</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-white' />
        </NavLink>
        <NavLink to='/about' className='flex flex-col items-center gap-1'>
            <p>ABOUT</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-white' />
        </NavLink>
        <NavLink to='/contact' className='flex flex-col items-center gap-1'>
            <p>CONTACT</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-white' />
        </NavLink>

      </ul>
    </div>
  )
}

export default Navbar
