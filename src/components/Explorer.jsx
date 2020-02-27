import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getMeals, getDrinks } from '../service/FetchingAPI';
import Header from './Header';
import LowerMenu from './LowerMenu';

const fetchId = async (isFoodOrDrink, setId) => {
  if (isFoodOrDrink === 'comidas') {
    const id = await getMeals('random.php');
    setId(id.meals[0].idMeal);
  } else {
    const id = await getDrinks('random.php');
    setId(id.drinks[0].idDrink);
  }
};

const returnName = (foodordrink) => {
  if (foodordrink === 'comidas') return 'Comidas';
  return 'Bebidas';
};

const Explorer = ({ match: { params: { foodordrink } } }) => {
  const [id, setId] = useState();
  useEffect(() => {
    fetchId(foodordrink, setId);
  }, []);
  return (
    <div className="Explorer">
      <Header title={`Explorar ${returnName(foodordrink)}`} />
      <h1>{foodordrink}</h1>
      <Link
        to={`/explorar/${foodordrink}/ingredientes`}
        data-testid="explore-by-ingredient"
      >Por ingredientes</Link>
      {foodordrink === 'comidas' &&
        <Link to="/explorar/comidas/area" data-testid="explore-by-area" >Por local de origem</Link>}
      {id && <Link data-testid="explore-surprise" to={`/receitas/${foodordrink}/${id}`}>Me surpreenda!</Link>}
      <LowerMenu />
    </div>
  );
};

Explorer.propTypes = {
  match: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Explorer;
