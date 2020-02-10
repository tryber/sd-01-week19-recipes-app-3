import React, { useState, useContext } from 'react';
import { getMeals, getDrinks } from '../service/FetchingAPI';
import { ReciperContext } from '../context/ReciperContext';
import useUrlSearch from '../hooks/useUrlSearch';
import useCategories from '../hooks/useCategories';
import useRecipesSrcBarFil from '../hooks/useRecipesSrcBarFil';
import useRecipesCtgFil from '../hooks/useRecipesCtgFil';
import Header from './Header';
import CardRecipe from './CardRecipe';
import CategoryButton from './CategoryButton';
import LowerMenu from './LowerMenu';

const Foods = ({ location: { pathname } }) => {
  const typeRecipes = pathname.slice(1);

  const { search: { text, typeSearch } } = useContext(ReciperContext);

  const [category, setCategory] = useState('All');
  const fetchApi = (typeRecipes === 'comidas') ? getMeals : getDrinks;
  const categories = useCategories(fetchApi, typeRecipes);
  const url = useUrlSearch(text, typeSearch);
  const recipes = useRecipesSrcBarFil(fetchApi, url, typeRecipes);
  const data = useRecipesCtgFil(recipes, category, getMeals, text, typeRecipes);

  return (
    <div>
      <Header title={pathname.slice(1)} />
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
