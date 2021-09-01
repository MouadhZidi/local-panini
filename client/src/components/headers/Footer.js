import React from 'react'
import './Footer.css'
import Facebook from './icon/facebook.svg'
import Instagram from './icon/instagram.svg'
const Footer = () => {
    return (

        <div className="footer-basic">
          <footer>
            <div className="social">
            <div className="facebook">
                <img src={Facebook} alt="" width="30" />
            </div>
            <div className="instagram" style={{marginLeft:"2%"}}>
                <img src={Instagram} alt="" width="30" />
            </div>
                
                </div>
            <ul className="list-inline">
              <li className="list-inline-item"><a href="#">Home</a></li>
              <li className="list-inline-item"><a href="#">Services</a></li>
              <li className="list-inline-item"><a href="#">About</a></li>
              <li className="list-inline-item"><a href="#">Terms</a></li>
              <li className="list-inline-item"><a href="#">Privacy Policy</a></li>
            </ul>
            <div className="copyright">Lusso Design © 2021</div>
          </footer>
        </div>
      );
    }
 


export default Footer
