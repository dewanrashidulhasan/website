import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
        <div>
            <img className='w-12 m-auto mb-5' src={assets.exchange_icon} alt="" />
            <p className='font-semibold'>Easy Exchange Policy</p>
            <p className='text-gray-400'>We offer a hassle-free exchange policy. Items must be unworn and in original packaging. Exchange requests should be made within 14 days.</p>
        </div>
      <div>
            <img className='w-12 m-auto mb-5' src={assets.quality_icon} alt="" />
            <p className='font-semibold'>Our products quality</p>
            <p className='text-gray-400'>We prioritize quality in every clothing item. Each piece is crafted with care and rigorously inspected to ensure durability and comfort.</p>
        </div><div>
            <img className='w-12 m-auto mb-5' src={assets.support_img} alt="" />
            <p className='font-semibold'>Best custimer support</p>
            <p className='text-gray-400'>We provide the best customer support 24/7 for all your clothing needs. Our dedicated team is always available to assist you with inquiries or concerns.</p>
        </div>
    </div>
  )
}

export default OurPolicy
