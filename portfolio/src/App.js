import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './styles/App.css';

import Header from './Components/Header/Header';
import LandingPage from './Components/Content/LandingPage';
import AboutMe from './Components/Content/AboutMe';
import Projects from './Components/Content/Projects';
import Skills from './Components/Content/Skills';
import Footer from './Components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/about" component={AboutMe} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/skills" component={Skills} />
        <Footer />
      </div>
    );
  }
}

export default App;