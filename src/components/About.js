import React, { Component } from 'react';
import './About.css';

class About extends Component {
    render() { 
        return ( 
            <div className="about-container">
                <div className="about-title">
                    <h1>Who am I?</h1>
                    
                </div>
                <div className="img-container">
                    <img src="/assets/meMyselfNMiguel.jpg" alt="myPic"/>
                </div>
                <div className="text-about">
                    <h2>About me</h2>
                    <p>
                        I'm an easy-going guy who loves music (playing drums), videogames, sports, technology, spend time with my wife and have fun with my 1 year and a half old baby boy. My favorite food is tacos (Lol!, of course, I'm Mexican)!
                    </p>
                    <h2>Experience</h2>
                    <p>
                    It was almost the end of the year 2001 and I had to find a job and pause my 
                    studies, I got hired in the customer service area of <strong>Santander bank and 
                    worked for them for almost 6 years</strong>, this didn´t take me away from keeping 
                    learning about code so I decided to learn <strong>C++</strong>, then in 2007 
                    I got a job offer from other bank institution, so I took the offer and in my 
                    spare time I started to learn <strong>Java</strong>, in 2010 while I was still 
                    working for this bank I started finish my career and got my bachelor´s degree in
                     2013, then I stepped away from the bank and I wanted to start doing the things 
                     that I like the most.
                    </p>
                    <p>
                        I was hired in May of 2014 by a startup which gave me the opportunity to start my 
                        professional career as a <strong>Java Developer</strong>. I worked for them 
                        for almost <strong>4 years</strong> as their main developer and leader of 
                        the development team. <strong>Here one of my biggest accomplishments was the development
                         of a web app to track the status of maintenance services (from scratch)</strong>. It´s an 
                         app that works from the service request up to the billing process. Now it´s almost <strong>2 years</strong> 
                         ago since I started to learn about <strong>Javascript</strong>, in 2018 I took a course, 
                         and in 2019 here in Amsterdam I just finished a Bootcamp with IronHack.
                    </p>
                    <h2>What I am looking for?</h2>
                    <p>Right now I´m looking for a place to keep the inertia of what I just 
                    accomplished in the last 10 weeks in this boot camp, I´m excited to see 
                    what I could be done in another 9 weeks of intensive work. <strong>I´m looking for
                     a position as a REACT frontend developer, as a fullstack developer with 
                     Node.js or Java for the backend</strong> and I´m not closed to explore other options 
                     depending on the opportunities.
</p>
                </div>
            </div>
        );
    }
}
 
export default About;