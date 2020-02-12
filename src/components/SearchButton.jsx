import React from 'react';
import PropTypes from 'prop-types';

const ButtonSearch = ({ changeShowSearch }) => (
  <div>
    <button type="button" onClick={() => changeShowSearch()}>
      Search
      </button>
  </div>
);

export default ButtonSearch;

ButtonSearch.propTypes = {
  changeShowSearch: PropTypes.func.isRequired,
};
