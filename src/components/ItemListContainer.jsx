import React from "react";
import itemListContainer from "../css/itemListContainer.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {useState} from 'react'
import  Button  from "react-bootstrap/Button";
import  Card  from "react-bootstrap/Card";

const ItemListContainer = ({ nombreProducto, descripcionProducto,stockProducto, imagenProducto}) => {

  const [count,setCount]=useState(0)

  const handleCountAdd = () =>{
    if(count<stockProducto){
      setCount(count +1)
    }
    else{
      setCount(stockProducto)
    }
  }

  const handleCountMin = () =>{
    if(count>0){
      setCount(count -1)
    }
    else{
      setCount(0)
    }
  }


  return (
    <div className="container-items">
      {<Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={imagenProducto} />
        <Card.Body>
          <Card.Title nombreProducto> {nombreProducto} </Card.Title>
          <Card.Text descripcionProducto>{descripcionProducto}
          </Card.Text>
          <Card.Text stockProducto>Stock: {stockProducto}</Card.Text>
          <Card.Text>{count}</Card.Text>
          <Button variant="primary" onClick={handleCountAdd} >Añadir al carrito</Button>
          <br></br>
          <br></br>
          <Button variant="primary"onClick={handleCountMin}>Eliminar del carrito</Button>
        </Card.Body>
      </Card>}
    </div>
  );
};

export default ItemListContainer;
