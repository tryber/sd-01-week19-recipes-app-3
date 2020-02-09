import React, { useState, useContext } from 'react';
import { getMeals } from '../service/FetchingAPI';
import { ReciperContext } from '../context/ReciperContext';
import useRecipes from '../hooks/useRecipes';
import Header from './Header';
import { useLocation } from 'react-router-dom';
import CardRecipe from './CardRecipe';
import useUrlSearch from '../hooks/useUrlSearch';
import useCategories from '../hooks/useCategories';
import { useEffect } from 'react';

const Foods = () => {
  const location = useLocation();

  const { search: { text, typeSearch } } = useContext(ReciperContext);

  const categories = useCategories(getMeals);

  const url = useUrlSearch(text, typeSearch);
  const { recipes } = useRecipes(getMeals, url, location.pathname.slice(1));

  console.log(categories)
  

  return (
    <div>
      <Header location={location} />
  {categories && categories.map(({ strCategory }) => <p>{strCategory}</p>)}
      {recipes && recipes.map(({ strMeal, strCategory, strMealThumb, idMeal }) =>
        (<CardRecipe
          title={strMeal}
          category={strCategory}
          image={strMealThumb}
          id={idMeal}
          type='comidas'
          key={idMeal}
        />))}
      
    </div>
  );
}

export default Foods;
