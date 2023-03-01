import React from "react";
import "./Footer.css";
import {Link} from "react-router-dom";


const Footer = () => {
  return (
    
     <footer className="footer">
     <div className="container">
          <div className="row">
               <div className="footer-col">
                    <div className="footer-column">
             
                      <div className="footer-company-heading">
                           <h4>company</h4>
                       </div>
                         <ul>
                              <li><Link to="/">Home</Link></li>
                              <li><Link to="/products">Our Products</Link></li>
                              <li><Link to="/contact">Contact Us</Link></li>
                              <li><Link to="/about">About Us</Link></li>
                         </ul>
                     </div>
               </div>
               <div className="footer-col">
                    <div className="footer-column">
                   
                         <h4>get help</h4>
                 
                         <ul>
                              <li><Link to="/">FAQ</Link></li>
                              <li><Link to="/">shipping</Link></li>
                              <li><Link to="/">returns</Link></li>
                              <li><Link to="/">order status</Link></li>
                              <li><Link to="/">payment options</Link></li>
                    </ul>
                    </div>
               </div>
               <div className="footer-col">
               <div className="footer-column">
                    <div className="footer-heading">
                     <h4 >online shop</h4>
                    </div>
                    <ul>
                         <li><Link to="/products">Furniture</Link></li>
                         <li><Link to="/products">Clothing </Link></li>
                         <li><Link to="/products">Handicraft</Link></li>
               
                    </ul>
                 </div>
               </div>
               <div className="footer-col">
                    <div className="footer-column">
                         <h4>follow us</h4>
                         <div className="social-links">
                              <a href="https://www.facebook.com/metropolite000/" target='_blank' rel="noreferrer"><i className="fab fa-facebook-f"></i></a>
                              <a href=" https://instagram.com/metropolite000?igshid=YmMyMTA2M2Y=" target='_blank' rel="noreferrer"><i className="fab fa-instagram"></i></a>
                              <a href=" https://twitter.com/metropolite000?t=r6KVTS_aM3Z_g6rKmcCPqg&s=08" target='_blank' rel="noreferrer"><i className="fab fa-twitter"></i></a>
                              <a href="https://www.linkedin.com/in/metro-polite-68a429238/" target='_blank' rel="noreferrer" ><i className="fab fa-linkedin-in"></i></a>
                    </div>
                    </div>
               </div>
          </div>
     </div>

     <hr className="cp-hr" />
    <p class="copyright">Copyright 2023 - LOGOKING</p>
</footer>
   

  );
};

export default Footer;