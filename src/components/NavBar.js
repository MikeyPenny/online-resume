import React, { Component } from 'react';
import './NavBar.css'
import { Link } from 'react-router-dom'; 


export default class NavBar extends Component {
    
    constructor() {
        super()
        this.state = {
            condition: false
        }
        this.handleClickBurger = this.handleClickBurger.bind(this);
    }

    handleClickBurger = () => {
        this.setState({
            condition: !this.state.condition
        });
    }

    render() {
        return (
            <nav>
                <div className="nav-left">
                    <div className="img-container">
                        <Link to="/"><i className="fas fa-code"></i></Link>
                    </div>
                </div>
                <div className="nav-right">
                    <ul className={`${ this.state.condition ? "show" : "nav-list .nav-unactive" }`} >
                        <li><Link className="list-item" to="/"><p>HOME</p></Link></li>
                        <li><Link className="list-item" to="/portfolio"><p>PORTFOLIO</p></Link></li>
                        <li><Link className="list-item" to="/about"><p>ABOUT</p></Link></li>
                        <li><Link className="list-item" to="/resume"><p>RESUME</p></Link></li>
                        <li><Link className="list-item" to="/contact"><p>CONTACT</p></Link></li>
                    </ul>
                    <div className={`${this.state.condition ? "burger toggle" : "burger" }`} onClick={this.handleClickBurger} >
                        <div className="line1"></div>
                        <div className="line2"></div>
                        <div className="line3"></div>
                    </div>
                </div>
            </nav>
        )
    }
}