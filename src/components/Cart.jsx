import { useCartContext } from "../context/CartContext"
import Button from "react-bootstrap/esm/Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import React from "react";

function Cart() {

  const { cartList,vaciarCarrito, deleteItem, totalCarrito, totalCantidad} = useCartContext()
  const totalCompra=totalCarrito(); 
  const cantidadCarrito = totalCantidad();
  return (
    <div>            
      { cartList.map(producto => 
      <li key={producto.id} className="listaCart">
                                <ul>
                                  Cantidad
                                  <div>
                                {producto.cantidad} <br />
                                </div>
                                </ul>
                                <ul>
                                <div>
                                <img src={producto.imagen} className="cartImagen"></img> <br />
                                </div>
                                </ul>
                                <ul>
                                  Descripción
                                <div>
                                {producto.nombre} <br />
                                </div>
                                </ul>
                                <ul>
                                Precio
                                <div>
                                $ {producto.precio} <br />
                                </div>
                                </ul>
                                <ul>Subtotal
                                  <div>
                                  $ {producto.cantidad*producto.precio} 
                                  </div>
                                </ul> 
                                <ul>
                                  <Button className="deleteItem" variant="dark"><FontAwesomeIcon icon={faTrashAlt} onClick={()=>deleteItem(producto.id)} /></Button>             
                                </ul>
                              </li>)
                              }
                              <br/>   
      
      {cantidadCarrito?
      <>
      <div className="totalCompra">Total: ${totalCompra} </div>
      <Button onClick={vaciarCarrito} className="buttonDetalle" variant="dark">Vaciar Carrito</Button>
      <Button className="buttonDetalle" variant="success">Confirmar compra</Button>
      </>  
      :
      <>
      <div className="carritoVacio">
      Carrito vacío
      </div>
      <Link to="/">
      <Button variant="success"> Agrega productos a tu carrito</Button>
      </Link>
      </>
    }
                                              
      
    </div>
  )
}

export default Cart
