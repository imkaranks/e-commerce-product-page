import React, { useState } from 'react';
import { Navbar, Main } from './components';
import './App.css';

function App() {
  const [cart, setCart] = useState({});
  return (
    <>
      <Navbar cart={cart} setCart={setCart} />
      <Main setCart={setCart} />
    </>
  );
}

export default App;