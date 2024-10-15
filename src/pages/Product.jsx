import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets'; 
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {
    const { productId } = useParams();
    const { products, currency, addToCart } = useContext(ShopContext);
    const [images, setImages] = useState([]);
    const [foundProduct, setFoundProduct] = useState(null);
    const [image, setImage] = useState('');
    const [selectedSize, setSelectedSize] = useState(''); // Fixed hook state definition

    useEffect(() => {
        const fetchProductData = () => {
            const product = products.find(item => item._id === productId);
            if (product) {
                setImages(product.image || []);
                setImage(product.image[0] || '');
                setFoundProduct(product);
            } else {
                console.log(`Product with ID ${productId} not found.`);
            }
        };

        fetchProductData();
    }, [products, productId]);

    return foundProduct ? (
        <div className='paoo'>
            <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
                <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
                    <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
                        <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
                            <div className="flex flex-wrap gap-4">
                                {images.map((img, index) => (
                                    <img 
                                        key={index} 
                                        src={img} 
                                        alt={`Image ${index + 1}`} 
                                        className="w-full sm:w-auto cursor-pointer" 
                                        onClick={() => setImage(img)} 
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
                                {Array(4).fill().map((_, index) => (
                                    <img 
                                        key={index} 
                                        src={assets.star_icon} 
                                        alt="Star Icon" 
                                        className="w-3 h-3" 
                                    />
                                ))}
                            </div>
                            <div className='flex items-center gap-1'>
                                {Array(1).fill().map((_, index) => (
                                    <img 
                                        key={index} 
                                        src={assets.star_dull_icon} 
                                        alt="Star Icon" 
                                        className="w-3 h-3" 
                                    />
                                ))}
                            </div>
                            <p className='pl-2 pt-2'>(122)</p>
                        </div>
                        <p className='mt-5 text-3xl font-medium'>{currency}{foundProduct.price}</p>
                        <p className='mt-5 text-gray-500 md:w-4/5'>{foundProduct.description}</p>
                        
                        <div className='flex flex-col gap-4 my-8'>
                            <p>Select Size:</p>
                            <div className='flex gap-2'>
                                {foundProduct.sizes && foundProduct.sizes.map((size, index) => (
                                    <button 
                                        key={index} 
                                        className={`border rounded px-4 py-2 ${selectedSize === size ? 'bg-blue-500 text-white' : 'bg-white text-black'}`}
                                        onClick={() => setSelectedSize(size)} 
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <button 
                            className="bg-gray-800 text-white font-semibold py-2 px-2 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:bg-blue-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-300"
                            onClick={() => addToCart(foundProduct._id, selectedSize)} // Fixed parameter name
                        >
                            ADD TO CART
                        </button>
                        <hr className='mt-8 sm:w-4/5'/>
                        <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
                            <p>100% Original product.</p>
                            <p>Cash on delivery is available on this product.</p>
                            <p>Easy return and exchange policy within 14 days.</p>
                        </div>
                    </div>
                </div>
                <div className='mt-20'>
                    <div className='flex'>
                        <b className='border px-5 py-3 text-sm'>Description</b>
                        <p className='border px-5 py-3 text-sm'>Reviews(122)</p>
                    </div>
                    <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
                        <p>DEWAN offers stylish, high-quality clothing for men, women, and kids. Discover a perfect blend of tradition and modern trends, ensuring comfort and elegance for every occasion. Elevate your style with DEWAN.</p>
                        <p>Shop now and discover the latest in fashion trends!</p>
                    </div>
                </div>
                <RelatedProducts category={foundProduct.category} subCategory={foundProduct.subCategory} />
            </div>
        </div>
    ) : (
        <div className='opacity-100 paoo'>Loading...</div>
    );
};

export default Product;
