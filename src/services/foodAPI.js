const ListCategories = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
const ListArea = 'https://www.themealdb.com/api/json/v1/1/list.php?a=list';
const Listingredients = 'https://www.themealdb.com/api/json/v1/1/list.php?i=list';


export const urlImgIngredient = (name) => `https://www.themealdb.com/images/ingredients/${name}.png`;
export const urlListBySearch = (search, typeSearch) => `https://www.themealdb.com/api/json/v1/1/search.php?${typeSearch}=${search}`;

const FoodApi = (url) => (
  fetch(url)
    .then((response) => (
      response.json().then((json) => response && Promise.resolve(json)))));

