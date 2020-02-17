export const getMeals = async (request) => {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/${request}`);
  return response.json();
};

export const getDrinks = async (request) => {
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

export const getIngredientsImage = (request, endpoint) => {
  return `https://www.${request}.com/images/ingredients/${endpoint}.png`;
};

export const getCategories = (type) => {
  if (type === 'comidas') {
    return getCategoriesMeals();
  }
  return getCategoriesDrinks();
};

export const getRecipe = (endpoint, type) => {
  if (type === 'comidas') {
    return getMeals(endpoint);
  }
  return getDrinks(endpoint);
};

export const fetch5Categories = async (keyData, isFoodOrDrink) => {
  if (keyData === 'meal') {
    const { meals } = await getCategories(isFoodOrDrink);
    const values = meals.slice(0, 5).map(({ strCategory }) => strCategory);
    return values;
  }
  const { drinks } = await getCategories(isFoodOrDrink);
  const values = drinks.slice(0, 5).map(({ strCategory }) => strCategory);
  return values;
};


const multipleRecipes = (randomRecipes, type) => {
  const recipesArray = randomRecipes.map((recipe) => {
    if (type === 'meal') return recipe.meals[0];
    return recipe.drinks[0];
  });
  return recipesArray;
};

const getRandomRecipes = async (type) => {
  const randomRecipes = [];
  for (let index = 0; index < 12; index += 1) {
    const response = fetch(`https://www.the${type}db.com/api/json/v1/1/random.php`).then((data) => data.json());
    randomRecipes.push(response);
  }
  return multipleRecipes(await Promise.all(randomRecipes), type);
};

const fetchRecipes = async (endPoint, isFoodOrDrink) => {
  let recipes = [];
  const keyData = isFoodOrDrink === 'comidas' ? 'meals' : 'drinks';
  await getRecipe(endPoint, isFoodOrDrink)
    .then((resolve) => {
      if (resolve[keyData]) {
        recipes = [...resolve[keyData]];
      }
    })
    .catch((error) => console.log(error));
  return recipes;
};

export const getRecipes = (endPoint, keyData, isFoodOrDrink) => {
  if (endPoint === 'random.php') {
    return getRandomRecipes(keyData);
  }
  return fetchRecipes(endPoint, isFoodOrDrink);
};
