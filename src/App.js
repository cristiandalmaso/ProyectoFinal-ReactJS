import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer.jsx';
import gucciLemon from '../src/images/gucciLemon.png'


function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer
      imagenProducto={gucciLemon}
      nombreProducto="Producto 1"
      descripcionProducto="Descripcion Producto 1"
      stockProducto={10}
      />
      <ItemListContainer
      nombreProducto="Producto 2"
      descripcionProducto="Descripcion Producto 2"
      stockProducto={10}
      />
      <ItemListContainer
      nombreProducto="Producto 3"
      descripcionProducto="Descripcion Producto 3"
      stockProducto={10}
      />
      <ItemListContainer
      nombreProducto="Producto 4"
      descripcionProducto="Descripcion Producto 4"
      stockProducto={10}
      />
    </div>
  );
}

export default App;
