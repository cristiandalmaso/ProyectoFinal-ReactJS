import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {useState,useEffect} from 'react'
import { getFetch } from "../helpers/gFetch.js";
import ItemList from "../components/ItemList";
import estilosBody from "../css/estilosBody.css"
import { useParams } from "react-router-dom";
import ItemCount from "../components/ItemCount.jsx";



const ItemListContainer = () => {
  const [loading, setLoading] = useState(true)
  const [productos, setProductos] = useState([])
  const {id} = useParams()

  useEffect(()=>{
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

  console.log(productos)
  return (
    <>
    <div className="itemListContainer">
        {       loading ? <div>Cargando...</div> 
            :
                <ItemList productos={productos} />
        }
    </div>  
    </>
)

};

export default ItemListContainer;
