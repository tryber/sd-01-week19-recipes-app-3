import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import PageRecipe from './components/PageRecipe';
import PageDetails from './components/PageDetails';
import Login from './components/Login';
import ExplorerMenu from './components/ExplorerMenu';
import Explorer from './components/Explorer';
import ExplorerIngredients from './components/ExplorerIngredients';
import ExplorerAreas from './components/ExplorerAreas';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/comidas" component={PageRecipe} />
        <Route exact path="/explorar" component={ExplorerMenu} />
        <Route exact path="/explorar/:foodordrink" component={Explorer} />
        <Route exact path="/explorar/:foodordrink/ingredientes" component={ExplorerIngredients} />
        <Route exact path="/receitas/:foodordrink" component={PageRecipe} />
        <Route exact path="/explorar/comidas/area" component={ExplorerAreas} />
        <Route path="/receitas/:foodordrink/:id" component={PageDetails} />
      </Switch>
    </Router>
  );
}

export default App;
