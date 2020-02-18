import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getMeals, getDrinks, getIngredientsImage } from '../service/FetchingAPI';
import EachIngredient from './EachIngredient';
import LowerMenu from './LowerMenu';
import Header from './Header';
import './ExplorerIngredients.css';

const fetchIngredients = async (match, setIngredients) => {
  if (match === 'comidas') {
    const data = await getMeals('list.php?i=list');
    const names = data.meals.map(({ strIngredient }) => strIngredient);
    const allIngredients = names.map((ingredient) => ({
      ingredient, images: (getIngredientsImage('themealdb', ingredient)
      )
    }));
    setIngredients(allIngredients);
  } else {
    const data = await getDrinks('list.php?i=list');
    const names = data.drinks.map(({ strIngredient1 }) => strIngredient1);
    const allIngredients = names.map((ingredient) => ({
      ingredient, images: (getIngredientsImage('thecocktaildb', ingredient)
      )
    }));
    setIngredients(allIngredients);
  }
};

const ExplorerIngredients = ({ match: { params: { foodordrink } } }) => {
  const [ingredients, setIngredients] = useState();
  useEffect(() => {
    fetchIngredients(foodordrink, setIngredients);
  }, []);

  return (
    <div className="ExplorerIngredients">
      <Header title="Explorar Ingredientes" />
      <div className="ListIngredients">
        {ingredients &&
          ingredients.map(({ ingredient, images }) =>
            <EachIngredient ingredient={ingredient} img={images} isFoodOrDrink={foodordrink} />)}
      </div>
      <LowerMenu />
    </div>
  );
};

ExplorerIngredients.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      foodordrink: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ExplorerIngredients;
