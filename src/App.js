import logo from './logo.svg';
import santisticker from './Assets/santisticker.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>This is Santiago</div>
        <img src={santisticker} className="App-logo" alt="logo" />
        <p>
          Here are Santiagos care instructions:
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
        </a>
      </header>
    </div>
  );
}

export default App;
