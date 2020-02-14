export const saveIngredients = (list) => {
  localStorage.setItem('Ingredients', list);
};

export const getIngredients = (list) => {
  localStorage.getItem('Ingredients', list);
};

export const saveUser = (email) => {
  console.log(email)
  localStorage.setItem('user', JSON.stringify({ email }));
  localStorage.setItem('meals-token', '1');
  localStorage.setItem('cocktails-token', '1');
};
