import { useEffect, useState } from 'react';

const use12Recipes = (fetcingAPI, url) => {
  const [recipes, setRecipes] = useState({});

  const fetch12Recipes = async () => {
    const recipes = [];
    const recipesID = [];
    for (let i = 0; i < 12; i += 1) {
      await fetcingAPI(url)
        .then(
          (resolve) => {
            if (recipesID.includes(resolve.meals[0].idMeal)) {
              i -= 1;
            } else {
              recipes.push(resolve.meals[0]);
              recipesID.push(resolve.meals[0].idMeal);
            }
          },
        )
    }
    setRecipes({ recipes, recipesID })
  }

  useEffect(() => {
    fetch12Recipes()
  }, [url]);

  return recipes;
}

export default use12Recipes;
