import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext} from '../context/ShopContext'
const Product = () => {
  const {productId} = useParams();
  const {products} = useContext(ShopContext);
  const [productsData,setProductsData] = useState(false);
  return (
    <div>
      
    </div>
  )
}

export default Product
