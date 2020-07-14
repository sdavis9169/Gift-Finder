import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Navbar from './components/layout/Navbar';
import './App.css';

import GiftState from './context/gift/GiftState';

function App() {
  return (
    <GiftState>
      <Router>
        <Fragment>
          <Navbar />
          <div>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
            </Switch>
          </div>
        </Fragment>
      </Router>
    </GiftState>
  );
}

export default App;
