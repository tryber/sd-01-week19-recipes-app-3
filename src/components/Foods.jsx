import React, { useEffect } from 'react';
import { getMeals } from '../service/FetchingAPI';

import use12Recipes from '../hooks/use12Recipes';
import HeaderRecipe from './HeaderRecipe';

export default function Foods() {

  const recipes = use12Recipes(getMeals);
  console.log(recipes)

  
 
  return (
    <div>
      <HeaderRecipe />
    </div>
  );
}
