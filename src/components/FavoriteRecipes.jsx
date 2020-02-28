import React from 'react';
import './FavoriteRecipes.css';
import Header from './Header';

const FavoriteRecipes = () => (
  <div>
    <Header title={'Favorite Recipes'} />
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

export default FavoriteRecipes;
