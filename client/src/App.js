import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import NavLinks from './components/Nav';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Header />
      <NavLinks />
      <About />
    </div>
  );
}

export default App;