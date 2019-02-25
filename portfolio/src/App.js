import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './styles/app.css';

import Header from './Components/Header/Header';
import AboutMe from './Components/Content/AboutMe';
import Projects from './Components/Content/Projects';
import Skills from './Components/Content/Skills';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Route exact path="/" />
        <Route exact path="/about" component={AboutMe} />
        <Route exact path="/projects" component={Projects}/>
        <Route exact path="/skills" component={Skills}/>
      </div>
    );
  }
}

export default App;
