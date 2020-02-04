import React from 'react';

const BotaoSearch = ({ changeShowSearch }) => (
  <div>
    <button type="button" onClick={() => changeShowSearch()}>
      Search
      </button>
  </div>
)

export default BotaoSearch;
