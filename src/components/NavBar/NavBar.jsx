import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
        <Link to={`/`}>
            <a className="navbar-brand" href="#">Tu Celular!</a>
        </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              
              
                <Link to={'/categoria/iphone'}><a className="nav-link" href="#">iPhone</a></Link>
                <Link to={'/categoria/samsung'}><a className="nav-link" href="#">Samsung</a></Link>
            </div>
            </div>
        </div>
        </nav>
    </div>
  )
}

export default NavBar

{/* <Link to={`/`}>
                <a className="nav-link active" aria-current="page" href="#">Todas las marcas</a>
              </Link> */}