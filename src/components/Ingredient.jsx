import React from 'react';
import PropTypes from 'prop-types';
import './Ingredient.css';

const itemIngredient = (name, measure) => (
  <li>
    {`${name} - ${measure}`}
  </li>
);

const checkIngredient = (name, measure, done, checked) => (
  <div className="checkIngredient">
    <input
      onClick={(e) => checked(e.target.name)}
      type="checkbox"
      id={name}
      name={name}
      checked={done}
    />
    <label className={done ? 'done' : 'notDone'} htmlFor={name}>{`${name} - ${measure}`}</label>
  </div>
);

const Ingredient = ({
  name,
  measure,
  inProgress,
  done,
  checked,
}) => {
  if (!inProgress) return itemIngredient(name, measure);
  return checkIngredient(name, measure, done, checked);
};

export default Ingredient;

Ingredient.propTypes = {
  name: PropTypes.string.isRequired,
  measure: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  checked: PropTypes.func.isRequired,
};
