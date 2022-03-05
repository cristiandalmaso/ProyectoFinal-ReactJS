import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer.jsx';



function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer bienvenido="Bienvenido/a"/>
    </div>
  );
}

export default App;
