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
            {myprojet_data.map((projet,index)=>{
                return <img key={index} src={projet.p_img} alt=""/>
            })}
        </div>

        
      
    </div>
  )
}

export default MyProjects
