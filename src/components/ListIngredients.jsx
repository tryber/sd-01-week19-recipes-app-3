import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Ingredient from './Ingredient';
import './ListIngredients.css';

const mockList = [
  { name: 'arroz', measure: '1kg' },
  { name: 'feijoa', measure: '500kg' },
  { name: 'ervilha', measure: '500kg' },
];

const addPropertyDone = (array) => (
  array.map((item) => ({ ...item, done: false }))
);

const ListIngredients = ({ listIngredient = mockList }) => {
  const [listDone, setListDone] = useState(addPropertyDone(listIngredient));
  const changeDone = (name) => {
    return listDone.map((item) => {
      if (item.name === name) return { ...item, done: !item.done };
      return item;
    })
  }
  return (
    <div className="ListIngredient">
      <ul>
        {listDone.map(({ name, measure, done }) => (
          <Ingredient
            key={name}
            name={name}
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
