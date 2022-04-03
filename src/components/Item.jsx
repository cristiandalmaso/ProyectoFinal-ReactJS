import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import  Button  from "react-bootstrap/Button";
import  Card  from "react-bootstrap/Card";
import { Link } from 'react-router-dom';
import estilosBody from "../css/estilosBody.css"


const Item = ({producto}) => {
  return (
    <Link to={`detalle/${producto.id}`} >
    <div className="item-individual">
        {<Card>
        <Card.Img variant="top" src={producto.imagen} className="imagenProducto"/>
        <Card.Body>
          {/* <Card.Title id>Id producto: {producto.id}</Card.Title> */}
          <Card.Title nombre>{producto.nombre} </Card.Title>
          <Card.Text precio>${producto.precio}</Card.Text>
          <Button variant="success">Ver producto</Button>
        </Card.Body>
      </Card>}
    </div>
    </Link>
  )
}

export default Item