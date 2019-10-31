import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Home from './components/page/home';
import Doodle from './components/page/doodle';
import Done from './components/page/done';
import './static/App.css';


class App extends Component {

  render(){

    return (
      <div className='App'>
      <Router>
        <Header />
        <Route exact path='/' component = { Home }></Route>
        <Route path='/doodle' component={ Doodle }></Route>
        <Route path='/done' component={ Done }></Route>
      </Router>
      </div>
      
    );
  }
}

export default App;
