import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'
const About = () => {
  return (
    <div className=' abu-t'>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>
      <div className='my-10 flex flex flex-col md:flex-row gap-16'>
      <img 
  className='w-full md:max-w-[450px] md:max-h-[450px]' 
  src={assets.about_img} 
  alt="" 
  style={{ width: '1029px', height: '1046px' }} 
/>

      <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
      <p>At DEWAN, we believe that clothing is more than just fabric; it’s a reflection of your personality and style. Our brand is dedicated to crafting high-quality, stylish apparel for men, women, and kids. We blend traditional craftsmanship with contemporary designs, ensuring every piece is comfortable and fashionable. Whether you’re looking for casual wear or something special for an occasion, DEWAN offers versatile options that make you feel confident and unique. Join us on our journey to redefine fashion.</p>
      <p>We are committed to sustainability and ethical practices in the fashion industry. Our materials are sourced responsibly, and we prioritize eco-friendly production methods. At DEWAN, we aim not just to create stylish clothing, but to contribute positively to the environment and society. With every purchase, you are supporting a brand that values quality, integrity, and innovation. Together, let’s make fashion a force for good.</p>
       <b className='text-gray-800'>Our Mission</b>
       <p>At DEWAN, our mission is to redefine the fashion landscape by offering stylish, high-quality clothing while promoting sustainability and ethical practices. We aim to inspire individuals to express their unique identities through our designs, creating a positive impact on both the community and the environment. By blending traditional craftsmanship with modern innovation, we strive to make fashion accessible, inclusive, and responsible for all. Together, we can build a brighter future for the fashion industry.</p>
      </div>
      </div>
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />

      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>At DEWAN, we prioritize quality in every piece we create. Our dedicated quality assurance team meticulously inspects each garment to ensure it meets our high standards. From the selection of premium materials to the final stitching, we guarantee that our clothing is not only stylish but also durable and comfortable. We believe that quality is key to customer satisfaction, and we are committed to delivering products that you can trust and cherish for years to come.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>At DEWAN, we understand the importance of convenience in today’s fast-paced world. That’s why we offer a seamless shopping experience, whether online or in-store. Our user-friendly website allows you to browse our collections easily, with detailed product descriptions and size guides to help you make informed decisions. We also provide flexible payment options and hassle-free returns, ensuring that your experience with us is as enjoyable and stress-free as possible. Your satisfaction is our top priority!</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>At DEWAN, we pride ourselves on providing exceptional customer service that goes beyond expectations. Our dedicated team is always ready to assist you with any inquiries, ensuring you receive personalized attention throughout your shopping experience. We listen to your feedback and continuously strive to improve our services. Whether you need help with sizing, product information, or order tracking, we are here to ensure you feel valued and supported every step of the way. Your satisfaction is our mission!</p>
        </div>
      </div>
      <NewsletterBox />
    </div>
  )
}

export default About
