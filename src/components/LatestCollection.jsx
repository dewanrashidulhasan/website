import React, { useContext, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [lastProducts,setLastestProducts] = useState([])

  
  useEffect(() => {
    setLastestProducts(products.slice(0,10))
   }, []);

  return (
    <div className='my-10'>
      <div className='text-center py-8 text-3xl'>
        <Title text1={'LATEST'} text2={'COLLECTION'} />
        <p className='w-3/4 m-auto text-xs sm:text-base text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum, tenetur!
        </p>
      </div>
      
    </div>
  );
};

export default LatestCollection;
