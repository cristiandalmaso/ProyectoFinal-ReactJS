import {useState} from 'react'
import ItemListContainer from '../container/ItemListContainer'
import estilosBody from '../css/estilosBody.css'
import  Button  from "react-bootstrap/Button";
import Intercambilidad from './Intercambiabilidad';

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

    console.log(count)

    return (
        <div>
            <Button onClick={restar} className="buttonDetalle" variant="danger"> - </Button>
            <label> { count } </label>
            <Button onClick={sumar} className="buttonDetalle" variant="success"> + </Button>
        </div>
    )
}

export default ItemCount
