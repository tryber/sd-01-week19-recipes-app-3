import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Ingredient from './Ingredient';
import './ListIngredients.css';

const addPropertyDone = (array) => (
  array.map((item) => ({ ...item, done: false }))
);

const verifyDone = (array) => (
  array.every((item) => item.done)
);

const ListIngredients = ({ listIngredient, inProgress, setIsDone }) => {
  const [listDone, setListDone] = useState(addPropertyDone(listIngredient));
  const [isAllDone, setIsAllDone] = useState(false);

  useEffect(() => {
    if (verifyDone(listDone)) {
      setIsAllDone(true);
    } else {
      setIsAllDone(false);
    }
  }, [listDone]);

  useEffect(() => {
    if (!verifyDone(listDone)) {
      setListDone(addPropertyDone(listIngredient));
    }
  }, [listIngredient]);

  const changeDone = (ingredient) => (
    listDone.map((item) => {
      if (item.ingredient === ingredient) return { ...item, done: !item.done };
      return item;
    })
  );

  if (isAllDone) {
    setIsDone(true);
  } else {
    setIsDone(false);
  }

  return (
    <div className="ListIngredient">
      {listDone.map(({ ingredient, measure, done }, index) => (
        <Ingredient
          inProgress={inProgress}
          key={`${index * 3}`}
          name={ingredient}
          measure={measure}
          done={done}
          checked={(value) => setListDone(changeDone(value))}
        />
      ))}
    </div>
  );
};

export default ListIngredients;


ListIngredients.propTypes = {
  listIngredient: PropTypes.shape(PropTypes.shape({
    name: PropTypes.string.isRequired,
    measure: PropTypes.string.isRequired,
  })).isRequired,
  inProgress: PropTypes.bool.isRequired,
  setIsDone: PropTypes.func.isRequired,
};
