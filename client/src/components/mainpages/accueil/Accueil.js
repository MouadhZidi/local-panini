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
         
          
        <div className="para">
        Bienvenu au SnapFood:
        </div>
        <div className="welcome">
        <Link to="/product"><button id="btn-welcome">Découvrir</button></Link>
          </div>
        <div className="titre">
            <p>Café & Resto <br></br><span style={{paddingLeft:"120px"}}>SnapFood</span></p>
        </div>
       
         
         
        </div>
  
        
      </div>
    )
}

export default Accueil
