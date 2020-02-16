import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import PageRecipe from './components/PageRecipe';
import Login from './components/Login';
import Perfil from './components/Perfil';
import FavoriteRecipe from './FavoriteRecipe';
import RecipeDone from './RecipeDone';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/comidas" component={PageRecipe} />
        <Route exact path="/perfil" component={Perfil} />
        <Route exact path="/receitasfavoritas" component={FavoriteRecipe} />
        <Route exact path="/receitasfeitas" component={RecipeDone} />
      </Switch>
    </Router>
  );
}

export default App;
