import React, { useState } from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import react from '../images/physics.png';
import html from '../images/icons8-html-5-240.png'
import css from '../images/icons8-css3-240.png'
import js from '../images/icons8-javascript-240.png'
import redux from '../images/icons8-redux-240.png'
import git from '../images/git-icon.png'
import skillsDescription from '../data/Skills'

export default function Skills() {
  const [skillsPosition, setSkillPosition] = useState(0)
  console.log(skillsDescription)
  console.log(skillsDescription[0].description)
  
  return (
    <div>
      <Header />
      <div className="container">
        <h2 className="title-page fadeIn">Habilidades</h2>
        <div className="skills-container fadeIn">
          <div className="skills-nav">
            <button className="skills-nav-btn" onMouseOver	={() => setSkillPosition(0)}>
              <img src={html} alt="html" className="skills-nav-icon" />
            </button>
            <button className="skills-nav-btn" onMouseOver	={() => setSkillPosition(1)}>
              <img src={css} alt="css" className="skills-nav-icon" />
            </button>
            <button className="skills-nav-btn" onMouseOver	={() => setSkillPosition(2)}>
              <img src={js} alt="js" className="skills-nav-icon" />
            </button>
            <button className="skills-nav-btn" onMouseOver	={() => setSkillPosition(3)}>
              <img src={react} alt="react" className="skills-nav-icon" />
            </button>
            <button className="skills-nav-btn" onMouseOver	={() => setSkillPosition(4)}>
              <img src={redux} alt="redux" className="skills-nav-icon" />
            </button>
            <button className="skills-nav-btn" onMouseOver	={() => setSkillPosition(5)}>
              <img src={git} alt="git" className="skills-nav-icon" />
            </button>
          </div>
          <div className="skills-description">
            <img src={skillsDescription[skillsPosition].image} alt="html" className="skills-description-image"/>
            <div className="skills-description-text">
              <h2 className="skills-description-text-title">{skillsDescription[skillsPosition].title}</h2>
              <p>{skillsDescription[skillsPosition].description}</p>
              <a href={skillsDescription[skillsPosition].font} target="_blank" rel="noreferrer">
                <h4 className="skills-description-text-font">{`👆 Fonte - ${skillsDescription[skillsPosition].font} 👆`}</h4>
              </a>
              <p><strong>Minha descrição:</strong>{` ${skillsDescription[skillsPosition].myDescription}`}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="about-footer">
        <Footer />
      </div>
    </div>
  )
}