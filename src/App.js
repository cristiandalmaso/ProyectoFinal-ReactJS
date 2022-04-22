import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar.jsx';
import ItemListContainer from './container/ItemListContainer.jsx';
import ItemList from './components/ItemList';
import Item from './components/Item';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ItemDetailContainer from './container/ItemDetailContainer';
import CartContextProvider from './context/CartContext';
import Cart from './components/Cart';
import React from "react";

function App() {
  
  return (
    <BrowserRouter>
     <CartContextProvider> 
        <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/categoria/:id" element={<ItemListContainer/>}/>
        <Route path="/detalle/:detalleId" element={<ItemDetailContainer/>}/>
        <Route path='/cart' element={<Cart/>}/>
        {/* <Route path='/*' element={<Navigate to='/' />} /> */}
      </Routes>
    </div>
    </CartContextProvider>
    </BrowserRouter>

  );
}

export default App;
