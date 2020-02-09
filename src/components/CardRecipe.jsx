import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './CardRecipe.css';

const CardRecipe = ({
  image,
  category,
  title,
  id,
  type,
}) => (
    <div className="CardRecipe" >
      <Link className="LinkRecipe" to={`/receitas/${type}/${id}`}>
        <img className="imgRecipe" src={image} alt="Foto Receita" data-testid={`${id}-card-img`} />
        <h4 className="categoryRecipe" data-testid={`${id}-card-category`}>{category}</h4>
        <h2 className="titleRecipe" data-testid={`${id}-card-name`} >{title}</h2>
      </Link>
    </div>
  );

export default CardRecipe;

CardRecipe.propTypes = {
  image: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
