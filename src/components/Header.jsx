import React from 'react'
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="header-background">
      <h1 className="header-my-name">{`< Antônio Campos >`}</h1>
      <nav className="header-nav">
        <Link to="/" className="header-nav-link">Sobre mim</Link>
        <Link to="/projetos" className="header-nav-link">Projetos</Link>
        {/* <Link to="/servicos" className="header-nav-link">Serviços</Link> */}
        <Link to="/conhecimentos" className="header-nav-link">Habilidades</Link>
        {/* <Link to="/contato" className="header-nav-link">Contato</Link> */}
      </nav>
    </div>
  )
}
