import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title'; // Title কম্পোনেন্ট সঠিকভাবে আমদানি করা হয়েছে
import ProductItem from './ProductItem'; // ProductItem কম্পোনেন্ট সঠিকভাবে আমদানি করা হয়েছে

const RelatedProducts = ({ category, subCategory }) => {
    const { products } = useContext(ShopContext);
    const [related, setRelated] = useState([]);

    useEffect(() => {
        console.log("Available Products:", products); 
        console.log("Category:", category, "Subcategory:", subCategory);

        if (products.length > 0) {
            // Filter products based on category and subCategory
            const productsCopy = products.filter(item => 
                category === item.category && subCategory === item.subCategory
            );

            console.log("Filtered Related Products:", productsCopy);

            // Take the first 5 related products
            setRelated(productsCopy.slice(0, 5));
        }
    }, [products, category, subCategory]); // Add dependencies to the useEffect

    useEffect(() => {
        // Log related products state for debugging
        console.log("Related Products State:", related);
    }, [related]);

    return (
        <div>
            <div className='text-center text-3xl py-2'>
                <Title text1={"RELATED"} text2={"PRODUCTS"} />
            </div>
            <div className='related-products grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {related.length > 0 ? (
                    related.map((item) => (
                        <ProductItem 
                            key={item._id} 
                            id={item._id} 
                            name={item.name} 
                            price={item.price} 
                            image={item.image} 
                        />
                    ))
                ) : (
                    <p>No related products found.</p>
                )}
            </div>
        </div>
    );
};

export default RelatedProducts;
