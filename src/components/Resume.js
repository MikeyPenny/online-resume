import React, { Component } from 'react';
import "./Resume.css";

class Resume extends Component {
    state = {  }
    render() { 
        return (
            <div className="resume-container">
                <div className="experience-container">
                    <div className="exp-header">
                        <div className="row">
                            <div className="company-logo">
                                <img src="/assets/ironhack-logo.svg" alt="iron-logo"/>
                            </div>
                            <div className="title-date">
                                <h3>Web Developer</h3>
                                <p>Apr 2019 - Jun 2019</p>
                            </div>
                        </div>
                    </div>
                    <div className="exp-text">
                        <p>
                            A nine week intensive full time bootcamp working with ES6, Bootstrap, 
                            React, Axios, MongoDB, Node.js, Express.js, Handlebars, HTML5, CSS3 
                            and Github. There were several assignments and 3 main projects, 
                            a videogame, and 2 fullstack apps, one of these was build with a MERN stack.
                        </p>
                    </div>
                    <div className="accomplishments">
                        <div className="row">
                            <h3 className="subtitle">Accomplishments</h3>
                        </div>
                        <ul>
                            <li>Missile Command (Atari´s videogame remake)</li>
                            <li>
                                A fullstack app with <strong>handlebars</strong> for the 
                                <strong> frontend and mongoDB, express, and node for the backend</strong>.
                            </li>
                            <li>
                                My third and last project was a fullstack app, I built this app
                                working on a <strong>MERN</strong> stack. 
                            </li>
                        </ul>
                    </div>
                    <div className="skills">
                        <div className="row">
                            <h3>Skills</h3>
                        </div>
                        <div className="badge-group">
                            <span className="badge">MERN</span>
                            <span className="badge">ES6</span>
                            <span className="badge">Bootstrap</span>
                            <span className="badge">React</span>
                            <span className="badge">Axios</span>
                            <span className="badge">MongoDB</span>
                            <span className="badge">Node.js</span>
                            <span className="badge">Express.js</span>
                            <span className="badge">Handlebars</span>
                            <span className="badge">HTML</span>
                            <span className="badge">CSS3</span>
                            <span className="badge">Github</span>
                        </div>
                    </div>
                </div>
                <div className="line"></div>
                <div className="experience-container">
                    <div className="exp-header">
                        <div className="row">
                            <div className="company-logo">
                                <img className="comp-logo" src="/assets/tuning-logo.png" alt="iron-logo"/>
                            </div>
                            <div className="title-date">
                                <h3>Java Developer</h3>
                                <p>Jun 2014 - May 2018</p>
                            </div>
                        </div>
                    </div>
                    <div className="exp-text">
                        <p>
                            This was my first job as a profesional developer and I worked for 
                            this startup for almost 4 years, I was their first and main developer 
                            who was in charge for gathering the requirements from clients, analyze 
                            this info, design a solution, and discuss with the client to finally 
                            build the solution. This project was an ERP system for a building 
                            company in Mexico.
                        </p>
                    </div>
                    <div className="accomplishments">
                        <div className="row">
                            <h3 className="subtitle">Accomplishments</h3>
                        </div>
                        <ul>
                            <li>
                                For the development of this app I worked with <strong>J2EE, Java 7, 
                                Java Server Faces</strong>. I used <strong>HTML5, CSS3 and Bootstrap</strong> for the client, 
                                Java for the backend and <strong>MySQL</strong> for the database.
                            </li>
                            <li>
                                There was another developer in this project and I was the responsible and 
                                <strong> leader of the team</strong>.
                            </li>
                            <li>
                                For the ERP system I was the responsible for the development of the Security, Customers, 
                                Projects, Budgets and Warehouse modules.
                            </li>
                            <li>
                                We built another project where I worked along with the client in the analysis, design and 
                                development of a web application to help them to track the status of their maintenance 
                                services from the request up to the bill process.
                                The app was developed with HTML5, CSS3 and Bootstrap for the client, Java for the backend and
                                 MySQL for the database
                            </li>
                        </ul>
                    </div>
                    <div className="skills">
                        <div className="row">
                            <h3>Skills</h3>
                        </div>
                        <div className="badge-group">
                            <span className="badge">Java 7</span>
                            <span className="badge">J2EE</span>
                            <span className="badge">Bootstrap</span>
                            <span className="badge">HTML5</span>
                            <span className="badge">CSS3</span>
                            <span className="badge">MySQL</span>
                        </div>
                    </div>
                </div>
                <div className="line"></div>
                <div className="education">
                    <div className="row">
                        <h2 className="edu-title">Education</h2>
                    </div>
                </div>
                
                <div className="experience-container">
                    <div className="exp-header">
                        <div className="row">
                            <div className="company-logo">
                                <a href="https://uvm.mx/" target="blank"><img className="comp-logo" src="/assets/uvm.png" alt="uvmlogo"/></a>
                            </div>
                            <div className="title-date">
                                <h3>Universidad del Valle de México</h3>
                                <p>Management of Computer Systems 2010 - 2013</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="experience-container">
                    <div className="exp-header">
                        <div className="row">
                            <div className="company-logo">
                                <a href="https://www.ironhack.com/en" target="blank">
                                    <img src="/assets/ironhack-logo.svg" alt="ironlogo"/>
                                </a>
                                
                            </div>
                            <div className="title-date">
                                <h3>IronHack Amsterdam</h3>
                                <p>Web Development 2019</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="experience-container">
                    <div className="exp-header">
                        <div className="row">
                            <div className="company-logo">
                                <a href="https://www.facebook.com/tresct" target="blank">
                                    <img className="comp-logo" src="/assets/3ct.png" alt="uvmlogo"/>
                                </a>
                                
                            </div>
                            <div className="title-date">
                                <h3>3CT México</h3>
                                <p>Java Frameworks, Java swing, JSP. 2013 - 2014</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        );
    }
}
 
export default Resume;