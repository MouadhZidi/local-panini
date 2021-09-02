import React from "react";
import "./Footer.css";
import Facebook from "./icon/facebook.svg";
import Instagram from "./icon/instagram.svg";
import {Link} from 'react-router-dom'
const Footer = () => {
  return (
    <div className="footer-basic">
      <footer>
        <div className="social" style={{display:"none"}}>
          <div>
            <img src={Facebook} alt="" width="30" />
          </div>
          <div className="instagram" style={{ marginLeft: "2%" }}>
            <img src={Instagram} alt="" width="30" />
          </div>
        </div>
        
         
          <ul className="list-inline">
          <li className="list-inline-item">
          <Link to="/"><button >Accueil</button></Link>
          </li>
          <li className="list-inline-item">
          <Link to="/contact"><button >Contact</button></Link>
          </li>
          <li className="list-inline-item">
          <Link to="/"><button >A props</button></Link>
          </li>
          
        </ul>
        <ul className="list-inline"><a href="www.google.com"><img src={Facebook} alt="" style={{marginTop:"2.5%"}}/></a>
        <a href="www.google.com"><img src={Instagram} alt="" style={{marginTop:"2.5%",marginLeft:"38%"}}/></a>
        </ul>
        <div className="copyright">Lusso Design © 2021</div>
      </footer>
    </div>
  );
};

export default Footer;
