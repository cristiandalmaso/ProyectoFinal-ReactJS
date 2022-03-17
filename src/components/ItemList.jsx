import Item from "./Item";
import React from 'react'

const ItemList = ({productos}) => {
  return (
    <>
    {productos.map((producto)=><Item producto={producto}/>)}
    </>
  )
}

export default ItemList