
  export const getMeals = async (request) => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/${request}`);
    return response.json();
  };
  

  export const getIngredientImage = async (request) => {
    const response = await fetch(`https://www.themealdb.com/images/ingredients/${request}`);
    return response.json();
  };

  export const getMealImage = async (request) => {
    const response = await fetch(`https://www.themealdb.com/images/media/meals/${request}/preview`);
    return response.json();
  };

  