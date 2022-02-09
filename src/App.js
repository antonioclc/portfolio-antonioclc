import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import Contact from './pages/Contact';
import Projetos from './pages/Projetos';
import Services from './pages/Services';
import Skills from './pages/Skills';

function App() {
  return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route exact path="/" element={ <About /> } />
          <Route exact path="/contato" element={ <Contact /> } />
          <Route exact path="/projetos" element={ <Projetos /> } />
          <Route exact path="/servicos" element={ <Services /> } />
          <Route exact path="/conhecimentos" element={ <Skills /> } />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
