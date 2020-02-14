import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ReciperContext } from '../context/ReciperContext';
import CategoryButton from './CategoryButton';

const changeCategory = (value, category, setCategory) => {
  if (value === category) return setCategory('All');
  return setCategory(value);
};

const ListCategory = ({ allCategories }) => {
  const { setEndPoint, category, setCategory } = useContext(ReciperContext);
  useEffect(() => {
    if (category === 'All') return setEndPoint('random.php');
    return setEndPoint(`filter.php?c=${category}`);
  }, [category]);

  return (
    <div>
      <CategoryButton
        key="All"
        title="All"
        changeCategory={() => changeCategory('All', category, setCategory)}
      />
      {allCategories && allCategories.map((item) => (
        <CategoryButton
          key={item}
          title={item}
          changeCategory={() => changeCategory(item, category, setCategory)}
        />
      ))
      }
    </div>
  );
};

export default ListCategory;

ListCategory.propTypes = {
  allCategories: PropTypes.shape.isRequired,
};
