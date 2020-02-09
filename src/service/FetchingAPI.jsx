export const getMeals = async (request) => {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/${request}`);
  return response.json();
};

export const getIngredientMealsImage = async (request) => {
  const response = await fetch(`https://www.themealdb.com/images/ingredients/${request}`);
  return response;
};

export const getMealsImage = async (request) => {
  const response = await fetch(`https://www.themealdb.com/images/media/meals/${request}/preview`);
  return response;
};

export const getDrinks = async (request) => {
  const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/${request}`);
  return response.json();
};

export const getIngredientDrinksImage = async (request) => {
  const response = await fetch(`https://www.thecocktaildb.com/images/ingredients/${request}`);
  return response;
};

export const getDrinksImage = async (request) => {
  const response = await fetch(`https://www.thecocktaildb.com/images/media/drink/${request}/preview`);
  return response;
};
