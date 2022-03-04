import React from 'react'
import { faAlignCenter, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CartWidget = () => {
  return (
    <div style={styles}><FontAwesomeIcon icon={faCartShopping} /></div>
  )
}

let styles={
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "2.5rem"
}

export default CartWidget