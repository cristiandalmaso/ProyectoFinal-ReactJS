import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {useState,useEffect} from 'react'
import ItemList from "../components/ItemList";
import estilosBody from "../css/estilosBody.css"
import { useParams } from "react-router-dom";
import {collection, getDocs, getFirestore, query, where} from 'firebase/firestore'

const ItemListContainer = () => {
  const [loading, setLoading] = useState(true)
  const [productos, setProductos] = useState([])
  const [prod,setProd] = useState({})
  const {id} = useParams()

  /* useEffect(()=>{
    if(id){
      getFetch
      .then(resp => setProductos(resp.filter(producto=>producto.categoria === id)))
      .catch(err=> console.log(err))
      .finally(()=>setLoading(false))
    }
    else{
      getFetch
      .then(resp=> setProductos(resp))
      .catch(err=> console.log(err))
      .finally(()=>setLoading(false))
    }
  },[id])

  console.log(productos) */

  useEffect(()=>{
    const db = getFirestore();
    /* Esta funcion apunta a la colección */
    /* Collection es una funcion que recibe 2 parametros */
    /* Una la base de datos y otra el nombre de la coleccion */
    const queryCollection = !id ? 
    collection(db,'items')
    : 
    query( collection(db, 'items'), 
                                    where('categoria','==', id)                  
                                )     
    /* const queryFilter = query(queryCollection,
      where('categoria','==', 'hoodies')
      ) */   

    getDocs(queryCollection)
    /* resp.docs.map porque tengo que mapear cada uno de los productos del array*/
    /* producto.data devuelve los campos */
    .then(resp=>setProductos(resp.docs.map(producto=>({id:producto.id,...producto.data()}))))
    .catch(err=> console.log(err))
    .finally(()=>setLoading(false))
  },[id])
    
  return (
    <>
    <div className="itemListContainer">
        {       loading ? <div className="itemListLoading">Cargando...</div> 
            :
                <ItemList productos={productos} />
        }
    </div>  
    </>
)

};

export default ItemListContainer;
