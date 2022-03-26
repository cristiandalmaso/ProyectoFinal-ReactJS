import {NavLink,Link} from 'react-router-dom'
import {useState} from 'react'
import  Button  from "react-bootstrap/Button";
import ItemCount from './ItemCount';


const InputCount= ()=> {
    return (
        <div>
        <Link to='/cart' >
            <Button className="buttonFinal" variant="dark">Finalizar Compra</Button>
        </Link>

        <Link to='/'>
        <Button className="buttonFinal" variant="dark">Continuar comprando</Button>
        </Link>
        </div>
    )
}

const ButtonCount= ({handleInter})=> {
    return <Button className="buttonFinal" variant="dark" onClick={handleInter}>Agregar al carrito</Button>
}

const Intercambiabilidad = () => {

    const [inputType, setInputType ] = useState('button')

    const handleInter=()=>{
        setInputType('input')
        console.log(inputType)
    }
    
    return (
        <div>   
            {
                inputType === 'button' ? 
                    <ButtonCount handleInter={handleInter} />
                : 
                    <InputCount />
            }
             {/* <Count onConfirm={addToCart} maxQuantity={itemMax} />  */}
        </div>
    )
}

export default Intercambiabilidad
