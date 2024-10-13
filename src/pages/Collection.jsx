import React, { useContext } from 'react'
import { ShopContext} from '../context/ShopContext'
const Collection = () => {
  const { products} = useContext(ShopContext);
  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-20 border-t'>
      {/* Filter options  */}
      <div className='min-w-60'>
        <p className='my-2 text-xl flex item-center cursor-pointer gap-2'>FILTERS</p>
{/* Catagory filter */}
<div className={'border border-gray-300 pl-5 py-3'}></div>
      </div>
    </div>
  )
}

export default Collection
