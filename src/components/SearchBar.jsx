import React from 'react';


const renderRadioButton = (value, changeSearch) => (
  <div>
    <input
      data-testid="ingredient-search-radio"
      type="radio"
      checked={value === }
      name="typeSearch"
      value="Maior que"
      onClick={(e) => changeSearch(e.target.value)}
    />
    Ingrediente
    <input
      data-testid="name-search-radio"
      type="radio"
      checked={value === }
      name="typeSearch"
      value="Menor que"
      onClick={(e) => changeSearch(e.target.value)}
    />
    Nome
    <input
      data-testid="first-letter-search-radio"
      type="radio"
      checked={value === }
      name="typeSearch"
      value="Igual a"
      onClick={(e) => changeSearch(e.target.value)}
    />
    Primeira letra
    </div>
);

const SearchBar = () => (
  <div>
    <input type="text" />
  </div>
);

export default SearchBar;
