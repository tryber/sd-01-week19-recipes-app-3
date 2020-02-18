import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ReciperContext } from '../context/ReciperContext';
import './EachIngredient.css';

const EachIngredient = ({ ingredient, img, isFoodOrDrink }) => {
  const { setEndPoint } = useContext(ReciperContext);
  return (
    <div className="EachIngredient">
      <Link className="LinkRecipe" to={`/receitas/${isFoodOrDrink}`} onClick={() => setEndPoint(`filter.php?i=${ingredient}`)} >
        <img className="imgRecipe" src={img} alt="Foto Receita" data-testid={`${ingredient}-card-img`} width="70px" />
        <h4 className="titleRecipe" data-testid={`${ingredient}-card-name`}>{ingredient}</h4>
      </Link>
    </div>
  );
};

EachIngredient.propTypes = {
  ingredient: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  isFoodOrDrink: PropTypes.string.isRequired,
};

export default EachIngredient;
