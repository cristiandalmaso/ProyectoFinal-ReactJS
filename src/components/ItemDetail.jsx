import React, { useState } from "react";
import ItemCount from "./ItemCount";
import { useCartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";

const ItemDetail = ({ producto }) => {
  /* Setea si tiene cantidad o no */
  const [isCant, setIsCant] = useState(false);

  /* Para utilizar el contexto que cree de carrito, debo usar el contexto */
  /* Esto, para poder utilizar la función addToCart definida en el contexto */

  const { addToCart } = useCartContext();

  const onAdd = (cant) => {
    addToCart({ ...producto, cantidad: cant });
    setIsCant(true);
  };

  return (
    <div className="itemDetalle">
      <img src={producto.imagen} className="itemImg"></img>
      <h4>{producto.nombre}</h4>
      <p>$ {producto.precio}</p>

      {/* Pregunta si tiene cantidad para mostrar botones */}
      {isCant ? (
        <>
          <Link to="/">
            <Button className="buttonDetalle" variant="dark">
              Seguir comprando
            </Button>
          </Link>
          <Link to="/cart">
            <Button className="buttonDetalle" variant="success">
              Ir al Carrito
            </Button>
          </Link>
        </>
      ) : (
        <>
          <ItemCount initial={1} stock={10} onAdd={onAdd} />
        </>
      )}
    </div>
  );
};

export default ItemDetail;
