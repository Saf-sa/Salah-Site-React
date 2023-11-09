import React, { useContext } from 'react'
import { dataContext } from '../../context/DataContextProvider'

function CartDetails() {
    const { state, dispatch } = useContext(dataContext);
  return (
      <div>
          {state.cart.map((cartItem, index) => (
              <div className='cartItem'>
                  <p>{ index+1 }- {cartItem.title}</p>
              </div>
          ))}
    </div>
  )
}

export default CartDetails