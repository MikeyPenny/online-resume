import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
    state = {  }
    render() { 
        return (
            <section className="contact-container">
                <h1>Contact</h1>
                <div className="row">
                    <p className="cta">Give me a call, I´m always open for a chat, coffee or a beer.</p>
                </div>
                <div className="row list">
                    <ul className="contact-list">
                        <li>
                            <i class="far fa-envelope"></i>
                            <h4 className="item-prop">Email:</h4>
                            <p className="item-data">miguelship3@gmail.com</p>
                        </li>
                        <li>
                            <i class="fab fa-whatsapp"></i>
                            <h4 className="item-prop">Mobile:</h4>
                            <p className="item-data">+31 6 1659 4227</p>
                        </li>
                        <li>
                            <i class="fab fa-github-alt"></i>
                            <h4 className="item-prop">Github:</h4>
                            <p className="item-data"><a href="https://github.com/MikeyPenny">https://github.com/MikeyPenny</a></p>
                        </li>
                        <li>
                            <i class="fab fa-linkedin-in"></i>
                            <h4 className="item-prop">LinkedIn:</h4>
                            <p className="item-data"><a href="https://linkedin.com/in/miguel-sandoval-430a95169">https://linkedin.com/in/miguel-sandoval-430a95169</a></p>
                        </li>
                    </ul>    
                </div>
                

            </section>
        );
    }
}
 
export default Contact;