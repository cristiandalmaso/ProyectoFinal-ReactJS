import { createContext, useContext, useState } from "react";
import React from 'react'

const CartContext = createContext([])
export const useCartContext = ()=> useContext(CartContext)


function CartContextProvider ({children}) {

  /* Para guardar el listado de productos en el carrito */
  const [cartList, setCartList] = useState([])
  //Debo tener en cuenta que cada vez que agregue, se reinicia el carrito
  //Por ello, debo usar ...
  const addToCart=(item)=>{
    setCartList([...cartList,item])
  }

  const vaciarCarrito=()=>{
    setCartList([])
  }

  return (
    <CartContext.Provider value={{
      //Estados arriba
      cartList,
      //Funciones abajo
      addToCart,
      vaciarCarrito
    }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider