import React from 'react';
import PropTypes from 'prop-types';
import ButtonShare from './ButtonShare';
import ButtonFavorite from './ButtonFavorite';
import './HeaderRecipe.css';

const HeaderRecipe = ({
  img = 'https://cdn.britannica.com/41/177341-050-8688C353/Chelsea-buns.jpg',
  category = 'Dessert',
  title = 'Chelsea Buns',
}) => (
    <div className="HeaderRecipe">
      <img className="imgRecipe" src={img} alt="Foto Receita" />
      <div className="div-text">
        <h2 className="titleRecipe">{title}</h2>
        <h4 className="categoryRecipe">{category}</h4>
      </div>
      <div className="div-button">
        <ButtonShare />
        <ButtonFavorite />
      </div>
    </div>
  );

export default HeaderRecipe;

HeaderRecipe.propTypes = {
  img: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
