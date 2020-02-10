import { useEffect, useState } from 'react';

const fetch12Recipes = async (fetchingAPI, url, setRecipes, keyData, idRecipes) => {
  const recipes = [];
  const recipesID = [];
  const promisses = [];

  for (let i = 0; i < 12; i += 1) {
    promisses.push(
      fetchingAPI(url)
        .then(
          (resolve) => {
            if (recipesID.includes(resolve[keyData][0][idRecipes])) {
              i -= 1;
            } else {
              recipes.push(resolve[keyData][0]);
              recipesID.push(resolve[keyData][0][idRecipes]);
            }
          },
        ),
    );
  }

  await Promise.all(promisses);

  setRecipes(recipes);
};

const fetchRecipes = async (fetchingAPI, url, setRecipes, keyData) => {
  const recipes = [];
  await fetchingAPI(url)
    .then((resolve) => {
      if (resolve[keyData]) {
        recipes = [...resolve[keyData]]
      }
    });
  setRecipes(recipes);
};

const useRecipesSrcBarFil = (fetchingAPI, url, pathname) => {
  const [recipes, setRecipes] = useState([]);

  const keyData = pathname === 'comidas' ? 'meals' : 'drinks';
  const idRecipes = keyData === 'meals' ? 'idMeal' : 'idDrink';

  useEffect(() => {
    if (url.includes('random.php')) {
      fetch12Recipes(fetchingAPI, url, setRecipes, keyData, idRecipes);
    } else {
      fetchRecipes(fetchingAPI, url, setRecipes, keyData);
    }
  }, [url]);

  return recipes;
};

export default useRecipesSrcBarFil;
