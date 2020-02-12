import React from 'react';
import CardRecipe from './CardRecipe';

const renderAllFoods = (allRecipes, isFoodOrDrink) => (
  <div>
    {allRecipes && allRecipes.map(({ strMeal, strCategory, strMealThumb, idMeal }) =>
      (<CardRecipe
        title={strMeal}
        category={strCategory}
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
        category={strCategory}
        image={strDrinkThumb}
        id={idDrink}
        type={isFoodOrDrink}
        key={idDrink}
      />))}
  </div>
);

const ListRecipe = ({ allRecipes, isFoodOrDrink }) => {
  const keyData = isFoodOrDrink === 'Comidas' ? 'meal' : 'drink';
  if (!allRecipes) return <div>Carregando</div>
  console.log(allRecipes)
  if (keyData === 'meal') return renderAllFoods(allRecipes, isFoodOrDrink);
  return renderAllDrinks(allRecipes, isFoodOrDrink);
};
export default ListRecipe;
