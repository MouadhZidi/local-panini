import React from 'react'
import Bg from '../../headers/icon/bg.jpeg'
import {Link} from 'react-router-dom'
import './Accueil.css'

const Accueil = () => {
    return (
        <div>
        <div
          style={{
            backgroundImage: `url(${Bg})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
           
            height: "65vh",
          }}
        >
         
          
        <div className="logo">
          
        </div>
        
        <div className="titre">
           <span style={{paddingLeft:"120px"}}>SnapFood</span>
        </div>
        <div className="welcome">
        <Link to="/product"><button id="btn-welcome">Découvrir</button></Link>
          </div>
       
         
         
        </div>
  
        
      </div>
    )
}

export default Accueil
