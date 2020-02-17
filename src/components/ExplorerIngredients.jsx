import React, { useEffect, useState } from 'react';
import { getMeals, getDrinks, getIngredientsImage } from '../service/FetchingAPI';
import EachIngredient from './EachIngredient';
import LowerMenu from './LowerMenu';

const fetchIngredients = async (match, setIngredients) => {
  if (match === 'comidas') {
    const data = await getMeals('list.php?i=list');
    const names = data.meals.map(({ strIngredient }) => strIngredient);
    const images = [];
    names.forEach((ingredient) => images.push(getIngredientsImage('themealdb', ingredient)));
    const array = await Promise.all(images);
    setIngredients({ names, images: array.map(({ url }) => url) });
  } else {
    const data = await getDrinks('list.php?i=list');
    const names = data.drinks.map(({ strIngredient1 }) => strIngredient1);
    const images = [];
    names.forEach((ingredient) => images.push(getIngredientsImage('thecocktaildb', ingredient)));
    const array = await Promise.all(images);
    setIngredients({ names, images: array.map(({ url }) => url) });
  }
};

const ExplorerIngredients = ({ match: { params: { foodordrink } } }) => {
  const [ingredients, setIngredients] = useState({ names: null, images: null });
  useEffect(() => {
    fetchIngredients(foodordrink, setIngredients);
  });
  const { names, images } = ingredients;
  return (
    <div className="ExplorerIngredients">
      {names && images &&
        names.map((ingredient, index) =>
          <EachIngredient name={ingredient} img={images[index]} isFoodOrDrink={foodordrink} />)}
      <LowerMenu />
    </div>
  );
};

export default ExplorerIngredients;
