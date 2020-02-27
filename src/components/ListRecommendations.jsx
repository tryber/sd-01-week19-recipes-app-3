import React from 'react';
import CardRecipe from './CardRecipe';
import './ListRecommendations.css';

const renderAllFoods = (allRecipes, isFoodOrDrink) => (
  <div className="ListRecipe recommendation">
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
  <div className="ListRecipe recommendation">
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

const ListRecommendations = ({ type, recipes }) => {
  const keyData = type === 'comidas' ? 'meal' : 'drink';
  if (keyData === 'meal') {
    return renderAllFoods(recipes, type);
  }
  return renderAllDrinks(recipes, type);
};
export default ListRecommendations;
