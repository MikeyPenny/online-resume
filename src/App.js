import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Footer from './components/Footer';
import About from './components/About';
import Resume from './components/Resume';
import Contact from './components/Contact';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import Portfolio from './components/Portfolio';



function App() {
  return (
    <Router>
      <NavBar></NavBar>

      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/portfolio" component={Portfolio}/>
        <Route path="/about" component={About} />
        <Route path="/resume" component={Resume} />
        <Route path="/contact" component={Contact} />
      </Switch>

      <Footer></Footer>
    </Router>
  );
}

export default App;
