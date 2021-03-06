import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import ProjectsContainer from './containers/ProjectsContainer';
import BlogsContainer from './containers/BlogsContainer';

class App extends Component {
  render() {
    return (
        <div className='App' id='page-top' >
          
          <NavBar />
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/blog' component={BlogsContainer} />
          <div className="projects">
            <ProjectsContainer />
          </div>
          <Contact class="footer"/>
      </div>
    );
  }
}

export default App;