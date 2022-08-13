import React from 'react'
import ProjectItem from './ProjectItem'
import ecommerceimg from "../assets/proj2.jpg"
import spotifyimg from "../assets/proj3.webp"
import "../styles/Projects.css"


function Projects() {
  return (
    <div className='projects'>
      <h1>My Personal Projects</h1>
      <div className='projectList'>
        <ProjectItem name="E-commerce site" image={ecommerceimg}/>
        <ProjectItem name="Spotify clone" image={spotifyimg}/>
      </div>
    </div>
  )
}

export default Projects