import React, { useState, useEffect } from 'react';
import ListIngredients from './ListIngredients';
import HeaderRecipe from './HeaderRecipe';
import { getRecipe } from '../service/FetchingAPI';
import Loading from './Loading';
import {
  saveIngredients,
  getIngredients,
  saveRecipe,
  getDetailsRecipe,
} from '../LocalStorage/LocalStorage.js';

const keyData = (verify) => {
  if (verify === 'comidas') return 'meals'
  return 'drinks'
};

const formatIngredients = (data) => {
  const allIngredientes = [];
  for (let i = 1; i <= 20; i++) {
    const valueIngredient = data[`strIngredient${i}`];
    if (valueIngredient === '') break;
    const valueMeasure = data[`strMeasure${i}`];
    allIngredientes.push({
      ingredient: valueIngredient,
      mesure: valueMeasure
    });
  }
  return allIngredientes;
}

const PageDetails = ({ match: { params: { id, foodordrink } } }) => {
  const [dataRecipe, setDataRecipe] = useState(false);
  useEffect(() => {
    const details = getDetailsRecipe(id)
    console.log(details)
    if (!details) {
      getRecipe(`lookup.php?i=${id}`, foodordrink)
        .then(result =>
          saveRecipe(id, result[keyData(foodordrink)][0]))
    }
    setDataRecipe(details);

  }, [])
  console.log(formatIngredients(dataRecipe));
  if (!dataRecipe) return <Loading />;
  return (
    <div>
      <HeaderRecipe />
      <ListIngredients />
    </div>
  );
};
export default PageDetails;
