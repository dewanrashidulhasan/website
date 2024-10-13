import React from 'react'
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-col-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm bg-gray-100 '>
            <div>
                <img className='mb-5 w-32' src={assets.logo} alt=""/>
                <p className='md:w-1/4 w-auto pl-5 text-gray-600'>
                Explore the finest collection of men's, women's, and kids' clothing. Fashion, quality, and affordability, all in one place  
                </p>
            </div>
            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-1 tex-gray-600'></ul>
            </div>
            
        </div>
      
    </div>
  )
}

export default Footer
