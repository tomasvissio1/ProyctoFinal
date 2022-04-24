import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

function Cart() {
  const {cartList,total} = useContext(CartContext)
  

  return (
    <div>
      {
        cartList.map(prod => <div key={prod.id}><h2>{prod.marca}: cantidad: {prod.valor}, total:{prod.cantidad}</h2></div>)
      }
    </div>
  )
}

export default Cart