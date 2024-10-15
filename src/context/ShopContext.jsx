import React, { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const currency = '$';
    const delivery_fee = 10; // Spelling corrected from 'delevery_fee' to 'delivery_fee'
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false); 
    const [cartItems, setCartItems] = useState({});

    const addToCart = async (itemId, size) => { // Fixed typo in function name
        if (!size) {
            toast.error('Select Product Size');
            return;
        }

        let cartData = structuredClone(cartItems);

        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1;
            } else {
                cartData[itemId][size] = 1;
            }
        } else {
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }
        setCartItems(cartData);
    };

    const getCartCount = () => { // Fixed typo and changed to a function
        let totalCount = 0;
        for (const item in cartItems) {
            for (const size in cartItems[item]) { // Fixed nested loop
                if (cartItems[item][size] > 0) {
                    totalCount += cartItems[item][size]; // Corrected variable names
                }
            }
        }
        return totalCount;
    };

    const value = {
        products,
        currency,
        delivery_fee,
        search,
        setSearch,
        showSearch,
        setShowSearch,
        cartItems,
        addToCart,
        getCartCount, // Fixed typo in value object
    };

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
