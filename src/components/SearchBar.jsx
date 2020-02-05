import React, { useState, useEffect } from 'react';
import { DebounceInput } from 'react-debounce-input';


const renderRadioButton = (value, changeSearch) => (
  <div>
    <input
      data-testid="ingredient-search-radio"
      type="radio"
      checked={value === 'i'}
      name="typeSearch"
      value="i"
      onClick={(e) => changeSearch(e.target.value)}
    />
    Ingrediente
    <input
      data-testid="name-search-radio"
      type="radio"
      checked={value === 's'}
      name="typeSearch"
      value="s"
      onClick={(e) => changeSearch(e.target.value)}
    />
    Nome
    <input
      data-testid="first-letter-search-radio"
      type="radio"
      checked={value === 'f'}
      name="typeSearch"
      value="f"
      onClick={(e) => changeSearch(e.target.value)}
    />
    Primeira letra
    </div>
);

const SearchBar = () => {
  const [search, setSearch] = useState('');
  const [typeSearch, setTypeSearch] = useState('i');
  useEffect(() => {
  }, [search])

  return (
    <div>
      <DebounceInput
        debounceTimeout={600}
        onChange={event => setSearch(event.target.value)}
      />
      {renderRadioButton(typeSearch, setTypeSearch)}
    </div>
  )
};

export default SearchBar;
