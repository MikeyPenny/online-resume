import React, { Component } from 'react';
import './Home.css';


export default class Home extends Component {
    render() {
        return (
            <section className="header-section">
                <div className="header-title">
                    <h1>Fullstack Developer.</h1>    
                </div>
                <div className="logo-container">
                    <img src="/assets/react-logo.svg" alt="react-logo"/>
                </div>
                <div className="code-icon">
                    <i className="fas fa-code"></i>
                    <i className="fab fa-github"></i>
                    <i className="fab fa-js"></i>
                    <i className="fab fa-react"></i>
                    <i className="fab fa-npm"></i>
                </div>
            </section>
        )
    }
}
