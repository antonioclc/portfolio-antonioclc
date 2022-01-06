import React from 'react'
import projects from '../data/Projects'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Portfolio() {
  console.log(projects)
  return (
    <div>
      <Header />
      <h2 className="portfolio-title fadeIn">Projetos desenvolvidos</h2>
      <div className="portfolio-container fadeIn">
      {
        projects.map((project) => {
          return(
            <div className="portifolio-project grow">
              <h4 className="portifolio-project-name">{project.name}</h4>
              <img src={project.printScreen} alt={project.name} className="portifolio-project-image"/>
              <div>
                <a href={project.urlPage} target="_blank" rel="noreferrer">
                <button className="bn632-hover bn18">Site</button>
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
      <Footer />
    </div>
  )
}

// name: "StarWars Planet Search"
// printScreen: "/static/media/screencapture-starwars-planet-seacrh.72c40f5a06cfe120b1de.png"
// urlCode: "https://github.com/antonioclc/starwars-planet-search"
// urlPage