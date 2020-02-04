import React from 'react';
import PropTypes from 'prop-types';

const BotaoSearch = (props) => {
  const { changeShowSearch } = props;
  return (
    <div>
      <button type="button" onClick={() => changeShowSearch()}>
        Search
      </button>
    </div>
  )
};

export default BotaoSearch;

BotaoSearch.propTypes = {
  changeShowSearch: PropTypes.func.isRequired,
};
