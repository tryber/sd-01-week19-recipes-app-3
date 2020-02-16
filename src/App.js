import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import PageRecipe from './components/PageRecipe';
import PageDetails from './components/PageDetails';
import Login from './components/Login';
import ExplorerMenu from './components/ExplorerMenu';
import Explorer from './components/Explorer';
import ExplorerIngredients from './components/ExplorerIngredients';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/comidas" component={PageRecipe} />
        <Route exact path="/explorar" component={ExplorerMenu} />
        <Route exact path="/explorar/:isFoodOrDrink" render={({ match }) => <Explorer match={match} />} />
        <Route exact path="/explorar/:isFoodOrDrink/ingredientes" render={({ match }) => <ExplorerIngredients match={match} />} />
        <Route exact path="/receitas/:foodordrink" component={PageRecipe} />
        <Route path="/receitas/:foodordrink/:id" component={PageDetails} />
      </Switch>
    </Router>
  );
}

export default App;
