import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const Product = () => {
    const { productId } = useParams();
    const { products } = useContext(ShopContext);

    useEffect(() => {
        const fetchProductData = () => {
            const foundProduct = products.find(item => item._id === productId); // Use find to get the product
            if (foundProduct) {
                console.log(foundProduct); // Log the found product
            } else {
                console.log(`Product with ID ${productId} not found.`); // Log if not found
            }
        };

        fetchProductData(); // Call the function to fetch product data
    }, [products, productId]); // Add dependencies to avoid infinite loops

    return (
        <div>
            {/* Optional: You can keep this empty or display a message */}
            <p>Product information is logged to the console.</p>
        </div>
    );
};

export default Product;
