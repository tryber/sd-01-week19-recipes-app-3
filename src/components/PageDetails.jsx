import React, { useContext, useState, useEffect } from 'react';
import ListIngredients from './ListIngredients';
import HeaderRecipe from './HeaderRecipe';
import { ReciperContext } from '../context/ReciperContext.jsx';
import { getRecipe } from '../service/FetchingAPI';
import Loading from './Loading';
// import { saveIngredients, getIngredients } from '../LocalStorage.js';

const PageDetails = ({ match: { params: { id } } }) => {
  const { isFoodOrDrink } = useContext(ReciperContext);
  const [dataRecipe, setDataRecipe] = useState(false);
  useEffect(() => {
    setDataRecipe(getRecipe(`lookup.php?i=11007${id}`,isFoodOrDrink))
  })

  if(dataRecipe) return <Loading />;
  return (
    <div>
      <HeaderRecipe />
      <ListIngredients />
    </div>
  );
};
export default PageDetails;
