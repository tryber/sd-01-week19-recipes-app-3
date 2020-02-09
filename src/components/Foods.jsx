import React, { useState, useEffect } from 'react';
import { getMeals } from '../service/FetchingAPI';

import use12Recipes from '../hooks/use12Recipes';
import Header from './Header';
import { useLocation } from 'react-router-dom';

const Foods = () => {
  const [url, setUrl] = useState('random.php');

  const location = useLocation();

  const { recipes } = use12Recipes(getMeals, url);

  return (
    <div>
      <Header location={location} />

    </div>
  );
}

export default Foods;
