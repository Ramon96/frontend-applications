import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Doodle from './components/page/doodle';
import './static/App.css';


class App extends Component {

  render(){

    return (
      <div className='App'>
      <Router>
        <Header />
        <Route path='/doodle' component={ Doodle }></Route>
      </Router>
      </div>
      
    );
  }
}

export default App;
