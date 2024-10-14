
import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import { useLocation} from'react-router-dom';
const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
  const [visible, setVisible] = useState(false)
  const location = useLocation();
  useEffect(()=>{
       if (location.pathname.includes('collection')){
        setVisible(true);
       }
       else{
        setVisible(false)
       }
  },[location])

  return showSearch && visible ? (
    <div className='relative border-t hott border-b bg-gray-50 text-center'>
      <div className='relative inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2'>
        <input
          type="text"
          placeholder='Search'
          className='flex-1 outline-none bg-inherit text-sm pl-8'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {/* Cross icon just outside the search box */}
        <img
          onClick={() => setShowSearch(false)} // ক্লিক করলে সার্চবার বন্ধ হবে
          className='absolute right-[-30px] top-1/2 transform -translate-y-1/2 w-4 h-4 cursor-pointer'
          src={assets.cross_icon}
          alt="Close"
        />
      </div>
    </div>
  ) : null;
};

export default SearchBar;
