import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import PageRecipe from './components/PageRecipe';
import Login from './components/Login';
import Explorer from './components/Explorer';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/comidas" component={PageRecipe} />
        <Route exact path="/explorer" component={Explorer} />
      </Switch>
    </Router>
  );
}

export default App;
