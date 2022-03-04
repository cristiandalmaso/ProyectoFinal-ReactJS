import React from 'react'
import itemListContainer from '../css/itemListContainer.css'

const ItemListContainer = () => {
  return (
    <div className='container-items'>
      <div className='item'>Item 1</div>
      <div className='item'>Item 2</div>
      <div className='item'>Item 3</div>
      <div className='item'>Item 4</div>
      <p id='usuario'>{"Bienvenido/a " +usuario}</p>
    </div>
  )
}

function pedirNombre(){
  let nombre = prompt("Ingrese su nombre: ");
  return nombre;
}
const usuario=pedirNombre();


export default ItemListContainer