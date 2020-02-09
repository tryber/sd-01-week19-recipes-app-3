import React, { useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';

import { getMeals } from '../service/FetchingAPI';
import { ReciperContext } from '../context/ReciperContext';
import useRecipesFilteredBySearchBar from '../hooks/useRecipesFilteredBySearchBar';
import Header from './Header';

import CardRecipe from './CardRecipe';
import useUrlSearch from '../hooks/useUrlSearch';
import useCategories from '../hooks/useCategories';
import CategoryButton from './CategoryButton';
import useRecipesFilteredByCategories from '../hooks/useRecipesFilteredByCategories';

const Foods = () => {
  const location = useLocation();

  const { search: { text, typeSearch } } = useContext(ReciperContext);

  const [category, setCategory] = useState('All');

  const categories = useCategories(getMeals);
  const url = useUrlSearch(text, typeSearch);
  const { recipes } = useRecipesFilteredBySearchBar(getMeals, url, location.pathname.slice(1));
  const data = useRecipesFilteredByCategories(recipes, category, getMeals, text, location.pathname.slice(1));

  return (
    <div>
      <Header location={location} />
      <CategoryButton key="All" title="All" changeCategory={setCategory} />
      {categories && categories.map(({ strCategory }) =>
        <CategoryButton key={strCategory} title={strCategory} changeCategory={setCategory} />)}
      {data && data.map(({ strMeal, strCategory, strMealThumb, idMeal }) =>
        (<CardRecipe
          title={strMeal}
          category={strCategory}
          image={strMealThumb}
          id={idMeal}
          type={location.pathname.slice(1)}
          key={idMeal}
        />))}

    </div>
  );
}

export default Foods;
