import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

const NavBar = () => {
  return (
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
    </nav>
  );
}

const Home = () => <h1>Home</h1>;
const About = () => <h1>About</h1>;

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <NavBar />
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
