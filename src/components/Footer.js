import React, { Component } from 'react';
import './Footer.css';

export default class Footer extends Component {
    
    render() { 
        return ( 
            <footer className="footer-container" >
                <div className="link-container">
                    <ul>
                        <li><a href="https://www.linkedin.com/in/miguel-sandoval-430a95169/" target="blank" ><i className="fab fa-linkedin"></i></a></li>
                        <li><a href="https://www.instagram.com/miksterpenny/?hl=es" target="blank"><i className="fab fa-instagram"></i></a></li>
                        <li><a href="https://www.facebook.com/mikey.peny" target="blank"><i className="fab fa-facebook-square"></i></a></li>
                        <li><a href="https://github.com/MikeyPenny?tab=repositories" target="blank"><i className="fab fa-github-square"></i></a></li>
                    </ul>
                </div>
                <div className="rights-container">
                    <p>© 2019 Miguel Sandoval.&nbsp;All rights reserved</p>
                    <p>Fullstack Js/Java Developer</p>
                </div>
            </footer>
        );
    }
}
