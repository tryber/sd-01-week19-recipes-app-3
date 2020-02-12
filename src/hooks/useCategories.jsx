import { useEffect, useState } from 'react';
import { getCategories } from '../service/FetchingAPI';

const fetch5Categories = async (setCategories, keyData, isFoodOrDrink) => {
  const categories = [];
  await getCategories(isFoodOrDrink).then((resolve) => {
    categories.push(...resolve[keyData]);
  });
  return setCategories(categories.slice(0, 5));
};

const useCategories = (isFoodOrDrink) => {
  const [categories, setCategories] = useState([]);
  const keyData = isFoodOrDrink === 'Comidas' ? 'meals' : 'drinks';

  useEffect(() => {
    fetch5Categories(setCategories, keyData, isFoodOrDrink);
  }, []);

  return categories;
};

export default useCategories;
