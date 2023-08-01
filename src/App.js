import './App.css';
import Home from './components/Home';
import ListState from './components/context/ListState';

function App() {
  return (
    <div className="App">
      <ListState>
        <Home />
      </ListState>
    </div>
  );
}

export default App;
