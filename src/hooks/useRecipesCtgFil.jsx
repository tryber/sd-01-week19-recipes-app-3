import { useEffect, useState } from 'react';

const gettingData = async (fetchingAPI, category, node, setData) => {
  const recipes = [];
  await fetchingAPI(`filter.php?c=${category}`).then((response) => recipes.push(...response[node]));
  setData(recipes);
};

const settingRecipes = (recipes, category, fetchingAPI, node, text, setData) => {
  if (category === 'All') {
    setData(recipes);
  }
  if (category !== 'All' && text === '') {
    gettingData(fetchingAPI, category, node, setData);
  }
  if (category !== 'All' && text !== '') {
    setData(recipes.filter(({ strCategory }) => strCategory === category));
  }
};

const useRecipesCtgFil = (recipes, category, fetchingAPI, text, pathname) => {
  const [data, setData] = useState([]);
  const node = pathname === 'comidas' ? 'meals' : 'drinks';

  useEffect(() => {
    if (recipes) {
      settingRecipes(recipes, category, fetchingAPI, node, text, setData);
    }
  }, [category, recipes]);

  return data;
};

export default useRecipesCtgFil;
