import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cart from '../Cart/Cart'
import ItemList from '../ItemContainer/ItemList'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'
import NavBar from '../NavBar/NavBar'

function ContainerComponents() {
  return (
     <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route path='/' element={
            <ItemList/>}/>

            <Route path='/categoria/:categoriaId' element={
            <ItemList/>}/>

            <Route path='/detalle/:detalleId' element={
                <ItemDetailContainer/>}/>

            <Route path='/cart' element={
                <Cart/>}/>
            
        </Routes>
    </BrowserRouter>
   
  )
}

export default ContainerComponents




     {/* <><NavBar /><ItemList /></> */}