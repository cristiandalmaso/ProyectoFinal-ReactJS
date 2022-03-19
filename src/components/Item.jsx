import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import  Button  from "react-bootstrap/Button";
import  Card  from "react-bootstrap/Card";
import { Link } from 'react-router-dom';


const Item = ({producto}) => {
  console.log(producto)
  return (
    <Link to={`detalle/${producto.id}`} >
    <div className="item-individual">
        {<Card style={{ width: "auto"}}>
        <Card.Img variant="top" src={producto.imagen}/>
        <Card.Body>
          {/* <Card.Title id>Id producto: {producto.id}</Card.Title> */}
          <Card.Title nombre> {producto.nombre} </Card.Title>
          <Card.Text precio>${producto.precio}</Card.Text>
          <Button variant="primary">Añadir al carrito</Button>
          <br></br>
          <br></br>
          <Button variant="primary">Eliminar del carrito</Button>
        </Card.Body>
      </Card>}
    </div>
    </Link>
  )
}

export default Item