import React, { useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { getDrinks } from '../service/FetchingAPI';
import { ReciperContext } from '../context/ReciperContext';
import useUrlSearch from '../hooks/useUrlSearch';
import useCategories from '../hooks/useCategories';
import useRecipesSrcBarFil from '../hooks/useRecipesSrcBarFil';
import useRecipesCtgFil from '../hooks/useRecipesCtgFil';
import Header from './Header';
import CardRecipe from './CardRecipe';
import CategoryButton from './CategoryButton';
import LowerMenu from './LowerMenu';

const Drinks = () => {
  const location = useLocation();
  const pathname = location.pathname.slice(1);

  const { search: { text, typeSearch } } = useContext(ReciperContext);

  const [category, setCategory] = useState('All');

  const categories = useCategories(getDrinks, pathname);
  const url = useUrlSearch(text, typeSearch);
  const { recipes } = useRecipesSrcBarFil(getDrinks, url, pathname);
  const data = useRecipesCtgFil(recipes, category, getDrinks, text, pathname);

  return (
    <div>
      <Header location={location} />
      <CategoryButton key="All" title="All" changeCategory={setCategory} />
      {categories && categories.map(({ strCategory }) =>
        <CategoryButton key={strCategory} title={strCategory} changeCategory={setCategory} />)}
      {data && data.map(({ strDrink, strCategory, strDrinkThumb, idDrink }) =>
        (<CardRecipe
          title={strDrink}
          category={strCategory}
          image={strDrinkThumb}
          id={idDrink}
          type={pathname}
          key={idDrink}
        />))}
      <LowerMenu />
    </div>
  );
};

export default Drinks;
