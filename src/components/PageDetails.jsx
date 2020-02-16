import React, { useState, useEffect } from 'react';
import ListIngredients from './ListIngredients';
import HeaderRecipe from './HeaderRecipe';
import { getRecipe } from '../service/FetchingAPI';
import Loading from './Loading';
import Instructions from './Instructions'
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

const renderHeader = (foodordrink, data) => {
  if (foodordrink === 'comidas') return < HeaderRecipe img={data.strMealThumb} category={data.strCategory} title={data.strMeal} />
  return < HeaderRecipe
    img={data.strDrinkThumb}
    category={data.strAlcoholic}
    title={data.strDrink}
  />
}


const formatIngredients = (data) => {
  const allIngredientes = [];
  for (let i = 1; i <= 20; i++) {
    const valueIngredient = data[`strIngredient${i}`];
    if (!valueIngredient) break;
    const valueMeasure = data[`strMeasure${i}`];
    allIngredientes.push({
      ingredient: valueIngredient,
      measure: valueMeasure
    });
  }
  return allIngredientes;
}

const PageDetails = ({ match: { params: { id, foodordrink } } }) => {
  const [dataRecipe, setDataRecipe] = useState();
  useEffect(() => {
    let details = getDetailsRecipe(id)
    if (!details) {
      getRecipe(`lookup.php?i=${id}`, foodordrink)
        .then(result => {
          saveRecipe(id, result[keyData(foodordrink)][0])
          setDataRecipe(result[keyData(foodordrink)][0]);
        })
    }
    if (details) setDataRecipe(details);
  }, [])

  if (!dataRecipe) return <Loading />;
  console.log(dataRecipe)
  return (
    <div>
      {renderHeader(foodordrink, dataRecipe)}
      <ListIngredients listIngredient={formatIngredients(dataRecipe)} />
      <Instructions instructions={dataRecipe.strInstructions} />
    </div>
  );
};
export default PageDetails;
