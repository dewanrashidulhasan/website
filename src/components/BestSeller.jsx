import React, { useContext, useState, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';


const BestSeller = () => {
    const { products } = useContext(ShopContext);
    const [bestSeller,setBestSeller] = useState([]);

    useEffect(() => {
        const bestProduct = products.filter((item) => item.BestSeller); // মূলত এই জায়গার কোড যদি অ্যাপ ডট জে এস এর কোরের সাথে না মেলে তাহলে ওয়েবসাইটে প্রোডাক্ট শো না হওয়ার সম্ভাবনা টা বেশি
        setBestSeller(bestProduct.slice(0, 5));
    },[]);

    return (
        <div className='my-10'>
            <div className='text-center text-3xl py-8'>
                <Title text1={'BEST'} text2={'SELLERS'} />
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                    Discover our top best-selling clothing items, designed for elegance and loved globally!
                </p>
            </div>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 gap-x-4'>
                {bestSeller.map((item,index) => (
                    <ProductItem key={index} id={item._id} name={item.name} image={item.image} price={item.price} />
                ))
                }
            </div>
        </div>
    );
};

export default BestSeller;
