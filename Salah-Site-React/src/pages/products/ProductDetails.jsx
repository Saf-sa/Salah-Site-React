import React, { useContext } from 'react'
import { useLoaderData } from 'react-router-dom';
import axios from 'axios';
import { dataContext } from '../../context/DataContextProvider';

function ProductDetails() {
    const productDetails = useLoaderData();
    const {state, dispatch} = useContext(dataContext);
    
    function addItemToCart() {
        dispatch({ type: 'ADD_TO_CART', newItem: productDetails })
    }
  
    return (
      <div className="product-card">
          <img src={productDetails.image} alt={productDetails.title} />
          <h3>{productDetails.title}</h3>
          <p className='desc'>{productDetails.description}</p>
            <p className="price">{productDetails.price}</p>
            <button onClick={addItemToCart}>Add To Cart</button>
    </div>
  )
}

export const fetchProductDetails = async function ({ params }) {
    const { pid } = params;
    const res = await axios(`/api/products/${pid}`)
    return res.data
}

export default ProductDetails