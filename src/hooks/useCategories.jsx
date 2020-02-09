import { useEffect, useState } from 'react';

const fetch5Categories = async (fetchingAPI, url, setCategories) => {
  const categories = [];
  await fetchingAPI(url).then((resolve) => categories.push(...resolve.categories))
  setCategories(categories.slice(0, 5))
}

const useCategories = (fetchingAPI) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch5Categories(fetchingAPI, 'categories.php', setCategories)
  }, []);

  return categories;
}

export default useCategories;
