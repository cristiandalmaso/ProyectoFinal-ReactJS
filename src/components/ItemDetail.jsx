import React from 'react'

const ItemDetail = ({producto}) => {
  return (
    <div>
        <img src={producto.imagen}></img>
        <h4>{producto.nombre}</h4>
        <p>{producto.precio}</p>
    </div>
  )
}

export default ItemDetail