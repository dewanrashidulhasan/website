import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets'; // Ensure this imports the correct path for assets

const Product = () => {
    const { productId } = useParams(); // Get the product ID from the URL
    const { products, currency } = useContext(ShopContext); // Access products and currency from context
    const [images, setImages] = useState([]); // Store multiple images
    const [foundProduct, setFoundProduct] = useState(null); // Store the found product
    const [image, setImage] = useState(''); // Store selected image

    useEffect(() => {
        const fetchProductData = () => {
            // Find the product by ID
            const product = products.find(item => item._id === productId);
            if (product) {
                setImages(product.image || []); // Ensure it's an array
                setImage(product.image[0] || ''); // Set the first image or default to empty
                setFoundProduct(product); // Store the found product
            } else {
                console.log(`Product with ID ${productId} not found.`);
            }
        };

        fetchProductData(); // Call the function to fetch product data
    }, [products, productId]); // Add dependencies to avoid infinite loops

    return foundProduct ? (
        <div className='paoo'>
            <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
                <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
                    <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
                        <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
                            <div className="flex flex-wrap gap-4">
                                {/* Map over images to display all of them */}
                                {images.map((img, index) => (
                                    <img 
                                        key={index} 
                                        src={img} 
                                        alt={`Image ${index + 1}`} 
                                        className="w-full sm:w-auto cursor-pointer" 
                                        onClick={() => setImage(img)} // Set clicked image
                                    />
                                ))}
                            </div>
                        </div>
                        <div className='w-full sm:w-[80%]'>
                            <img className='w-full h-auto' src={image} alt="Selected Product" />
                        </div>
                    </div>
                    <div className='flex-1'>
                        <h1 className='font-medium text-2xl mt-2'>{foundProduct.name}</h1>
                        <div className='flex items-center gap-1 mt-2'>
                            <div className='flex items-center gap-1'>
                                {/* Display star icons */}
                                {Array(4).fill().map((_, index) => (
                                    <img 
                                        key={index} 
                                        src={assets.star_icon} 
                                        alt="Star Icon" 
                                        className="w-3 h-3" 
                                    />
                                ))}
                            </div>
                            <div className='flex items-center pt-1/5 gap-1'>
                                {/* Display dull star icon */}
                                {Array(1).fill().map((_, index) => (
                                    <img 
                                        key={index} 
                                        src={assets.star_dull_icon} 
                                        alt="Star Icon" 
                                        className="w-3 h-3" 
                                    />
                                ))}
                            </div>
                            <p className='pl-2 pt-5/2'>(122)</p>
                        </div>
                        <p className='mt-5 text-3xl font-medium'>{currency}{foundProduct.price}</p>
                        <p className='mt-5 text-gray-500 md:w-4/5'>{foundProduct.description}</p> {/* Updated here */}
                    </div>
                </div>
            </div>
        </div>
    ) : (
        <div className='opacity-0 paoo'>Loading...</div>
    );
};

export default Product;
