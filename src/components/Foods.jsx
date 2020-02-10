import React, { useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { getMeals } from '../service/FetchingAPI';
import { ReciperContext } from '../context/ReciperContext';
import useUrlSearch from '../hooks/useUrlSearch';
import useCategories from '../hooks/useCategories';
import useRecipesSrcBarFil from '../hooks/useRecipesSrcBarFil';
import useRecipesCtgFil from '../hooks/useRecipesCtgFil';
import Header from './Header';
import CardRecipe from './CardRecipe';
import CategoryButton from './CategoryButton';
import LowerMenu from './LowerMenu';

const Foods = () => {
  const location = useLocation();
  const pathname = location.pathname.slice(1);

  const { search: { text, typeSearch } } = useContext(ReciperContext);

  const [category, setCategory] = useState('All');

  const categories = useCategories(getMeals);
  const url = useUrlSearch(text, typeSearch);
  const { recipes } = useRecipesSrcBarFil(getMeals, url, pathname);
  const data = useRecipesCtgFil(recipes, category, getMeals, text, pathname);

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
          type={pathname}
          key={idMeal}
        />))}
      <LowerMenu />
    </div>
  );
};

export default Foods;
