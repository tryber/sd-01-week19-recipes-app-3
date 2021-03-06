import React from 'react';
import PropTypes from 'prop-types';
import './SearchButton.css';
import Search from '../icons/lupa.png';

const SearchButton = ({ changeShowSearch, isDisabled }) => (
  <div className="SearchButton">
    <button
      disabled={isDisabled}
      className="btn-search"
      type="button"
      onClick={() => changeShowSearch()}
    >
      <img src={Search} alt="Search item" />
    </button>
  </div>
);

export default SearchButton;

SearchButton.propTypes = {
  isDisabled: PropTypes.bool.isRequired,
  changeShowSearch: PropTypes.func.isRequired,
};
