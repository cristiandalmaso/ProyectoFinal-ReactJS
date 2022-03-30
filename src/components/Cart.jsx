import { useCartContext } from "../context/CartContext"
import Button from "react-bootstrap/esm/Button"

function Cart() {

  const { cartList, vaciarCarrito, confirmarCompra } = useCartContext()

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
                              </li>)
                              }
                              <br />
      <div>TOTAL:</div><br />                        
      <Button onClick={vaciarCarrito} className="buttonDetalle" variant="dark">Vaciar Carrito</Button>
      <Button className="buttonDetalle" variant="success">Confirmar compra</Button>
    </div>
  )
}

export default Cart
