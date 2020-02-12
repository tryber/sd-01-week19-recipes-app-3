import { useEffect, useState } from 'react';
import { getRecipe } from '../service/FetchingAPI';

const fetch12Recipes = async (setRecipes, isFoodOrDrink) => {
  const recipes = [];
  const promises = [];
  const keyData = isFoodOrDrink === 'Comidas' ? 'meals' : 'drinks';
  for (let i = 0; i < 12; i += 1) {
    promises.push(
      getRecipe('random.php', isFoodOrDrink)
        .then(
          (resolve) => {
            recipes.push(resolve[keyData][0]);
          }
        ))
  }

  await Promise.all(promises);
  setRecipes(recipes);
};

const fetchRecipes = async (endPoint, isFoodOrDrink, setRecipes) => {
  let recipes = [];
  const keyData = isFoodOrDrink === 'Comidas' ? 'meals' : 'drinks';
  await getRecipe(endPoint, isFoodOrDrink)
    .then((resolve) => {
      if (resolve[keyData]) {
        recipes = [...resolve[keyData]]
      }
    }).catch((error)=>console.log(error));
  setRecipes(recipes);
};

const useRecipesSrcBarFil = (endPoint, isFoodOrDrink) => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    console.log(endPoint,'mudou')
    if (endPoint === 'random.php') {
      fetch12Recipes(setRecipes, isFoodOrDrink);
    } else {
      fetchRecipes(endPoint, isFoodOrDrink, setRecipes);
    }
  }, [endPoint]);

  return recipes;
};

export default useRecipesSrcBarFil;
