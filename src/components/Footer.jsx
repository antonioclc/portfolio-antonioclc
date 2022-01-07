import React from 'react'
import logo from '../logo.svg';
import github from '../images/github.png'
import linkedin from '../images/linkedin.png'
import whatsapp from '../images/whatsapp.png'

export default function Footer() {
  return (
    <div className="footer-background">
      <div className="footer-description">
        <p>Desenvolvido por <p className="about-description-text-green">{`Antônio Campos`}</p>, utilizando a biblioteca React</p>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <div className="footer-social-networks">
        <a href="https://github.com/antonioclc" target="_blank" rel="noreferrer">
          <img src={github} alt="github" className="footer-social-networks-icon"/>
        </a>
        <a href="https://www.linkedin.com/in/ant%C3%B4nio-campos/" target="_blank" rel="noreferrer">
          <img src={linkedin} alt="linkedin" className="footer-social-networks-icon"/>
        </a>
        <a href="http://api.whatsapp.com/send?1=pt_BR&phone=5581997268325" target="_blank" rel="noreferrer">
          <img src={whatsapp} alt="whatsapp" className="footer-social-networks-icon"/>
        </a>
      </div>
    </div>
  )
}
