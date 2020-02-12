import { useEffect, useState, useContext } from 'react';
import { ReciperContext } from '../context/ReciperContext';
import { getRecipe } from '../service/FetchingAPI';

const multipleRecipes = (randomRecipes, type) => {
  const recipesArray = randomRecipes.map((recipe) => {
    if (type === 'meal') return recipe.meals[0];
    return recipe.drinks[0];
  });
  return recipesArray;
};

const getRandomRecipes = async (type, setRecipes) => {
  const randomRecipes = [];
  for (let index = 0; index < 12; index += 1) {
    const response = fetch(`https://www.the${type}db.com/api/json/v1/1/random.php`).then((data) => data.json());
    randomRecipes.push(response);
  }
  setRecipes(multipleRecipes(await Promise.all(randomRecipes), type, setRecipes));
};

const fetchRecipes = async (endPoint, isFoodOrDrink, setRecipes) => {
  let recipes = [];
  const keyData = isFoodOrDrink === 'Comidas' ? 'meals' : 'drinks';
  await getRecipe(endPoint, isFoodOrDrink)
    .then((resolve) => {
      if (resolve[keyData]) {
        recipes = [...resolve[keyData]];
      }
    })
    .catch((error) => console.log(error));
  setRecipes(recipes);
};

const useRecipesSrcBarFil = () => {
  const [recipes, setRecipes] = useState([]);
  const { endPoint, isFoodOrDrink } = useContext(ReciperContext);
  const keyData = isFoodOrDrink === 'Comidas' ? 'meal' : 'cocktail';
  useEffect(() => {
    if (endPoint === 'random.php') {
      getRandomRecipes(keyData, setRecipes);
    } else {
      fetchRecipes(endPoint, isFoodOrDrink, setRecipes);
    }
  }, [endPoint]);

  return recipes;
};

export default useRecipesSrcBarFil;
