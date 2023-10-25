import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { useState } from 'react';
function App() {
  const [cartItems,setCartItems]=useState([
    {id:0,name:"Pure Danedar cow Ghee",price:500,quantity:1,img:'./images/item1.jpeg'},
    {id:1,name:"Pure Ptanjali Honey",price:500,quantity:1,img:"./images/item2.jpeg"}
]);
  return (
    <div className='main'>
      <div>
        <Navbar cartItems={cartItems} setCartItems={setCartItems}/>
      </div>
      <div>
        <Home/>
      </div>
    </div>
  );
}

export default App;
