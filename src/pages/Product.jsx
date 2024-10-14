import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const Product = () => {
    const { productId } = useParams();
    const { products } = useContext(ShopContext);
    const [images, setImages] = useState([]); // Store multiple images
    const [foundProduct, setFoundProduct] = useState(null); // Store the found product

    useEffect(() => {
        const fetchProductData = () => {
            const product = products.find(item => item._id === productId); // Use find to get the product
            if (product) {
                console.log(product);
                setImages(product.image); // Set all images
                setFoundProduct(product); // Store the found product
                console.log(product); // Log the found product
            } else {
                console.log(`Product with ID ${productId} not found.`); // Log if not found
            }
        };

        fetchProductData(); // Call the function to fetch product data
    }, [products, productId]); // Add dependencies to avoid infinite loops

    return foundProduct ? (
        <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
          {/* product data */}
          <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
            {/* products images */}
            <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
              <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
                {/* Map over images to display all of them */}
                <div className="flex flex-wrap gap-4"> {/* Added gap-4 for spacing between images */}
                  {images.map((img, index) => (
                    <img key={index} src={img} alt={`Image ${index + 1}`} className="w-full sm:w-auto" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
    ) : (
        <div className='opacity-0'></div>
    );
};

export default Product;
