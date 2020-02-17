import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { ReciperContext } from '../context/ReciperContext';
import { fetch5Categories, getRecipes } from '../service/FetchingAPI';
import Header from './Header';
import LowerMenu from './LowerMenu';
import ListCategory from './ListCategory';
import ListRecipe from './ListRecipes';
import './PageRecipe.css';
import Loading from './Loading';

const keyData = (verify) => {
  if (verify === 'comidas') return 'meal';
  return 'cocktail';
};

const oneRecipe = (recipe) => {
  if (recipe[0].idMeal) return <Redirect to={`/receitas/comidas/${recipe[0].idMeal}`} />;
  return <Redirect to={`/receitas/bebidas/${recipe[0].idDrink}`} />;
};

const getData = (endPoint, foodordrink, setCategories, setRecipe, setIsFetching) => {

  fetch5Categories(keyData(foodordrink), foodordrink)
    .then((result) => setCategories(result));
  getRecipes(endPoint, keyData(foodordrink), foodordrink)
    .then((result) => {
      setIsFetching(false);
      setRecipe(result);
    });
};

const PageRecipe = ({ match: { params: { foodordrink } } }) => {
  const { endPoint, isFoodOrDrink, setRecipe, recipe } = useContext(ReciperContext);
  const [categories, setCategories] = useState();
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    if (!isFetching) {
      setIsFetching(true);
      getData(endPoint, foodordrink, setCategories, setRecipe, setIsFetching);
    }
  }, [isFoodOrDrink, endPoint]);

  if (recipe && recipe.length === 1) return oneRecipe(recipe);
  return (
    <div className="PageRecipe">
      <Header title={foodordrink} />
      <ListCategory allCategories={categories} />
      <ListRecipe type={foodordrink} />
      <LowerMenu />
    </div>
  );
};

export default PageRecipe;

PageRecipe.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number.isRequired,
      foodordrink: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

