import React, { useContext, useEffect } from 'react';
import { ReciperContext } from '../context/ReciperContext';
import CategoryButton from './CategoryButton';

const changeCategory = (value, category, setCategory) => {
  console.log('mudou')
  console.log(value,category)
  if (value === category) return setCategory('All');
  return setCategory(value);
}

const ListCategory = ({ allCategories }) => {
  const { setEndPoint, category, setCategory } = useContext(ReciperContext);

  useEffect(() => {
    if(category === 'All')return setEndPoint('random.php')
    return setEndPoint(`filter.php?c=${category}`)
  }, [category]);

  return (
    <div>
      <CategoryButton
        key="All"
        title="All"
        changeCategory={() => changeCategory('All', category, setCategory)}
      />
      {allCategories && allCategories.map(({ strCategory }) => (
        <CategoryButton
          key={strCategory}
          title={strCategory}
          changeCategory={() => changeCategory(strCategory, category, setCategory)}
        />
      ))
      }
    </div>
  );
};

export default ListCategory;
