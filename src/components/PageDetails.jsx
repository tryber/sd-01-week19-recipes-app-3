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
import Recommendation from './Recommendation';
import ButtonStart from './ButtonStart';

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

const renderButton = (isStart, setIsStart, isDone, data, type) => (
  <ButtonStart
    data={data}
    isStart={isStart}
    setIsStart={() => setIsStart(!isStart)}
    isDone={isDone}
    type={type}
  />
);

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
  const [isStart, setIsStart] = useState(false);
  const [isDone, setIsDone] = useState(false);
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
  }, [id]);

  if (!dataRecipe) return <Loading />;
  return (
    <div className="PageDetails">
      {renderHeader(foodordrink, dataRecipe)}
      <ListIngredients
        inProgress={isStart}
        setIsDone={(value) => setIsDone(value)}
        listIngredient={formatIngredients(dataRecipe)}
      />
      <Instructions instructions={dataRecipe.strInstructions} />
      {isStart || renderVideo(dataRecipe)}
      {isStart || <Recommendation id={id} foodordrink={foodordrink} />}
      {renderButton(isStart, setIsStart, isDone, dataRecipe, foodordrink)}
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

