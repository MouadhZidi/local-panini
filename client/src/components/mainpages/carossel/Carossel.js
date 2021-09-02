import React from 'react'
import './Carossel.css';
import Car1 from '../../headers/icon/car1.png'
import Car2 from '../../headers/icon/car2.png'
import Car3 from '../../headers/icon/car3.png'
const Carossel = () =>  {
    return (

          <div className="container">
           <div className="product-card">
           <img src={Car1} alt="" />
           </div>
           
           <div className="product-card">
           <img src={Car2} alt="" />
           </div>
           
           <div className="product-card">
           <img src={Car3} alt="" />
           </div>
        </div>
    );
  }

export default Carossel
