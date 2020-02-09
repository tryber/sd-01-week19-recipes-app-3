import React from 'react';

const CategoryButton = ({title, changeCategory}) => (
  <div className="ButtonShare">
    <button
    type="button"
    value={title}
    onClick={(e) => changeCategory(e.target.value)}
    data-testid={`${title}-category-filter`}
    >{title}</button>
  </div>
);

export default CategoryButton;
