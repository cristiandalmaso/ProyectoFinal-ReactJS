import React from 'react'

const ItemDetail = ({producto}) => {
  return (
    <div>
        <img src={producto.imagen}></img>
        <h4>{producto.nombre}</h4>
        <p>{producto.precio}</p>
        <p>{producto.categoria}</p>


    </div>
  )
}

export default ItemDetail