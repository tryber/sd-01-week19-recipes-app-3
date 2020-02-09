import { useEffect, useState } from 'react';

const useSearchRecipes = (callback, defaultRecipes, url) => {
  const [recipesData, setRecipesData] = useState({});

  useEffect(() => {
    if (url.includes('filter.php')) {
      console.log('hey')
      callback(url).then((resolve) => console.log(resolve))
    } else if (url.includes('search.php')) {
      console.log('kdjlafs')
      callback(url).then((resolve) => resolve.json().then((resolve) => console.log(resolve)))
    } else {
      console.log('andy')
      setRecipesData(defaultRecipes);
    }
  }, [url]);

  return recipesData;
}

export default useSearchRecipes;
