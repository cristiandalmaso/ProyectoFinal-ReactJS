import React from 'react'
import logo from '../images/logo.png'
import navBar from '../css/navBar.css'
import CartWidget from './CartWidget.jsx';


function NavBar() {
  return (
    <header>
      <navBar>
        <div className="container-logo">
          <div>
          <img src={logo} className="logo-imagen"/> 
          </div>
        <div>
        <h2><a href='../index.html' className='brand-titulo'>Hood FSH</a></h2>
        </div>
        </div>
        <div className="container-categorias">
        <p><a href='../index.html' className='categoria-clickeable'>Buzos</a></p>
        <p><a href='../index.html' className='categoria-clickeable'>Camperas</a></p>
        <p><a href='../index.html' className='categoria-clickeable'>Gorras</a></p>
        <p><a href='../index.html' className='categoria-clickeable'>Sneakers</a></p>
        </div>  
        <CartWidget/>    
      </navBar>
    </header>
  )
}
export default NavBar;