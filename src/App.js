import React from 'react';
// import MenuInferior from './components/MenuInferior';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Foods from './components/Foods';
import Drinks from './components/Drinks';
import Home from './components/Home';
import HeaderRecipe from './components/HeaderRecipe';

function App() {
  return (
    // <MenuInferior />
    <Router>
      <Switch>
        <HeaderRecipe />
        <Route exact path="/" component={Home} />
        <Route exact path="/comidas" component={Foods} />
        <Route exact path="/bebidas" component={Drinks} />
      </Switch>
    </Router>
  );
}

export default App;
