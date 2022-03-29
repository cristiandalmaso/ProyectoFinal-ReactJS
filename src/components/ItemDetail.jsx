import React, { useEffect, useState } from 'react'
import ItemCount from './ItemCount'
import estilosBody from "../css/estilosBody.css"
import Intercambiabilidad from './Intercambiabilidad'
import { useCartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'


const ItemDetail = ({producto}) => {

  /* Setea si tiene cantidad o no */
  const [isCant, setIsCant] = useState(false)

  /* Para utilizar el contexto que cree de carrito, debo usar el contexto */
  /* Esto, para poder utilizar la función addToCart definida en el contexto */

  const {addToCart} = useCartContext()

  const onAdd = (cant) => {
    console.log(cant)
     addToCart({...producto, cantidad: cant}) 
     setIsCant(true)
  }
  
  return (
    <div className='itemDetalle'>
        <img src={producto.imagen} className="itemImg"></img>
        <h4>{producto.nombre}</h4>
        <p>$ {producto.precio}</p>

        {/* Pregunta si tiene cantidad para mostrar botones */}
        {isCant?
        <>  
        <Link to='/'>
            <button className='btn btn-outline-primary'>Seguir comprando</button>

        </Link>
        <Link to='/cart'>
            <button className='btn btn-outline-success'>Ir a Cart</button>
        </Link>
    </>
    :


        <ItemCount initial={1} stock={10}  onAdd= { onAdd  }/>}
        
    </div>
  )
}

export default ItemDetail