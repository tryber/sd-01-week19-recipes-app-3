import React, { useState, useEffect, useContext } from 'react';
import { DebounceInput } from 'react-debounce-input';
import { ReciperContext } from '../context/ReciperContext';

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

const createEndPoint = (text, typeSearch, setEndPoint) => {
  const isTextEmpty = text === '';
  console.log(text)
  const EndPoint = {
    ingredient: () => setEndPoint(`filter.php?i=${text}`),
    name: () => setEndPoint(`search.php?s=${text}`),
    letter: () => setEndPoint(`search.php?f=${text}`)
  }
  if (!isTextEmpty) {
    const result = EndPoint[typeSearch]
    return result();
  }
}

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
