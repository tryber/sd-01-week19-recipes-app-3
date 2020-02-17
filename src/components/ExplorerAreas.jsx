import React, { useEffect, useState } from 'react';
import { getMeals } from '../service/FetchingAPI';
import EachIngredient from './EachIngredient';

const fetchAreas = async (setAreas) => {
  const area = await getMeals('list.php?a=list');
  setAreas(area.meals.map(({ strArea }) => strArea));
}
const fetchMeals = async (setMeals, area) => {
  const meals = await getMeals(`filter.php?a=${area}`);
  setMeals(meals);
}
const ExplorerAreas = () => {
  const [areas, setAreas] = useState(null);
  const [area, setArea] = useState('Todas');
  const [meals, setMeals] = useState(null);
  useEffect(() => {
    fetchAreas(setAreas)
  }, [])
  useEffect(() => {
    fetchMeals(setMeals, area)
  }, [area])
  console.log(meals)
  return (
    <div>
      {areas &&
        <select key="area" onChange={(e) => setArea(e.target.value)} >
          <option value="Todos" >Todos</option>
          {areas.map((area) => (
            <option key={area} value={area} >{area}</option>
          ))}
        </select>}
        
    </div>
  )
}

export default ExplorerAreas;
