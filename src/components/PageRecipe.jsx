import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { ReciperContext } from '../context/ReciperContext';
import { fetch5Categories, getRecipes } from '../service/FetchingAPI';
import Header from './Header';
import LowerMenu from './LowerMenu';
import ListCategory from './ListCategory';
import ListRecipe from './ListRecipes';
import './PageRecipe.css';

const keyData = (verify) => {
  if (verify === 'comidas') return 'meal';
  return 'cocktail';
};

const getData = (endPoint, foodordrink, setCategories, setRecipe) => {
  fetch5Categories(keyData(foodordrink), foodordrink)
    .then((result) => setCategories(result));
  getRecipes(endPoint, keyData(foodordrink), foodordrink)
    .then((result) => setRecipe(result));
};

const PageRecipe = ({ match: { params: { foodordrink } } }) => {
  const { endPoint, isFoodOrDrink, setRecipe } = useContext(ReciperContext);
  const [categories, setCategories] = useState();
  useEffect(() => {
    getData(endPoint, foodordrink, setCategories, setRecipe);
  }, []);
  useEffect(() => {
    getData(endPoint, foodordrink, setCategories, setRecipe);
  }, [isFoodOrDrink]);
  useEffect(() => {
    getRecipes(endPoint, keyData(foodordrink), foodordrink)
      .then((result) => setRecipe(result));
  }, [endPoint]);
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

