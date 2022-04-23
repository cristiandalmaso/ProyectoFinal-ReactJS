import { useCartContext } from "../context/CartContext";
import Button from "react-bootstrap/esm/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { addDoc, collection, getFirestore } from "firebase/firestore";

function Cart() {
  const {
    cartList,
    vaciarCarrito,
    deleteItem,
    totalCarrito,
    totalCantidad,
  } = useCartContext();

  const totalCompra = totalCarrito();
  const cantidadCarrito = totalCantidad();

  const [dataForm, setDataForm] = useState({
    email: "",
    name: "",
    phone: "",
    address: "",
    cp: "",
    tarjeta: "",
    cvc: "",
  });
  const [id, setId] = useState(null);

  const generarOrden = async (e) => {
    e.preventDefault();

    // Nuevo objeto de orders
    let orden = {};

    orden.buyer = dataForm;
    orden.total = totalCarrito();

    orden.items = cartList.map((cartItem) => {
      const id = cartItem.id;
      const nombre = cartItem.nombre;
      const precio = cartItem.precio * cartItem.cantidad;

      return { id, nombre, precio };
    });

    const db = getFirestore();
    const queryCollectionItems = collection(db, "orders");
    await addDoc(queryCollectionItems, orden)
      .then(({ id }) => setId(id))
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      {cartList.map((producto) => (
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
          <ul>
            Subtotal
            <div>$ {producto.cantidad * producto.precio}</div>
          </ul>
          <ul>
            <Button className="deleteItem" variant="dark">
              <FontAwesomeIcon
                icon={faTrashAlt}
                onClick={() => deleteItem(producto.id)}
              />
            </Button>
          </ul>
        </li>
      ))}
      <br />

      {cantidadCarrito ? (
        <>
          <div className="totalCompra">Total: ${totalCompra} </div>
          <Button
            onClick={vaciarCarrito}
            className="buttonDetalle"
            variant="dark"
          >
            Vaciar Carrito
          </Button>
          <form className="formularioCompra" onSubmit={generarOrden}>
            Ingresa tus datos para completar la compra
            <input
              className="inputFormulario"
              type="text"
              name="name"
              placeholder="Nombre"
              value={dataForm.name}
              onChange={handleChange}
            />
            <br />
            <input
              className="inputFormulario"
              type="number"
              name="phone"
              placeholder="Teléfono"
              value={dataForm.phone}
              onChange={handleChange}
            />
            <br />
            <input
              className="inputFormulario"
              type="email"
              name="email"
              placeholder="E-mail"
              value={dataForm.email}
              onChange={handleChange}
            />
            <br />
            <input
              className="inputFormulario"
              type="text"
              name="address"
              placeholder="Dirección:"
              value={dataForm.address}
              onChange={handleChange}
            />
            <br />
            <input
              className="inputFormulario"
              type="number"
              name="cp"
              placeholder="Código Postal"
              value={dataForm.cp}
              onChange={handleChange}
            />
            <input
              className="inputFormulario"
              type="number"
              name="tarjeta"
              placeholder="Nº tarjeta de crédito/débito"
              value={dataForm.tarjeta}
              onChange={handleChange}
            />
             <input
              className="inputFormulario"
              type="number"
              name="cvc"
              placeholder="CVC"
              value={dataForm.cvc}
              onChange={handleChange}
            />
            <br />
            <br />
            {id && (
              <div className={"alert alert-success"}>
                Compra confirmada. El Id de la compra es: {id}
              </div>
            )}
            <Button
              onClick={generarOrden}
              className="buttonConfirmarOrden"
              variant="success"
            >
              Confirmar compra
            </Button>
          </form>
        </>
      ) : (
        <>
          <div className="carritoVacio">Carrito vacío</div>
          <Link to="/">
            <Button variant="success"> Agrega productos a tu carrito</Button>
          </Link>
        </>
      )}
    </div>
  );
}

export default Cart;
