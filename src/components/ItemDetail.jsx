import React, { useEffect } from 'react'
import ItemCount from './ItemCount'
import estilosBody from "../css/estilosBody.css"
import Intercambiabilidad from './Intercambiabilidad'

const ItemDetail = ({producto}) => {

  const onAdd = (cant) => {
    console.log(cant)
  }
  
  return (
    <div className='itemDetalle'>
        <img src={producto.imagen} className="itemImg"></img>
        <h4>{producto.nombre}</h4>
        <p>$ {producto.precio}</p>
        <ItemCount initial={1} stock={10}  onAdd= { onAdd  }/>
        <Intercambiabilidad/>
    </div>
  )
}

export default ItemDetail