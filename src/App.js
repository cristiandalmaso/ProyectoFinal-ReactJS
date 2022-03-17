import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer.jsx';
import ItemList from './components/ItemList';
import Item from './components/Item';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer>
        <ItemList>
        <Item/>
        </ItemList>
      </ItemListContainer>
    </div>
  );
}

export default App;
