import { useEffect } from 'react';

const use12Recipes = fetcingAPI => {
  const recipes = [];

  useEffect(() => {
    for (let i = 0; i < 12; i += 1) {
      fetcingAPI('random.php')
        .then(
          (resolve) => {
            if (recipes.includes(resolve.meals[0])) {
              i -= 1;
            } else {
              recipes.push(resolve.meals[0]);
            }
          },
        )
    }
  }, []);

  return recipes;
}

export default use12Recipes;
