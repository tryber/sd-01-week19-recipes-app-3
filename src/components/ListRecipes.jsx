import React, { useContext } from 'react';
import { ReciperContext } from '../context/ReciperContext';
import CardRecipe from './CardRecipe';

const renderAllFoods = (allRecipes, isFoodOrDrink) => (
  <div>
    {allRecipes && allRecipes.map(({ strMeal, strCategory, strMealThumb, idMeal }) =>
      (<CardRecipe
        title={strMeal}
        categorie={strCategory}
        image={strMealThumb}
        id={idMeal}
        type={isFoodOrDrink}
        key={idMeal}
      />))}
  </div>
);

const renderAllDrinks = (allRecipes, isFoodOrDrink) => (
  <div>
    {allRecipes && allRecipes.map(({ strDrink, strCategory, strDrinkThumb, idDrink }) =>
      (<CardRecipe
        title={strDrink}
        categorie={strCategory}
        image={strDrinkThumb}
        id={idDrink}
        type={isFoodOrDrink}
        key={idDrink}
      />))}
  </div>
);

const ListRecipe = () => {
  const { recipe, isFoodOrDrink } = useContext(ReciperContext);
  const keyData = isFoodOrDrink === 'Comidas' ? 'meal' : 'drink';
  if (!recipe) return <div>Carregando...</div>;
  if (keyData === 'meal') {
    return renderAllFoods(recipe, isFoodOrDrink);
  }
  return renderAllDrinks(recipe, isFoodOrDrink);
};
export default ListRecipe;
