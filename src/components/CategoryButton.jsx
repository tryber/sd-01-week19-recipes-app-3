import React from 'react';
import PropTypes from 'prop-types';

const CategoryButton = ({ title, changeCategory }) => (
  <div className="ButtonShare">
    <button
      type="button"
      value={title}
      onClick={(e) => changeCategory(e.target.value)}
      data-testid={`${title}-category-filter`}
    >
      {title}
    </button>
  </div>
);

CategoryButton.propTypes = {
  title: PropTypes.string.isRequired,
  changeCategory: PropTypes.func.isRequired,
};

export default CategoryButton;
