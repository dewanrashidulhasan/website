import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title'; // Assuming you have a Title component

const CartTotal = () => {
  const { currency, delivery_fee, getCartTotalAmount } = useContext(ShopContext);

  return (
    <div className='w-full'>
      <div className='text-2xl'>
        <Title text1={'CART'} text2={'TOTALS'} />
      </div>
      <div className='flex flex-col gap-2 mt-2 text-sm'>
        <div className='flex justify-between'>
          <p>Subtotal</p>
          <p>{currency} {getCartTotalAmount()}.00</p>
        </div>
        <hr />
        <div className='flex justify-between'>
          <p>Shipping Fee</p>
          <p>{currency} {delivery_fee}.00</p>
        </div>
        <hr />
        <div className='flex justify-between'>
          <b>Total</b>
          <b>{currency} {getCartTotalAmount() === 0 ? 0 : getCartTotalAmount() + delivery_fee}.00</b>
        </div>
        <button
  className='mt-4 px-2 py-1 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg shadow-md  hover:from-blue-600 hover:to-blue-800 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg'>
  Pay
</button>

      </div>
    </div>
  );
};

export default CartTotal;
