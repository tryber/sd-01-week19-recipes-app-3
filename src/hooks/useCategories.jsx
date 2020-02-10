import { useEffect, useState } from 'react';

const fetch5Categories = async (fetchingAPI, url, setCategories, node) => {
  const categories = [];
  await fetchingAPI(url).then((resolve) => categories.push(...resolve[node]));
  setCategories(categories.slice(0, 5));
};

const useCategories = (fetchingAPI, pathname) => {
  const [categories, setCategories] = useState([]);
  const node = pathname === 'comidas' ? 'meals' : 'drinks';

  useEffect(() => {
    fetch5Categories(fetchingAPI, 'list.php?c=list', setCategories, node);
  }, []);

  return categories;
};

export default useCategories;
