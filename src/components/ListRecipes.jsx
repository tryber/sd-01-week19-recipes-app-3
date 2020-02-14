import React, { useContext, useEffect, useState } from 'react';
import { ReciperContext } from '../context/ReciperContext';
import CardRecipe from './CardRecipe';

const renderAllFoods = (allRecipes, isFoodOrDrink) => (
  <div>
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
  <div>
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
  const [data, setData] = useState();
  const keyData = type === 'comidas' ? 'meal' : 'drink';
  console.log(type, 'type listrecipe')
  useEffect(() => {
    setData(recipe);
  }, [recipe]);
  if (keyData === 'meal') {
    return renderAllFoods(data, keyData);
  }
  return renderAllDrinks(data, keyData);
};
export default ListRecipe;
