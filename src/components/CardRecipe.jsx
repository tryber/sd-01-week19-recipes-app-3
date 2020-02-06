import React from 'react';
import PropTypes from 'prop-types'; 
import { Link } from 'react-router-dom';
import './CardRecipe.css';

const CardRecipe = ({
  img = 'https://cdn.britannica.com/41/177341-050-8688C353/Chelsea-buns.jpg',
  category = 'Dessert',
  title = 'Chelsea Buns',
  id = 200,
  type = 'comida',
}) => (
  <div className="CardRecipe">
    <Link className="LinkRecipe" to={`/receitas/${type}/${id}`}>
      <img className="imgRecipe" src={img} alt='Foto Receita' />
      <h4 className="categoryRecipe">{category}</h4>
      <h2 className="titleRecipe">{title}</h2>
    </Link>
  </div>
);

export default CardRecipe;

CardRecipe.propTypes = {
  img: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
