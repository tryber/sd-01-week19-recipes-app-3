import React from 'react';
import PropTypes from 'prop-types';

const getNameButton = (isStart) => {
  if (isStart) return 'Finalizar Receita';
  return 'Iniciar Receita';
};

const saveData = (func, isDone, data, type) => {
  if (type === 'comidas') {
    const obj = {
      id: data.idMeal,
      type: 'comidas',
      category: data.strCategory,
      img: data.strMealThumb,
      date: new Date(),
      area: data.strArea,
      strTags: data.strTags,
    };
    console.log(obj);
  }
  if (!isDone) func();
};

const ButtonStart = ({ isStart, isDone, setIsStart, data, type }) => (
  <div className="ButtonStart">
    <button
      className="start"
      onClick={() => saveData(setIsStart, isDone, data, type)}
      disabled={!isDone && isStart}
    >
      {getNameButton(isStart)}
    </button>
  </div>
);

export default ButtonStart;

ButtonStart.propTypes = {
  isStart: PropTypes.bool.isRequired,
  isDone: PropTypes.bool.isRequired,
  data: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  setIsStart: PropTypes.func.isRequired,
};
