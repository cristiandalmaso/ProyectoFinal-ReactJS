import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar.jsx';
import ItemListContainer from './container/ItemListContainer.jsx';
import ItemList from './components/ItemList';
import Item from './components/Item';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ItemDetailContainer from './container/ItemDetailContainer';

function App() {
  return (
    <BrowserRouter>
        <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/categoria/:id" element={<ItemListContainer/>}/>
        <Route path="/detalle/:detalleId" element={<ItemDetailContainer/>}/>
        {/* <Route path='/*' element={<Navigate to='/' />} /> */}
      </Routes>
    </div>
    </BrowserRouter>

  );
}

export default App;
