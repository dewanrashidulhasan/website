import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';  // Assuming you have a Title component
import { assets } from '../assets/assets';
import CartTotal from '../components/CartTotal';

const Cart = () => {
  const { products, currency, cartItems, updateQuantity } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            id: items,
            size: item,
            quantity: cartItems[items][item]
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItems]);

  return (
    <div className='border-t pt-14'>
      <div className='text-2xl mb-3'>
        <Title text1={'YOUR'} text2={'CART'} />
      </div>
      <div className=''>
        {cartData.map((item, index) => {
          const productData = products.find((product) => product._id === item.id); // Changed item._id to item.id
          if (!productData) return null; // Safeguard in case productData is undefined
          return (
            <div key={index} className='py-4 border-t border-b text-gray-700 grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-60 flex'>
              <div className='flex items-start gap-6'>
                <img className='w-16 sm:w-20' src={productData.image[0]} alt={productData.name} />
                <div >
                  <p className='text-xs sm:text-lg font-medium'>{productData.name}</p>
                  <div className='flex items-center gap-1 mt-2'>
                    <p>Size:</p>
                  <p className='px-2 sm:px-3 sm:py-1 border rounded-md bg-slate-200'>{item.size}</p>
                  
                  </div>
                 
                  <div className='flex items-center gap-5 mt-0'>
                  <p>Price: {currency}{productData.price}</p>
                  </div>
                </div>
              </div>
              <input onClick={(e)=> e.target.value === '' || e.target.value === '0' ? null : updateQuantity(item.id,item.size,Number(e.target.value))} className='border max-w-10 sm:max-w-20 px-1  py-1' type="number" min={1} defaultValue={item.quantity}/>
              <img onClick={()=>updateQuantity(item.id,item.size,0)} className='w-4 mr-4 sm:w-5 cursor-pointer' src={assets.bin_icon} alt="" />
            </div>
          );
        })}
      </div>
      <div className='flex justify-end my-20'>
        <div className='w-full sm:w-[450px]'>
          <CartTotal/>
        </div>

      </div>
    </div>
  );
};

export default Cart;
