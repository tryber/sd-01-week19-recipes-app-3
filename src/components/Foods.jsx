import React, { useState, useEffect } from 'react';
import { getMeals } from '../service/FetchingAPI';

import use12Recipes from '../hooks/use12Recipes';
import Header from './Header';
import { useLocation } from 'react-router-dom';
import CardRecipe from './CardRecipe';

const Foods = () => {
  const [url, setUrl] = useState('random.php');

  const location = useLocation();

  const { recipes } = use12Recipes(getMeals, url);

  return (
    <div>
      <Header location={location} />
      {recipes && recipes.map(({ strMeal, strCategory, strMealThumb, idMeal }) => (<CardRecipe
        title={strMeal}
        category={strCategory}
        image={strMealThumb}
        id={idMeal}
        type='comidas'
      />))}
    </div>
  );
}

export default Foods;
