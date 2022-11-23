import React, { Component } from 'react';
import Home  from './components/home';
import Contact from './components/contact';
import About from './components/about';
import { Counter } from './counters';

import './App.css';


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

class App extends Component {
  render(){
    return (
        <Router>
        <div >
        <ul >
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
         </ul>
         <Counter></Counter>
           <Routes>
            <Route exact path='/home' element={<Home/>} ></Route>
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/about" element={<About />} />
           </Routes>
        </div>
      </Router>
      
    )
  }
}

export default App;
