export const saveIngredients = (list) => {
  const data = JSON.stringify(list);
  localStorage.setItem('Ingredients', data);
};

export const getIngredients = () => {
  const ingredients = localStorage.getItem('Ingredients');
  return JSON.parse(ingredients);
};

export const saveRecipe = (id, details) => {
  const data = JSON.stringify(details);
  localStorage.setItem(id, data);
};

export const getDetailsRecipe = (id) => {
  const data = localStorage.getItem(id);
  return JSON.parse(data);
};

export const saveUser = (email) => {
  localStorage.setItem('user', JSON.stringify({ email }));
  localStorage.setItem('meals-token', '1');
  localStorage.setItem('cocktails-token', '1');
};
