import './App.css';
import Home from './containers/Home';
import './assets/styles/main.scss'

export const images = require.context('./assets/icons', true);

function App() {
  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;
