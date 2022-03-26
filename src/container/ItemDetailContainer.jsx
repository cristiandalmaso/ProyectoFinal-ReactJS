import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import { getFetch } from '../helpers/gFetch'
import ItemDetail from '../components/ItemDetail'


const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})
    const {detalleId} = useParams()

    useEffect(()=>{
             getFetch
            .then(resp=>setProducto(resp.find((item)=>item.id===Number(detalleId))))
            .catch(err=>console.log(err))
    },[])

  const onAdd = (cant) => {
      console.log(cant)
  }

  return (
    <>
    <div><ItemDetail producto={producto}/></div>
    </>
  )
}

export default ItemDetailContainer