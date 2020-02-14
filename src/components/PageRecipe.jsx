import React, { useContext, useEffect, useState } from 'react';
import { ReciperContext } from '../context/ReciperContext';
import { fetch5Categories, getRecipes } from '../service/FetchingAPI';
import Header from './Header';
import LowerMenu from './LowerMenu';
import ListCategory from './ListCategory';
import ListRecipe from './ListRecipes';

const keyData = (verify) => {
  if (verify === 'comidas') return 'meal'
  return 'cocktail'
};

const PageRecipe = ({ match: { params: { foodordrink } } }) => {
  const { endPoint, isFoodOrDrink, setRecipe, recipe } = useContext(ReciperContext);
  const [categories, setCategories] = useState();
  useEffect(() => {
    fetch5Categories(keyData(foodordrink), foodordrink).then(result => setCategories(result));
  }, []);
  useEffect(() => {
    fetch5Categories(keyData(foodordrink), foodordrink).then(result => setCategories(result));
    getRecipes(endPoint, keyData(foodordrink), foodordrink).then(result => setRecipe(result));
  }, [isFoodOrDrink]);
  useEffect(() => {
    getRecipes(endPoint, keyData(foodordrink), foodordrink).then(result => setRecipe(result));
  }, [endPoint]);
  console.log(recipe)
  return (
    <div>
      <Header title={foodordrink} />
      <ListCategory allCategories={categories} />
      <ListRecipe type={foodordrink}/>
      <LowerMenu />
    </div>
  );
};

export default PageRecipe;
