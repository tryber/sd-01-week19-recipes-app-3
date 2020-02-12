const getMeals = async (request) => {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/${request}`);
  return response.json();
};

const getDrinks = async (request) => {
  const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/${request}`);
  return response.json();
};

const getCategoriesMeals = async () => {
  const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list');
  return response.json();
};

const getCategoriesDrinks = async () => {
  const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
  return response.json();
};

export const getCategories = (type) => {
  if (type === 'Comidas') {
    return getCategoriesMeals();
  }
  return getCategoriesDrinks();
};

export const getRecipe = (endpoint, type) => {
  if (type === 'Comidas') {
    return getMeals(endpoint);
  }
  return getDrinks(endpoint);
};
