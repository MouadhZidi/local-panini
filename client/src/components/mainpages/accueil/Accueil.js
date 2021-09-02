import React from 'react'
import Bg from '../../headers/icon/bg.jpeg'
import {Link} from 'react-router-dom'
import './Accueil.css'
import Carossel from '../carossel/Carossel'

const Accueil = () => {
    return (
        
        <div
          style={{
            backgroundImage: `url(${Bg})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
           
            height: "72vh",
          }}
        >
         
          
        
        
        <div className="titre">
           <span>Restaurant SnapFood</span>
        </div>
        <Carossel/>
        <div className="welcome">
        <Link to="/product"><button id="btn-welcome">Découvrir</button></Link>
          </div>
      
         
         
        
  
        
      </div>
    )
}

export default Accueil
