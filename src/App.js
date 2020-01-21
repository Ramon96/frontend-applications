import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Home from './components/page/home';
import Doodle from './components/page/doodle';
import './static/App.css';


class App extends Component {

  constructor(props){
    super(props);
    this.url = 'https://ramon96.github.io/frontend-applications/';
  }

  render(){

    return (
      <div className='App'>
      <Router basename={this.url}>
        <Header />
        <Route exact path='/' component = { Home }></Route>
        <Route path='/doodle' component={ Doodle }></Route>
      </Router>
      </div>
      
    );
  }
}

export default App;
