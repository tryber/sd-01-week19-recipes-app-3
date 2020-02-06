import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Foods from './components/Foods';
import Drinks from './components/Drinks';

import Login from './components/Login';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/comidas" component={Foods} />
        <Route exact path="/bebidas" component={Drinks} />
      </Switch>
    </Router>
  );
}

export default App;
