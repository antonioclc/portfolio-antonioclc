import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Services from './pages/Services';
import Skills from './pages/Skills';

function App() {
  return (
      <div>
        <Header/>
        <Portfolio />
        <Footer />
      </div>
  );
}

export default App;
