import {useState} from 'react'
import ItemListContainer from '../container/ItemListContainer'
import estilosBody from '../css/estilosBody.css'
import  Button  from "react-bootstrap/Button";
import React from "react";

const ItemCount = ({ initial, stock, onAdd }) => {
    const [ count, setCount ] = useState(initial)

    const sumar = () => {
        if (count < stock) {
            setCount( count + 1 )
        }
    }
    const restar = () => {
        if (count > initial) {
            setCount( count - 1 )
        }
    }

    const agregar = () => {
        onAdd( count )
    }


    return (
        <div>
            <Button onClick={restar} className="buttonDetalle" variant="danger"> - </Button>
            <label> { count } </label>
            <Button onClick={sumar} className="buttonDetalle" variant="success"> + </Button><br/>
            <Button className="buttonFinal" variant="dark" onClick={agregar}>Agregar al carrito</Button>
        </div>
    )
}

export default ItemCount
