import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import PropTypes from 'prop-types';
import ListIngredients from './ListIngredients';
import HeaderRecipe from './HeaderRecipe';
import { getRecipe } from '../service/FetchingAPI';
import Loading from './Loading';
import Instructions from './Instructions';
import './PageDetails.css';
import {
  saveRecipe,
  getDetailsRecipe,
} from '../LocalStorage/LocalStorage.js';

const keyData = (verify) => {
  if (verify === 'comidas') return 'meals';
  return 'drinks';
};

const renderHeader = (foodordrink, data) => {
  if (foodordrink === 'comidas') return <HeaderRecipe img={data.strMealThumb} category={data.strCategory} title={data.strMeal} />;
  return (<HeaderRecipe
    img={data.strDrinkThumb}
    category={data.strAlcoholic}
    title={data.strDrink}
  />);
};

const renderVideo = (data) => {
  const opts = {
    width: '360px',
    playerVars: {
      autoplay: 0,
    },
  };
  if (data.strYoutube) {
    return (<YouTube
      videoId={data.strYoutube.slice(32)}
      opts={opts}
    />);
  }
  if (data.strVideo) {
    return (<YouTube
      videoId={data.strVideo.slice(32)}
      opts={opts}
    />);
  }
  return <div>Não possui video.</div>;
};

const formatIngredients = (data) => {
  const allIngredientes = [];
  for (let i = 1; i <= 20; i += 1) {
    const valueIngredient = data[`strIngredient${i}`];
    if (!valueIngredient) break;
    const valueMeasure = data[`strMeasure${i}`];
    allIngredientes.push({
      ingredient: valueIngredient,
      measure: valueMeasure,
    });
  }
  return allIngredientes;
};

const PageDetails = ({ match: { params: { id, foodordrink } } }) => {
  const [dataRecipe, setDataRecipe] = useState();
  useEffect(() => {
    const details = getDetailsRecipe(id);
    if (!details) {
      getRecipe(`lookup.php?i=${id}`, foodordrink)
        .then((result) => {
          saveRecipe(id, result[keyData(foodordrink)][0]);
          setDataRecipe(result[keyData(foodordrink)][0]);
        });
    }
    if (details) setDataRecipe(details);
  }, []);

  if (!dataRecipe) return <Loading />;
  return (
    <div className="PageDetails">
      {renderHeader(foodordrink, dataRecipe)}
      <ListIngredients listIngredient={formatIngredients(dataRecipe)} />
      <Instructions instructions={dataRecipe.strInstructions} />
      {renderVideo(dataRecipe)}
    </div>
  );
};

export default PageDetails;

PageDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number.isRequired,
      foodordrink: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

