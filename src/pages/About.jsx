import React from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import myPhoto from '../images/minha-foto.jpg'


export default function About() {
  return (
    <div>
      <Header />
      <div className="about-container fadeIn">
        <img className="about-my-photo" src={myPhoto} alt='about-img'></img>
        <div className="about-description">
          <h2 className="about-description-title">Oi! Eu sou <strong>Antônio Campos </strong></h2>
          <p className="about-description-text">Pernambucano, marido, pai de Dante ❤️, sou apaixonado por tecnologia e interações digitais que possam gerar impacto na vida das pessoas. Tenho pouco mais de 10 anos de experiência em indústrias de grande porte, sempre na área de manutenção 🛠️, e hoje estou colocando em prática minha transição de carreira para área de desenvolvimento Web junto com a <a className="about-description-text-trybe" href="https://www.betrybe.com/">Trybe</a>, uma escola que ensina a programar, a aprender e a trabalhar.</p>
        </div>
      </div>
      <div className="about-footer">
        <Footer />
      </div>
    </div>
  )
}
