import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <h1 className='text-2xl font-bold underline'>Big Tag</h1>
      <p>Small Tag</p>
    </div>
  );
}

export default App;
