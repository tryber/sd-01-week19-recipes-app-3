import { useEffect, useState } from 'react';

const fetch12Recipes = async (fetchingAPI, url, setRecipes, node, idRecipes) => {
  const recipes = [];
  const recipesID = [];
  for (let i = 0; i < 12; i += 1) {
    await fetchingAPI(url)
      .then(
        (resolve) => {
          if (recipesID.includes(resolve[node][0][idRecipes])) {
            i -= 1;
          } else {
            recipes.push(resolve[node][0]);
            recipesID.push(resolve[node][0][idRecipes]);
          }
        }
      )
  }
  setRecipes({ recipes, recipesID })
}

const fetchRecipes = async (fetchingAPI, url, setRecipes, node, idRecipes) => {
  const recipes = [];
  const recipesID = [];
  await fetchingAPI(url)
    .then((resolve) => {
      if (resolve[node]) {
        resolve[node]
          .forEach((eachRecipe) => recipesID
            .push(eachRecipe[idRecipes]))
      }
    })
  for (let i = 0; i < recipesID.length; i += 1) {
    await fetchingAPI(`lookup.php?i=${recipesID[i]}`).then((resolve) => recipes.push(resolve[node][0]))
  }
  setRecipes({ recipes, recipesID })
}

const useRecipes = (fetchingAPI, url, pathname) => {
  const [recipes, setRecipes] = useState([]);

  const node = pathname === 'comidas' ? 'meals' : 'drinks';
  const idRecipes = node === 'meals' ? 'idMeal' : 'idDrink';

  useEffect(() => {
    if (url.includes('random.php')) {
      fetch12Recipes(fetchingAPI, url, setRecipes, node, idRecipes)
    } else {
      fetchRecipes(fetchingAPI, url, setRecipes, node, idRecipes)
    }
  }, [url]);

  return recipes;
}

export default useRecipes;
