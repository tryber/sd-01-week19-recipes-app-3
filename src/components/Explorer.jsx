import React from 'react';
import { useHistory } from 'react-router-dom';

const Explorer = ({ match: { params: { isFoodOrDrink: isFoodOrDrink } } }) => {
  const history = useHistory();
  return (
    <div>
      <h1>{isFoodOrDrink}</h1>
      <button data-testid="explore-by-ingredient" onClick={() => history.push(`/explorar/${isFoodOrDrink}/ingredientes`)}>Por ingredientes</button>
      { isFoodOrDrink === 'comidas' && <button data-testid="explore-by-area" onClick={() => history.push('/explorar/comidas/area')} >Por local de origem</button>}
      <button data-testid="explore-surprise" >Me surpreenda!</button>
    </div>
  );
};

export default Explorer;
