import './App.css';
import Recherche from './components/Recherche/Recherche';
import Categories from './components/Categories/Categories';
import Tutos from './components/tuto/Tuto';

function App() {
  return (
    <div className="App">
      <Tutos />
      <Categories />
      <Recherche />

    </div>
  );
}

export default App;
