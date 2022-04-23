import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../ItemCount/ItemCountStyle.css'

function ItemCount() {
    const [valor,SetValor] = useState(1)

    function sumar(){
        if (valor<=10) {
            SetValor(valor+1)
        }
    }
    function restar(){
        if (valor>=2) {
            SetValor(valor-1)
        }
    }


  return (
      <div>
        <div id='count'>
            <button className='btn btn-outline-secondary' onClick={restar} disabled={valor == 1 ? true : null}>-</button>
            <h3>{valor}</h3>
            <button className='btn btn-outline-secondary' onClick={sumar} disabled={valor ==10 ? true : null}>+</button>
        </div>
        <div className='d-grid gap-2'>
            <Link to={`/cart`}>
                <button className='alert alert-primary'>Agregar al carro</button>
            </Link>
        </div>
    </div>
  )
}

export default ItemCount