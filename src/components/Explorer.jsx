import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getMeals, getDrinks } from '../service/FetchingAPI';
import PropTypes from 'prop-types';

const fetchId = async (isFoodOrDrink, setId) => {
  if (isFoodOrDrink === 'comidas') {
    const id = await getMeals('random.php');
    setId(id.meals[0].idMeal);
  } else {
    const id = await getDrinks('random.php');
    setId(id.drinks[0].idDrink);
  }
};

const Explorer = ({ match: { params: { foodordrink } } }) => {
  const [id, setId] = useState();
  useEffect(() => {
    fetchId(foodordrink, setId);
  }, []);
  return (
    <div className="Explorer">
      <h1>{foodordrink}</h1>
      <Link
        to={`/explorar/${foodordrink}/ingredientes`}
        data-testid="explore-by-ingredient"
      >Por ingredientes</Link>
      {foodordrink === 'comidas' &&
        <Link to="/explorar/comidas/area" data-testid="explore-by-area" >Por local de origem</Link>}
      {id && <Link data-testid="explore-surprise" to={`/receitas/${foodordrink}/${id}`}>Me surpreenda!</Link>}
    </div>
  );
};

Explorer.PropTypes = {
  match: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Explorer;
