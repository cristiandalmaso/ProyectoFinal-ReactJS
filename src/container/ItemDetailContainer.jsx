import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import { getFetchOne } from '../helpers/gFetch'
import Item from '../components/Item'


const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})
    const {detalleId} = useParams()

    useEffect(()=>{
             getFetchOne
            .then(producto=>setProducto(producto))
            .catch(err=>console.log(err))
    },[])


  return (
    <div><Item Detail producto={producto}/></div>
  )
}

export default ItemDetailContainer