import { createContext, useContext, useState } from "react";
import React from "react";

const CartContext = createContext([]);
export const useCartContext = () => useContext(CartContext);

function CartContextProvider({ children }) {
  /* Para guardar el listado de productos en el carrito */
  const [cartList, setCartList] = useState([]);

  /* AÑADIR AL CARRITO */
  //Debo tener en cuenta que cada vez que agregue, se reinicia el carrito
  //Por ello, debo usar ...
  const addToCart = (item) => {
    /* Creo una constante para identificar si el item está en el carrito */
    const itemInCart = cartList.find((prod) => prod.id === item.id);
    /* Si el item está en el carrito */
    if (itemInCart) {
      /* Creo una variable de carrito actualizado */
      /* Paso producto por parámetro */
      const updatedCart = cartList.map((prod) => {
        /* Si producto.id es igual a item.id */
        if (prod.id === item.id) {
          /* Entonces debe retornar lo que trae el producto + nueva cantidad */
          return { ...prod, cantidad: item.cantidad + prod.cantidad };
        } else {
        /* Sino debo retornar el producto como tal */
          return prod;
        }
      });
      /* Seteo el carrito con la constante updatedCart */
      setCartList(updatedCart);
    } else {
    /* Sino, debe setear el carrito con los productos que trae y el nuevo item */
      setCartList([...cartList, item]);
    }
  };

  /* VACIAR CARRITO */
  const vaciarCarrito = () => {
    setCartList([]);
    return {};
  };

  /* ELIMINAR UN ITEM DEL CARRITO */

  const deleteItem = (id) => {
    /* Filtramos todos los id distintos, cuando haya coincidencia, lo borro */
    setCartList(cartList.filter((prod) => prod.id !== id));
  };

  /* TOTAL CARRITO */
  const totalCarrito = () => {
    return cartList.reduce((acc, prod) => acc += (prod.precio * prod.cantidad),0)
  };

  /* TOTAL ITEMS EN CARRITO PARA CART WIDGET */

  const totalCantidad = () => {
    return cartList.reduce((acuCant, prod) => (acuCant += prod.cantidad), 0);
  };

  return (
    <CartContext.Provider
      value={{
        //Estados arriba
        cartList,
        //Funciones abajo
        addToCart,
        vaciarCarrito,
        deleteItem,
        totalCarrito,
        totalCantidad,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
