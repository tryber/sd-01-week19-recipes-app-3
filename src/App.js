import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import PageRecipe from './components/PageRecipe';
import PageDetails from './components/PageDetails';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/receitas/:foodordrink" component={PageRecipe} />
        <Route exact path="/receitas/:foodordrink/:id" component={PageDetails} />
      </Switch>
    </Router>
  );
}

export default App;
