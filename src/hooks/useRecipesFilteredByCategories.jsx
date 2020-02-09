import { useEffect, useState } from 'react';

const gettingData = async (fetchingAPI, category, node, setData) => {
  const recipes = [];
  await fetchingAPI(`filter.php?c=${category}`).then((response) => recipes.push(...response[node]))
  setData(recipes)
}

const useRecipesFilteredByCategories = (recipes, category, fetchingAPI, text, pathname) => {
  const [data, setData] = useState([]);
  const node = pathname === 'comidas' ? 'meals' : 'drinks';

  const settingRecipes = () => {
    if (recipes) {
      if (category === 'All') {
        setData(recipes);
      } else {
        if (text === '') {
          gettingData(fetchingAPI, category, node, setData);
        } else {
          setData(recipes.filter(({ strCategory }) => strCategory === category))
        }
      }
    }
  }

  useEffect(() => {
    settingRecipes();
  }, [category, recipes])

  return data;
}

export default useRecipesFilteredByCategories;
