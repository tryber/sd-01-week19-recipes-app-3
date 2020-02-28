import React from 'react';
import './RecipesMade.css';
import Header from './Header';

const RecipesMade = () => (
  <div>
    <Header title={'Recipes Made'} />
    <div className="container">
      <button className="btn">All</button>
      <button className="btn">Food</button>
      <button className="btn">Drinks</button>
    </div>
    <div>
      <span>tem um card aqui</span>
    </div>
    <div>
      <span>tem um card aqui</span>
    </div>
  </div>
);

export default RecipesMade;
