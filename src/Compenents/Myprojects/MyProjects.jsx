import React from 'react'
import './MyProjetcs.css'
//import theme from '../../assets/theme.png'
import about from '../../assets/about.svg'
import myprojet_data from '../../assets/myproject_data.js'
const MyProjects = () => {
  return (
    <div className='myproject' id='myprojects'>
        <div className="myprojet-title">
            <h1>My Projects</h1>
           <img src={about} alt="" />
        </div>
        <div className="myprojet_container">
           {/* {myprojet_data.map((projet,index)=>{
                return <img key={index} src={projet.p_img} alt=""/>
            })} */}
            {myprojet_data.map((projet) => (
          <div className="project-card" key={projet.p_n1}>

            <img
className="project-image"
src={projet.p_img}
alt={projet.p_name}
            />

            <h2>{projet.p_name}</h2>

            <div className="project-links">
              <a
href={projet.p_github}
target="_blank"
rel="noopener noreferrer"
className="project-link github-link"
              >
                GitHub
              </a>

              <a
href={projet.p_demo}
target="_blank"
rel="noopener noreferrer"
className="project-link demo-link"
              >
                Live Demo
              </a>
            </div>

          </div>
        ))}

        </div>

    </div>
  )
}
export default MyProjects;