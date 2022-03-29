import { useCartContext } from "../context/CartContext"

function Cart() {

  const { cartList, vaciarCarrito } = useCartContext()


  return (
    <div>
      { cartList.map(producto => <li key={producto.id}>
                                nombre: {producto.nombre} 
                                precio: {producto.precio} 
                                cantidad: {producto.cantidad}
                              </li>) }
      <button onClick={vaciarCarrito}>Vaciar Carrito</button>
    </div>
  )
}

export default Cart
