import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Ingredient from './Ingredient';
import './ListIngredients.css';


const addPropertyDone = (array) => (
  array.map((item) => ({ ...item, done: false }))
);

const ListIngredients = ({ listIngredient }) => {
  const [listDone, setListDone] = useState(addPropertyDone(listIngredient));
  const changeDone = (ingredient) => {
    return listDone.map((item) => {
      if (item.ingredient === ingredient) return { ...item, done: !item.done };
      return item;
    })
  }
  return (
    <div className="ListIngredient">
      <ul>
        {listDone.map(({ ingredient, measure, done }) => (
          <Ingredient
            key={ingredient}
            name={ingredient}
            measure={measure}
            done={done}
            checked={(value) => setListDone(changeDone(value))}
          />
        ))}
      </ul>
    </div>
  );
}

export default ListIngredients;


ListIngredients.propTypes = {
  listIngredient: PropTypes.shape(PropTypes.shape({
    name: PropTypes.string.isRequired,
    measure: PropTypes.string.isRequired,
  })).isRequired,
};
