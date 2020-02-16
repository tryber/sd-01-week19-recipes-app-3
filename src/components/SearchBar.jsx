import React, { useState, useEffect, useContext } from 'react';
import { DebounceInput } from 'react-debounce-input';
import { ReciperContext } from '../context/ReciperContext';
import './SearchBar.css';

const renderInput = (type, typeSearch, changeSearch) => (
  <input
    id={type}
    data-testid={`${type}-search-radio`}
    type="radio"
    defaultChecked={typeSearch === type}
    name="typeSearch"
    value={type}
    onClick={(e) => changeSearch(e.target.value)}
  />
)

const renderRadioButton = (typeSearch, changeSearch) => (
  <div className="radio-button">
    {renderInput('ingredient', typeSearch, changeSearch)}
    <label htmlFor="ingredient">Ingrediente</label>
    {renderInput('name', typeSearch, changeSearch)}
    <label htmlFor="name">Nome</label>
    {renderInput('letter', typeSearch, changeSearch)}
    <label htmlFor="letter">Primeira Letra</label>
  </div>
);

const createEndPoint = (text, typeSearch, setEndPoint) => {
  const isTextEmpty = text === '';
  const EndPoint = {
    ingredient: () => setEndPoint(`filter.php?i=${text}`),
    name: () => setEndPoint(`search.php?s=${text}`),
    letter: () => setEndPoint(`search.php?f=${text}`),
  };
  if (!isTextEmpty) {
    const result = EndPoint[typeSearch];
    return result();
  }
  return '';
};

const SearchBar = () => {
  const [text, setText] = useState('');
  const [typeSearch, setTypeSearch] = useState('ingredient');
  const { setEndPoint } = useContext(ReciperContext);

  useEffect(() => {
    createEndPoint(text, typeSearch, setEndPoint);
  }, [text]);

  useEffect(() => {
    setText('');
  }, [typeSearch]);

  return (
    <div className="SearchBar">
      <DebounceInput
        debounceTimeout={600}
        onChange={(event) => setText(event.target.value)}
        value={text}
        maxLength={typeSearch === 'letter' ? 1 : 20}
      />
      {renderRadioButton(typeSearch, setTypeSearch)}
    </div>
  );
};

export default SearchBar;
