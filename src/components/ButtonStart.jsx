import React from 'react';

const getNameButton = (isStart) => {
  if (isStart) return 'Finalizar Receita';
  return 'Iniciar Receita';
}

const saveData = (func, isDone, data, type) => {
  const now = new Date;
  console.log(now);
  console.log(data)
  if (type === 'comidas') {
    const obj = {
      id: data.idMeal,
      type: 'comidas',
      category: data.strCategory,
      img: data.strMealThumb,
      date: now,
      area: data.strArea,
      strTags: data.strTags,
    }
    console.log(obj);
  }
  if(!isDone) func();
}

const ButtonStart = ({ isStart, isDone, setIsStart, data, type }) => {
  return (
    <div className="ButtonStart">
      <button
        className="start"
        onClick={()=>saveData(setIsStart, isDone, data, type)}
        disabled={!isDone && isStart}>
        {getNameButton(isStart)}
      </button>
    </div>
  )
};

export default ButtonStart;

