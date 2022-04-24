import React, { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { CartContext } from '../context/CartContext'

function Cart() {
  const {cartList,total,eliminar} = useContext(CartContext)
  const {detalleId} = useParams()
  const [vacio,SetVacio] = useState(false)

  useEffect(()=>{
    if (cartList.length === 0) {
      SetVacio(false)
    }else{
      SetVacio(true)
      console.log(cartList)
      
    }
  
    
  },[])
  
  function borrar(){
    eliminar()
  }

  return (
    <div>
      {
        vacio ? 
        (<div>
          <div>
            {
              cartList.map(prod => <div key={prod.id}><h2>{prod.marca}: cantidad: {prod.valor}, total:{prod.cantidad}</h2></div>)
            }
          </div>
          <div>
            <button onClick={borrar}>Vaciar carrito</button>
          </div>
        </div>
        )
        :
        (
          <div>No hay objetos en el carro</div>
        )
      }
    </div>
  )
}

export default Cart