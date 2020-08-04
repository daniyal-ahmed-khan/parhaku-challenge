import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import Nav from './Pages/Nav';
import Cart from './Pages/Cart';
import Photos from './Pages/Photos';

function App() {
  return (
    <Router>
    <div className="App">
      <header >
        <Nav className="nav"/>
            <Switch>
              <Route path="/" exact component={Photos}/>
              <Route path="/cart" component={Cart}/>
            </Switch>
      </header>
    </div>
    </Router>
  );
}

export default App;
