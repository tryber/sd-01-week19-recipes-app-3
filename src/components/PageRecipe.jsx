import React, { useContext, useEffect } from 'react';
import { ReciperContext } from '../context/ReciperContext';
import useCategories from '../hooks/useCategories';
import useRecipesSrcBarFil from '../hooks/useRecipesSrcBarFil';
import Header from './Header';
import LowerMenu from './LowerMenu';
import ListCategory from './ListCategory';
import ListRecipe from './ListRecipes';
import Loading from './Loading';

const PageRecipe = () => {
  const { endPoint, isFoodOrDrink, setRecipe, isFetching } = useContext(ReciperContext);
  const categories = useCategories(isFoodOrDrink);
  const recipes = useRecipesSrcBarFil(endPoint, isFoodOrDrink);

  useEffect(() => {
    setRecipe(recipes);
  });

  useEffect(() => {
    setRecipe(recipes);
  }, [endPoint]);

  return (
    <div>
      <Header title={isFoodOrDrink} />
      <ListCategory allCategories={categories} />
      <ListRecipe />
      <LowerMenu />
    </div>
  );
};

export default PageRecipe;
