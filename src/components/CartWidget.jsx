import React from 'react'
import { faAlignCenter, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCartContext } from '../context/CartContext';

const CartWidget = () => {
  const { totalCantidad} = useCartContext()
  const cantidadTotal = totalCantidad();

  return (
    <div style={styles}><FontAwesomeIcon icon={faCartShopping} />
    <div className='cantidadWidget'>{cantidadTotal} </div>
    </div>
    
  )
}

let styles={
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "2.5rem"
}

export default CartWidget