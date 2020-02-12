import React, { useState, useContext, useEffect } from 'react';
import { ReciperContext } from '../context/ReciperContext';
import useCategories from '../hooks/useCategories';
import useRecipesSrcBarFil from '../hooks/useRecipesSrcBarFil';
import Header from './Header';
import LowerMenu from './LowerMenu';
import ListCategory from './ListCategory';
import ListRecipe from './ListRecipes';

const Foods = () => {
  const { endPoint, isFoodOrDrink } = useContext(ReciperContext);
  const categories = useCategories(isFoodOrDrink);
  const recipes = useRecipesSrcBarFil(endPoint, isFoodOrDrink);
  return (
    <div>
      <Header title={isFoodOrDrink} />
      <ListCategory allCategories={categories} />
      <ListRecipe allRecipes={recipes} isFoodOrDrink={isFoodOrDrink} />
      <LowerMenu />
    </div>
  );
};

export default Foods;
