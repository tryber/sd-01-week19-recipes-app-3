import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ReciperContext } from '../context/ReciperContext';
import { Link } from 'react-router-dom';
import './CardRecipe.css';

const CardRecipe = ({
  image,
  categorie,
  title,
  id,
  type,
}) => {
  const { category } = useContext(ReciperContext);
  return (
    <div className="CardRecipe" >
      <Link className="LinkRecipe" to={`/receitas/${type}/${id}`}>
        <img className="imgRecipe" src={image} alt="Foto Receita" data-testid={`${id}-card-img`} />
        <h4 className="categoryRecipe" data-testid={`${id}-card-category`}>{(categorie) ? categorie : category}</h4>
        <h2 className="titleRecipe" data-testid={`${id}-card-name`} >{title}</h2>
      </Link>
    </div>
  )
};

export default CardRecipe;

CardRecipe.propTypes = {
  image: PropTypes.string.isRequired,
  category: PropTypes.string,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

CardRecipe.defaultProps = {
  category: null,
};
