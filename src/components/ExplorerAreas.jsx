import React, { useEffect, useState } from 'react';
import { getMeals, getRecipes } from '../service/FetchingAPI';
import CardRecipe from './CardRecipe';

const fetchAreas = async (setAreas) => {
  const area = await getMeals('list.php?a=list');
  setAreas(area.meals.map(({ strArea }) => strArea));
};
const fetchMeals = async (setMeals, area) => {
  if (area === 'Todos') {
    const meals = await getRecipes('random.php', 'meal', 'comidas');
    setMeals(meals);
  } else {
    const meals = await getMeals(`filter.php?a=${area}`);
    setMeals(meals.meals);
  }
};
const ExplorerAreas = () => {
  const [areas, setAreas] = useState(null);
  const [area, setArea] = useState('Todos');
  const [meals, setMeals] = useState(null);
  useEffect(() => {
    fetchAreas(setAreas);
  }, []);
  useEffect(() => {
    fetchMeals(setMeals, area);
  }, [area]);
  return (
    <div>
      {areas &&
        <select
          key="area"
          onChange={(e) => setArea(e.target.value)} data-testid="explore-by-area-dropdown"
        >
          <option value="Todos" data-testid="todos-option">Todos</option>
          {areas.map((eachArea) => (
            <option key={eachArea} value={eachArea} data-testid={`${eachArea}-option`}>{eachArea}</option>
          ))}
        </select>}
      <div className="ListRecipe">
        {meals && meals.map(({ strMeal, strCategory, strMealThumb, idMeal }, index) =>
          (<CardRecipe
            title={strMeal}
            categorie={strCategory}
            image={strMealThumb}
            id={idMeal}
            type="comidas"
            key={`${index * 3}`}
          />))}
      </div>
    </div>
  );
};

export default ExplorerAreas;
