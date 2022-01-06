import React from 'react'
import { Link as button } from 'react-router-dom';

export default function Header() {
  return (
    <div className="header-background fadeIn">
      <h1 className="header-my-name">{`< Antônio Campos >`}</h1>
      <nav className="header-nav">
        <button className="header-nav-link">Sobre mim</button>
        <button className="header-nav-link">Portfolio</button>
        <button className="header-nav-link">Serviços</button>
        <button className="header-nav-link">Habilidades</button>
        <button className="header-nav-link">Contato</button>
      </nav>
    </div>
  )
}
