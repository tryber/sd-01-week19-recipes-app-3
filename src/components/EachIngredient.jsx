import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ReciperContext } from '../context/ReciperContext';

const EachIngredient = ({ name, img, isFoodOrDrink }) => {
  const { setEndPoint } = useContext(ReciperContext);
  return (
    <div>
      <img className="imgRecipe" src={img} alt="Foto Receita" data-testid={`${name}-card-img`} width="70px" />
      <Link className="LinkRecipe" to={`/receitas/${isFoodOrDrink}`} onClick={() => setEndPoint(`filter.php?i=${name}`)} >
        <h4 className="titleRecipe" data-testid={`${name}-card-name`}  >{name}</h4>
      </Link>
    </div>
  );
};

export default EachIngredient;
