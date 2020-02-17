import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { getMeals, getDrinks } from '../service/FetchingAPI';

const fetchId = async (isFoodOrDrink, setId) => {
  if (isFoodOrDrink === 'comidas') {
    const id = await getMeals('random.php');
    setId(id.meals[0].idMeal);
  } else {
    const id = await getDrinks('random.php');
    setId(id.drinks[0].idDrink);
  }
};

const Explorer = ({ match: { params: { isFoodOrDrink: isFoodOrDrink } } }) => {
  const [id, setId] = useState();
  const history = useHistory();

  useEffect(() => {
    fetchId(isFoodOrDrink, setId)
  }, []);
  return (
    <div>
      <h1>{isFoodOrDrink}</h1>
      <button data-testid="explore-by-ingredient" onClick={() => history.push(`/explorar/${isFoodOrDrink}/ingredientes`)}>Por ingredientes</button>
      {isFoodOrDrink === 'comidas' && <button data-testid="explore-by-area" onClick={() => history.push('/explorar/comidas/area')} >Por local de origem</button>}
      {id && <button data-testid="explore-surprise" onClick={() => history.push(`/explorar/${isFoodOrDrink}/${id}`)}>Me surpreenda!</button>}
    </div>
  );
};

export default Explorer;
