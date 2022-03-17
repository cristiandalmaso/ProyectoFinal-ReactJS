import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {useState,useEffect} from 'react'
import { getFetch } from "../helpers/gFetch.js";
import ItemList from "../components/ItemList";
import estilosBody from "../css/estilosBody.css"


const ItemListContainer = () => {
  const [loading, setLoading] = useState(true)
  const [productos, setProductos] = useState([])

  useEffect(()=>{
    getFetch
    .then(resp=> setProductos(resp))
    .catch(err=> console.log(err))
    .finally(()=>setLoading(false))
  },[])


  console.log(productos)
  return (
    <div className="itemListContainer">
        {       loading ? <div>Cargando...</div> 
            :
                <ItemList productos={productos} />
        }
    </div>
)

};

export default ItemListContainer;
