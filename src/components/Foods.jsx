import React, { useState, useContext } from 'react';
import { getMeals } from '../service/FetchingAPI';
import { ReciperContext } from '../context/ReciperContext';
import use12Recipes from '../hooks/use12Recipes';
import useSearchRecipes from '../hooks/useSearchRecipes';
import Header from './Header';
import { useLocation } from 'react-router-dom';
import CardRecipe from './CardRecipe';
import useUrlSearch from '../hooks/useUrlSearch';
import { useEffect } from 'react';

const Foods = () => {
  const location = useLocation();

  const { search: { text, typeSearch } } = useContext(ReciperContext);

  const [url, setUrl] = useState('random.php');
  

  const { recipes } = use12Recipes(getMeals, url);

  const [recipesData, setRecipesData] = useState([]);
  

  const currentUrl = useUrlSearch(text, typeSearch);
// console.log(useSearchRecipes(getMeals, recipes, url))
console.log(recipes)
  
  

  useEffect(() => {
    setUrl(currentUrl);
  }, [text, typeSearch])

  return (
    <div>
      <Header location={location} />
      {/* {recipes && recipes.map(({ strMeal, strCategory, strMealThumb, idMeal }) =>
        (<CardRecipe
          title={strMeal}
          category={strCategory}
          image={strMealThumb}
          id={idMeal}
          type='comidas'
          key={idMeal}
        />))} */}
    </div>
  );
}

export default Foods;
