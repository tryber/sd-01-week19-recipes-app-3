import { useEffect, useState } from 'react';

const fetch5Categories = async (fetchingAPI, url, setCategories, keyData) => {
  const categories = [];
  await fetchingAPI(url).then((resolve) => categories.push(...resolve[keyData]));
  setCategories(categories.slice(0, 5));
};

const useCategories = (fetchingAPI, pathname) => {
  const [categories, setCategories] = useState([]);
  const keyData = pathname === 'comidas' ? 'meals' : 'drinks';

  useEffect(() => {
    fetch5Categories(fetchingAPI, 'list.php?c=list', setCategories, keyData);
  }, []);

  return categories;
};

export default useCategories;
