import React, { useContext, useEffect, useState } from 'react';
import { ReciperContext } from '../context/ReciperContext';
import CardRecipe from './CardRecipe';
import './ListRecipe.css'

const renderAllFoods = (allRecipes, isFoodOrDrink) => (
  <div className="ListRecipe">
    {allRecipes && allRecipes.map(({ strMeal, strCategory, strMealThumb, idMeal }, index) =>
      (<CardRecipe
        title={strMeal}
        categorie={strCategory}
        image={strMealThumb}
        id={idMeal}
        type={isFoodOrDrink}
        key={`${index * 3}`}
      />))}
  </div>
);

const renderAllDrinks = (allRecipes, isFoodOrDrink) => (
  <div className="ListRecipe">
    {allRecipes && allRecipes.map(({ strDrink, strCategory, strDrinkThumb, idDrink }, index) =>
      (<CardRecipe
        title={strDrink}
        categorie={strCategory}
        image={strDrinkThumb}
        id={idDrink}
        type={isFoodOrDrink}
        key={`${index * 3}`}
      />))}
  </div>
);

const ListRecipe = ({ type }) => {
  const { recipe } = useContext(ReciperContext);
  const keyData = type === 'comidas' ? 'meal' : 'drink';

  if (keyData === 'meal') {
    return renderAllFoods(recipe, type);
  }
  return renderAllDrinks(recipe, type);
};
export default ListRecipe;
