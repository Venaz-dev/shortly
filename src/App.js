import React from 'react';
import './App.scss';

import Nav from "./components/nav/nav"
import Home from "./components/pages/home"
import Footer from "./components/footer/footer"

function App() {
  return (
    <div>
      <Nav />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
