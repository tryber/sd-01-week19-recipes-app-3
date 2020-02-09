import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { DebounceInput } from 'react-debounce-input';

const renderRadioButton = (typeSearch, changeSearch) => (
  <div>
    <input
      data-testid="ingredient-search-radio"
      type="radio"
      defaultChecked={typeSearch === 'ingredient'}
      name="typeSearch"
      value="ingredient"
      onClick={(e) => changeSearch(e.target.value)}
    />
    Ingrediente
    <input
      data-testid="name-search-radio"
      type="radio"
      defaultChecked={typeSearch === 'name'}
      name="typeSearch"
      value="name"
      onClick={(e) => changeSearch(e.target.value)}
    />
    Nome
    <input
      data-testid="first-letter-search-radio"
      type="radio"
      defaultChecked={typeSearch === 'letter'}
      name="typeSearch"
      value="letter"
      onClick={(e) => changeSearch(e.target.value)}
    />
    Primeira letra
    </div>
);

const SearchBar = ({ changeSearch }) => {
  const [text, setText] = useState('');
  const [typeSearch, setTypeSearch] = useState('ingredient');

  useEffect(() => {
    changeSearch({ text, typeSearch });
  }, [text, typeSearch]);

  return (
    <div>
      <DebounceInput
        debounceTimeout={600}
        onChange={(event) => setText(event.target.value)}
        value={text}
      />
      {renderRadioButton(typeSearch, setTypeSearch)}
    </div>
  );
};

export default SearchBar;

SearchBar.propTypes = {
  changeSearch: PropTypes.func.isRequired,
};
