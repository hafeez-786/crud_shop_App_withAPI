import React, { useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { setProducts } from '../redux/action/productActions';
import ProductComponent from './ProductComponent';

const ProductListing = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch()
  console.log("products...", products)  

  useEffect(() => {
    fecthProducts()
  }, [])

  const fecthProducts = async () => {
      const response = await axios.get('https://fakestoreapi.com/products')
      .catch((error) => console.log("Product Err...", error))
      dispatch(setProducts(response.data))
  }

  return (
    <div className='container'>
        <div className="row my-4">
           <ProductComponent />
        </div>
    </div>
  )
}

export default ProductListing