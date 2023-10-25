import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
function App() {
  return (
    <div className='main'>
      <div><Navbar/></div>
      <div>
        <Home/>
      </div>
    </div>
  );
}

export default App;
