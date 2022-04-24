import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import '../ItemCount/ItemCountStyle.css'
import { CartContext } from "../context/CartContext";

function ItemCount({marca,precio,id}) {
    const [valor,SetValor] = useState(1)
    const {addToCart,total,cartList,reemplazarValor} = useContext(CartContext)
    const [cantidad,SetCantidad]=useState()
    const [activador,setActivador] = useState(false)

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
    function agregar(){
        
            for (let i = 0; i < cartList.length; i++) {
                if (cartList[i].id==id) {
                    let cantidad2 = cartList[i].precio
                    let veces = cartList[i].valor
                    let valor2 = valor
                    cantidad2=cantidad2+(precio*valor)
                    veces=veces+valor
                    reemplazarValor(veces,i,valor2)
                    activador=true
                    break
                }
            }
            if(activador==false){
                let cantidad = precio*valor
                addToCart({marca,cantidad,id,valor})
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
                <button className='alert alert-primary' onClick={agregar}>Agregar al carro</button>
            </Link>
        </div>
    </div>
  )
}

export default ItemCount