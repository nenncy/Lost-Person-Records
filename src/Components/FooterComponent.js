import React from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/logo.jpg';

function Footer(props) {
    return(
        <div className="footer">
            <div className="container">
                <div className="row justify-content-center">             
                    <div className="col-4 offset-1 col-sm-2">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li><Link to="/Home">Home</Link></li>
                            <li><Link to="/contactus">Contact</Link></li>
                            <li><Link to="/stats">Stats</Link></li>
                        </ul>
                    </div>

                    
                     <div className="col-7 col-sm-5">
                     <p>It is easier as well as quick process to find missing person than it is today, records of the missing people will be maintained and the children lost and left on the road streets will be immediately reached in safe hands.</p>
                     </div>

                     <div className="col-12 col-sm-4 align-self-center">
                        <img src={logo} heights="120" width="180" alt="Lost Person Records" />       
                     </div>

                </div>
                
                <div className="row justify-content-center">             
                    <div className="col-auto">
                        <p>© Copyright 2021 Lost Person Records</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;