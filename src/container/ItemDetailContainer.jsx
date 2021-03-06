import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import ItemDetail from '../components/ItemDetail'
import { doc, getDoc, getFirestore } from 'firebase/firestore'


const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})
    const {detalleId} = useParams()
    
    useEffect(()=>{
      const db = getFirestore()
      const queryDoc = doc(db,'items',detalleId)
      getDoc(queryDoc)
      .then(resp=>setProducto({id: resp.id,...resp.data()}))
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