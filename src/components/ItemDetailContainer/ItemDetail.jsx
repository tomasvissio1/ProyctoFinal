import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import '../ItemDetailContainer/ItemDetail.css'

function ItemDetail({precio,marca,img,caracteristicas}) {
  return (
    <div className="card" id='tarjta' style={{"width": "30rem","textAlign":"center!important"}}>
        <img src={`/${img}`} style={{"width":"40%","margin":"auto","marginTop":"3%"}}className="card-img-top" alt="..."/>
        <div className="card-body">
            <h2 className="card-title" style={{"textAlign":"center"}}>{marca}</h2>
            <h3 className="card-text" style={{"textAlign":"center"}}>${precio}</h3>
            <p className="card-text">{caracteristicas}</p>
            <ItemCount/>
        </div>
    </div>
  )
}

export default ItemDetail