import React from 'react';
import PropTypes from 'prop-types';
import './SearchButton.css';
import Search from '../icons/lupa.png'

const SearchButton = ({ changeShowSearch }) => (
  <div className="SearchButton">
    <button className="btn-search" type="button" onClick={() => changeShowSearch()}>
    <img src={Search} alt="Search item" />
    </button>
  </div>
);

export default SearchButton;

SearchButton.propTypes = {
  changeShowSearch: PropTypes.func.isRequired,
};
