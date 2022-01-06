import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Services from './pages/Services';
import Skills from './pages/Skills';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/portfolio-antonioclc" element={ <About /> } />
          <Route exact path="/contato" element={ <Contact /> } />
          <Route exact path="/portfolio" element={ <Portfolio /> } />
          <Route exact path="/servicos" element={ <Services /> } />
          <Route exact path="/conhecimentos" element={ <Skills /> } />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
