import React, { Component } from 'react';
import './Portfolio.css';

class Portfolio extends Component {
    state = {  }
    render() { 
        return ( 
            <section className="portfolio-container">
                <div className="title-portfolio">
                    <h1>Projects</h1>
                </div>
                <div className="portfolio-section">
                    <div className="project-div">
                        <div className="project-img">
                            <a href="https://missile-command-mickey.herokuapp.com/" target="blank"><img src="/assets/missile_command.png" alt="project1"/></a>
                        </div>
                        <div className="project-details">
                            <h4 id="project-title">Missile Command</h4>
                            <div className="project-text">
                                <p className="summary">This is a remake from the 80's classic videogame Missile Command, it has been realized with canvas and javascript, the 8 bit graphics were made on piskel.</p>
                            </div>
                        </div>
                        
                    </div>
                    <div className="project-div">
                        <div className="project-img">
                            <a href="https://toys-land.herokuapp.com/" target="blank"><img src="/assets/toysland.png" alt="project1"/></a>
                        </div>
                        <div className="project-details">
                            <h4 id="project-title">ToysLand (Fullstack project with handlebars)</h4>
                            <div className="project-text">
                                <p className="summary">This is a fullstack app, the client was built on handlebars, the backend was built with Node.js, Express server and MongoDB.</p>
                            </div>
                        </div>
                        
                    </div>
                    <div className="project-div">
                        <div className="project-img">
                            <a href="https://john-dog-app.herokuapp.com/" target="blank"><img src="/assets/johnDog.png" alt="project1"/></a>
                        </div>
                        <div className="project-details">
                            <h4 id="project-title">John Dog (Fullstack app with React)</h4>
                            <div className="project-text">
                                <p className="summary">A fullstack application built with React for the frontend, the connection to the api was established with axios and the api was built with Node.js, Express and MongoDB.</p>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
                
            </section>
            
        );
    }
}
 
export default Portfolio;