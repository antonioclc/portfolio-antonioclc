import React from 'react'
import projects from '../data/Projects'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Projetos() {
  return (
    <div>
      <Header />
      <div className="container">
        <h2 className="title-page fadeIn">Projetos</h2>
        <div className="portfolio-container fadeIn">
        {
          projects.map((project) => {
            return(
              <div className="portifolio-project grow">
                <h4 className="portifolio-project-name">{project.name}</h4>
                <img src={project.printScreen} alt={project.name} className="portifolio-project-image"/>
                <p className="portifolio-project-description">{project.description}</p>
                <div className="portifolio-project-btn">
                  <a href={project.urlPage} target="_blank" rel="noreferrer">
                  <button className="bn632-hover bn18">Preview</button>
                  </a>
                  <a href={project.urlCode} target="_blank" rel="noreferrer">
                  <button className="bn632-hover bn18">Código</button>
                  </a>
                </div>
              </div>
            )
          })
        }
        </div>
      </div>
      <div className="footer-pages">
        <Footer />
      </div>
    </div>
  )
}

// name: "StarWars Planet Search"
// printScreen: "/static/media/screencapture-starwars-planet-seacrh.72c40f5a06cfe120b1de.png"
// urlCode: "https://github.com/antonioclc/starwars-planet-search"
// urlPage