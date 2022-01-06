import React from 'react';
import starWarsLogo from '../images/starwars-logo2.png'

function Header() {
  return (
    <div className="header">
      <img src={starWarsLogo} alt='Star Wars logo' className='logo'></img>
      <div className="title">
        <h1 >Projeto Star Wars Planet Search - Trybe</h1>
      </div>
    </div>
  );
}

export default Header;
